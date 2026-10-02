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
		Tr,
		Badge
	} from '$components';
	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Content rendered inside the component.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Classes merged with theme styles and variants.'
		},
		{
			name: 'element',
			type: 'HTMLSpanElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the native element.'
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
			description: 'Bindable visibility; removing the component runs its exit transition.'
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
			description: 'Local theme override.'
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
	<H1>Badge</H1>
	<P>A compact label for statuses, counts, and categories.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>Native attributes and event handlers are forwarded to the <Code>span</Code> element.</P>
	<Card class="self-start overflow-x-auto p-0">
		<Table>
			<Thead><Tr><Th>Prop</Th><Th>Type</Th><Th>Default</Th><Th>Description</Th></Tr></Thead>
			<Tbody
				>{#each props as prop (prop.name)}<Tr
						><Td><Code>{prop.name}</Code></Td><Td>{prop.type}</Td><Td>{prop.defaultValue}</Td><Td
							>{prop.description}</Td
						></Tr
					>{/each}</Tbody
			>
		</Table>
	</Card>
	<P>Status variants include success, warning, error, and info. Badges are noninteractive labels.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<CodePreview
		code={'<script lang="ts">\n import { Badge } from \'sveltewind/components\';\n </scr' +
			'ipt>\n\n<Badge>New</Badge>'}
		title="+page.svelte"
	>
		<Badge>New</Badge>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Usage Examples</H2>
	<CodePreview
		code={"<Badge variants={['success']}>Active</Badge>\n<Badge variants={['warning']}>Pending</Badge>\n<Badge variants={['error']}>Failed</Badge>\n<Badge variants={['info']}>3 updates</Badge>"}
		title="+page.svelte"
	>
		<Badge variants={['success']}>Active</Badge>
		<Badge variants={['warning']}>Pending</Badge>
		<Badge variants={['error']}>Failed</Badge>
		<Badge variants={['info']}>3 updates</Badge>
	</CodePreview>
</DocsSection>
