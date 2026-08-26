<script lang="ts">
	import { type Snippet } from 'svelte';
	import { type SVGAttributes } from 'svelte/elements';
	import { noopTransition, Circle } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';

	type Props = SVGAttributes<SVGSVGElement> & {
		children?: Snippet;
		class?: string;
		element?: SVGSVGElement | null;
		isVisible?: boolean;
		strokeWidth?: string;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	let {
		children,
		class: className = '',
		element = $bindable(null),
		isVisible = $bindable(true),
		strokeWidth = '3',
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	const classes = $derived(theme.resolve('spinner', variants, className));
	const transitionFn = $derived(transition[0]);
	const transitionOptions = $derived(transition[1] ?? {});
</script>

{#if isVisible}
	<svg
		{...restProps}
		bind:this={element}
		class={classes}
		height="24"
		width="24"
		stroke="currentColor"
		transition:transitionFn={transitionOptions}
		viewBox="0 0 24 24"
	>
		{#if children}
			{@render children()}
		{:else}
			<Circle
				class="spinner-circle"
				cx="12"
				cy="12"
				r="9.5"
				fill="none"
				stroke-width={strokeWidth}
			/>
		{/if}
	</svg>
{/if}

<style>
	svg {
		transform-origin: center;
		animation: spinner-rotate 2s linear infinite;
	}

	.spinner-circle {
		stroke-linecap: round;
		animation: spinner-dash 1.5s ease-in-out infinite;
	}

	@keyframes spinner-rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes spinner-dash {
		0% {
			stroke-dasharray: 0 150;
			stroke-dashoffset: 0;
		}

		47.5% {
			stroke-dasharray: 42 150;
			stroke-dashoffset: -16;
		}

		95%,
		100% {
			stroke-dasharray: 42 150;
			stroke-dashoffset: -59;
		}
	}
</style>
