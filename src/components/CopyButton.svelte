<script lang="ts">
	import { Button, Icon, Popover } from '$components/index.js';
	import { Clipboard } from '$lib/icons/index.js';
	import type { Snippet } from 'svelte';

	// handlers
	const clickHandler = async () => {
		if (navigator?.clipboard?.writeText) await navigator.clipboard.writeText(text);
		open();
		setTimeout(() => {
			close();
		}, duration + 800);
	};

	// props
	let {
		close = $bindable(),
		duration = $bindable(),
		icon,
		isOpen = $bindable(),
		open = $bindable(),
		text = $bindable(),
		toggle = $bindable()
	}: {
		close?: () => void;
		duration?: number;
		icon?: Snippet;
		isOpen?: boolean;
		open?: () => void;
		text: string;
		toggle?: () => void;
	} = $props();

	// effects
	$effect(() => {
		if (text === undefined) text = '';
	});
</script>

<Popover bind:close bind:duration bind:isOpen bind:open bind:toggle text={'Copied'}>
	<Button class="px-2 py-2" onclick={clickHandler} variants={['ghost', 'icon']}>
		{#if icon !== undefined}
			{@render icon()}
		{:else}
			<Icon class="h-5 w-5" src={Clipboard} />
		{/if}
	</Button>
</Popover>
