<script lang="ts">
	import { A, BlockLink, Div, DocsSection, H1, H2, Li, P, Span, Ul } from '$components';
	import { Boxes, Clapperboard, Dna, Sparkle, SwatchBook } from '$lib/icons';

	// $state
	const coreConcepts = [
		{
			href: '/components',
			Icon: Boxes,
			title: 'Components',
			description: 'Sveltewind provides a set of primitives and higher-level components.'
		},
		{
			href: '/getting-started/usage#variants',
			Icon: Dna,
			title: 'Variants',
			description: 'Variants control styling and can be composed across components.'
		},
		{
			href: '/getting-started/theming',
			Icon: SwatchBook,
			title: 'Theming',
			description:
				'All components use a shared theme system with a global theme by default, optional local theme overrides, and full support for customization.'
		},
		{
			href: '/getting-started/usage#transitions',
			Icon: Clapperboard,
			title: 'Transitions',
			description: 'All components support native Svelte transitions.'
		}
	];
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Getting Started</P>

	<H1>What is Sveltewind?</H1>

	<P>Sveltewind is a batteries-included component system for Svelte 5.</P>

	<P>
		It provides a set of prebuilt components, a powerful theming system, and a consistent API so you
		can start building immediately without wiring your own design system.
	</P>
</DocsSection>

<DocsSection>
	<H2>Not just a component library</H2>

	<P>Sveltewind is more than a collection of components. It is a system that lets you:</P>

	<Ul>
		<Li>Use prebuilt components out of the box</Li>
		<Li>Customize them with a global theme</Li>
		<Li>Compose styles across components</Li>
		<Li>Create your own components using the same conventions</Li>
		<Li>Override built-in components when you need full control</Li>
		<Li>And more...</Li>
	</Ul>
</DocsSection>

<DocsSection>
	<H2>Why Sveltewind?</H2>

	<P>
		Most UI solutions fall into one of two categories: build everything yourself, which is flexible
		but slow and inconsistent, or use a component library, which is fast but often rigid and
		difficult to customize.
	</P>

	<P>Sveltewind is designed to give you both speed and flexibility.</P>

	<Ul>
		<Li>
			<Span class="text-gray-950 dark:text-gray-50">Fast to start</Span> — install and build immediately
		</Li>
		<Li>
			<Span class="text-gray-950 dark:text-gray-50">Opinionated defaults</Span> — consistent design out
			of the box
		</Li>
		<Li>
			<Span class="text-gray-950 dark:text-gray-50">Fully extensible</Span> — customize, extend, or replace
			anything
		</Li>
	</Ul>
</DocsSection>

<DocsSection>
	<H2>Core concepts</H2>

	<Div class="flex flex-col gap-3 lg:grid lg:grid-cols-2">
		{#each coreConcepts as { href, Icon, title, description }}
			<BlockLink class="flex flex-col gap-3" {description} {href} {Icon} {title} />
		{/each}
	</Div>
</DocsSection>

<DocsSection>
	<H2>Use it your way</H2>

	<P>
		Sveltewind is designed to adapt to your workflow. You can use the included components, build
		your own components with the same system, or override any built-in component when needed.
		Everything works together, so you do not have to leave the system as your app grows.
	</P>
</DocsSection>

<DocsSection>
	<H2>When should you use Sveltewind?</H2>

	<P>
		Sveltewind is a great fit if you want a fast starting point for Svelte 5 apps, a consistent
		design system without building one from scratch, and the flexibility to customize or replace
		components over time.
	</P>
</DocsSection>

<DocsSection>
	<Div class="hidden md:block" />
	<BlockLink
		class="items-end text-right"
		description="Getting started is simple — install the package and you’re ready to go."
		href="/getting-started/installation"
		Icon={Sparkle}
		title="Installation"
	/>
</DocsSection>
