<script lang="ts">
	import { page } from '$app/stores';
	import {
		A,
		Button,
		Card,
		Drawer,
		Header,
		Icon,
		Logo,
		Main,
		Pwa,
		Title
	} from '$components/index.js';
	import { Bars2, XMark } from '$lib/icons/index.js';
	import { theme } from '$lib/index.js';
	import { sveltewind } from '$lib/themes/index.js';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { menu } from './docs/menu.svelte.js';
	import '../app.css';

	theme.set(sveltewind);
	theme.update({
		h1: 'text-slate-950 dark:text-slate-50',
		h2: 'text-slate-950 dark:text-slate-50',
		h3: 'text-slate-950 dark:text-slate-50',
		h4: 'text-slate-950 dark:text-slate-50',
		h5: 'text-slate-950 dark:text-slate-50',
		h6: 'text-slate-950 dark:text-slate-50'
	});

	// props
	let toggle: () => void;
	const headerItems = new Map([
		['/docs', { title: 'Docs', menu }],
		['/examples', { title: 'Examples' }],
		['/faq', { title: 'FAQ' }]
	]);
	let isOpen: boolean;
</script>

<Pwa themeColor="#09090C" />
<Title base="Sveltewind" />

<div class="flex max-h-screen min-h-screen flex-grow flex-col overflow-auto">
	<Header class="sticky top-0 px-4 py-2 lg:py-4">
		<div class="flex flex-grow items-center justify-between">
			<A class="group shadow-none hover:shadow-none" href="/">
				<Logo class="lg:h-8" />
			</A>
			<div class="hidden items-center md:flex">
				{#each [...headerItems] as [href, { title }]}
					<A
						class="px-4 py-2 shadow-none hover:text-slate-950 hover:shadow-none focus:text-slate-950 dark:hover:text-slate-50 dark:focus:text-slate-50"
						{href}
					>
						{title}
					</A>
				{/each}
			</div>
			<Button class="md:hidden" onclick={toggle} variants={['ghost', 'icon']}>
				<Icon src={Bars2} />
			</Button>
		</div>
	</Header>
	<Main class="p-0">
		<slot />
	</Main>
</div>

<Drawer
	bind:isOpen
	bind:toggle
	class="w-full max-w-[calc(100vw_-_2rem)] md:hidden"
	position="right"
>
	<Card class="flex-grow overflow-auto rounded-none px-4 py-2 text-lg lg:py-4">
		<Button class="self-end" onclick={toggle} variants={['ghost', 'icon']}>
			<Icon src={XMark} />
		</Button>
		{#each [...headerItems] as [href, { title, menu }]}
			<A
				class="px-4 py-2 shadow-none hover:text-slate-950 hover:shadow-none focus:text-slate-950 dark:hover:text-slate-50 dark:focus:text-slate-50"
				{href}
				onclick={toggle}
			>
				{title}
			</A>
			{#if menu}
				<div class="flex flex-col pl-8">
					{#each menu as { title, items }, i}
						<div class="flex flex-col py-2 first:pt-0">
							<div
								class="justify-between bg-transparent px-0 py-2 text-lg font-bold text-slate-950 hover:bg-transparent focus:bg-transparent dark:text-slate-50 dark:shadow-none"
							>
								<span>{title}</span>
							</div>
							<div class="flex flex-col" transition:slide={{ duration: 200 }}>
								{#each [...items] as [label, { href }]}
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
				</div>
			{/if}
		{/each}
	</Card>
</Drawer>
