<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		Details,
		DocsSection,
		H1,
		H2,
		P,
		Summary,
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
			description: 'Content rendered inside the native element.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Classes merged with theme styles and variants.'
		},
		{
			name: 'element',
			type: 'HTMLDetailsElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Entrance override; falls back to transition.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable visibility state.'
		},
		{
			name: 'open',
			type: 'boolean',
			defaultValue: 'false',
			description: 'Bindable expanded state.'
		},
		{
			name: 'outTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Exit override; falls back to transition.'
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
			description: 'Transition function and optional parameters.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variants or references to other theme styles.'
		}
	];
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Details</H1>
	<P>A primitive native disclosure container with bindable open state.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>Native attributes and event handlers are forwarded to the <Code>details</Code> element.</P>
	<Card class="self-start overflow-x-auto p-0">
		<Table>
			<Thead><Tr><Th>Prop</Th><Th>Type</Th><Th>Default</Th><Th>Description</Th></Tr></Thead>
			<Tbody
				>{#each props as prop (prop.name)}<Tr
						><Td><Code>{prop.name}</Code></Td><Td>{prop.type}</Td><Td>{prop.defaultValue}</Td><Td
							>{prop.description}</Td
						></Tr
					>{/each}</Tbody
			>
		</Table>
	</Card>
	<P
		>Use Summary as the first child to provide its accessible toggle. Transitions apply to
		visibility; open uses native disclosure behavior.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<CodePreview
		code={'<script lang="ts">\n import { Details, Summary, P } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Details>\n <Summary>Learn more</Summary>\n <P>Disclosure content.</P>\n</Details>'}
		title="+page.svelte"
	>
		<Details>
			<Summary>Learn more</Summary>
			<P>Disclosure content.</P>
		</Details>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Usage Examples</H2>
	<CodePreview
		code={'<Details open>\n <Summary>Initially expanded</Summary>\n <P>You can also bind open to control this disclosure.</P>\n</Details>'}
		title="+page.svelte"
	>
		<Details open>
			<Summary>Initially expanded</Summary>
			<P>You can also bind open to control this disclosure.</P>
		</Details>
	</CodePreview>
</DocsSection>
