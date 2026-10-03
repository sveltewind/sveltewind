<script lang="ts">
	import {
		Card,
		Circle,
		Code,
		CodePreview,
		Defs,
		DocsSection,
		H1,
		H2,
		P,
		Pattern,
		Rect,
		Svg,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$components';
	import { classic } from '$lib/themes';

	const code =
		'<script lang="ts">\n  import { Circle, Defs, Pattern, Rect, Svg } from \'sveltewind/components\';\n</scr' +
		'ipt>\n\n<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Pattern example"><Defs><Pattern id="demo-pattern" width={20} height={20} patternUnits="userSpaceOnUse"><Circle cx={10} cy={10} r={4} variants={[\'fill\', \'primary\']} /></Pattern></Defs><Rect width={100} height={100} fill="url(#demo-pattern)" /></Svg>';
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
			type: 'SVGPatternElement | null',
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

	const variants = Object.keys(classic.pattern.variants ?? {});
</script>

<DocsSection
	><P class="text-primary-500 dark:text-primary-500">Components</P><H1>Pattern</H1><P
		>A themed native SVG <Code>pattern</Code> primitive. Render it inside Svg or an appropriate SVG parent.</P
	></DocsSection
>
<DocsSection
	><H2>Usage</H2><CodePreview {code} title="+page.svelte"
		><Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Pattern example"
			><Defs
				><Pattern id="demo-pattern" width={20} height={20} patternUnits="userSpaceOnUse"
					><Circle cx={10} cy={10} r={4} variants={['fill', 'primary']} /></Pattern
				></Defs
			><Rect width={100} height={100} fill="url(#demo-pattern)" /></Svg
		></CodePreview
	></DocsSection
>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>pattern</Code> element
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
<DocsSection
	><H2>Styling</H2><P
		>Available variants: {#each variants as variant, index (variant)}{#if index > 0},
			{/if}<Code>{variant}</Code>{/each}.</P
	><P
		>Native SVG attributes are forwarded, including fill, stroke, transforms, and element-specific
		geometry. Classes and explicit attributes let you customize the drawing. Definition and
		accessibility elements do not have a visible box, so their transitions have no visible effect.</P
	></DocsSection
>
