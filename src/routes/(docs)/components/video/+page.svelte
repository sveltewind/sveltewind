<script lang="ts">
	import { Code, CodePreview, H3, P, Source, Video } from '$components';

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
			type: 'HTMLVideoElement | null',
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
	import Demo from '$components/ComponentDoc/previews/Video.svelte';
	import examples from '$components/ComponentDoc/previews/Video.svelte?component-examples&raw';
</script>

<ComponentDoc name="Video" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A native video element with forwarded playback and media attributes.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>video</Code> element
			unless handled by the component.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			This poster-only preview shows the native controls. Supply src or Source children to play your
			own video.
		</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Provide media sources</H3>
		<P>
			Place Source children inside Video. Replace the sample URL with your video file; this preview
			displays the player without downloading media.
		</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Video, Source } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Video\n\tcontrols\n\tpreload="none"\n\tposter="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"\n\twidth="240"\n\theight="120"\n>\n\t<Source src="/example-video.mp4" type="video/mp4" />\n</Video>\n'}
				title="+page.svelte"
			>
				<Video
					controls
					preload="none"
					poster="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22240%22%20height%3D%22120%22%3E%3Crect%20width%3D%22240%22%20height%3D%22120%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2235%22%20r%3D%2220%22%20fill%3D%22%23c7d2fe%22%2F%3E%3C%2Fsvg%3E"
					width="240"
					height="120"
				>
					<Source src="/example-video.mp4" type="video/mp4" />
				</Video>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
