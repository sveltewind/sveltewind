<script lang="ts">
	import {
		Button,
		Card,
		Code,
		CodePreview,
		DocsSection,
		Field,
		Form,
		H1,
		H2,
		H3,
		Input,
		Label,
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
			type: 'HTMLFormElement | null',
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
	<H1>Form</H1>
	<P>A themed native form with vertical spacing.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>form</Code> element unless
		handled by the component.</P
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
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<P>Import Form from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Form, Field, Label, Input, Button } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Form onsubmit={(event) => event.preventDefault()}>\n\t<Field>\n\t\t<Label for="default-name">Name</Label>\n\t\t<Input id="default-name" name="name" required />\n\t</Field>\n\t<Button type="submit">Submit</Button>\n</Form>\n'}
		title="+page.svelte"
	>
		<Form onsubmit={(event) => event.preventDefault()}
			><Field
				><Label for="default-name">Name</Label><Input
					id="default-name"
					name="name"
					required
				/></Field
			><Button type="submit">Submit</Button></Form
		>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Custom classes</H3>
	<P>Use class to merge Tailwind utilities with the component theme.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Form, Field, Label, Input, Button } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Form class="text-primary-500 dark:text-primary-400" onsubmit={(event) => event.preventDefault()}>\n\t<Field>\n\t\t<Label for="default-name">Name</Label>\n\t\t<Input id="default-name" name="name" required />\n\t</Field>\n\t<Button type="submit">Submit</Button>\n</Form>\n'}
		title="+page.svelte"
	>
		<Form
			class="text-primary-500 dark:text-primary-400"
			onsubmit={(event) => event.preventDefault()}
			><Field
				><Label for="default-name">Name</Label><Input
					id="default-name"
					name="name"
					required
				/></Field
			><Button type="submit">Submit</Button></Form
		>
	</CodePreview>
</DocsSection>
