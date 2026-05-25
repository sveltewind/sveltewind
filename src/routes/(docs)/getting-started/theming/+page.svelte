<script lang="ts">
	import {
		A,
		BlockLink,
		Button,
		Code,
		CodeBlock,
		CodePreview,
		Div,
		DocsSection,
		H1,
		H2,
		H3,
		Input,
		P
	} from '$components';
	import { BookOpen, Puzzle } from '$lib/icons';
	import { Theme } from '$lib/theme';

	// helper
	const codeSanitizer = (scriptCode: string, body: string) =>
		`<scr` +
		`ipt lang="ts">
${scriptCode}
</scr` +
		`ipt>

${body}`;

	// example themes
	const customTheme = new Theme({
		a: {
			base: 'text-emerald-500 underline underline-offset-4'
		},
		button: {
			base: 'rounded-full bg-emerald-500 px-6 py-3 text-white hover:bg-emerald-600',
			variants: {
				ghost: 'bg-transparent text-emerald-500 hover:bg-emerald-50',
				square: 'rounded-none'
			}
		}
	});

	const sunsetTheme = new Theme();

	sunsetTheme.set.theme({
		button: {
			base: 'rounded-md bg-orange-500 px-6 py-3 text-white hover:bg-orange-600'
		}
	});

	sunsetTheme.set.component('a', {
		base: 'text-orange-500 underline'
	});

	sunsetTheme.set.base(
		'input',
		'rounded-md px-6 py-3 inset-ring inset-ring-orange-500 placeholder:text-orange-500/50'
	);

	sunsetTheme.set.variant(
		'button',
		'ghost',
		'bg-transparent text-orange-500 hover:bg-orange-500/10'
	);

	// $state
	let isGhost = $state(false);
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Getting Started</P>

	<H1>Theming</H1>

	<P>
		Every component in the library is powered by a shared theme system.<br />
		You can use the global theme, update it at runtime, create your own theme instances, or provide a
		different theme to a single component.
	</P>
</DocsSection>

<DocsSection>
	<H2>The Global Theme</H2>

	<P>The library exposes a shared global theme instance.</P>

	<CodeBlock
		code={`import { theme } from 'sveltewind/theme';`}
		options={{ lang: 'ts' }}
		title="+page.svelte"
	/>
</DocsSection>

<DocsSection>
	<H2>Theme Structure</H2>

	<P>
		A theme is defined as a plain object and wrapped with <Code>Theme</Code>. Each component can
		define a <Code>base</Code> class string and optional <Code>variants</Code>.
	</P>

	<CodeBlock
		code={`import { Theme } from 'sveltewind/theme';

export const customTheme = new Theme({
	a: {
		base: 'text-emerald-500 underline underline-offset-4'
	},
	button: {
		base: 'rounded-full bg-emerald-500 px-6 py-3 text-white hover:bg-emerald-600',
		variants: {
			ghost: 'bg-transparent text-emerald-500 hover:bg-emerald-50',
			square: 'rounded-none'
		}
	},
})`}
		options={{ lang: 'ts' }}
		title="customTheme.ts"
	/>
</DocsSection>

<DocsSection>
	<H2>Methods</H2>

	<P
		>You can read/write to the global theme, or a <A href="#create-your-own-theme">custom theme</A> with
		built in methods.</P
	>

	<H3>Get</H3>

	<P
		>Use this if you want to read from a theme. You can read the entire theme, a component's entire
		object, the base style or a specific variant.</P
	>

	<CodeBlock
		code={`import { theme } from 'sveltewind/theme';

// Get the entire theme object
const themeObject = theme.get.theme();

// Get a specific component's object
const buttonObject = theme.get.component('button');

// Get a component's base styles
const buttonBaseString = theme.get.base('button');

// Get a component's variant style
const buttonGhostString = theme.get.variant('button', 'ghost')`}
		options={{ lang: 'ts' }}
		title="ts"
	/>

	<H3>Set</H3>

	<P
		>Provide a new theme object, component object, component base classes or component variant
		classes to replace the existing value.</P
	>

	<CodePreview
		code={codeSanitizer(
			`	import { theme } from 'sveltewind/theme';

	// Set the entire theme object
	theme.set.theme({
		button: {
			base: 'rounded-md bg-orange-500 px-6 py-3 text-white hover:bg-orange-600'
		}
	});
	
	// Set a specific component's object
	theme.set.component('a', {
		base: 'text-orange-500 underline'
	});
	
	// Set a component's base styles
	theme.set.base('input', 'rounded-md px-6 py-3 inset-ring inset-ring-orange-500 placeholder:text-orange-500/50');
	
	// Set a component's variant style
	theme.set.variant('button', 'ghost', 'bg-transparent text-orange-500 hover:bg-orange-500/50');`,
			`<Button>Updated Button</Button>
<A href="#set">New Link</A>
<Input placeholder="New Input" />
<Button variants={['ghost']}>Ghost Button</Button>`
		)}
		title="+page.svelte"
	>
		<Div class="flex flex-col items-center gap-4 lg:flex-row">
			<Button theme={sunsetTheme}>New Button</Button>
			<A href="#set" theme={sunsetTheme}>New Link</A>
			<Input theme={sunsetTheme} placeholder="New Input" />
			<Button theme={sunsetTheme} variants={['ghost']}>Ghost Button</Button>
		</Div>
	</CodePreview>

	<H3>Update</H3>

	<P>
		Merging a theme, component, base or variant is done with the <Code>Update</Code> method. This is
		useful for adding new styles without replacing the entire value.
	</P>

	<CodePreview
		code={codeSanitizer(
			`	import { theme } from 'sveltewind/theme';
	
	// Update the entire theme object
	theme.update.theme({
		button: {}
	})		`,
			``
		)}
	></CodePreview>
