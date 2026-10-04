<script lang="ts">
	import { Code, CodePreview, Div, H3, P, Tabs } from '$components';

	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Custom content replacing the generated tab buttons.'
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
			name: 'tabs',
			type: 'Tab[]',
			defaultValue: '[]',
			description: 'Tab titles and values used to generate buttons.'
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
			name: 'value',
			type: 'any',
			defaultValue: 'undefined',
			description: 'Bindable current value of the control.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	let tab = $state('overview');

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Tabs.svelte';
	import examples from '$components/ComponentDoc/previews/Tabs.svelte?component-examples&raw';
</script>

<ComponentDoc name="Tabs" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A group of buttons with a bindable selected value.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>div</Code> element unless
			handled by the component.
		</P>
		<P>
			Each <Code>Tab</Code> contains a string title and a value of any type. Custom children replace
			the generated buttons; render the selected content separately.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Bind the selection</H3>
		<P>Render the associated content separately using the selected value.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={"<script lang=\"ts\">\n\timport { Div, Tabs, P } from 'sveltewind/components';\n\n\tlet tab = $state('overview');\n</scr" +
					"ipt>\n\n<Div class=\"flex flex-col gap-3\">\n\t<Tabs\n\t\ttabs={[\n\t\t\t{ title: 'Overview', value: 'overview' },\n\t\t\t{ title: 'Details', value: 'details' }\n\t\t]}\n\t\tbind:value={tab}\n\t/>\n\n\t<P>{tab === 'overview' ? 'Overview content' : 'Detail content'}</P>\n</Div>\n"}
				title="+page.svelte"
			>
				<Div class="flex flex-col gap-3">
					<Tabs
						tabs={[
							{ title: 'Overview', value: 'overview' },
							{ title: 'Details', value: 'details' }
						]}
						bind:value={tab}
					/><P>{tab === 'overview' ? 'Overview content' : 'Detail content'}</P>
				</Div>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
