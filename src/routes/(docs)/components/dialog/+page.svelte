<script lang="ts">
	import { Button, Code, CodePreview, Dialog, H3, P } from '$components';
	import { fade } from 'svelte/transition';
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
			type: 'HTMLDialogElement | null',
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
			name: 'isModal',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Uses showModal when true and show when false.'
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
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];
	let open = $state(false);
	let exampleOpen = $state(false);

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Dialog.svelte';
	import examples from '$components/ComponentDoc/previews/Dialog.svelte?component-examples&raw';
</script>

<ComponentDoc name="Dialog" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native dialog with modal behavior, bindable visibility, and transitions.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>dialog</Code> element
			unless handled by the component.
		</P>
		<P>
			Use isVisible instead of the native open attribute. The default is true; initialize a bound
			state to false for an initially closed dialog.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Add a transition</H3>
		<P>Bind isVisible to open and close the dialog; Escape also updates the binding.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={"<script lang=\"ts\">\n\timport { Button, Dialog, P } from 'sveltewind/components';\n\timport { fade } from 'svelte/transition';\n\n\tlet exampleOpen = $state(false);\n</scr" +
					'ipt>\n\n<Button type="button" onclick={() => (exampleOpen = true)}>Open animated dialog</Button>\n<Dialog\n\tbind:isVisible={exampleOpen}\n\taria-label="Animated dialog"\n\ttransition={[fade, { duration: 200 }]}\n>\n\t<P>Dialog content</P>\n\n\t<Button type="button" onclick={() => (exampleOpen = false)}>Close</Button>\n</Dialog>\n'}
				title="+page.svelte"
			>
				<Button type="button" onclick={() => (exampleOpen = true)}>Open animated dialog</Button>
				<Dialog
					bind:isVisible={exampleOpen}
					aria-label="Animated dialog"
					transition={[fade, { duration: 200 }]}
				>
					<P>Dialog content</P><Button type="button" onclick={() => (exampleOpen = false)}>
						Close
					</Button>
				</Dialog>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
