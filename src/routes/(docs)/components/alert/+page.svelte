<script lang="ts">
	import { Code, CodePreview, P, Alert } from '$components';
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

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Alert.svelte';
	import examples from '$components/ComponentDoc/previews/Alert.svelte?component-examples&raw';
</script>

<ComponentDoc name="Alert" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed message container for status updates and feedback.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>Native attributes and event handlers are forwarded to the <Code>div</Code> element.</P>
		<P>
			Use success, warning, error, or info variants. Choose role="alert" for urgent announcements.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={"<Alert variants={['success']}>Your changes have been saved.</Alert>\n<Alert variants={['warning']}>Your session expires soon.</Alert>\n<Alert role=\"alert\" variants={['error']}>Unable to save your changes.</Alert>\n<Alert variants={['info']}>A new version is available.</Alert>\n"}
				title="+page.svelte"
			>
				<Alert variants={['success']}>Your changes have been saved.</Alert>
				<Alert variants={['warning']}>Your session expires soon.</Alert>
				<Alert role="alert" variants={['error']}>Unable to save your changes.</Alert>
				<Alert variants={['info']}>A new version is available.</Alert>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
