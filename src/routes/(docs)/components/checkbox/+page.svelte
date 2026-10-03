<script lang="ts">
	import {
		Card,
		Checkbox,
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
			name: 'checked',
			type: 'boolean',
			defaultValue: 'false',
			description: 'Bindable checked state of the native checkbox.'
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
			name: 'element',
			type: 'HTMLInputElement | null',
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
			name: 'snippet',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Snippet replacing the checkbox visual indicator.'
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

	let checked = $state(false);
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Checkbox</H1>
	<P>A labeled checkbox with a custom visual indicator and bindable checked state.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>input</Code> element unless
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
	<P>
		Class styles the wrapping label. Native input attributes, including name, required, and
		disabled, are forwarded to the hidden checkbox input.
	</P>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<P>Import Checkbox from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Checkbox } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Checkbox>Receive email updates</Checkbox>\n'}
		title="+page.svelte"
	>
		<Checkbox>Receive email updates</Checkbox>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Bind checked state</H3>
	<P>Bind checked to keep application state in sync with the control.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Checkbox, P } from \'sveltewind/components\';\n\n\tlet checked = $state(false);\n</scr' +
			"ipt>\n\n<Checkbox bind:checked>Receive email updates</Checkbox>\n<P>Updates: {checked ? 'enabled' : 'disabled'}</P>\n"}
		title="+page.svelte"
	>
		<Checkbox bind:checked>Receive email updates</Checkbox>
		<P>Updates: {checked ? 'enabled' : 'disabled'}</P>
	</CodePreview>
</DocsSection>
