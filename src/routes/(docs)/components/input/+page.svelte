<script lang="ts">
	import { Code, CodePreview, Div, H3, Input, P } from '$components';

	const props = [
		{
			name: 'checked',
			type: 'boolean | null',
			defaultValue: 'undefined',
			description: 'Bindable checked state for checkbox inputs.'
		},
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Accepted for API consistency; not rendered by this component.'
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
			defaultValue: 'undefined',
			description: 'Bindable selected value for radio inputs.'
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
			name: 'type',
			type: 'HTMLInputAttributes["type"]',
			defaultValue: "'text'",
			description: 'Native input type; checkbox and radio inputs use their appropriate bindings.'
		},
		{
			name: 'value',
			type: 'HTMLInputAttributes["value"]',
			defaultValue: "'on' for checkbox/radio; '' otherwise",
			description:
				'Bindable current text or numeric value; submission value for checkbox/radio. File inputs remain native and are read through element.files.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	let text = $state('');

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Input.svelte';
	import examples from '$components/ComponentDoc/previews/Input.svelte?component-examples&raw';
</script>

<ComponentDoc name="Input" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed native input with a bindable value.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>input</Code> element
			unless handled by the component.
		</P>
		<P>
			Input does not render children. Use Label or aria-label to give the input an accessible name.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Bind the value</H3>
		<P>Bind value to read and update text as the user types.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={"<script lang=\"ts\">\n\timport { Div, Input, P } from 'sveltewind/components';\n\n\tlet text = $state('');\n</scr" +
					'ipt>\n\n<Div class="flex flex-col gap-3">\n\t<Input aria-label="Your name" bind:value={text} placeholder="Your name" />\n\n\t<P>Hello, {text || \'friend\'}.</P>\n</Div>\n'}
				title="+page.svelte"
			>
				<Div class="flex flex-col gap-3">
					<Input aria-label="Your name" bind:value={text} placeholder="Your name" /><P>
						Hello, {text || 'friend'}.
					</P>
				</Div>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
