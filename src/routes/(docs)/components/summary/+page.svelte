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
			type: 'HTMLElement | null',
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
	<H1>Summary</H1>
	<P>A primitive native disclosure toggle for use inside Details.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>Native attributes and event handlers are forwarded to the <Code>summary</Code> element.</P>
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
		>Place Summary first inside Details. The browser supplies mouse and keyboard activation and
		disclosure semantics.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<CodePreview
		code={'<script lang="ts">\n import { Details, Summary, P } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Details>\n <Summary>Account settings</Summary>\n <P>Your preferences go here.</P>\n</Details>'}
		title="+page.svelte"
	>
		<Details>
			<Summary>Account settings</Summary>
			<P>Your preferences go here.</P>
		</Details>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Usage Examples</H2>
	<CodePreview
		code={'<Details>\n <Summary class="cursor-pointer font-semibold">Custom toggle style</Summary>\n <P>Content is revealed when expanded.</P>\n</Details>'}
		title="+page.svelte"
	>
		<Details>
			<Summary class="cursor-pointer font-semibold">Custom toggle style</Summary>
			<P>Content is revealed when expanded.</P>
		</Details>
	</CodePreview>
</DocsSection>
