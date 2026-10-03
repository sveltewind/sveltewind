<script lang="ts">
	import {
		Card,
		Checkbox,
		Code,
		CodePreview,
		DocsSection,
		Fieldset,
		H1,
		H2,
		H3,
		Legend,
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
			type: 'HTMLFieldSetElement | null',
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
	<H1>Fieldset</H1>
	<P>A native fieldset for grouping related form controls.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>fieldset</Code> element
		unless handled by the component.
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
	<P>Import Fieldset from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Fieldset, Legend, Checkbox } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Fieldset>\n\t<Legend>Notifications</Legend>\n\n\t<Checkbox>Email updates</Checkbox>\n</Fieldset>\n'}
		title="+page.svelte"
	>
		<Fieldset><Legend>Notifications</Legend><Checkbox>Email updates</Checkbox></Fieldset>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Custom classes</H3>
	<P>Use class to merge Tailwind utilities with the component theme.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Fieldset, Legend, Checkbox } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Fieldset class="text-primary-500 dark:text-primary-400">\n\t<Legend>Notifications</Legend>\n\n\t<Checkbox>Email updates</Checkbox>\n</Fieldset>\n'}
		title="+page.svelte"
	>
		<Fieldset class="text-primary-500 dark:text-primary-400">
			<Legend>Notifications</Legend><Checkbox>Email updates</Checkbox>
		</Fieldset>
	</CodePreview>
</DocsSection>
