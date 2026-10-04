<script lang="ts">
	import { Code, P } from '$components';
	import { classic } from '$lib/themes';

	const props = [
		{
			defaultValue: "''",
			description: 'See usage notes and the component API.',
			name: 'accept',
			type: 'string'
		},
		{
			defaultValue: 'undefined',
			description: 'Custom content; see the usage notes for its component-specific role.',
			name: 'children',
			type: 'Snippet'
		},
		{
			defaultValue: "''",
			description: 'Tailwind utilities merged after the component theme and variants.',
			name: 'class',
			type: 'string'
		},
		{
			defaultValue: 'false',
			description: 'See usage notes and the component API.',
			name: 'disabled',
			type: 'boolean'
		},
		{
			defaultValue: '$bindable(null)',
			description: 'Bindable reference to the composition root.',
			name: 'element',
			type: 'HTMLDivElement | null'
		},
		{
			defaultValue: '$bindable([])',
			description: 'See usage notes and the component API.',
			name: 'files',
			type: 'File[]'
		},
		{
			defaultValue: 'undefined',
			description: 'Enter transition override.',
			name: 'inTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: '$bindable(true)',
			description: 'Bindable visibility state.',
			name: 'isVisible',
			type: 'boolean'
		},
		{
			defaultValue: "'Upload files'",
			description: 'See usage notes and the component API.',
			name: 'label',
			type: 'string'
		},
		{
			defaultValue: 'Infinity',
			description: 'See usage notes and the component API.',
			name: 'maxSize',
			type: 'number'
		},
		{
			defaultValue: 'false',
			description: 'See usage notes and the component API.',
			name: 'multiple',
			type: 'boolean'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'name',
			type: 'string | undefined'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'onError',
			type: '((message: string) => void) | undefined'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'onFilesChange',
			type: '((files: File[]) => void) | undefined'
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: 'false',
			description: 'See usage notes and the component API.',
			name: 'required',
			type: 'boolean'
		},
		{
			defaultValue: 'globalTheme',
			description: 'Local Theme instance; defaults to the global theme.',
			name: 'theme',
			type: 'Theme'
		},
		{
			defaultValue: '[noopTransition, {}]',
			description: 'Shared transition function and options.',
			name: 'transition',
			type: 'TransitionProps'
		},
		{
			defaultValue: '[]',
			description: 'Ordered component theme variants or cross-component references.',
			name: 'variants',
			type: 'string[]'
		}
	];
	const variants = Object.keys(classic.fileUpload.variants ?? {});
	const parts = [
		'fileUpload',
		'fileUploadDropzone',
		'fileUploadError',
		'fileUploadHint',
		'fileUploadItem',
		'fileUploadList',
		'fileUploadRemove'
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/FileUpload.svelte';
	import examples from '$components/ComponentDoc/previews/FileUpload.svelte?component-examples&raw';
</script>

<ComponentDoc name="FileUpload" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A file picker and drop zone with file type and size checks and a removable file list.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the root Div component. Common
			transitions apply to that root.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			{'This component selects files; your application sends them to a server. maxSize is in bytes. accept filters dropped files as well as picker choices. Client checks do not replace server validation. name enables native form submission.'}
		</P>
	{/snippet}
	{#snippet notes()}
		<P>
			Theme entries: {#each parts as part, index (part)}{#if index > 0},
				{/if}<Code>{part}</Code>{/each}.
		</P>
		<P>
			Available variants: {#each variants as variant, index (variant)}{#if index > 0},
				{/if}<Code>{variant}</Code>{/each}.
		</P>
		<P>
			All presets include this component and its themeable parts. Use class for a local override, or
			update the component and part entries through the theme API.
		</P>
	{/snippet}
</ComponentDoc>
