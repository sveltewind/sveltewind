<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fromAction } from 'svelte/attachments';
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { Div, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import Button from '../Button/Button.svelte';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Placement = 'bottom' | 'left' | 'right' | 'top';
	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'popover'> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		gap?: number;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		placement?: Placement;
		popover?: Exclude<HTMLAttributes<HTMLDivElement>['popover'], '' | null | undefined>;
		theme?: Theme;
		transition?: TransitionProps;
		trigger?: Snippet<[TriggerProps]>;
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
		| 'onclick'
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
		inTransition,
		isVisible = $bindable(false),
		onbeforetoggle,
		onoutroend,
		ontoggle,
		outTransition,
		placement = 'bottom',
		popover = 'auto',
		theme = globalTheme,
		transition = [noopTransition, {}],
		trigger = defaultTrigger,
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
		onclick: (event) => {
			// Svelte must mount the native target before opening it and finish the outro before hiding it.
			event.preventDefault();
			isVisible = !isVisible;
		},
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
	const handleOutroEnd: NonNullable<Props['onoutroend']> = (event) => {
		if (!isVisible && event.currentTarget.matches(':popover-open')) {
			event.currentTarget.hidePopover();
		}
		onoutroend?.(event);
	};
	const handleToggle: NonNullable<Props['ontoggle']> = (event) => {
		// Toggle events are queued/coalesced; newState can already be stale after a rapid toggle.
		syncVisibility(event.currentTarget);
		ontoggle?.(event);
	};
	const initialize = (node: HTMLDivElement) => {
		const anchor = document.getElementById(triggerId);
		(node.showPopover as (options?: { source: HTMLElement }) => void).call(
			node,
			anchor ? { source: anchor } : undefined
		);
		if (anchor && node.matches(':popover-open')) {
			// Position synchronously before Svelte starts measuring and animating the intro.
			const position = getPosition(
				anchor.getBoundingClientRect(),
				{ height: node.offsetHeight, width: node.offsetWidth },
				{ height: window.innerHeight, width: document.documentElement.clientWidth },
				placement,
				gap
			);
			hasAnchors =
				CSS.supports('anchor-name', '--popover') &&
				CSS.supports('position-area', 'bottom') &&
				CSS.supports('position-try-fallbacks', 'flip-block');
			node.toggleAttribute('data-anchored', hasAnchors);
			if (hasAnchors) {
				const rect = node.getBoundingClientRect();
				if (Math.abs(rect.left - position.left) < 2 && Math.abs(rect.top - position.top) < 2) {
					return;
				}
			}
			node.removeAttribute('data-anchored');
			node.style.setProperty('--popover-left', `${position.left}px`);
			node.style.setProperty('--popover-top', `${position.top}px`);
			left = position.left;
			top = position.top;
			hasAnchors = false;
		}
	};
	const syncVisibility = (node: HTMLDivElement) => {
		if (node.isConnected && node === element && !node.matches(':popover-open')) isVisible = false;
	};

	const initializeAttachment = fromAction(initialize);

	// $effects
	$effect(() => {
		if (!isVisible || popover !== 'manual' || !element) return;
		const panel = element;
		const anchor = document.getElementById(triggerId);
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key !== 'Escape' || event.defaultPrevented) return;
			event.preventDefault();
			isVisible = false;
		};
		const handlePointerDown = (event: PointerEvent) => {
			const path = event.composedPath();
			if (path.includes(panel) || (anchor && path.includes(anchor))) return;
			isVisible = false;
		};
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('pointerdown', handlePointerDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('pointerdown', handlePointerDown);
		};
	});
	$effect(() => {
		if (!isVisible || !element) return;
		const panel = element;
		const anchor = document.getElementById(triggerId);
		if (!anchor) return;
		if (hasAnchors) return;
		const currentPlacement = placement;
		const currentGap = gap;
		let frame: number;
		const updatePosition = () => {
			const position = getPosition(
				anchor.getBoundingClientRect(),
				{ height: panel.offsetHeight, width: panel.offsetWidth },
				{ height: window.innerHeight, width: document.documentElement.clientWidth },
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

{#snippet defaultTrigger(props: TriggerProps)}
	<Button {...props} {theme}>Toggle popover</Button>
{/snippet}

{@render trigger(triggerProps)}

<Div
	{...restProps}
	{@attach initializeAttachment}
	bind:element
	bind:isVisible
	class={classes}
	data-anchored={hasAnchors || undefined}
	{id}
	{inTransition}
	onbeforetoggle={handleBeforeToggle}
	onoutroend={handleOutroEnd}
	ontoggle={handleToggle}
	{outTransition}
	{popover}
	style={`${restProps.style ?? ''}; --popover-anchor: ${anchorName}; --popover-gap: ${Math.max(0, gap)}px; --popover-left: ${left}px; --popover-placement: ${placement}; --popover-top: ${top}px;`}
	{theme}
	{transition}
>
	{#if children}{@render children()}{/if}
</Div>
