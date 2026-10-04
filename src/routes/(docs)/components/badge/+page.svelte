<script lang="ts">
	import { Code, CodePreview, P, Badge } from '$components';
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

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Badge.svelte';
	import examples from '$components/ComponentDoc/previews/Badge.svelte?component-examples&raw';
</script>

<ComponentDoc name="Badge" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A compact label for statuses, counts, and categories.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>Native attributes and event handlers are forwarded to the <Code>span</Code> element.</P>
		<P>
			Status variants include success, warning, error, and info. Badges are noninteractive labels.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={"<Badge variants={['success']}>Active</Badge>\n<Badge variants={['warning']}>Pending</Badge>\n<Badge variants={['error']}>Failed</Badge>\n<Badge variants={['info']}>3 updates</Badge>\n"}
				title="+page.svelte"
			>
				<Badge variants={['success']}>Active</Badge>
				<Badge variants={['warning']}>Pending</Badge>
				<Badge variants={['error']}>Failed</Badge>
				<Badge variants={['info']}>3 updates</Badge>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
