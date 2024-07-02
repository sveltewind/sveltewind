<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Label } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		group = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		value,
		...props
	}: {
		class?: string;
		children?: any;
		isVisible?: boolean;
		group?: any;
		this?: any;
		transition?: any[];
		use?: any[];
		value?: any;
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(theme.get('radio'), className);
	});

	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

{#if isVisible}
	<Label class="group relative flex cursor-pointer">
		<input
			{...props}
			bind:this={elem}
			bind:group
			class="peer absolute left-0 top-0 w-0 opacity-0"
			type="radio"
			{value}
			transition:transitionHandler
			use:useAction={[...use]}
		/>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div class={classes} />
		{#if children !== undefined}
			{@render children()}
		{/if}
	</Label>
{/if}
