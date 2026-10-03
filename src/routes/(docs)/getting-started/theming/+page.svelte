<script lang="ts">
	import {
		A,
		BlockLink,
		Button,
		Badge,
		Card,
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
	import { classic, minimal, sharp, soft, studio } from '$lib/themes';
	const presetPreviews = [
		{
			name: 'Classic',
			description: 'Balanced rounded controls and comfortable spacing.',
			theme: new Theme(classic)
		},
		{
			name: 'Soft',
			description: 'Generous curves and subtle shadows.',
			theme: new Theme(soft)
		},
		{ name: 'Sharp', description: 'Square edges and crisp geometry.', theme: new Theme(sharp) },
		{
			name: 'Minimal',
			description: 'Compact controls and understated borders.',
			theme: new Theme(minimal)
		},
		{
			name: 'Studio',
			description: 'Elevated surfaces and larger rounded corners.',
			theme: new Theme(studio)
		}
	];

	// helper

	// example themes
	const customTheme = new Theme({
		a: {
			base: 'text-primary-500 underline underline-offset-4'
		},
		button: {
			base: 'rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-600',
			variants: {
				ghost: 'bg-transparent text-primary-500 hover:bg-primary-50',
				square: 'rounded-none'
			}
		}
	});

	const exampleTheme = new Theme();

	exampleTheme.set.theme({
		button: {
			base: 'rounded-md bg-primary-500 px-6 py-3 text-white hover:bg-primary-600'
		}
	});

	exampleTheme.set.component('a', {
		base: 'text-primary-500 underline'
	});

	exampleTheme.set.base(
		'input',
		'rounded-md px-6 py-3 inset-ring inset-ring-primary-500 placeholder:text-primary-500/50'
	);

	exampleTheme.set.variant(
		'button',
		'ghost',
		'bg-transparent text-primary-500 hover:bg-primary-500/10'
	);
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Getting Started</P>

	<H1>Theming</H1>

	<P>
		Every component in the library is powered by a shared theme system.
		<br />
		You can use the global theme, update it at runtime, create your own theme instances, or provide a
		different theme to a single component.
	</P>
</DocsSection>

<DocsSection>
	<H2>Bundled styles</H2>
	<P>
		Use the Style selector in the Settings popup in the header to change the global preset
		throughout the site. Light and dark mode work independently. Explicit classes and local themes
		still take precedence.
	</P>
	<P>
		Classic is the renamed original theme. The former default export remains a compatibility alias.
		All five presets include every library component and the same reusable variants.
	</P>
	<CodeBlock
		title="+layout.svelte"
		options={{ lang: 'ts' }}
		code={"import { theme } from 'sveltewind/theme';\nimport { classic, soft, sharp, minimal, studio } from 'sveltewind/themes';\n\n// Copy before making site-specific updates.\ntheme.set.theme(structuredClone(soft));\n"}
	/>
	<P>
		Styles change geometry, spacing, and surface treatment without selecting a color. Use the Color
		selector in Settings to choose violet, rose, sky, emerald, amber, or slate independently. These
		previews use the currently selected primary palette for accents. Status variants keep their
		semantic colors: success is green, error and danger are red, warning is amber, and info is blue.
	</P>
	<P>
		Import the palette stylesheet to register the primary Tailwind colors. Set data-color on the
		root element to apply a palette. Changing data-color updates components using primary utilities
		without replacing the style theme.
	</P>
	<CodeBlock
		title="app.css"
		options={{ lang: 'css' }}
		code={"@import 'tailwindcss';\n@import 'sveltewind/themes/palettes.css';\n"}
	/>
	<CodeBlock
		title="JavaScript"
		options={{ lang: 'ts' }}
		code={"// Independent of the chosen style preset.\ndocument.documentElement.dataset.color = 'rose';\n"}
	/>
	<Div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each presetPreviews as preset}
			<Card theme={preset.theme} class="flex flex-col items-start gap-4">
				<H3 class="text-lg">{preset.name}</H3>
				<P class="text-sm">{preset.description}</P>
				<Button theme={preset.theme} type="button">Primary button</Button>
				<Input
					theme={preset.theme}
					aria-label={`${preset.name} input preview`}
					placeholder="Your email"
				/>
			</Card>
		{/each}
	</Div>
