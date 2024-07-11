<script lang="ts">
	// imports
	import { Card, Div, Header } from '$lib/components/index.js';
	import { theme } from '$lib/index.js';
	import { BatteryFull, Send, Signal, Wifi } from 'lucide-svelte';
	import { DateTime } from 'luxon';
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
		appStatusBarIsVisible = $bindable(),
		class: className = undefined,
		children,
		isVisible = $bindable(),
		orientation = $bindable(),
		this: elem = $bindable(),
		transition = $bindable(),
		use = [],
		...props
	}: {
		appStatusBarIsVisible?: boolean;
		class?: string;
		children?: any;
		isVisible?: boolean;
		orientation?: 'horizontal' | 'vertical';
		this?: any;
		transition?: any[];
		use?: any[];
	} = $props();

	// effects
	$effect(() => {
		if (appStatusBarIsVisible === undefined) appStatusBarIsVisible = true;
	});
	$effect(() => {
		if (orientation === undefined) orientation = 'vertical';
		classes = twMerge(
			'relative overflow-hidden rounded-xl h-[600px] p-0 shadow-none border-[4px] border-[#0E0E0E]',
			orientation === 'vertical' ? 'aspect-[9/19.5]' : 'aspect-[19.5/9]',
			className
		);
	});
	$effect(() => {
		if (isVisible === undefined) isVisible = true;
	});
</script>

{#if isVisible}
	<Card {...props} bind:this={elem} class={classes} {transition} {use}>
		{#if children !== undefined}
			{@render children()}
		{/if}
		{#if appStatusBarIsVisible}
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
	</Card>
{/if}
