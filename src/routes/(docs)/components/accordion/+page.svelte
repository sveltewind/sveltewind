<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		DocsSection,
		H1,
		H2,
		P,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr,
		Accordion
	} from '$components';
	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Content rendered inside the component.'
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
			description: 'Bindable reference to the native element.'
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
			description: 'Bindable visibility; removing the component runs its exit transition.'
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
			name: 'summary',
			type: 'Snippet | string',
			defaultValue: "'Details'",
			description: 'Text or snippet rendered in the native summary.'
		},
		{
			name: 'theme',
			type: 'Theme',
			defaultValue: 'global theme',
			description: 'Local theme override.'
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
	<H1>Accordion</H1>
	<P>A native disclosure section with keyboard support and bindable open state.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>Native attributes and event handlers are forwarded to the <Code>details</Code> element.</P>
	<Card class="self-start overflow-x-auto p-0">
		<Table>
			<Thead><Tr><Th>Prop</Th><Th>Type</Th><Th>Default</Th><Th>Description</Th></Tr></Thead>
			<Tbody>
				{#each props as prop (prop.name)}<Tr>
						<Td><Code>{prop.name}</Code></Td><Td>{prop.type}</Td><Td>{prop.defaultValue}</Td><Td>
							{prop.description}
						</Td>
					</Tr>{/each}
			</Tbody>
		</Table>
	</Card>
	<P>
		Give sections the same native name to allow only one to remain open. Bind open to control
		expansion programmatically. Transitions apply when isVisible changes; native expansion is
		immediate.
	</P>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<CodePreview
		code={'<script lang="ts">\n\timport { Accordion } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Accordion summary="What is Sveltewind?">A themed component library for Svelte 5.</Accordion>\n'}
		title="+page.svelte"
	>
		<Accordion summary="What is Sveltewind?">A themed component library for Svelte 5.</Accordion>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Usage Examples</H2>
	<CodePreview
		code={'<Accordion name="faq" summary="First question">First answer.</Accordion>\n<Accordion name="faq" summary="Second question">Second answer.</Accordion>\n'}
		title="+page.svelte"
	>
		<Accordion name="faq" summary="First question">First answer.</Accordion>
		<Accordion name="faq" summary="Second question">Second answer.</Accordion>
	</CodePreview>
</DocsSection>
