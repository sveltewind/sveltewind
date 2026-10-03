<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		Div,
		DocsSection,
		H1,
		H2,
		H3,
		Option,
		P,
		Select,
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
			type: 'HTMLSelectElement | null',
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
			name: 'options',
			type: '{ label: any; value: any }[]',
			defaultValue: '[]',
			description: 'Bindable list of label/value objects; children override generated options.'
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
			name: 'value',
			type: 'any',
			defaultValue: "''",
			description: 'Bindable current value of the control.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	let plan = $state('starter');
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Select</H1>
	<P>A themed native select with generated options or custom option content.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>select</Code> element
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
	<P>Import Select from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Select } from \'sveltewind/components\';\n</scr' +
			"ipt>\n\n<Select\n\taria-label=\"Choose a plan\"\n\toptions={[\n\t\t{ label: 'Starter', value: 'starter' },\n\t\t{ label: 'Team', value: 'team' }\n\t]}\n/>\n"}
		title="+page.svelte"
	>
		<Select
			aria-label="Choose a plan"
			options={[
				{ label: 'Starter', value: 'starter' },
				{ label: 'Team', value: 'team' }
			]}
		/>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Custom options and binding</H3>
	<P>Provide Option children and bind the selected value.</P>
	<CodePreview
		code={"<script lang=\"ts\">\n\timport { Div, Select, Option, P } from 'sveltewind/components';\n\n\tlet plan = $state('starter');\n</scr" +
			'ipt>\n\n<Div class="flex flex-col gap-3">\n\t<Select aria-label="Plan" bind:value={plan}>\n\t\t<Option value="starter">Starter</Option>\n\n\t\t<Option value="team">Team</Option>\n\t</Select>\n\n\t<P>Selected: {plan}</P>\n</Div>\n'}
		title="+page.svelte"
	>
		<Div class="flex flex-col gap-3">
			<Select aria-label="Plan" bind:value={plan}>
				<Option value="starter">Starter</Option><Option value="team">Team</Option>
			</Select><P>Selected: {plan}</P>
		</Div>
	</CodePreview>
</DocsSection>
