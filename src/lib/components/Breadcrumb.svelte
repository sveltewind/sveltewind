<script lang="ts">
	// imports
	import { use as useAction } from '$lib/actions/index.js';
	import { Icon } from '$lib/components/index.js';
	import { ChevronRight } from '$lib/icons/index.js';
	import { theme } from '$lib/index.js';
	import { twMerge } from 'tailwind-merge';

	// props
	let classes = $state('');
	let {
		class: className = undefined,
		children,
		isVisible = $bindable(),
		href = '#',
		items = [],
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		variants = ['default'],
		...props
	}: {
		class?: string;
		children?: any;
		isVisible?: boolean;
		href: string;
		items: string[] | undefined;
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} = $props();
	const transitionHandler = (node: HTMLElement) => {
		if (transition === undefined) return;
		if (transition.length === 1) return transition[0](node);
		return transition[0](node, transition[1]);
	};

	// effects
	$effect(() => {
		classes = twMerge(
			...variants.map((variant) => theme.getComponentVariant('breadcrumb', variant)),
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

{#if isVisible}
	<div
		{...props}
		bind:this={elem}
		class={classes}
		transition:transitionHandler
		use:useAction={[...use]}
	>
		{#if children !== undefined}
			{@render children()}
		{:else}
			{#each items as item, i}
				<div>{item}</div>
				{#if i < items.length - 1}
					<Icon src={ChevronRight} />
				{/if}
			{/each}
		{/if}
	</div>
{/if}