</DocsSection>

<DocsSection>
	<H2>Reusable variants</H2>
	<P>
		Combine variant names to change appearance, size, and shape. Component classes are merged last.
		You can also reuse styles with references such as button.base and button.variant.soft.
	</P>
	<CodePreview
		title="+page.svelte"
		code={'<script lang="ts">\n\timport { Badge, Button, Div } from \'sveltewind/components\';\n</scr' +
			"ipt>\n\n<Div class=\"flex flex-wrap items-center gap-3\">\n\t<Button type=\"button\" variants={['soft', 'sm', 'pill']}>Soft button</Button>\n\n\t<Button type=\"button\" variants={['danger']}>Delete</Button>\n\n\t<Badge variants={['success']}>Active</Badge>\n</Div>\n"}
	>
		<Div class="flex flex-wrap items-center gap-3">
			<Button type="button" variants={['soft', 'sm', 'pill']}>Soft button</Button>
			<Button type="button" variants={['danger']}>Delete</Button>
			<Badge variants={['success']}>Active</Badge>
		</Div>
	</CodePreview>
	<P>
		Buttons support primary, secondary, ghost, outline, soft, danger, success, link, pill, square,
		full, icon, and xs/sm/md/lg. Inputs support filled, error, success, unstyled, and sizes. Cards,
		dialogs, popovers, and fieldsets support compact, spacious, elevated, flat, outline, and soft.
	</P>
	<P>
		Layout primitives support row, column, stack, center, and grid. Text supports accent, muted, and
		uppercase. Tables support compact, striped, and hover; lists support plain and compact.
	</P>
</DocsSection>

<DocsSection>
	<H2>The Global Theme</H2>

	<P>The library exposes a shared global theme instance.</P>

	<CodeBlock
		code={"import { theme } from 'sveltewind/theme';\n"}
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
		code={"import { Theme } from 'sveltewind/theme';\n\nexport const customTheme = new Theme({\n\ta: {\n\t\tbase: 'text-primary-500 underline underline-offset-4'\n\t},\n\tbutton: {\n\t\tbase: 'rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-600',\n\t\tvariants: {\n\t\t\tghost: 'bg-transparent text-primary-500 hover:bg-primary-50',\n\t\t\tsquare: 'rounded-none'\n\t\t}\n\t}\n});\n"}
		options={{ lang: 'ts' }}
		title="customTheme.ts"
	/>
</DocsSection>

<DocsSection>
	<H2>Methods</H2>

	<P>
		You can read/write to the global theme, or a <A href="#create-your-own-theme">custom theme</A> with
		built in methods.
	</P>

	<H3>Get</H3>

	<P>
		Use this if you want to read from a theme. You can read the entire theme, a component's entire
		object, the base style or a specific variant.
	</P>

	<CodeBlock
		code={"import { theme } from 'sveltewind/theme';\n\n// Get the entire theme object\nconst themeObject = theme.get.theme();\n\n// Get a specific component's object\nconst buttonObject = theme.get.component('button');\n\n// Get a component's base styles\nconst buttonBaseString = theme.get.base('button');\n\n// Get a component's variant style\nconst buttonGhostString = theme.get.variant('button', 'ghost');\n"}
		options={{ lang: 'ts' }}
		title="ts"
	/>

	<H3>Set</H3>

	<P>
		Provide a new theme object, component object, component base classes or component variant
		classes to replace the existing value.
	</P>

	<CodePreview
		code={"<script lang=\"ts\">\n\timport { A, Button, Div, Input } from 'sveltewind/components';\n\timport { theme } from 'sveltewind/theme';\n\n\t// Set the entire theme object\n\ttheme.set.theme({\n\t\tbutton: {\n\t\t\tbase: 'rounded-md bg-primary-500 px-6 py-3 text-white hover:bg-primary-600'\n\t\t}\n\t});\n\n\t// Set a specific component's object\n\ttheme.set.component('a', {\n\t\tbase: 'text-primary-500 underline'\n\t});\n\n\t// Set a component's base styles\n\ttheme.set.base(\n\t\t'input',\n\t\t'rounded-md px-6 py-3 inset-ring inset-ring-primary-500 placeholder:text-primary-500/50'\n\t);\n\n\t// Set a component's variant style\n\ttheme.set.variant('button', 'ghost', 'bg-transparent text-primary-500 hover:bg-primary-500/10');\n</scr" +
			'ipt>\n\n<Div class="flex flex-col items-center gap-4 lg:flex-row">\n\t<Button>New Button</Button>\n\t<A href="#set">New Link</A>\n\t<Input placeholder="New Input" />\n\t<Button variants={[\'ghost\']}>Ghost Button</Button>\n</Div>\n'}
		title="+page.svelte"
	>
		<Div class="flex flex-col items-center gap-4 lg:flex-row">
			<Button theme={exampleTheme}>New Button</Button>
			<A href="#set" theme={exampleTheme}>New Link</A>
			<Input theme={exampleTheme} placeholder="New Input" />
			<Button theme={exampleTheme} variants={['ghost']}>Ghost Button</Button>
		</Div>
	</CodePreview>

	<H3>Update</H3>

	<P>
		Merging a theme, component, base or variant is done with the <Code>Update</Code> method. This is
		useful for adding new styles without replacing the entire value.
	</P>

	<CodeBlock
		code={'<script lang="ts">\n\timport { theme } from \'sveltewind/theme\';\n\n\t// Update the entire theme object\n\ttheme.update.theme({\n\t\tbutton: {}\n\t});\n</scr' +
			'ipt>\n'}
		options={{ lang: 'svelte' }}
	/>
