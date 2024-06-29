<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: { class?: string; children?: any; this?: any; transition?: any[]; use?: any[] } = $props();

	// effects
	$effect(() => {
		classes = twMerge(theme.get('container'), className);
	});
</script>

<div
	{...props}
	bind:this={elem}
	class={classes}
	transition:transitionHandler
	use:useAction={[...use]}
>
	{#if children !== undefined}
		{@render children()}
	{/if}
</div>
