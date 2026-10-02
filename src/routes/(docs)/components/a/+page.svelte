<script lang="ts">
	import {
		A,
		Card,
		Code,
		CodePreview,
		Div,
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

	// Constants
	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Link content, including text or nested components.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLAnchorElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the rendered anchor.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'transition',
			description: 'Overrides the opening transition.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable visibility; false removes the link after its outro.'
		},
		{
			name: 'outTransition',
			type: 'TransitionProps',
			defaultValue: 'transition',
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
			description: 'Local variants or theme references such as button.base.'
		}
	];

	// helpers
	const exampleCode = (markup: string) =>
		'<scr' +
		'ipt lang="ts">\n  import { A } from \'sveltewind/components\';\n</scr' +
		'ipt>\n\n' +
		markup;
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>A</H1>
	<P>A themed native anchor with snippets, bindable visibility, and Svelte transitions.</P>
</DocsSection>

<DocsSection>
	<H2>Props</H2>
	<P>
		All native anchor attributes and event handlers are forwarded to the HTML <Code>a</Code> element,
		including href, target, rel, download, title, and accessibility attributes.
	</P>
	<Card class="self-start overflow-x-auto p-0">
		<Table>
			<Thead><Tr><Th>Prop</Th><Th>Type</Th><Th>Default</Th><Th>Description</Th></Tr></Thead>
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
	<P><Code>element</Code> becomes null when the link is removed.</P>
</DocsSection>

<DocsSection>
	<H2>Default Implementation</H2>
	<P
		>Provide a destination and link content. The default theme adds an underline and hover and focus
		colors.</P
	>
	<CodePreview
		code={exampleCode('<A href="/getting-started/usage">Explore Sveltewind</A>')}
		title="+page.svelte"
	>
		<A href="/getting-started/usage">Explore Sveltewind</A>
	</CodePreview>
</DocsSection>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Ghost</H3>
	<P>The default theme's <Code>ghost</Code> variant removes the underline.</P>
	<CodePreview
		code={exampleCode(
			'<A href="/getting-started/usage" variants={[\'ghost\']}>Explore Sveltewind</A>'
		)}
		title="+page.svelte"
	>
		<A href="/getting-started/usage" variants={['ghost']}>Explore Sveltewind</A>
	</CodePreview>

	<H3>Button</H3>
	<P
		>Use <Code>button.base</Code> to give the link button styling while preserving native link behavior.</P
	>
	<CodePreview
		code={exampleCode(
			'<A href="/getting-started/usage" variants={[\'button.base\']}>Get started</A>'
		)}
		title="+page.svelte"
	>
		<A href="/getting-started/usage" variants={['button.base']}>Get started</A>
	</CodePreview>

	<H3>Outline button</H3>
	<P>Combine the button's base styles with <Code>button.variant.outline</Code>.</P>
	<CodePreview
		code={exampleCode(
			"<A href=\"/getting-started/usage\" variants={['button.base', 'button.variant.outline']}>Get started</A>"
		)}
		title="+page.svelte"
	>
		<A href="/getting-started/usage" variants={['button.base', 'button.variant.outline']}
			>Get started</A
		>
	</CodePreview>
</DocsSection>
