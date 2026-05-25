<script lang="ts">
	import { BlockLink, CodeBlock, DocsSection, H1, H2, Li, P, Ul } from '$components';
	import { CircleQuestionMark, Laptop } from '$lib/icons';
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Getting Started</P>

	<H1>Installation</H1>

	<P>Getting started is simple — install the package and you’re ready to go.</P>

	<CodeBlock code="npm install sveltewind" options={{ lang: 'bash' }} title="terminal" />
</DocsSection>

<DocsSection>
	<H2>Tailwind CSS</H2>

	<P
		>This library is built on Tailwind CSS. Make sure Tailwind is installed and configured in your
		project.</P
	>

	<P
		>If you don’t have Tailwind set up yet, follow the official installation guide for your
		framework before continuing.</P
	>
</DocsSection>

<DocsSection>
	<H2>Add the source to Tailwind</H2>

	<P
		>To ensure all component styles are included, add the library to your Tailwind source
		configuration:</P
	>

	<CodeBlock
		code={`@import "tailwindcss";
@source "../node_modules/sveltewind";`}
		options={{ lang: 'css' }}
		title="app.css"
	/>

	<P>This allows Tailwind to detect and generate the classes used by the components.</P>
</DocsSection>

<DocsSection>
	<H2>That’s it!</H2>

	<P>You’re ready to start building. The library comes with:</P>

	<Ul>
		<Li>Opinionated defaults out of the box</Li>
		<Li>Full Svelte 5 support</Li>
		<Li>Built-in transitions</Li>
		<Li>A flexible theming system</Li>
	</Ul>
</DocsSection>

<DocsSection>
	<H2>Variants</H2>

	<P>Components support variants, which control styling.</P>
</DocsSection>

<DocsSection>
	<BlockLink
		description="Sveltewind is a batteries-included component system for Svelte 5."
		href="/getting-started/what-is-sveltewind"
		Icon={CircleQuestionMark}
		title="What is Sveltewind?"
	/>

	<BlockLink
		class="items-end text-right"
		description="A little blurb should go here"
		href="/getting-started/usage"
		Icon={Laptop}
		title="Usage"
	/>
</DocsSection>
