<script lang="ts">
	import { Code, P } from '$components';
	import { classic } from '$lib/themes';

	const props = [
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
			defaultValue: '$bindable(null)',
			description: 'Bindable reference to the composition root.',
			name: 'element',
			type: 'HTMLDivElement | null'
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
			defaultValue: "''",
			description: 'See usage notes and the component API.',
			name: 'name',
			type: 'string'
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'src',
			type: 'string | undefined'
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
	const variants = Object.keys(classic.avatar.variants ?? {});
	const parts = ['avatar', 'avatarFallback', 'avatarImage'];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Avatar.svelte';
	import examples from '$components/ComponentDoc/previews/Avatar.svelte?component-examples&raw';
</script>

<ComponentDoc name="Avatar" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A profile image with initials when the image is missing or cannot load.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the root Div component. Common
			transitions apply to that root.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			{'Use name for both the accessible label and the initials fallback. Decorative images use an empty alt inside the labeled wrapper.'}
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
