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
		Label,
		P,
		Radio,
		Table,
		Tbody,
		Td,
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
			type: 'HTMLInputElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'group',
			type: 'any',
			defaultValue: "''",
			description: 'Bindable selected value shared by related radio controls.'
		},
		{
			name: 'handle',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Snippet replacing the native radio input.'
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
			description:
				'Accepted for API consistency; the native radio is rendered regardless of this value.'
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
			description: 'Value of the control.'
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
	<H1>Radio</H1>
	<P>A styled native radio input with a bindable group.</P>
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
		>The handle snippet replaces the native input. The current implementation accepts isVisible but
		does not use it to hide the input.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<P>Import Radio from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Label, Radio } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Label class="flex items-center gap-2">\n\t<Radio name="default-plan" value="starter" aria-label="Starter plan" />Starter</Label\n>\n'}
		title="+page.svelte"
	>
		<Label class="flex items-center gap-2"
			><Radio name="default-plan" value="starter" aria-label="Starter plan" />Starter</Label
		>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Share a group</H3>
	<P>Bind related radios to the same group state and give them distinct values.</P>
	<CodePreview
		code={"<script lang=\"ts\">\n\timport { Div, Label, Radio, P } from 'sveltewind/components';\n\n\tlet plan = $state('starter');\n</scr" +
			'ipt>\n\n<Div class="flex flex-col gap-3">\n\t<Label class="flex gap-2">\n\t\t<Radio name="example-plan" value="starter" bind:group={plan} />Starter</Label\n\t>\n\t<Label class="flex gap-2">\n\t\t<Radio name="example-plan" value="team" bind:group={plan} />Team</Label\n\t>\n\t<P>Selected: {plan}</P>\n</Div>\n'}
		title="+page.svelte"
	>
		<Div class="flex flex-col gap-3"
			><Label class="flex gap-2"
				><Radio name="example-plan" value="starter" bind:group={plan} />Starter</Label
			><Label class="flex gap-2"
				><Radio name="example-plan" value="team" bind:group={plan} />Team</Label
			><P>Selected: {plan}</P></Div
		>
	</CodePreview>
</DocsSection>
