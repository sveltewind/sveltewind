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
		P,
		Table,
		Tabs,
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
			description: 'Custom content replacing the generated tab buttons.'
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
			name: 'tabs',
			type: 'Tab[]',
			defaultValue: '[]',
			description: 'Tab titles and values used to generate buttons.'
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
			defaultValue: 'undefined',
			description: 'Bindable current value of the control.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	let tab = $state('overview');
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Tabs</H1>
	<P>A group of buttons with a bindable selected value.</P>
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
	<P>
		Each <Code>Tab</Code> contains a string title and a value of any type. Custom children replace the
		generated buttons; render the selected content separately.
	</P>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<P>Import Tabs from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Tabs } from \'sveltewind/components\';\n</scr' +
			"ipt>\n\n<Tabs\n\ttabs={[\n\t\t{ title: 'Overview', value: 'overview' },\n\t\t{ title: 'Details', value: 'details' }\n\t]}\n\tvalue=\"overview\"\n/>\n"}
		title="+page.svelte"
	>
		<Tabs
			tabs={[
				{ title: 'Overview', value: 'overview' },
				{ title: 'Details', value: 'details' }
			]}
			value="overview"
		/>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Bind the selection</H3>
	<P>Render the associated content separately using the selected value.</P>
	<CodePreview
		code={"<script lang=\"ts\">\n\timport { Div, Tabs, P } from 'sveltewind/components';\n\n\tlet tab = $state('overview');\n</scr" +
			"ipt>\n\n<Div class=\"flex flex-col gap-3\">\n\t<Tabs\n\t\ttabs={[\n\t\t\t{ title: 'Overview', value: 'overview' },\n\t\t\t{ title: 'Details', value: 'details' }\n\t\t]}\n\t\tbind:value={tab}\n\t/>\n\n\t<P>{tab === 'overview' ? 'Overview content' : 'Detail content'}</P>\n</Div>\n"}
		title="+page.svelte"
	>
		<Div class="flex flex-col gap-3">
			<Tabs
				tabs={[
					{ title: 'Overview', value: 'overview' },
					{ title: 'Details', value: 'details' }
				]}
				bind:value={tab}
			/><P>{tab === 'overview' ? 'Overview content' : 'Detail content'}</P>
		</Div>
	</CodePreview>
</DocsSection>
