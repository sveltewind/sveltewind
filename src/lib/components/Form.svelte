<script lang="ts">
	// imports
	import { enhance } from '$app/forms';
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		action = $bindable(),
		class: className = undefined,
		children,
		isVisible = $bindable(),
		method = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [enhance],
		...props
	}: {
		action?: string;
		class?: string;
		children?: any;
		isVisible?: boolean;
		method?: 'GET' | 'POST';
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
		classes = twMerge(theme.get('form'), className);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
	$effect(() => {
		if (method === undefined) method = 'POST';
	});
</script>

{#if isVisible}
	<form
		{...props}
		bind:this={elem}
		{action}
		class={classes}
		{method}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{/if}
	</form>
{/if}
