<script lang="ts">
	import { Defs, Path, Svg, Text, TextPath } from '$lib/components';
	const documentationId = $props.id();
	let {
		documentationExample = 'default',
		documentationVariant = ''
	}: {
		documentationVariant?: string;
		documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content';
	} = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="TextPath example">
		<Defs>
			<Path id={documentationId + '-demo-text-path'} d="M10 70 Q50 10 90 70" />
		</Defs>
		<Text font-size={12}>
			<TextPath
				href={'#' + documentationId + '-demo-text-path'}
				startOffset="50%"
				text-anchor="middle"
			>
				Along a curve
			</TextPath>
		</Text>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="TextPath example">
		<Defs>
			<Path id={documentationId + '-demo-text-path'} d="M10 70 Q50 10 90 70" />
		</Defs>
		<Text font-size={12}>
			<TextPath
				variants={[documentationVariant]}
				href={'#' + documentationId + '-demo-text-path'}
				startOffset="50%"
				text-anchor="middle"
			>
				Along a curve
			</TextPath>
		</Text>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="TextPath example">
		<Defs>
			<Path id={documentationId + '-demo-text-path'} d="M10 70 Q50 10 90 70" />
		</Defs>
		<Text font-size={12}>
			<TextPath
				class="text-rose-500 opacity-75"
				href={'#' + documentationId + '-demo-text-path'}
				startOffset="50%"
				text-anchor="middle"
			>
				Along a curve
			</TextPath>
		</Text>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change startOffset while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="TextPath example">
		<Defs>
			<Path id={documentationId + '-demo-text-path'} d="M10 70 Q50 10 90 70" />
		</Defs>
		<Text font-size={12}>
			<TextPath
				href={'#' + documentationId + '-demo-text-path'}
				startOffset="20%"
				text-anchor="middle"
			>
				Along a curve
			</TextPath>
		</Text>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="TextPath example">
		<Defs>
			<Path id={documentationId + '-demo-text-path'} d="M10 70 Q50 10 90 70" />
		</Defs>
		<Text font-size={12}>
			<TextPath
				href={'#' + documentationId + '-demo-text-path'}
				startOffset="50%"
				text-anchor="middle"
			>
				Your project content
			</TextPath>
		</Text>
	</Svg>
{/if}
