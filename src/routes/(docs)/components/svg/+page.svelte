<script lang="ts">
	import {
		Card,
		Circle,
		Code,
		CodePreview,
		DocsSection,
		H1,
		H2,
		P,
		Svg,
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
			type: 'SVGSVGElement | null',
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
	<H1>Svg</H1>
	<P>A primitive SVG container for icons, illustrations, and composed components.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>Native attributes and event handlers are forwarded to the <Code>svg</Code> element.</P>
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
		Native SVG attributes are forwarded to the svg element. Give meaningful graphics an accessible
		name; mark decorative graphics aria-hidden.
	</P>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<CodePreview
		code={'<script lang="ts">\n\timport { Circle, Svg } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<Svg aria-label="Circle illustration" role="img" height="64" width="64" viewBox="0 0 64 64">\n\t<Circle cx="32" cy="32" r="24" fill="currentColor" />\n</Svg>\n'}
		title="+page.svelte"
	>
		<Svg aria-label="Circle illustration" role="img" height="64" width="64" viewBox="0 0 64 64">
			<Circle cx="32" cy="32" r="24" fill="currentColor" />
		</Svg>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Usage Examples</H2>
	<CodePreview
		code={'<Svg aria-hidden="true" height="32" width="32" viewBox="0 0 32 32" class="text-primary-500">\n\t<Circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2" />\n</Svg>\n'}
		title="+page.svelte"
	>
		<Svg aria-hidden="true" height="32" width="32" viewBox="0 0 32 32" class="text-primary-500">
			<Circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2" />
		</Svg>
	</CodePreview>
</DocsSection>
