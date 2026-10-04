<script lang="ts">
	import { Circle, Defs, Pattern, Rect, Svg } from '$lib/components';
	const documentationId = $props.id();
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('pattern', 'example', 'text-rose-500 opacity-75');
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Pattern example">
		<Defs>
			<Pattern
				id={documentationId + '-demo-pattern'}
				width={20}
				height={20}
				patternUnits="userSpaceOnUse"
			>
				<Circle cx={10} cy={10} r={4} variants={['fill', 'primary']} />
			</Pattern>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-pattern)'} />
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme. This element configures its parent; it does not render a standalone box."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Pattern example">
		<Defs>
			<Pattern
				variants={['example']}
				theme={documentationTheme}
				id={documentationId + '-demo-pattern'}
				width={20}
				height={20}
				patternUnits="userSpaceOnUse"
			>
				<Circle cx={10} cy={10} r={4} variants={['fill', 'primary']} />
			</Pattern>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-pattern)'} />
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Pattern example">
		<Defs>
			<Pattern
				class="text-rose-500 opacity-75"
				id={documentationId + '-demo-pattern'}
				width={20}
				height={20}
				patternUnits="userSpaceOnUse"
			>
				<Circle cx={10} cy={10} r={4} variants={['fill', 'primary']} />
			</Pattern>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-pattern)'} />
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change width, height while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Pattern example">
		<Defs>
			<Pattern
				id={documentationId + '-demo-pattern'}
				width={20}
				height={20}
				patternUnits="userSpaceOnUse"
			>
				<Circle cx={10} cy={10} r={4} variants={['fill', 'primary']} />
			</Pattern>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-pattern)'} />
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Pattern example">
		<Defs>
			<Pattern
				id={documentationId + '-demo-pattern'}
				width={20}
				height={20}
				patternUnits="userSpaceOnUse"
			>
				<Circle cx={10} cy={10} r={7} variants={['fill', 'primary']} />
			</Pattern>
		</Defs>
		<Rect width={100} height={100} fill={'url(#' + documentationId + '-demo-pattern)'} />
	</Svg>
{/if}
