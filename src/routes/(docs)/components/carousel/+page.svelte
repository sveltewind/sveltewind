<script lang="ts">
	import { Code, P } from '$components';

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
			defaultValue: '$bindable(0)',
			description: 'See usage notes and the component API.',
			name: 'index',
			type: 'number'
		},
		{
			defaultValue: '$bindable(true)',
			description: 'Bindable visibility state.',
			name: 'isVisible',
			type: 'boolean'
		},
		{
			defaultValue: "'Carousel'",
			description: 'See usage notes and the component API.',
			name: 'label',
			type: 'string'
		},
		{
			defaultValue: 'undefined',
			description: 'See usage notes and the component API.',
			name: 'onIndexChange',
			type: '((index: number) => void) | undefined'
		},
		{
			defaultValue: 'undefined',
			description: 'Exit transition override.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			defaultValue: '1',
			description: 'See usage notes and the component API.',
			name: 'perView',
			type: 'number'
		},
		{
			defaultValue: 'true',
			description: 'See usage notes and the component API.',
			name: 'showIndicators',
			type: 'boolean'
		},
		{
			defaultValue: '[]',
			description: 'See usage notes and the component API.',
			name: 'slides',
			type: 'CarouselSlide[]'
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

	const parts = [
		'carousel',
		'carouselControls',
		'carouselIndicator',
		'carouselIndicators',
		'carouselSlide',
		'carouselTrack'
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Carousel.svelte';
	import examples from '$components/ComponentDoc/previews/Carousel.svelte?component-examples&raw';
</script>

<ComponentDoc name="Carousel" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A scroll-snap carousel with manual controls, keyboard navigation, and responsive slides.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the root Div component. Common
			transitions apply to that root.
		</P>

		<P>
			Theme entries: {#each parts as part, index (part)}{#if index > 0},
				{/if}<Code>{part}</Code>{/each}.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			{'No automatic rotation is used. Arrow controls and focused-track keyboard navigation respect reduced motion. perView controls desktop columns; tablets show at most two and small screens show one. Provide slides with unique IDs.'}
		</P>
	{/snippet}
</ComponentDoc>
