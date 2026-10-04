<script lang="ts">
	import { Checkbox, Code, CodePreview, H3, P } from '$components';

	const props = [
		{
			name: 'checked',
			type: 'boolean',
			defaultValue: 'false',
			description: 'Bindable checked state of the native checkbox.'
		},
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
			type: 'HTMLInputElement | null',
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
			name: 'snippet',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Snippet replacing the checkbox visual indicator.'
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
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	let checked = $state(false);

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Checkbox.svelte';
	import examples from '$components/ComponentDoc/previews/Checkbox.svelte?component-examples&raw';
</script>

<ComponentDoc name="Checkbox" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A labeled checkbox with a custom visual indicator and bindable checked state.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>input</Code> element
			unless handled by the component.
		</P>
		<P>
			Class styles the wrapping label. Native input attributes, including name, required, and
			disabled, are forwarded to the hidden checkbox input.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Bind checked state</H3>
		<P>Bind checked to keep application state in sync with the control.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Checkbox, P } from \'sveltewind/components\';\n\n\tlet checked = $state(false);\n</scr' +
					"ipt>\n\n<Checkbox bind:checked>Receive email updates</Checkbox>\n<P>Updates: {checked ? 'enabled' : 'disabled'}</P>\n"}
				title="+page.svelte"
			>
				<Checkbox bind:checked>Receive email updates</Checkbox>
				<P>Updates: {checked ? 'enabled' : 'disabled'}</P>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
