<script lang="ts">
	import {
		Card,
		Circle,
		Code,
		CodePreview,
		DocsSection,
		H1,
		H2,
		H3,
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
			type: 'SVGCircleElement | null',
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
	<H1>Circle</H1>
	<P>A themed SVG circle for use inside an SVG.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>
		Native attributes and event handlers are forwarded to the underlying <Code>circle</Code> element
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
	<P>Import Circle from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Circle } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">\n\t<Circle cx="32" cy="32" r="24" fill="currentColor" />\n</svg>\n'}
		title="+page.svelte"
	>
		<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">
			<Circle cx="32" cy="32" r="24" fill="currentColor" />
		</svg>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Custom classes</H3>
	<P>Use class to merge Tailwind utilities with the component theme.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Circle } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">\n\t<Circle\n\t\tclass="text-primary-500 dark:text-primary-400"\n\t\tcx="32"\n\t\tcy="32"\n\t\tr="24"\n\t\tfill="currentColor"\n\t/>\n</svg>\n'}
		title="+page.svelte"
	>
		<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Circle">
			<Circle
				class="text-primary-500 dark:text-primary-400"
				cx="32"
				cy="32"
				r="24"
				fill="currentColor"
			/>
		</svg>
	</CodePreview>
</DocsSection>
