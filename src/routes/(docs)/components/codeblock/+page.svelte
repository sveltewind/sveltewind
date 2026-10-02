<script lang="ts">
	import {
		Card,
		Code,
		CodeBlock,
		CodePreview,
		DocsSection,
		H1,
		H2,
		H3,
		P,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$components';

	const props = [
		{
			name: 'body',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Custom body snippet.'
		},
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
			name: 'copyClickHandler',
			type: '() => void',
			defaultValue: 'clipboard copy handler',
			description: 'Overrides the default clipboard copy handler.'
		},
		{
			name: 'element',
			type: 'HTMLDivElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'header',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Custom header snippet.'
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
			name: 'isCopied',
			type: 'boolean',
			defaultValue: 'false',
			description: 'Bindable feedback state for the copy button.'
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
			name: 'title',
			type: 'string',
			defaultValue: "''",
			description: 'Title displayed in the code block header.'
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
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>CodeBlock</H1>
	<P>A syntax-highlighted code card with a title and copy button.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>div</Code> element unless
		handled by the component.</P
	>
	<Card class="self-start overflow-x-auto p-0">
		<Table>
			<Thead>
				<Tr>
					<Th>Prop</Th>
					<Th>Type</Th>
					<Th>Default</Th>
					<Th>Description</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each props as prop (prop.name)}
					<Tr>
						<Td><Code>{prop.name}</Code></Td>
						<Td>{prop.type}</Td>
						<Td>{prop.defaultValue}</Td>
						<Td>{prop.description}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Card>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<P>Import CodeBlock from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { CodeBlock } from \'sveltewind/components\';\n</scr' +
			"ipt>\n\n<CodeBlock\n\ttitle=\"hello.ts\"\n\tcode={\"const hello = 'world';\"}\n\toptions={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}\n/>\n"}
		title="+page.svelte"
	>
		<CodeBlock
			title="hello.ts"
			code="const hello = 'world';"
			options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
		/>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Hide line numbers</H3>
	<P>Keep the title and copy action while hiding line numbers.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { CodeBlock } from \'sveltewind/components\';\n</scr' +
			"ipt>\n\n<CodeBlock\n\ttitle=\"hello.ts\"\n\tcode={\"const hello = 'world';\"}\n\tisLineNumbersVisible={false}\n\toptions={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}\n/>\n"}
		title="+page.svelte"
	>
		<CodeBlock
			title="hello.ts"
			code="const hello = 'world';"
			isLineNumbersVisible={false}
			options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
		/>
	</CodePreview>
</DocsSection>
