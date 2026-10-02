<script lang="ts">
	import {
		Button,
		Card,
		Code,
		CodePreview,
		Dialog,
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
	import { fade } from 'svelte/transition';
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
			type: 'HTMLDialogElement | null',
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
			name: 'isModal',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Uses showModal when true and show when false.'
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
	let open = $state(false);
	let exampleOpen = $state(false);
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Dialog</H1>
	<P>A native dialog with modal behavior, bindable visibility, and transitions.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P
		>Native attributes and event handlers are forwarded to the underlying <Code>dialog</Code> element
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
		>Use isVisible instead of the native open attribute. The default is true; initialize a bound
		state to false for an initially closed dialog.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<P>Import Dialog from sveltewind/components and use it as shown below.</P>
	<CodePreview
		code={'<script lang="ts">\n\timport { Button, Dialog, P } from \'sveltewind/components\';\n\n\tlet open = $state(false);\n</scr' +
			'ipt>\n\n<Button type="button" onclick={() => (open = true)}>Open dialog</Button>\n<Dialog bind:isVisible={open} aria-label="Example dialog">\n\t<P>Hello from Dialog.</P>\n\t<Button type="button" onclick={() => (open = false)}>Close</Button>\n</Dialog>\n'}
		title="+page.svelte"
	>
		<Button type="button" onclick={() => (open = true)}>Open dialog</Button>
		<Dialog bind:isVisible={open} aria-label="Example dialog"
			><P>Hello from Dialog.</P><Button type="button" onclick={() => (open = false)}>Close</Button
			></Dialog
		>
	</CodePreview>
</DocsSection>
<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>Usage Examples</H2>
	<H3>Add a transition</H3>
	<P>Bind isVisible to open and close the dialog; Escape also updates the binding.</P>
	<CodePreview
		code={"<script lang=\"ts\">\n\timport { Button, Dialog, P } from 'sveltewind/components';\n\timport { fade } from 'svelte/transition';\n\n\tlet exampleOpen = $state(false);\n</scr" +
			'ipt>\n\n<Button type="button" onclick={() => (exampleOpen = true)}>Open animated dialog</Button>\n<Dialog\n\tbind:isVisible={exampleOpen}\n\taria-label="Animated dialog"\n\ttransition={[fade, { duration: 200 }]}\n>\n\t<P>Dialog content</P>\n\t<Button type="button" onclick={() => (exampleOpen = false)}>Close</Button>\n</Dialog>\n'}
		title="+page.svelte"
	>
		<Button type="button" onclick={() => (exampleOpen = true)}>Open animated dialog</Button>
		<Dialog
			bind:isVisible={exampleOpen}
			aria-label="Animated dialog"
			transition={[fade, { duration: 200 }]}
			><P>Dialog content</P><Button type="button" onclick={() => (exampleOpen = false)}
				>Close</Button
			></Dialog
		>
	</CodePreview>
</DocsSection>
