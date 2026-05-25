<script lang="ts">
	import { page } from '$app/state';
	import { A, Aside, Button, Container, Div, Main, Nav, P, Span } from '$components';
	import { ChevronDown, TestTube } from '$lib/icons';
	import { clickOutside } from '$lib/attachments';
	import { nav as navSections, type NavLink, type NavSection } from '$state/nav/nav.svelte';
	import { untrack, type Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	// types
	type AsideLink = {
		class: string;
		onclick: () => void;
		href: string;
		title: string;
	};
	type OnThisPageItem = {
		href: string;
		tag: string;
		text: string;
	};
	type Props = {
		children: Snippet;
	};

	// helpers
	const getOnThisPageItems = (element: HTMLElement) => {
		if (!page.url.pathname) return;

		let intersectionObserver: IntersectionObserver | null = null;
		let mutationObserver: MutationObserver | null = null;

		const createId = (text: string) =>
			text
				.replace(/[^a-z0-9\s]/gi, '')
				.toLowerCase()
				.trim()
				.split(/\s+/)
				.join('-');

		const rebuild = () => {
			intersectionObserver?.disconnect();

			const headings = Array.from(element.querySelectorAll<HTMLElement>('h1, h2, h3'));

			const nextItems = headings.map((heading) => {
				const tag = heading.tagName.toLowerCase();
				const text = heading.textContent || '';
				const id = createId(text);

				const sectionElement = heading.closest('section');

				if (tag === 'h3') {
					heading.id = id;
				} else if (sectionElement) {
					sectionElement.id = id;
				} else {
					heading.id = id;
				}

				return {
					href: `#${id}`,
					tag,
					text
				};
			});

			untrack(() => {
				onThisPage.items = nextItems;

				const idsOnPage = new Set(nextItems.map((item) => item.href.slice(1)));
				visibleSectionIds = visibleSectionIds.filter((id) => idsOnPage.has(id));
			});

			intersectionObserver = new IntersectionObserver(
				(entries) => {
					untrack(() => {
						const next = new Set(visibleSectionIds);

						for (const entry of entries) {
							const target = entry.target as HTMLElement;
							const id = target.closest('section')?.id || target.id;
							if (!id) continue;

							if (entry.isIntersecting) next.add(id);
							else next.delete(id);
						}

						visibleSectionIds = Array.from(next);
					});
				},
				{
					root: null,
					rootMargin: '0px 0px 0px 0px',
					threshold: 0
				}
			);

			for (const heading of headings) {
				intersectionObserver.observe(heading);
			}
		};

		let rebuildQueued = false;

		const queueRebuild = () => {
			if (rebuildQueued) return;
			rebuildQueued = true;

			queueMicrotask(() => {
				rebuildQueued = false;
				rebuild();
			});
		};

		untrack(() => {
			rebuild();
		});

		mutationObserver = new MutationObserver(() => {
			queueRebuild();
		});

		mutationObserver.observe(element, {
			childList: true,
			subtree: true,
			characterData: true
		});

		return () => {
			intersectionObserver?.disconnect();
			mutationObserver?.disconnect();

			untrack(() => {
				visibleSectionIds = [];
			});
		};
	};

	// $props()
	let { children }: Props = $props();

	// $state
	let onThisPage = $state({
		isOpen: false,
		items: [] as OnThisPageItem[]
	});
	let visibleSectionIds: string[] = $state([]);

	// $derived
	const title = $derived(
		[
			...page.url.pathname
				.slice(1)
				.split('/')
				.reverse()
				.map((directory) =>
					directory
						.split('-')
						.map((word) => word[0].toUpperCase() + word.slice(1))
						.join(' ')
				),
			'Sveltewind'
		].join(' - ')
	);
	const visibleSectionIdSet = $derived(new Set(visibleSectionIds));

	// $effects
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Main>
	<Nav
		{@attach clickOutside(() => (onThisPage.isOpen = false))}
		class="sticky top-[calc(5.25rem+1px)] z-0 lg:hidden"
		variants={['header.base']}
	>
		<Button
			class="flex w-full justify-between"
			variants={['ghost', 'square']}
			onclick={() => (onThisPage.isOpen = !onThisPage.isOpen)}
		>
			<Span>On This Page</Span>
			<ChevronDown
				class={twMerge('transition duration-200', onThisPage.isOpen ? 'rotate-180' : '')}
			/>
		</Button>
		<Container>
			<Div
				class="flex flex-col pb-3"
				isVisible={onThisPage.isOpen}
				transition={[slide, { duration: 200 }]}
			>
				{#each onThisPage.items as onThisPageItem}
					{@render onThisPageLinkSnippet(onThisPageItem)}
				{/each}
			</Div>
		</Container>
	</Nav>
	<Container class="flex">
		{@render navAsideSnippet()}
		<Div
			{@attach getOnThisPageItems}
			class="flex grow flex-col divide-y divide-gray-200 overflow-auto py-6 lg:px-6 dark:divide-gray-700"
		>
			{#if children}
				{@render children()}
			{/if}
		</Div>
		{@render onThisPageAsideSnippet()}
	</Container>
</Main>

{#snippet asideLinkSnippet(asideLink: AsideLink)}
	<A
		class={twMerge(
			'truncate border-l py-2 pr-4 pl-4 text-sm whitespace-nowrap no-underline',
			asideLink.class
		)}
		href={asideLink.href}
		onclick={asideLink.onclick}
	>
		{asideLink.title}
	</A>
{/snippet}
{#snippet navAsideSnippet()}
	<Aside
		class="scrollbar-thin sticky top-20 -ml-6 hidden max-h-[calc(100vh-5.25rem-1px)] w-full max-w-48 shrink-0 flex-col gap-6 overflow-x-visible overflow-y-auto py-3 lg:flex"
	>
		{#each navSections as navSection}
			{#if 'href' in navSection}
				{@render navLinkSnippet(navSection)}
			{:else if 'children' in navSection}
				{@render navSectionSnippet(navSection)}
			{/if}
		{/each}
	</Aside>
{/snippet}

{#snippet navLinkSnippet(navLink: NavLink)}
	{@render asideLinkSnippet({
		class:
			page.url.pathname === navLink.href
				? 'border-primary-500 text-primary-500'
				: 'border-gray-300 text-gray-950/50 hover:text-gray-950 focus:text-gray-950 dark:border-gray-700 dark:text-gray-50/50 dark:hover:text-gray-50 dark:focus:text-gray-50',
		href: navLink.href,
		onclick: () => {},
		title: navLink.title
	})}
{/snippet}

{#snippet navSectionSnippet(navSection: NavSection, depth = 0)}
	<Div class="flex flex-col">
		<Button
			class={twMerge(
				'px-4 py-2 text-left text-sm whitespace-nowrap',
				depth > 0 ? 'border-l border-gray-300 pl-4 dark:border-gray-700' : ''
			)}
			onclick={() => (navSection.isOpen = !navSection.isOpen)}
			variants={['ghost', 'square']}
		>
			{navSection.title}
		</Button>
		<Div
			class="flex flex-col pl-4"
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

{#snippet onThisPageAsideSnippet()}
	<Aside
		class="scrollbar-thin sticky top-20 hidden max-h-[calc(100vh-5.25rem-1px)] w-full max-w-48 shrink-0 flex-col overflow-x-visible overflow-y-auto py-3 lg:flex"
	>
		<P class="py-2 text-sm text-current dark:text-current">On This Page</P>
		{#each onThisPage.items as onThisPageItem}
			{@render onThisPageLinkSnippet(onThisPageItem)}
		{/each}
	</Aside>
{/snippet}

{#snippet onThisPageLinkSnippet(onThisPageItem: OnThisPageItem)}
	{@render asideLinkSnippet({
		class: twMerge(
			onThisPageItem.tag === 'h2' ? 'pl-8' : onThisPageItem.tag === 'h3' ? 'pl-12' : '',
			visibleSectionIdSet.has(onThisPageItem.href.slice(1))
				? 'border-primary-500 text-primary-500 dark:text-primary-500 dark:border-primary-500'
				: 'border-gray-300 text-gray-950/50 hover:text-gray-950 focus:text-gray-950 dark:border-gray-700 dark:text-gray-50/50 dark:hover:text-gray-50 dark:focus:text-gray-50'
		),
		href: onThisPageItem.href,
		onclick: () => (onThisPage.isOpen = false),
		title: onThisPageItem.text
	})}
{/snippet}
