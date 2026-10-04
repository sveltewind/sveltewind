<script lang="ts">
	import { Code, CodePreview, Div, H3, Option, P, Select } from '$components';

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
			type: 'HTMLSelectElement | null',
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
			name: 'options',
			type: '{ label: any; value: any }[]',
			defaultValue: '[]',
			description: 'Bindable list of label/value objects; children override generated options.'
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
			name: 'value',
			type: 'any',
			defaultValue: "''",
			description: 'Bindable current value of the control.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	let plan = $state('starter');

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Select.svelte';
	import examples from '$components/ComponentDoc/previews/Select.svelte?component-examples&raw';
</script>

<ComponentDoc name="Select" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed native select with generated options or custom option content.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>select</Code> element
			unless handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom options and binding</H3>
		<P>Provide Option children and bind the selected value.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={"<script lang=\"ts\">\n\timport { Div, Select, Option, P } from 'sveltewind/components';\n\n\tlet plan = $state('starter');\n</scr" +
					'ipt>\n\n<Div class="flex flex-col gap-3">\n\t<Select aria-label="Plan" bind:value={plan}>\n\t\t<Option value="starter">Starter</Option>\n\n\t\t<Option value="team">Team</Option>\n\t</Select>\n\n\t<P>Selected: {plan}</P>\n</Div>\n'}
				title="+page.svelte"
			>
				<Div class="flex flex-col gap-3">
					<Select aria-label="Plan" bind:value={plan}>
						<Option value="starter">Starter</Option><Option value="team">Team</Option>
					</Select><P>Selected: {plan}</P>
				</Div>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
