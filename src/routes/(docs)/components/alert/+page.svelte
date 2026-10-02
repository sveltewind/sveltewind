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
		Alert
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
			type: 'HTMLDivElement | null',
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
			name: 'role',
			type: "HTMLAttributes<HTMLDivElement>['role']",
			defaultValue: "'status'",
			description: 'Defaults to polite status announcements; use alert for urgent messages.'
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
	<H1>Alert</H1>
	<P>A themed message container for status updates and feedback.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>Native attributes and event handlers are forwarded to the <Code>div</Code> element.</P>
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
	<P>Use success, warning, error, or info variants. Choose role="alert" for urgent announcements.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<CodePreview
		code={'<script lang="ts">\n import { Alert } from \'sveltewind/components\';\n </scr' +
			'ipt>\n\n<Alert>Your changes have been saved.</Alert>'}
		title="+page.svelte"
	>
		<Alert>Your changes have been saved.</Alert>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Usage Examples</H2>
	<CodePreview
		code={"<Alert variants={['success']}>Your changes have been saved.</Alert>\n<Alert variants={['warning']}>Your session expires soon.</Alert>\n<Alert role=\"alert\" variants={['error']}>Unable to save your changes.</Alert>\n<Alert variants={['info']}>A new version is available.</Alert>"}
		title="+page.svelte"
	>
		<Alert variants={['success']}>Your changes have been saved.</Alert>
		<Alert variants={['warning']}>Your session expires soon.</Alert>
		<Alert role="alert" variants={['error']}>Unable to save your changes.</Alert>
		<Alert variants={['info']}>A new version is available.</Alert>
	</CodePreview>
</DocsSection>
