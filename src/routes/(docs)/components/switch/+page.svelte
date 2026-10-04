<script lang="ts">
	import { Code, CodePreview, P, Switch } from '$components';
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

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Switch.svelte';
	import examples from '$components/ComponentDoc/previews/Switch.svelte?component-examples&raw';
</script>

<ComponentDoc name="Switch" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native checkbox styled as an on/off switch with bindable checked state.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>Native attributes and event handlers are forwarded to the <Code>input</Code> element.</P>
		<P>
			Native input attributes and handlers go to the checkbox; type and role are fixed to checkbox
			and switch. The class prop styles the wrapping label. element binds the input. Supply children
			or an accessible label. Theme keys switch and switchControl style the label and input.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<Switch checked name="notifications" value="enabled">Notifications</Switch>\n<Switch disabled>Unavailable setting</Switch>\n<Switch aria-label="Enable dark mode" />\n'}
				title="+page.svelte"
			>
				<Switch checked name="notifications" value="enabled">Notifications</Switch>
				<Switch disabled>Unavailable setting</Switch>
				<Switch aria-label="Enable dark mode" />
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
