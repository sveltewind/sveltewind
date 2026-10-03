<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { A, Button, Container, Div, Header, Logo, Nav, Option, Select } from '$components';
	import { Github, Moon, Palette, Sun } from '$lib/icons';
	import { theme } from '$lib/theme';
	import { classic, minimal, sharp, soft, studio } from '$lib/themes';
	import { nav as navLinks, type NavLink, type NavSection } from '$state/nav/nav.svelte';
	import { untrack, type Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	import '../app.css';

	// types
	type PresetName = keyof typeof presets;
	type Props = {
		children?: Snippet;
	};

	// $props
	let { children }: Props = $props();

	// Presets
	const presets = { classic, minimal, sharp, soft, studio };
	const presetNames = Object.keys(presets) as PresetName[];

	// $state
	let selectedPreset = $state<PresetName>('classic');
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
			{ href: '/components', startsWith: '/components', title: 'Components' },
			{ href: '/examples/sass-landing-page', startsWith: '/examples', title: 'Examples' }
		]
	});

	let scrollY = $state(0);

	// $effects
	$effect(() => {
		untrack(() => {
			if (!browser) return;
			try {
				isDarkMode = localStorage.getItem('darkMode') === 'true';
				const saved = localStorage.getItem('sveltewindStyle');
				if (saved && Object.hasOwn(presets, saved)) selectedPreset = saved as PresetName;
			} catch {
				// Storage can be disabled; theme controls still work for this visit.
			}
		});
	});

	$effect(() => {
		const preset = presets[selectedPreset];
		untrack(() => {
			// Site-specific additions must never mutate an exported library preset.
			theme.set.theme(
				Object.fromEntries(
					Object.entries(preset).map(([key, component]) => [
						key,
						{
							base: component.base,
							variants: { ...component.variants }
						}
					])
				)
			);
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
		});
		if (browser) {
			document.documentElement.setAttribute('data-style', selectedPreset);
			try {
				localStorage.setItem('sveltewindStyle', selectedPreset);
			} catch {
				/* Optional persistence. */
			}
		}
	});

	$effect(() => {
		document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
		if (browser) {
			try {
				localStorage.setItem('darkMode', String(isDarkMode));
			} catch {
				/* Optional persistence. */
			}
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
		<Container
			class={twMerge(
				'flex items-center justify-between',
				page.url.pathname === '/' ? 'mx-auto w-full max-w-7xl px-6 sm:px-10' : ''
			)}
		>
			<A
				class="-mx-3 px-3 sm:-mx-6 sm:px-6"
				href="/"
				onclick={() => (nav.isOpen = false)}
				variants={['button.base', 'button.variant.ghost']}
			>
				<Logo />
			</A>
			<Div class="-mr-3 flex items-center">
				{@render linksSnippet()}
				{@render themeSelectorSnippet()}
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
		aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
		class="relative flex size-9 items-center justify-center overflow-hidden sm:size-12"
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
		aria-label="Sveltewind on GitHub"
		class={page.url.pathname === '/' ? 'hidden sm:inline-flex' : ''}
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
		aria-label={nav.isOpen ? 'Close navigation' : 'Open navigation'}
		aria-expanded={nav.isOpen}
		class="relative size-9 sm:size-12 lg:hidden"
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

{#snippet themeSelectorSnippet()}
	<Div class="relative ml-1 flex items-center">
		<Palette
			aria-hidden="true"
			class="pointer-events-none absolute left-2.5 size-4 text-primary-500 sm:left-2"
		/>
		<Select
			aria-label={`Site style: ${selectedPreset}`}
			title={`Site style: ${selectedPreset}. Change the style across the whole site.`}
			bind:value={selectedPreset}
			class="size-9 cursor-pointer appearance-none p-0 text-transparent sm:h-auto sm:w-27 sm:appearance-auto sm:py-2 sm:pr-1 sm:pl-7 sm:text-xs sm:text-gray-950 sm:capitalize sm:dark:text-gray-50"
		>
			{#each presetNames as name}<Option value={name}
					>{name[0].toUpperCase() + name.slice(1)}</Option
				>{/each}
		</Select>
	</Div>
{/snippet}
