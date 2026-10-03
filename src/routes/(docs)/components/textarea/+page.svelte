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
		Tbody,
		Td,
		Textarea,
		Th,
		Thead,
		Tr
	} from '$components';

	const props = [
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLTextAreaElement | null',
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

	let text = $state('');
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Textarea</H1>
	<P>A themed multiline input with a bindable value.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>textarea</Code> element
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
	<P>Import Textarea from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Textarea } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Textarea aria-label="Message" rows={3} placeholder="Write a message" />\n'}
		title="+page.svelte"
	>
		<Textarea aria-label="Message" rows={3} placeholder="Write a message" />
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Bind the value</H3>
	<P>Bind value to read and update the message.</P>
	<CodePreview
		code={"<script lang=\"ts\">\n\timport { Div, Textarea, P } from 'sveltewind/components';\n\n\tlet text = $state('');\n</scr" +
			'ipt>\n\n<Div class="flex flex-col gap-3">\n\t<Textarea aria-label="Message" bind:value={text} rows={3} />\n\n\t<P>{text.length} characters</P>\n</Div>\n'}
		title="+page.svelte"
	>
		<Div class="flex flex-col gap-3">
			<Textarea aria-label="Message" bind:value={text} rows={3} /><P>{text.length} characters</P>
		</Div>
	</CodePreview>
</DocsSection>
