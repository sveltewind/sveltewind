<script lang="ts">
	import { Code, CodePreview, H3, Li, P, Ul } from '$components';

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
			type: 'HTMLUListElement | null',
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
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Ul.svelte';
	import examples from '$components/ComponentDoc/previews/Ul.svelte?component-examples&raw';
</script>

<ComponentDoc name="Ul" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed unordered list with primary-colored markers.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>ul</Code> element unless
			handled by the component.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Ul, Li } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Ul class="text-primary-500 dark:text-primary-400">\n\t<Li>Themed components</Li>\n\n\t<Li>Native HTML attributes</Li>\n</Ul>\n'}
				title="+page.svelte"
			>
				<Ul class="text-primary-500 dark:text-primary-400">
					<Li>Themed components</Li><Li>Native HTML attributes</Li>
				</Ul>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
