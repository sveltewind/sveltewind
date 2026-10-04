<script lang="ts">
	import { Defs, Path, Svg, Symbol, Use } from '$lib/components';
	const documentationId = $props.id();
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Symbol example">
		<Defs>
			<Symbol id={documentationId + '-demo-symbol'} viewBox="0 0 100 100">
				<Path d="M10 50 L40 80 L90 20" fill="none" stroke="currentColor" stroke-width={8} />
			</Symbol>
		</Defs>
		<Use
			href={'#' + documentationId + '-demo-symbol'}
			width={100}
			height={100}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the fill variant from the component theme."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Symbol example">
		<Defs>
			<Symbol variants={['fill']} id={documentationId + '-demo-symbol'} viewBox="0 0 100 100">
				<Path d="M10 50 L40 80 L90 20" fill="none" stroke="currentColor" stroke-width={8} />
			</Symbol>
		</Defs>
		<Use
			href={'#' + documentationId + '-demo-symbol'}
			width={100}
			height={100}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply text-rose-500 opacity-75 locally."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Symbol example">
		<Defs>
			<Symbol
				class="text-rose-500 opacity-75"
				id={documentationId + '-demo-symbol'}
				viewBox="0 0 100 100"
			>
				<Path d="M10 50 L40 80 L90 20" fill="none" stroke="currentColor" stroke-width={8} />
			</Symbol>
		</Defs>
		<Use
			href={'#' + documentationId + '-demo-symbol'}
			width={100}
			height={100}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change viewBox while retaining the default component styling."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Symbol example">
		<Defs>
			<Symbol id={documentationId + '-demo-symbol'} viewBox="0 0 100 100">
				<Path d="M10 50 L40 80 L90 20" fill="none" stroke="currentColor" stroke-width={8} />
			</Symbol>
		</Defs>
		<Use
			href={'#' + documentationId + '-demo-symbol'}
			width={100}
			height={100}
			class="text-primary-500"
		/>
	</Svg>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Svg viewBox="0 0 100 100" class="size-40" role="img" aria-label="Symbol example">
		<Defs>
			<Symbol id={documentationId + '-demo-symbol'} viewBox="0 0 100 100">
				<Path d="M15 20 L85 50 L15 80" fill="none" stroke="#0d9488" stroke-width={8} />
			</Symbol>
		</Defs>
		<Use
			href={'#' + documentationId + '-demo-symbol'}
			width={100}
			height={100}
			class="text-primary-500"
		/>
	</Svg>
{/if}
