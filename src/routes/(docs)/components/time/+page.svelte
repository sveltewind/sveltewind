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
		Time,
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
			type: 'HTMLTimeElement | null',
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
		'<script lang="ts">\n  import { Time } from \'sveltewind/components\';\n</scr' +
		'ipt>\n\n<Time datetime="2026-10-03">October 3, 2026</Time>';
	const variants = Object.keys(classic.time.variants ?? {});
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Time</H1>
	<P>A themed native <Code>time</Code> primitive.</P>
</DocsSection>
<DocsSection>
	<H2>Usage</H2>
	<CodePreview {code} title="+page.svelte">
		<Time datetime="2026-10-03">October 3, 2026</Time>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>time</Code> element unless
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
