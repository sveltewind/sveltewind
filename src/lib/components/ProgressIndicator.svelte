<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import type { SVGAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: any;
		isVisible?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & SVGAttributes<SVGSVGElement>;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('progressIndicator', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: SVGElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<svg
		{...props}
		bind:this={elem}
		class={classes}
		viewBox="25 25 50 50"
		transition:transitionHandler
		use:useAction={[...use]}
	>
		<circle
			class="spinner-dash"
			cx="50"
			cy="50"
			r="20"
			stroke="currentColor"
			fill="none"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>

	<style>
		@keyframes spinner-dash {
			0% {
				stroke-dasharray: 1, 200;
				stroke-dashoffset: 0;
			}
			50% {
				stroke-dasharray: 89, 200;
				stroke-dashoffset: -35px;
			}
			100% {
				stroke-dasharray: 89, 200;
				stroke-dashoffset: -124px;
			}
		}
		@keyframes spinner-rotate {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		.spinner-dash {
			animation: spinner-dash 1.5s ease-in-out infinite;
		}
		.spinner-rotate {
			animation: spinner-rotate 2s linear infinite;
		}
	</style>
{/if}
