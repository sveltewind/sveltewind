<script lang="ts">
	import { A, Code, CodePreview, H3, P } from '$components';

	// Constants
	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Link content, including text or nested components.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLAnchorElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the rendered anchor.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'transition',
			description: 'Overrides the opening transition.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable visibility; false removes the link after its outro.'
		},
		{
			name: 'outTransition',
			type: 'TransitionProps',
			defaultValue: 'transition',
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
			description: 'Local variants or theme references such as button.base.'
		}
	];

	// helpers

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/A.svelte';
	import examples from '$components/ComponentDoc/previews/A.svelte?component-examples&raw';
</script>

<ComponentDoc name="A" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed native anchor with snippets, bindable visibility, and Svelte transitions.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			All native anchor attributes and event handlers are forwarded to the HTML <Code>a</Code> element,
			including href, target, rel, download, title, and accessibility attributes.
		</P>
		<P><Code>element</Code> becomes null when the link is removed.</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			Provide a destination and link content. The default theme adds an underline and hover and
			focus colors.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Button</H3>
		<P>
			Use <Code>button.base</Code> to give the link button styling while preserving native link behavior.
		</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { A } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<A href="/getting-started/usage" variants={[\'button.base\']}>Get started</A>\n'}
				title="+page.svelte"
			>
				<A href="/getting-started/usage" variants={['button.base']}>Get started</A>
			</CodePreview>
		</div>
		<H3>Outline button</H3>
		<P>Combine the button's base styles with <Code>button.variant.outline</Code>.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { A } from \'sveltewind/components\';\n</scr' +
					"ipt>\n\n<A href=\"/getting-started/usage\" variants={['button.base', 'button.variant.outline']}>\n\tGet started\n</A>\n"}
				title="+page.svelte"
			>
				<A href="/getting-started/usage" variants={['button.base', 'button.variant.outline']}>
					Get started
				</A>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
