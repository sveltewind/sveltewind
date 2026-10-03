<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		ComposedPreview,
		DocsSection,
		H1,
		H2,
		P,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$components';
	import { classic } from '$lib/themes';

	const code =
		'<script lang="ts">\n  import { Breadcrumbs } from \'sveltewind/components\';\n</scr' +
		"ipt>\n\n<Breadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/components', label: 'Components' }, { label: 'Preview' }]} />";
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
			type: 'HTMLElement | null'
		},
		{
			defaultValue: 'undefined',
			description: 'Enter transition override.',
			name: 'inTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: '$bindable(true)',
			description: 'Bindable visibility; Drawer starts closed.',
			name: 'isVisible',
			type: 'boolean'
		},
		{
			defaultValue: '[]',
			description: 'See usage notes and the component API.',
			name: 'items',
			type: 'BreadcrumbItem[]'
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
			name: 'separator',
			type: 'Snippet | undefined'
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
	const variants = Object.keys(classic.breadcrumbs.variants ?? {});
	const parts = ['breadcrumbs', 'breadcrumbsItem', 'breadcrumbsList', 'breadcrumbsSeparator'];
</script>

<DocsSection
	><P class="text-primary-500 dark:text-primary-500">Components</P><H1>Breadcrumbs</H1><P
		>Semantic navigation that shows the current page within a hierarchy.</P
	></DocsSection
>
<DocsSection
	><H2>Usage</H2><CodePreview {code} title="+page.svelte"
		><ComposedPreview name="Breadcrumbs" /></CodePreview
	><P
		>{'The last item is the current page and is rendered as text. Earlier items with href are links.'}</P
	></DocsSection
>
<DocsSection
	><H2>Props</H2><P
		>Native attributes and event handlers are forwarded to the root Nav component. Common
		transitions apply to that root.</P
	><Card class="overflow-x-auto p-0"
		><Table
			><Thead><Tr><Th>Prop</Th><Th>Type</Th><Th>Default</Th><Th>Description</Th></Tr></Thead><Tbody
				>{#each props as prop (prop.name)}<Tr
						><Td><Code>{prop.name}</Code></Td><Td>{prop.type}</Td><Td>{prop.defaultValue}</Td><Td
							>{prop.description}</Td
						></Tr
					>{/each}</Tbody
			></Table
		></Card
	></DocsSection
>
<DocsSection
	><H2>Styling</H2><P
		>Theme entries: {#each parts as part, index (part)}{#if index > 0},
			{/if}<Code>{part}</Code>{/each}.</P
	><P
		>Available variants: {#each variants as variant, index (variant)}{#if index > 0},
			{/if}<Code>{variant}</Code>{/each}.</P
	><P
		>All presets include this component and its themeable parts. Use class for a local override, or
		update the component and part entries through the theme API.</P
	></DocsSection
>
