<script lang="ts">
	import {
		A,
		BlockLink,
		Button,
		Code,
		CodePreview,
		Div,
		DocsSection,
		H1,
		H2,
		Li,
		P,
		Ul
	} from '$components';
	import { Sparkle, SwatchBook } from '$lib/icons';
	import { fade } from 'svelte/transition';

	// helper
	const codeSanitizer = (scriptCode: string, body: string) =>
		`<scr` +
		`ipt lang="ts">
${scriptCode}
</scr` +
		`ipt>

${body}`;

	// $state
	let isVisibilityExampleVisible = $state(true);
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Getting Started</P>

	<H1>Usage</H1>

	<P>
		Once installed, you can start using components immediately.<br />
		All components are fully typed, built for Svelte 5, and designed to work out of the box with minimal
		setup.
	</P>
</DocsSection>

<DocsSection>
	<H2>Basic Example</H2>

	<P>Use <A href="/components">components</A> just like native HTML elements.</P>

	<CodePreview
		code={codeSanitizer(
			`	import { Button } from 'sveltewind/components';`,
			`<Button>Click me</Button>`
		)}
		title="+page.svelte"
	>
		<Button>Click Me</Button>
	</CodePreview>
</DocsSection>

<DocsSection>
	<H2>Variants</H2>

	<P>Components are built with a powerful <Code>variants</Code> prop, which control styling.</P>

	<CodePreview
		code={codeSanitizer(
			`	import { Button } from 'sveltewind/components';`,
			`<Button>Primary Button</Button>
<Button variants={['ghost']}>Ghost Button</Button>`
		)}
		title="+page.svelte"
	>
		<Div class="flex gap-4">
			<Button>Primary Button</Button>
			<Button variants={['ghost']}>Ghost Button</Button>
		</Div>
	</CodePreview>
</DocsSection>

<DocsSection>
	<H2>Composing Styles Across Components</H2>

	<P>You can reuse styles from other components using dot notation.</P>

	<CodePreview
		code={codeSanitizer(
			`	import { A } from 'sveltewind/components';`,
			`<A href="#composing-styles-across-components">Standard Link</A>
<A href="#composing-styles-across-components" variants={['button.base']}>Button Link</A>`
		)}
		title="+page.svelte"
	>
		<Div class="flex items-center gap-4">
			<A href="#composing-styles-across-components">Standard Link</A>
			<A href="#composing-styles-across-components" variants={['button.base']}>Button Link</A>
		</Div>
	</CodePreview>

	<P>This allows you to:</P>
	<Ul>
		<Li>Reuse base styles from other components</Li>
		<Li>Apply variants from different components</Li>
		<Li>Build consistent UI without duplicating styles</Li>
	</Ul>
</DocsSection>

<DocsSection>
	<H2>Custom Classes</H2>

	<P>You can always pass additional classes too.</P>

	<CodePreview
		code={codeSanitizer(
			`	import { Button } from 'sveltewind/components';`,
			`<Button class="w-full">Full Width Button</Button>`
		)}
		title="+page.svelte"
	>
		<Button class="w-full">Full Width Button</Button>
	</CodePreview>

	<P
		>Custom classes are merged using npm package <Code>tailwind-merge</Code>, so conflicts are
		resolved automatically.</P
	>
</DocsSection>

<DocsSection>
	<H2>Visibility</H2>

	<P>Component's mount/unmount state can be controlled with the <Code>isVisible</Code> prop.</P>

	<CodePreview
		code={codeSanitizer(
			`	import { A, Button } from 'sveltewind/components';
	
	// $state
	let isVisible = $state(true);`,
			`<Button onclick={() => isVisible = !isVisible}>Toggle Visibility</Button>
<A hfef="#visibility" {isVisible}>Visible Link</A>`
		)}
		title="+page.svelte"
	>
		<Div class="flex items-center gap-4">
			<Button onclick={() => (isVisibilityExampleVisible = !isVisibilityExampleVisible)}
				>Toggle Visibility</Button
			>
			<A href="#visibility" isVisible={isVisibilityExampleVisible}>Visible Link</A>
		</Div>
	</CodePreview>
</DocsSection>

<DocsSection>
	<H2>Transitions</H2>

	<P>All components support transitions using Svelte’s native transition functions.</P>

	<CodePreview
		code={codeSanitizer(
			`	import { fade } from 'svelte/transition';
	import { A, Button } from 'sveltewind/components';
	
	// $state
	let isVisible = $state(true);`,
			`<Button onclick={() => isVisible = !isVisible}>Toggle Visibility</Button>
<A
	href="#transitions"
	{isVisible}
	transition={[fade, { duration:1000}]}
>
	Visible Link
</A>`
		)}
		title="+page.svelte"
	>
		<Div class="flex items-center gap-4">
			<Button onclick={() => (isVisibilityExampleVisible = !isVisibilityExampleVisible)}
				>Toggle Visibility</Button
			>
			<A
				href="#transitions"
				isVisible={isVisibilityExampleVisible}
				transition={[fade, { duration: 1000 }]}
			>
				Visible Link
			</A>
		</Div>
	</CodePreview>
</DocsSection>

<DocsSection>
	<BlockLink
		description="Getting started is simple — install the package and you’re ready to go."
		href="/getting-started/installation"
		Icon={Sparkle}
		title="Installation"
	/>

	<BlockLink
		class="items-end text-right"
		description="Getting started is simple — install the package and you’re ready to go."
		href="/getting-started/theming"
		Icon={SwatchBook}
		title="Theming"
	/>
</DocsSection>
