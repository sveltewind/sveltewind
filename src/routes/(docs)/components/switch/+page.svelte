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
		Switch
	} from '$components';
	const props = [
		{
			name: 'checked',
			type: 'boolean',
			defaultValue: 'false',
			description: 'Bindable on/off state.'
		},
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
			type: 'HTMLInputElement | null',
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
	let checked = $state(false);
</script>

<DocsSection>
	<P class="text-primary-500 dark:text-primary-500">Components</P>
	<H1>Switch</H1>
	<P>A native checkbox styled as an on/off switch with bindable checked state.</P>
</DocsSection>
<DocsSection>
	<H2>Props</H2>
	<P>Native attributes and event handlers are forwarded to the <Code>input</Code> element.</P>
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
	<P
		>Native input attributes and handlers go to the checkbox; type and role are fixed to checkbox
		and switch. The class prop styles the wrapping label. element binds the input. Supply children
		or an accessible label. Theme keys switch and switchControl style the label and input.</P
	>
</DocsSection>
<DocsSection>
	<H2>Default Implementation</H2>
	<CodePreview
		code={'<script lang="ts">\n import { Switch, P } from \'sveltewind/components\';\n let checked = $state(false);\n</scr' +
			"ipt>\n\n<Switch bind:checked>Notifications</Switch>\n<P>Notifications: {checked ? 'on' : 'off'}</P>"}
		title="+page.svelte"
	>
		<Switch bind:checked>Notifications</Switch>
		<P>Notifications: {checked ? 'on' : 'off'}</P>
	</CodePreview>
</DocsSection>
<DocsSection>
	<H2>Usage Examples</H2>
	<CodePreview
		code={'<Switch checked name="notifications" value="enabled">Notifications</Switch>\n<Switch disabled>Unavailable setting</Switch>\n<Switch aria-label="Enable dark mode" />'}
		title="+page.svelte"
	>
		<Switch checked name="notifications" value="enabled">Notifications</Switch>
		<Switch disabled>Unavailable setting</Switch>
		<Switch aria-label="Enable dark mode" />
	</CodePreview>
</DocsSection>
