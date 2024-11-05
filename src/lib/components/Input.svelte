<script lang="ts">
	// imports
	import { setType, use as useAction } from '../actions/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		type = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		value = $bindable(),
		variants = ['default'],
		...props
	}: {
		class?: string;
		children?: any;
		isVisible?: boolean;
		type?:
			| 'button'
			| 'checkbox'
			| 'color'
			| 'date'
			| 'datetime-local'
			| 'email'
			| 'file'
			| 'hidden'
			| 'image'
			| 'month'
			| 'number'
			| 'password'
			| 'radio'
			| 'range'
			| 'reset'
			| 'search'
			| 'submit'
			| 'tel'
			| 'text'
			| 'time'
			| 'url'
			| 'week';
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
		value?: string;
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(
			...variants.map((variant) => theme.getComponentVariant('input', variant)),
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
	$effect(() => {
		if (type === undefined) type = 'text';
		if (elem !== undefined) elem.type = type;
	});
</script>

{#if isVisible}
	<input
		{...props}
		bind:this={elem}
		bind:value
		class={classes}
		transition:transitionHandler
		use:useAction={[[setType, type], ...use]}
	/>
{/if}
