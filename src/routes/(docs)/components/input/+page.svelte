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
		Input,
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
			description: 'Accepted for API consistency; not rendered by this component.'
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
			type: 'string',
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
	<H1>Input</H1>
	<P>A themed native input with a bindable value.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>input</Code> element
		unless handled by the component.</P
	>
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
	<P
		>Input does not render children. Use Label or aria-label to give the input an accessible name.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<P>Import Input from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Input } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Input aria-label="Email address" type="email" placeholder="you@example.com" />\n'}
		title="+page.svelte"
	>
		<Input aria-label="Email address" type="email" placeholder="you@example.com" />
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Bind the value</H3>
	<P>Bind value to read and update text as the user types.</P>
	<CodePreview
		code={"<script lang=\"ts\">\n\timport { Div, Input, P } from 'sveltewind/components';\n\n\tlet text = $state('');\n</scr" +
			'ipt>\n\n<Div class="flex flex-col gap-3">\n\t<Input aria-label="Your name" bind:value={text} placeholder="Your name" />\n\t<P>Hello, {text || \'friend\'}.</P>\n</Div>\n'}
		title="+page.svelte"
	>
		<Div class="flex flex-col gap-3"
			><Input aria-label="Your name" bind:value={text} placeholder="Your name" /><P
				>Hello, {text || 'friend'}.</P
			></Div
		>
	</CodePreview>
</DocsSection>
