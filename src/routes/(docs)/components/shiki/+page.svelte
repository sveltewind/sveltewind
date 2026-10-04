<script lang="ts">
	import { Code, CodePreview, H3, P, Shiki } from '$components';

	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Content snippet rendered by the component.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'code',
			type: 'string',
			defaultValue: "''",
			description: 'Source text to highlight and copy.'
		},
		{
			name: 'element',
			type: 'HTMLPreElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'html',
			type: 'string',
			defaultValue: "''",
			description: 'Bindable highlighted HTML output.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the opening transition.'
		},
		{
			name: 'isLineNumbersVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Shows line numbers in highlighted code.'
		},
		{
			name: 'isLoading',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable highlighting loading state.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable visibility state.'
		},
		{
			name: 'options',
			type: 'Partial<CodeToHastOptions<BundledLanguage, BundledTheme>>',
			defaultValue: 'undefined',
			description: 'Shiki language, color theme, and transformer options.'
		},
		{
			name: 'outTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the closing transition.'
		},
		{
			name: 'theme',
			type: 'Theme',
			defaultValue: 'global theme',
			description: 'Optional local theme override.'
		},
		{
			name: 'transition',
			type: 'TransitionProps',
			defaultValue: '[noopTransition, {}]',
			description: 'A Svelte transition function and its options.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Shiki.svelte';
	import examples from '$components/ComponentDoc/previews/Shiki.svelte?component-examples&raw';
</script>

<ComponentDoc name="Shiki" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>Asynchronous syntax highlighting with Shiki, language options, and line numbers.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>pre</Code> element unless
			handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Hide line numbers</H3>
		<P>Disable line numbers while keeping language and color-theme options.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Shiki } from \'sveltewind/components\';\n</scr' +
					"ipt>\n\n<Shiki\n\tcode={\"const hello = 'world';\"}\n\tisLineNumbersVisible={false}\n\toptions={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}\n/>\n"}
				title="+page.svelte"
			>
				<Shiki
					code={"const hello = 'world';\n"}
					isLineNumbersVisible={false}
					options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
				/>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
