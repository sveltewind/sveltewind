<script lang="ts">
	import {
		Button,
		Card,
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
		Tooltip,
		Tr
	} from '$components';
	import { tooltip } from '$lib/attachments';
	const props = [
		{
			name: 'children',
			type: 'Snippet<[string]>',
			defaultValue: 'undefined',
			description: 'Custom renderer receiving string tooltip content.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLDivElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'gap',
			type: 'number',
			defaultValue: '8',
			description: 'Distance in pixels between the trigger and floating content.'
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
			description: 'Controls visibility while the tooltip store has an active tooltip.'
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
	<H1>Tooltip</H1>
	<P>A shared tooltip renderer driven by the tooltip attachment.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>div</Code> element unless
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
	<P
		>Mount one Tooltip in your application layout. Content and placement come from the tooltip
		attachment; the renderer uses the shared tooltip store.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<P>Import Tooltip from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={"<script lang=\"ts\">\n\timport { Button, Tooltip } from 'sveltewind/components';\n\timport { tooltip } from 'sveltewind/attachments';\n</scr" +
			'ipt>\n\n<Button type="button" {@attach tooltip({ content: \'Helpful information\' })}>Hover or focus</Button>\n\n<!-- Mount one Tooltip renderer in your application layout. -->\n<Tooltip />\n'}
		title="+page.svelte"
	>
		<Button type="button" {@attach tooltip({ content: 'Helpful information' })}
			>Hover or focus</Button
		>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Placement</H3>
	<P
		>Use the tooltip attachment on a focusable trigger. Both examples share the Tooltip renderer
		mounted on this page.</P
	>
	<CodePreview
		code={"<script lang=\"ts\">\n\timport { Button, Tooltip } from 'sveltewind/components';\n\timport { tooltip } from 'sveltewind/attachments';\n</scr" +
			"ipt>\n\n<Button type=\"button\" {@attach tooltip({ content: 'Below the trigger', placement: 'bottom' })}\n\t>Hover or focus</Button\n>\n\n<!-- Mount one Tooltip renderer in your application layout. -->\n<Tooltip />\n"}
		title="+page.svelte"
	>
		<Button type="button" {@attach tooltip({ content: 'Below the trigger', placement: 'bottom' })}
			>Hover or focus</Button
		>
	</CodePreview>
</DocsSection>
<Tooltip />
