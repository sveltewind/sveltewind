<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type HTMLDialogAttributes } from 'svelte/elements';
	import { noopTransition, Div } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	// Types
	type Props = Omit<HTMLDialogAttributes, 'open'> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDialogElement | null;
		isModal?: boolean;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		isModal = true,
		inTransition,
		isVisible = $bindable(true),
		outTransition,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// helpers
	const oncancel = (event: Event) => {
		event.preventDefault();
		isVisible = false;
	};
	const onclose = () => {
		isVisible = false;
		isRendered = false;
	};
	const onoutroend = () => {
		if (element?.open) element.close();
	};

	// $state
	let isRendered = $state(false);

	// $derived
	const classes = $derived(theme.resolve('dialog', variants, className));

	const inTransitionFn = $derived(inTransition?.[0] ?? transition[0]);
	const inTransitionOptions = $derived(inTransition?.[1] ?? transition[1] ?? {});
	const outTransitionFn = $derived(outTransition?.[0] ?? transition[0]);
	const outTransitionOptions = $derived(outTransition?.[1] ?? transition[1] ?? {});

	// $effects
	$effect(() => {
		if (isVisible) {
			isRendered = true;

			if (element && !element.open) {
				if (isModal) element.showModal();
				if (!isModal) element.show();
			}
		} else {
			isRendered = false;
		}
	});
</script>

{#if isRendered}
	<dialog
		{...restProps}
		bind:this={element}
		class={classes}
		in:inTransitionFn={inTransitionOptions}
		out:outTransitionFn={outTransitionOptions}
		{oncancel}
		{onclose}
		{onoutroend}
	>
		{#if children}
			{@render children()}
		{/if}
	</dialog>
{/if}
