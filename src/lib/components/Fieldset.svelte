<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Legend } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		legend = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		class?: string;
		children?: any;
		legend?: string;
		this?: any;
		transition?: any[];
		use?: any[];
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(theme.get('fieldset'), className);
	});
</script>

<fieldset
	{...props}
	bind:this={elem}
	class={classes}
	transition:transitionHandler
	use:useAction={[...use]}
>
	{#if legend !== undefined}
		<Legend>{legend}</Legend>
	{/if}
	{#if children !== undefined}
		{@render children()}
	{/if}
</fieldset>
