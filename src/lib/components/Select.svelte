<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Option } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		children?: any;
		isVisible?: boolean;
		options?: { label: string; value: any }[];
		value: any;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLSelectAttributes;

	// props
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(true),
		options = $bindable(),
		value = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: Props = $props();

	// derives
	const classes = $derived(
		twMerge(
			...variants.map((variant: string) => theme.getComponentVariant('select', variant)),
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLSelectElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<select
		{...props}
		bind:this={elem}
		bind:value
		class={classes}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if options !== undefined}
			{#each options as option}
				<Option selected={option.value === value} value={option.value}>
					{option.label}
				</Option>
			{/each}
		{:else if children !== undefined}
			{@render children()}
		{/if}
	</select>
{/if}