</DocsSection>

<DocsSection>
	<H2>Create Your Own Theme</H2>

	<P>
		Create a new theme by passing a theme object into <Code>Theme</Code>.
	</P>

	<CodePreview
		code={"<script lang=\"ts\">\n\timport { A, Button, Div } from 'sveltewind/components';\n\timport { Theme } from 'sveltewind/theme';\n\tconst customTheme = new Theme({\n\t\ta: {\n\t\t\tbase: 'text-primary-500 underline underline-offset-4'\n\t\t},\n\t\tbutton: {\n\t\t\tbase: 'rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-600',\n\t\t\tvariants: {\n\t\t\t\tghost: 'bg-transparent text-primary-500 hover:bg-primary-50',\n\t\t\t\tsquare: 'rounded-none'\n\t\t\t}\n\t\t}\n\t});\n</scr" +
			'ipt>\n\n<Div class="flex gap-4">\n\t<Button theme={customTheme}>Custom Button</Button>\n\t<A href="#create-your-own-theme" theme={customTheme}>Custom Link</A>\n</Div>\n'}
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
		code={"<script lang=\"ts\">\n\timport { Button, Div } from 'sveltewind/components';\n\timport { Theme } from 'sveltewind/theme';\n\n\tconst exampleTheme = new Theme({\n\t\tbutton: {\n\t\t\tbase: 'rounded-md bg-primary-500 px-6 py-3 text-white hover:bg-primary-600',\n\t\t\tvariants: {\n\t\t\t\tghost: 'bg-transparent text-primary-500 hover:bg-primary-500/10'\n\t\t\t}\n\t\t}\n\t});\n</scr" +
			'ipt>\n\n<Div class="flex gap-4">\n\t<Button>Default</Button>\n\t<Button theme={exampleTheme}>Custom</Button>\n\t<Button theme={exampleTheme} variants={[\'ghost\']}>Ghost</Button>\n</Div>\n'}
	>
		<Div class="flex gap-4">
			<Button>Default</Button>
			<Button theme={exampleTheme}>Custom</Button>
			<Button theme={exampleTheme} variants={['ghost']}>Ghost</Button>
		</Div>
	</CodePreview>
</DocsSection>

<DocsSection>
	<H2>Composing Styles</H2>

	<P>
		You can reuse styles across components using dot notation inside the <Code>variants</Code> prop.
	</P>

	<CodePreview
		code={'<script lang="ts">\n\timport { A, Div } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Div class="flex gap-4">\n\t<A href="#">Default Link</A>\n\t<A href="#" variants={[\'button.base\']}>Button Link</A>\n</Div>\n'}
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
		code={'<script lang="ts">\n\timport { Button } from \'sveltewind\';\n</scr' +
			'ipt>\n\n<Button class="w-full">Full Width</Button>\n'}
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
