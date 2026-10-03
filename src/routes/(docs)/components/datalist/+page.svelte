<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		Datalist,
		DocsSection,
		H1,
		H2,
		Input,
		Label,
		Option,
		P,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$components';
	import { classic } from '$lib/themes';

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
			type: 'HTMLDataListElement | null',
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

	const code =
		'<script lang="ts">\n  import { Datalist, Input, Label, Option } from \'sveltewind/components\';\n</scr' +
		'ipt>\n\n<Label for="primitive-city">City</Label><Input id="primitive-city" list="primitive-cities" /><Datalist id="primitive-cities"><Option value="London" /><Option value="Tokyo" /></Datalist>';
	const variants = Object.keys(classic.datalist.variants ?? {});
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Datalist</H1>
	<P>A themed native <Code>datalist</Code> primitive.</P>
</DocsSection>
<DocsSection>
	<H2>Usage</H2>
	<CodePreview {code} title="+page.svelte">
		<Label for="primitive-city">City</Label><Input
			id="primitive-city"
			list="primitive-cities"
		/><Datalist id="primitive-cities"><Option value="London" /><Option value="Tokyo" /></Datalist>
	</CodePreview>
	<P
		>Datalist provides native suggestions for an Input using the matching list and id attributes.
		Browser UI controls its presentation.</P
	>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>datalist</Code> element
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
</DocsSection>
<DocsSection>
	<H2>Styling</H2>
	<P
		>Available variants: {#each variants as variant, index (variant)}{#if index > 0},
			{/if}<Code>{variant}</Code>{/each}.</P
	>
	<P
		>Use class for local overrides or variants for reusable theme styles. All five presets include
		this primitive and its variants. Enter and exit transitions use the shared transition,
		inTransition, and outTransition props.</P
	>
</DocsSection>
