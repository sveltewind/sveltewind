<script lang="ts">
	import { Code, CodePreview, Div, H3, Label, P, Radio } from '$components';

	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Accepted for API consistency; use handle to replace the native input.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLInputElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'group',
			type: 'any',
			defaultValue: "''",
			description: 'Bindable selected value shared by related radio controls.'
		},
		{
			name: 'handle',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Snippet replacing the native radio input.'
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
			description: 'Bindable visibility state for the native input or custom handle.'
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
			description: 'Value of the control.'
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
	import Demo from '$components/ComponentDoc/previews/Radio.svelte';
	import examples from '$components/ComponentDoc/previews/Radio.svelte?component-examples&raw';
</script>

<ComponentDoc name="Radio" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A styled native radio input with a bindable group.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>input</Code> element
			unless handled by the component.
		</P>
		<P>The handle snippet replaces the native input. Use isVisible to hide the control.</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Share a group</H3>
		<P>Bind related radios to the same group state and give them distinct values.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={"<script lang=\"ts\">\n\timport { Div, Label, Radio, P } from 'sveltewind/components';\n\n\tlet plan = $state('starter');\n</scr" +
					'ipt>\n\n<Div class="flex flex-col gap-3">\n\t<Label class="flex gap-2">\n\t\t<Radio name="example-plan" value="starter" bind:group={plan} />\n\t\tStarter\n\t</Label>\n\n\t<Label class="flex gap-2">\n\t\t<Radio name="example-plan" value="team" bind:group={plan} />\n\t\tTeam\n\t</Label>\n\n\t<P>Selected: {plan}</P>\n</Div>\n'}
				title="+page.svelte"
			>
				<Div class="flex flex-col gap-3">
					<Label class="flex gap-2">
						<Radio name="example-plan" value="starter" bind:group={plan} />Starter
					</Label><Label class="flex gap-2">
						<Radio name="example-plan" value="team" bind:group={plan} />Team
					</Label><P>Selected: {plan}</P>
				</Div>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
