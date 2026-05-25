<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { A, Button, Container, Div, Header, Logo, Nav } from '$components';
	import { Github, Moon, Sun } from '$lib/icons';
	import { theme } from '$lib/theme';
	import { theme as defaultTheme } from '$lib/themes/default';
	import { nav as navLinks, type NavLink, type NavSection } from '$state/nav/nav.svelte';
	import { untrack, type Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	import '../app.css';

	// types
	type Props = {
		children?: Snippet;
	};

	// $props
	let { children }: Props = $props();

	// $state
	let isDarkMode = $state(false);
	const nav: {
		isOpen: boolean;
		main: { href: string; startsWith: string; title: string }[];
	} = $state({
		isOpen: false,
		main: [
			{
				href: '/getting-started/what-is-sveltewind',
				startsWith: '/getting-started',
				title: 'Docs'
			},
			{ href: '/components/a', startsWith: '/components', title: 'Components' },
			{ href: '/examples/sass-landing-page', startsWith: '/examples', title: 'Examples' }
		]
	});

	let scrollY = $state(0);

	// $effects
	$effect(() => {
		untrack(() => {
			theme.set.theme(defaultTheme);
			theme.set.component('blockLink', {
				base: twMerge(
					theme.get.component('card').base,
					'flex flex-col',
					'hover:inset-ring-primary-500 hover:bg-primary-500/10 focus:inset-ring-primary-500 focus:bg-primary-500/10',
					'gap-3',
					'no-underline'
				)
			});
			theme.set.component('codePreview', {
				base: twMerge('p-0')
			});
			theme.set.component('docsSection', {
				base: 'flex scroll-mt-[calc(5.25rem+1px)] flex-col gap-6 py-12 first-of-type:pt-0 last-of-type:pb-0 last-of-type:grid last-of-type:grid-cols-1 md:last-of-type:grid-cols-2'
			});
			theme.set.variant(
				'a',
				'card',
				twMerge(
					theme.get.component('card').base,
					'flex flex-col hover:inset-ring-primary-500 hover:bg-primary-500/10 focus:inset-ring-primary-500 focus:bg-primary-500/10'
				)
			);

			if (browser) {
				const localStorageDarkMode = localStorage.getItem('darkMode') || 'false';
				isDarkMode = localStorageDarkMode === 'true';
			}
		});
	});

	$effect(() => {
		document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
		if (browser) {
			localStorage.setItem('darkMode', String(isDarkMode));
		}
	});
</script>

<svelte:window bind:scrollY />

<Div class="sticky top-0 z-10">
	<Header
		class={twMerge(
			'relative py-4',
			page.url.pathname === '/' && scrollY <= 0 && !nav.isOpen
				? 'border-transparent dark:border-transparent'
				: ''
		)}
	>
		<Container class="flex items-center justify-between">
			<A
				class="-mx-6"
				href="/"
				onclick={() => (nav.isOpen = false)}
				variants={['button.base', 'button.variant.ghost']}
			>
				<Logo />
			</A>
			<Div class="-mr-3 flex items-center">
				{@render linksSnippet()}
				{@render darkModeButtonSnippet()}
				{@render githubButtonSnippet()}
				{@render navButtonSnippet()}
			</Div>
		</Container>
	</Header>

	<Nav
		bind:isVisible={nav.isOpen}
		class="absolute top-20 right-0 left-0 z-10 max-h-[calc(100vh-5.25rem-1px)] overflow-y-auto border-b border-gray-300 bg-gray-50/75 py-3 backdrop-blur lg:hidden dark:border-gray-700 dark:bg-gray-950/90"
		transition={[slide, { duration: 200 }]}
	>
		<Container class="flex flex-col">
			{#each navLinks as navSection}
				{#if 'href' in navSection}
					{@render navLinkSnippet(navSection)}
				{:else if 'children' in navSection}
					{@render navSectionSnippet(navSection)}
				{/if}
			{/each}
		</Container>
	</Nav>
</Div>

{#if children}
	{@render children()}
{/if}

{#snippet darkModeButtonSnippet()}
	<Button
		class="relative flex items-center justify-center overflow-hidden"
		onclick={() => (isDarkMode = !isDarkMode)}
		variants={['icon', 'ghost']}
	>
		<Moon
			class={twMerge(
				'absolute top-1/2 left-1/2 transition duration-200',
				isDarkMode ? '-translate-x-1/2 -translate-y-1/2' : 'translate-x-[-400%] translate-y-[-400%]'
			)}
		/>
		<Sun
			class={twMerge(
				'absolute top-1/2 left-1/2 -translate-x-1/2 transition duration-200',
				!isDarkMode ? '-translate-x-1/2 -translate-y-1/2' : 'translate-x-[400%] translate-y-[-400%]'
			)}
		/>
	</Button>
{/snippet}
{#snippet githubButtonSnippet()}
	<A
		href="https://github.com/sveltewind/sveltewind"
		target="_blank"
		variants={['button.base', 'button.variant.icon', 'button.variant.ghost']}
	>
		<Github />
	</A>
{/snippet}
{#snippet linksSnippet()}
	{#each nav.main as { href, startsWith, title }}
		<A
			class={twMerge(
				'hidden lg:block',
				page.url.pathname.startsWith(startsWith)
					? 'text-primary-500 hover:bg-primary-500/10 hover:text-primary-500 focus:bg-primary-500/10 focus:text-primary-500 focus:outline-primary-500/30 dark:text-primary-500 dark:hover:bg-primary-500/10 dark:hover:text-primary-500 dark:focus:bg-primary-500/10 dark:focus:text-primary-500 dark:focus:outline-primary-500/30'
					: '00'
			)}
			{href}
			variants={['button.base', 'button.variant.ghost']}
		>
			{title}
		</A>
	{/each}
{/snippet}
{#snippet navButtonSnippet()}
	<Button
		class="relative lg:hidden"
		onclick={() => (nav.isOpen = !nav.isOpen)}
		variants={['icon', 'ghost']}
	>
		<Div
			class={twMerge(
				'-translte-y-1/2 absolute top-1/2 left-1/2 -mt-1 h-0.5 w-6 -translate-x-1/2 rounded-full bg-current transition duration-200',
				nav.isOpen ? 'mt-0 rotate-45' : '-mt-1 rotate-0'
			)}
		/>
		<Div
			class={twMerge(
				'-translte-y-1/2 absolute top-1/2 left-1/2 mt-1 h-0.5 w-6 -translate-x-1/2 rounded-full bg-current transition duration-200',
				nav.isOpen ? 'mt-0 -rotate-45' : 'mt-1 rotate-0'
			)}
		/>
	</Button>
{/snippet}

{#snippet navLinkSnippet(navLink: NavLink)}
	<A
		class={twMerge(
			'border-l py-3 pl-6',
			page.url.pathname === navLink.href
				? 'border-primary-500 text-primary-500'
				: 'border-gray-300 text-gray-950/50 hover:text-gray-950 focus:text-gray-950 dark:border-gray-700 dark:text-gray-50/50 dark:hover:text-gray-50 dark:focus:text-gray-50'
		)}
		href={navLink.href}
		onclick={() => (nav.isOpen = false)}
	>
		{navLink.title}
	</A>
{/snippet}
{#snippet navSectionSnippet(navSection: NavSection, depth = 0)}
	<Div class="flex flex-col">
		<Button
			class={twMerge(
				'px-0 py-3 text-left',
				depth > 0 ? 'border-l border-gray-300 pl-6 dark:border-gray-700' : ''
			)}
			onclick={() => (navSection.isOpen = !navSection.isOpen)}
			variants={['ghost', 'square']}
		>
			{navSection.title}
		</Button>
		<Div
			class="flex flex-col pl-6"
			isVisible={navSection.isOpen}
			transition={[slide, { duration: 200 }]}
		>
			{#each navSection.children as child}
				{#if 'href' in child}
					{@render navLinkSnippet(child)}
				{:else if 'children' in child}
					{@render navSectionSnippet(child, depth + 1)}
				{/if}
			{/each}
		</Div>
	</Div>
{/snippet}
