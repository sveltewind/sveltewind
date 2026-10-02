<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		DocsSection,
		H1,
		H2,
		H3,
		Img,
		P,
		Source,
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
			type: 'HTMLSourceElement | null',
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
	<H1>Source</H1>
	<P>A native source element for picture, audio, and video media.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>source</Code> element
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
	<H2>Default Implementation</H2>
	<P>Place Source inside a picture or media element.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Source, Img } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<picture>\n\t<Source\n\t\tsrcset="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"\n\t\ttype="image/svg+xml"\n\t/>\n\t<Img\n\t\tsrc="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"\n\t\talt="Illustrated sky"\n\t\twidth="240"\n\t\theight="120"\n\t/>\n</picture>\n'}
		title="+page.svelte"
	>
		<picture
			><Source
				srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
				type="image/svg+xml"
			/><Img
				src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
				alt="Illustrated sky"
				width="240"
				height="120"
			/></picture
		>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Custom classes</H3>
	<P>Use class to merge Tailwind utilities with the component theme.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Source, Img } from \'sveltewind/components\';\n</scr' +
			'ipt>\n\n<picture>\n\t<Source\n\t\tclass="text-primary-500 dark:text-primary-400"\n\t\tsrcset="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"\n\t\ttype="image/svg+xml"\n\t/>\n\t<Img\n\t\tsrc="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"\n\t\talt="Illustrated sky"\n\t\twidth="240"\n\t\theight="120"\n\t/>\n</picture>\n'}
		title="+page.svelte"
	>
		<picture
			><Source
				class="text-primary-500 dark:text-primary-400"
				srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
				type="image/svg+xml"
			/><Img
				src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
				alt="Illustrated sky"
				width="240"
				height="120"
			/></picture
		>
	</CodePreview>
</DocsSection>
