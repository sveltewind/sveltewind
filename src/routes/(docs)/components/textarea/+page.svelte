<script lang="ts">
	import { Code, CodePreview, Div, H3, P, Textarea } from '$components';

	const props = [
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLTextAreaElement | null',
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

	let text = $state('');

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Textarea.svelte';
	import examples from '$components/ComponentDoc/previews/Textarea.svelte?component-examples&raw';
</script>

<ComponentDoc name="Textarea" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed multiline input with a bindable value.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>textarea</Code> element
			unless handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Bind the value</H3>
		<P>Bind value to read and update the message.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={"<script lang=\"ts\">\n\timport { Div, Textarea, P } from 'sveltewind/components';\n\n\tlet text = $state('');\n</scr" +
					'ipt>\n\n<Div class="flex flex-col gap-3">\n\t<Textarea aria-label="Message" bind:value={text} rows={3} />\n\n\t<P>{text.length} characters</P>\n</Div>\n'}
				title="+page.svelte"
			>
				<Div class="flex flex-col gap-3">
					<Textarea aria-label="Message" bind:value={text} rows={3} /><P>
						{text.length} characters
					</P>
				</Div>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
