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
		Pile,
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
			name: 'element',
			type: 'HTMLDivElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the opening transition.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable visibility state.'
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
	<H1>Pile</H1>
	<P>A grid that stacks its direct children in the same cell.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>div</Code> element unless
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
	<P>Import Pile from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Pile, Card } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Pile>\n\t<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card>\n\n\t<Card class="bg-gray-50 dark:bg-gray-950">On top</Card>\n</Pile>\n'}
		title="+page.svelte"
	>
		<Pile>
			<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card><Card
				class="bg-gray-50 dark:bg-gray-950"
			>
				On top
			</Card>
		</Pile>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Custom classes</H3>
	<P>Use class to merge Tailwind utilities with the component theme.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Pile, Card } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Pile class="text-primary-500 dark:text-primary-400">\n\t<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card>\n\n\t<Card class="bg-gray-50 dark:bg-gray-950">On top</Card>\n</Pile>\n'}
		title="+page.svelte"
	>
		<Pile class="text-primary-500 dark:text-primary-400">
			<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card><Card
				class="bg-gray-50 dark:bg-gray-950"
			>
				On top
			</Card>
		</Pile>
	</CodePreview>
</DocsSection>
