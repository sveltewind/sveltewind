<script lang="ts">
	import { Circle, Defs, Mask, Rect, Svg } from '$lib/components';
	const documentationId = $props.id();
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('mask', 'example', 'text-rose-500 opacity-75');
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Mask example">
		<Defs>
			<Mask id={documentationId + '-demo-mask'}>
				<Rect width={100} height={100} fill="white" />
				<Circle cx={50} cy={50} r={20} fill="black" />
			</Mask>
		</Defs>
		<Rect
			width={100}
			height={100}
			mask={'url(#' + documentationId + '-demo-mask)'}
			variants={['fill', 'primary']}
		/>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme. This element configures its parent; it does not render a standalone box."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Mask example">
		<Defs>
			<Mask variants={['example']} theme={documentationTheme} id={documentationId + '-demo-mask'}>
				<Rect width={100} height={100} fill="white" />
				<Circle cx={50} cy={50} r={20} fill="black" />
			</Mask>
		</Defs>
		<Rect
			width={100}
			height={100}
			mask={'url(#' + documentationId + '-demo-mask)'}
			variants={['fill', 'primary']}
		/>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally. Classes are forwarded to this configuration element; its parent provides the visible surface."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Mask example">
		<Defs>
			<Mask class="text-rose-500 opacity-75" id={documentationId + '-demo-mask'}>
				<Rect width={100} height={100} fill="white" />
				<Circle cx={50} cy={50} r={20} fill="black" />
			</Mask>
		</Defs>
		<Rect
			width={100}
			height={100}
			mask={'url(#' + documentationId + '-demo-mask)'}
			variants={['fill', 'primary']}
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change maskUnits while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Mask example">
		<Defs>
			<Mask maskUnits="userSpaceOnUse" id={documentationId + '-demo-mask'}>
				<Rect width={100} height={100} fill="white" />
				<Circle cx={50} cy={50} r={20} fill="black" />
			</Mask>
		</Defs>
		<Rect
			width={100}
			height={100}
			mask={'url(#' + documentationId + '-demo-mask)'}
			variants={['fill', 'primary']}
		/>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Mask example">
		<Defs>
			<Mask id={documentationId + '-demo-mask'}>
				<Rect width={60} height={100} fill="white" />
				<Circle cx={50} cy={50} r={25} fill="black" />
			</Mask>
		</Defs>
		<Rect
			width={100}
			height={100}
			mask={'url(#' + documentationId + '-demo-mask)'}
			variants={['fill', 'primary']}
		/>
	</Svg>
{/if}
