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
			type: 'HTMLTableCellElement | null',
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
	<H1>Th</H1>
	<P>A themed native table header cell.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>th</Code> element unless
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
	<P>Use Th inside a complete table to preserve native table structure.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Table, Thead, Tr, Th, Tbody, Td } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Table>\n\t<Thead>\n\t\t<Tr>\n\t\t\t<Th>Name</Th>\n\n\t\t\t<Th>Role</Th>\n\t\t</Tr>\n\t</Thead>\n\n\t<Tbody>\n\t\t<Tr>\n\t\t\t<Td>Ada</Td>\n\n\t\t\t<Td>Developer</Td>\n\t\t</Tr>\n\t</Tbody>\n</Table>\n'}
		title="+page.svelte"
	>
		<Table>
			<Thead>
				<Tr>
					<Th>Name</Th>
					<Th>Role</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>Ada</Td>
					<Td>Developer</Td>
				</Tr>
			</Tbody>
		</Table>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Custom classes</H3>
	<P>Use class to merge Tailwind utilities with the component theme.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Table, Thead, Tr, Th, Tbody, Td } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Table>\n\t<Thead>\n\t\t<Tr>\n\t\t\t<Th class="text-primary-500 dark:text-primary-400">Name</Th>\n\n\t\t\t<Th>Role</Th>\n\t\t</Tr>\n\t</Thead>\n\n\t<Tbody>\n\t\t<Tr>\n\t\t\t<Td>Ada</Td>\n\n\t\t\t<Td>Developer</Td>\n\t\t</Tr>\n\t</Tbody>\n</Table>\n'}
		title="+page.svelte"
	>
		<Table>
			<Thead>
				<Tr>
					<Th class="text-primary-500 dark:text-primary-400">Name</Th>
					<Th>Role</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>Ada</Td>
					<Td>Developer</Td>
				</Tr>
			</Tbody>
		</Table>
	</CodePreview>
</DocsSection>
