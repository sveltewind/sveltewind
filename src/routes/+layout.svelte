<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import {
		A,
		Button,
		Container,
		Div,
		Field,
		H2,
		Header,
		Label,
		Logo,
		Nav,
		Option,
		Popover,
		Select,
		Span,
		Switch
	} from '$components';
	import { Github, Settings } from '$lib/icons';
	import { theme } from '$lib/theme';
	import { classic, colors, minimal, sharp, soft, studio, type ColorName } from '$lib/themes';
	import { subtleReveal } from '$lib/transitions';
	import { nav as navLinks, type NavLink, type NavSection } from '$state/nav/nav.svelte';
	import { untrack, type ComponentProps, type Snippet } from 'svelte';
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

	// Instance ID
	const settingsId = $props.id();

	// Presets
	const presets = { classic, minimal, sharp, soft, studio };
	const presetNames = Object.keys(presets) as PresetName[];

	// $state
	let selectedPreset = $state<PresetName>('classic');
	let selectedColor = $state<ColorName>('violet');
	let isDarkMode = $state(false);
	let isSettingsOpen = $state(false);
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
				const savedColor = localStorage.getItem('sveltewindColor');
				if (colors.includes(savedColor as ColorName)) selectedColor = savedColor as ColorName;
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
		if (!browser) return;
		document.documentElement.setAttribute('data-color', selectedColor);
		try {
			localStorage.setItem('sveltewindColor', selectedColor);
		} catch {
			/* Optional persistence. */
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
				{@render settingsSnippet()}
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
		onclick={() => {
			isSettingsOpen = false;
			nav.isOpen = !nav.isOpen;
		}}
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

{#snippet settingsTriggerSnippet(props: ComponentProps<typeof Button>)}
	<Button
		{...props}
		aria-label="Settings"
		title="Settings"
		onclick={(event) => {
			nav.isOpen = false;
			props.onclick?.(event);
		}}
		variants={['ghost', 'icon']}
	>
		<Settings aria-hidden="true" class="size-5" />
	</Button>
{/snippet}

{#snippet settingsSnippet()}
	<Popover
		aria-label="Settings"
		bind:isVisible={isSettingsOpen}
		class="w-72 max-w-[calc(100vw-1rem)] p-5"
		gap={8}
		placement="bottom"
		role="dialog"
		transition={[subtleReveal]}
		trigger={settingsTriggerSnippet}
	>
		<Div class="flex flex-col gap-5">
			<H2 class="text-lg font-semibold">Settings</H2>
			<Switch bind:checked={isDarkMode} class="flex w-full flex-row-reverse justify-between gap-6">
				Dark mode
			</Switch>
			<Field class="gap-2">
				<Label for={`${settingsId}-theme`}>Style</Label>
				<Select
					id={`${settingsId}-theme`}
					bind:value={selectedPreset}
					class="w-full px-3 py-2 text-sm"
				>
					{#each presetNames as name}
						<Option value={name}>{name[0].toUpperCase() + name.slice(1)}</Option>
					{/each}
				</Select>
			</Field>
			<Field class="gap-2">
				<Label for={`${settingsId}-color`}>Color</Label>
				<Select
					id={`${settingsId}-color`}
					bind:value={selectedColor}
					class="w-full px-3 py-2 text-sm"
				>
					{#each colors as color}<Option value={color}
							>{color[0].toUpperCase() + color.slice(1)}</Option
						>{/each}
				</Select>
			</Field>
		</Div>
	</Popover>
{/snippet}
