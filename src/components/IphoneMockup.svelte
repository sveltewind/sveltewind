<script lang="ts">
	// imports
	import { Card, Div, Header } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import { BatteryFull, Send, Signal, Wifi } from 'lucide-svelte';
	import { DateTime } from 'luxon';
	import { onMount, type Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	// handlers
	const updateDate = () => {
		date = DateTime.now();
		requestAnimationFrame(updateDate);
	};

	// props
	let classes = $state('');
	let date = $state(DateTime.now());
	let {
		appStatusBar,
		appStatusBarIsVisible = $bindable(),
		class: className = undefined,
		children,
		dynamicIsland,
		dynamicIslandIsVisible = $bindable(),
		isVisible = $bindable(),
		orientation = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		appStatusBar?: Snippet;
		appStatusBarIsVisible?: boolean;
		class?: string;
		children?: any;
		dynamicIsland?: Snippet;
		dynamicIslandIsVisible?: boolean;
		isVisible?: boolean;
		orientation?: 'horizontal' | 'vertical';
		this?: any;
		transition?: any[];
		use?: any[];
		variants?: string[];
	} = $props();

	// effects
	$effect(() => {
		if (appStatusBarIsVisible === undefined) appStatusBarIsVisible = true;
	});
	$effect(() => {
		if (dynamicIslandIsVisible === undefined) dynamicIslandIsVisible = true;
	});
	$effect(() => {
		if (orientation === undefined) orientation = 'vertical';
		classes = twMerge(
			'relative overflow-hidden rounded-xl h-[600px] p-0 shadow-none border ring-offset-[8px] ring-offset-[#0E0E0E] ring-[1px] ring-white/5 dark:ring-white/5 border-white/5',
			orientation === 'vertical' ? 'aspect-[9/19.5]' : 'aspect-[19.5/9]',
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});

	onMount(() => {
		updateDate();
	});
</script>

{#if isVisible}
	<Card {...props} bind:this={elem} class={classes} {transition} {use}>
		{#if children !== undefined}
			{@render children()}
		{/if}
		{#if appStatusBarIsVisible}
			{#if appStatusBar}
				{@render appStatusBar()}
			{:else}
				<Header class="absolute left-0 top-0 flex w-full justify-between p-4 ring-0">
					<Div class="flex items-center space-x-1 text-xs">
						<Div>{date.toFormat('h:mm')}</Div>
						<Send class="h-[.75rem] w-[.75rem]" />
					</Div>
					<Div class="flex items-center space-x-1">
						<Signal class="h-[.75rem] w-[.75rem]" />
						<Wifi class="h-[.75rem] w-[.75rem]" />
						<BatteryFull class="h-[.75rem] w-[.75rem] text-green-500" />
					</Div>
				</Header>
			{/if}
		{/if}
		{#if dynamicIslandIsVisible}
			{#if dynamicIsland}
				{@render dynamicIsland()}
			{:else}
				<Div
					class="absolute left-1/2 top-2 flex aspect-[4/1] h-6 -translate-x-1/2 justify-end rounded-full bg-black p-1"
				>
					<Div class="aspect-square h-full rounded-full bg-[#10132E]" />
				</Div>
			{/if}
		{/if}
	</Card>
{/if}