</DocsSection>

<DocsSection>
	<H2>Create Your Own Theme</H2>

	<P>
		Create a new theme by passing a theme object into <Code>ThemeClass</Code>.
	</P>

	<CodePreview
		code={codeSanitizer(
			`	import { ThemeClass } from 'sveltewind/theme';`,
			`const customTheme = new ThemeClass({
	button: {
		base: 'rounded-full bg-emerald-500 px-6 py-3 text-white',
		variants: {
			ghost: 'bg-transparent text-emerald-500'
		}
	},
	a: {
		base: 'text-emerald-500 underline'
	}
});`
		)}
	>
		<Div class="flex gap-4">
			<Button theme={customTheme}>Custom Button</Button>
			<A href="#create-your-own-theme" theme={customTheme}>Custom Link</A>
		</Div>
	</CodePreview>
</DocsSection>

<DocsSection>
	<H2>Apply a Theme to a Component</H2>

	<P>
		Every component accepts a <Code>theme</Code> prop. This lets you override the global theme for a
		single component.
	</P>

	<CodePreview
		code={codeSanitizer(
			`	import { Button } from 'sveltewind';

	const sunsetTheme = new ThemeClass({
		button: {
			base: 'rounded-md bg-orange-500 px-6 py-3 text-white',
			variants: {
				ghost: 'bg-transparent text-orange-500'
			}
		}
	});`,
			`<Button>Default</Button>
<Button theme={sunsetTheme}>Custom</Button>
<Button theme={sunsetTheme} variants={['ghost']}>Ghost</Button>`
		)}
	>
		<Div class="flex gap-4">
			<Button>Default</Button>
			<Button theme={sunsetTheme}>Custom</Button>
			<Button theme={sunsetTheme} variants={['ghost']}>Ghost</Button>
		</Div>
	</CodePreview>
</DocsSection>

<DocsSection>
	<H2>Composing Styles</H2>

	<P>
		You can reuse styles across components using dot notation inside the <Code>variants</Code> prop.
	</P>

	<CodePreview
		code={codeSanitizer(
			`	import { A } from 'sveltewind';`,
			`<A href="#">Default Link</A>
<A href="#" variants={['button.base']}>Button Link</A>`
		)}
	>
		<Div class="flex gap-4">
			<A href="#">Default Link</A>
			<A href="#" variants={['button.base']}>Button Link</A>
		</Div>
	</CodePreview>
</DocsSection>

<DocsSection>
	<H2>Overrides</H2>

	<P>
		You can always override styles at the component level using the <Code>class</Code> prop.
	</P>

	<CodePreview
		code={codeSanitizer(
			`	import { Button } from 'sveltewind';`,
			`<Button class="w-full">Full Width</Button>`
		)}
	>
		<Button class="w-full">Full Width</Button>
	</CodePreview>
</DocsSection>

<DocsSection>
	<BlockLink
		description="Learn how to use components and variants."
		href="/getting-started/usage"
		Icon={BookOpen}
		title="Usage"
	/>

	<BlockLink
		class="items-end text-right"
		description="Explore available components."
		href="/components"
		Icon={Puzzle}
		title="Components"
	/>
</DocsSection>
