<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Placement = 'bottom' | 'left' | 'right' | 'top';
	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'popover'> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		gap?: number;
		isVisible?: boolean;
		placement?: Placement;
		theme?: Theme;
		trigger: Snippet<[TriggerProps]>;
		variants?: string[];
	};
	type Rect = Pick<DOMRect, 'bottom' | 'height' | 'left' | 'right' | 'top' | 'width'>;
	type Size = { height: number; width: number };
	type TriggerProps = Pick<
		HTMLButtonAttributes,
		| 'aria-controls'
		| 'aria-expanded'
		| 'aria-haspopup'
		| 'id'
		| 'popovertarget'
		| 'popovertargetaction'
		| 'style'
		| 'type'
	>;

	// Instance ID
	const uid = $props.id();

	// Constants
	const anchorName = `--popover-${uid.replace(/[^a-zA-Z0-9_-]/g, '-')}`;
	const triggerId = `${uid}-trigger`;

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		gap = 8,
		id = `${uid}-popover`,
		isVisible = $bindable(false),
		onbeforetoggle,
		ontoggle,
		placement = 'bottom',
		theme = globalTheme,
		trigger,
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let hasAnchors = $state(false);
	let left = $state(0);
	let top = $state(0);

	// $derived
	const classes = $derived(theme.resolve('popover', variants, className));
	const triggerProps: TriggerProps = $derived({
		'aria-controls': id,
		'aria-expanded': isVisible,
		'aria-haspopup': restProps.role === 'dialog' ? 'dialog' : undefined,
		id: triggerId,
		popovertarget: id,
		popovertargetaction: 'toggle',
		style: `anchor-name: ${anchorName}`,
		type: 'button'
	});

	// helpers
	/** Fixed viewport coordinates for browsers without CSS anchor positioning. */
	const getPosition = (
		anchor: Rect,
		panel: Size,
		viewport: Size,
		placement: Placement,
		gap: number
	) => {
		const padding = 8;
		gap = Math.max(0, gap);
		const space = {
			bottom: viewport.height - anchor.bottom - padding,
			left: anchor.left - padding,
			right: viewport.width - anchor.right - padding,
			top: anchor.top - padding
		};
		const opposite = { bottom: 'top', left: 'right', right: 'left', top: 'bottom' } as const;
		const vertical = placement === 'top' || placement === 'bottom';
		const needed = (vertical ? panel.height : panel.width) + gap;
		if (space[placement] < needed && space[opposite[placement]] > space[placement]) {
			placement = opposite[placement];
		}
		let left = anchor.left + (anchor.width - panel.width) / 2;
		let top = anchor.top + (anchor.height - panel.height) / 2;
		if (placement === 'bottom') top = anchor.bottom + gap;
		if (placement === 'left') left = anchor.left - panel.width - gap;
		if (placement === 'right') left = anchor.right + gap;
		if (placement === 'top') top = anchor.top - panel.height - gap;
		return {
			left: Math.max(padding, Math.min(left, viewport.width - panel.width - padding)),
			top: Math.max(padding, Math.min(top, viewport.height - panel.height - padding))
		};
	};
	const handleBeforeToggle: NonNullable<Props['onbeforetoggle']> = (event) => {
		onbeforetoggle?.(event);
		const node = event.currentTarget;
		// Closing is not cancelable. Read the actual result after the browser's default action,
		// including canceled opens, before a reactive effect can reopen a dismissed popover.
		queueMicrotask(() => syncVisibility(node));
	};
	const handleToggle: NonNullable<Props['ontoggle']> = (event) => {
		// Toggle events are queued/coalesced; newState can already be stale after a rapid toggle.
		syncVisibility(event.currentTarget);
		ontoggle?.(event);
	};
	const syncVisibility = (node: HTMLDivElement) => {
		if (node.isConnected && node === element) isVisible = node.matches(':popover-open');
	};

	// $effects
	onMount(() => {
		hasAnchors =
			CSS.supports('anchor-name', '--popover') &&
			CSS.supports('position-area', 'bottom') &&
			CSS.supports('position-try-fallbacks', 'flip-block');
	});
	$effect(() => {
		if (!element?.isConnected) return;
		if (isVisible === element.matches(':popover-open')) return;
		if (isVisible) {
			const source = document.getElementById(triggerId);
			(element.showPopover as (options?: { source: HTMLElement }) => void).call(
				element,
				source ? { source } : undefined
			);
		} else {
			element.hidePopover();
		}
	});
	$effect(() => {
		if (!isVisible || hasAnchors || !element) return;
		const panel = element;
		const anchor = document.getElementById(triggerId);
		if (!anchor) return;
		const currentPlacement = placement;
		const currentGap = gap;
		let frame: number;
		const updatePosition = () => {
			const position = getPosition(
				anchor.getBoundingClientRect(),
				panel.getBoundingClientRect(),
				{ width: document.documentElement.clientWidth, height: window.innerHeight },
				currentPlacement,
				currentGap
			);
			left = position.left;
			top = position.top;
			// Track scrolling, resizing, content changes and layout shifts only while open.
			frame = requestAnimationFrame(updatePosition);
		};
		updatePosition();
		return () => cancelAnimationFrame(frame);
	});
</script>

{@render trigger(triggerProps)}

<div
	{...restProps}
	{id}
	bind:this={element}
	class={classes}
	popover="auto"
	data-anchored={hasAnchors || undefined}
	style:--popover-anchor={anchorName}
	style:--popover-gap={`${Math.max(0, gap)}px`}
	style:--popover-placement={placement}
	style:left={hasAnchors ? undefined : `${left}px`}
	style:top={hasAnchors ? undefined : `${top}px`}
	onbeforetoggle={handleBeforeToggle}
	ontoggle={handleToggle}
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	div {
		inset: auto;
		margin: 0;
		max-height: calc(100dvh - 16px);
		max-width: calc(100vw - 16px);
		overflow: auto;
		position: fixed;
		width: max-content;
	}

	div[data-anchored] {
		align-self: safe center;
		justify-self: safe center;
		margin: var(--popover-gap);
		position-anchor: var(--popover-anchor);
		position-area: var(--popover-placement);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;
	}
</style>
