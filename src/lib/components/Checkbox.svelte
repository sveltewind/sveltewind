<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Icon, Label } from '$lib/components/index.js';
	import { Check } from '$lib/icons/index.js';
	import { theme } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	// types
	type Props = {
		class?: string;
		checked?: boolean;
		children?: Snippet;
		isVisible?: boolean;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} & HTMLInputAttributes;

	// props
	let {
		class: className = undefined,
		checked = $bindable(false),
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
			...variants.map((variant: string) => theme.getComponentVariant('checkbox', variant)),
			checked === true ? theme.getComponentVariant('checkbox', 'checked') : undefined,
			className
		)
	);
	const transitionHandler = $derived.by(() => {
		return (node: HTMLInputElement) => {
			if (transition === undefined) return;
			if (transition.length === 1) return transition[0](node);
			return transition[0](node, transition[1]);
		};
	});
</script>

{#if isVisible}
	<Label class="group relative flex cursor-pointer">
		<input
			{...props}
			bind:this={elem}
			bind:checked
			class="peer absolute left-0 top-0 w-0 opacity-0"
			type="checkbox"
			transition:transitionHandler
			use:useAction={[...use]}
		/>
		<div class={classes}>
			<Icon
				class="transform transition duration-200 {!checked ? 'scale-[0]' : 'scale-[1]'}"
				src={Check}
			/>
		</div>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</Label>
{/if}
