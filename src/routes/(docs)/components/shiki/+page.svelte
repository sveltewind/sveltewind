<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		DocsSection,
		H1,
		H2,
		H3,
		P,
		Shiki,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$components';

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
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Shiki</H1>
	<P>Asynchronous syntax highlighting with Shiki, language options, and line numbers.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>pre</Code> element unless
		handled by the component.
	</P>
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
	<P>Import Shiki from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Shiki } from \'sveltewind/components\';\n</scr' +
			"ipt>\n\n<Shiki\n\tcode={\"const hello = 'world';\"}\n\toptions={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}\n/>\n"}
		title="+page.svelte"
	>
		<Shiki
			code={"const hello = 'world';\n"}
			options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
		/>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Hide line numbers</H3>
	<P>Disable line numbers while keeping language and color-theme options.</P>
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
</DocsSection>
