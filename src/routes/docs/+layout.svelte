<script lang="ts">
	import { page } from '$app/stores';
	import { A, Accordion, Card, Div, Drawer, Icon, Summary } from '$components/index.js';
	import { ChevronRight } from '$lib/icons/index.js';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { onMount } from 'svelte';
	import { menu } from './menu.svelte.js';

	onMount(() => {
		menu.forEach(({ items }, i) => {
			if ([...items].map(([_, { href }]) => href).includes($page.url.pathname))
				menu[i].isOpen = true;
		});
	});
</script>

<div class="flex flex-grow overflow-auto">
	<Card
		class="relative hidden min-w-[15rem] divide-y divide-slate-200 overflow-auto rounded-none bg-transparent lg:flex dark:divide-slate-800 dark:bg-transparent"
	>
		{#each menu as { title, isOpen, items }, i}
			<Accordion bind:isOpen class="flex flex-col py-2 first:pt-0" {title}>
				<!-- {#snippet summary()}
					<Summary class="font-bold text-slate-950 dark:text-slate-50">{title}</Summary>
				{/snippet} -->
				{#each [...items] as [label, { href }]}
					<A
						class={twMerge(
							'border-l border-slate-200 px-4 py-2 shadow-none hover:border-slate-950 hover:text-slate-950 hover:shadow-none focus:border-slate-950 focus:text-slate-950 dark:border-slate-800 dark:shadow-none dark:hover:border-slate-50 dark:hover:text-slate-50 dark:focus:border-slate-50 dark:focus:text-slate-50',
							$page.url.pathname === href
								? 'border-violet-500 text-slate-950 hover:border-violet-500 focus:border-violet-500 dark:border-violet-500 dark:text-slate-50 dark:hover:border-violet-500 dark:focus:border-violet-500'
								: undefined
						)}
						{href}
					>
						{label}
					</A>
				{/each}
			</Accordion>
		{/each}
	</Card>
	<div class="flex flex-grow flex-col space-y-8 overflow-auto p-4">
		<Div class="flex items-center space-x-2 lg:!mt-0">
			{#each $page.url.pathname.substring(1).split('/') as item, i}
				{@const label = item
					.replace(/(^.)/g, (character) => character.toUpperCase())
					.replace(/\-/g, ' ')
					.replace(/(\s.{1})/g, (character) => character.toUpperCase())}
				{@const component = i === 0 ? A : Div}
				{@const href = i === 0 ? '/docs' : undefined}
				<svelte:component this={component} {href}>{label}</svelte:component>
				{#if i < $page.url.pathname.substring(1).split('/').length - 1}
					<Icon class="h-4 w-4" src={ChevronRight} />
				{/if}
			{/each}
		</Div>
		<slot />
	</div>
</div>

<Drawer class="w-full max-w-[calc(100vw_-_2rem)]">
	<Card class="flex-grow overflow-auto rounded-none text-lg">
		{#each menu as { title, items }, i}
			<div class="flex flex-col py-2 first:pt-0">
				<div
					class="justify-between bg-transparent px-0 py-2 text-lg font-bold text-slate-950 hover:bg-transparent focus:bg-transparent dark:text-slate-50 dark:shadow-none"
				>
					<span>{title}</span>
				</div>
				<div class="flex flex-col" transition:slide={{ duration: 200 }}>
					{#each [...items] as [label, href]}
						<A
							class={twMerge(
								'border-l border-slate-200 px-4 py-2 shadow-none hover:border-slate-950 hover:text-slate-950 hover:shadow-none focus:border-slate-950 focus:text-slate-950 dark:border-slate-800 dark:shadow-none dark:hover:border-slate-50 dark:hover:text-slate-50 dark:focus:border-slate-50 dark:focus:text-slate-50',
								$page.url.pathname === href
									? 'border-violet-500 text-slate-950 hover:border-violet-500 focus:border-violet-500 dark:border-violet-500 dark:text-slate-50 dark:hover:border-violet-500 dark:focus:border-violet-500'
									: undefined
							)}
							{href}
							onclick={toggle}
						>
							{label}
						</A>
					{/each}
				</div>
			</div>
		{/each}
	</Card>
</Drawer>
