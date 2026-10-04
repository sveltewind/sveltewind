<script lang="ts">
	import { Label, Meter } from '$lib/components';
	const documentationId = $props.id();
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Label for={documentationId + '-primitive-storage'}>Storage used</Label>
	<Meter id={documentationId + '-primitive-storage'} min={0} max={100} value={65}>65%</Meter>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Label for={documentationId + '-primitive-storage'}>Storage used</Label>
	<Meter
		variants={['compact']}
		id={documentationId + '-primitive-storage'}
		min={0}
		max={100}
		value={65}
	>
		65%
	</Meter>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Label for={documentationId + '-primitive-storage'}>Storage used</Label>
	<Meter
		class="rounded-xl border border-primary-500/40 p-4"
		id={documentationId + '-primitive-storage'}
		min={0}
		max={100}
		value={65}
	>
		65%
	</Meter>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change min, max, value, low, high, optimum while retaining the default component styling."} -->
	<Label for={documentationId + '-primitive-storage'}>Storage used</Label>
	<Meter
		optimum={90}
		high={80}
		low={20}
		id={documentationId + '-primitive-storage'}
		min={0}
		max={100}
		value={85}
	>
		65%
	</Meter>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different value, max values."} -->
	<Label for={documentationId + '-primitive-storage'}>Storage used</Label>
	<Meter id={documentationId + '-primitive-storage'} min={0} max={100} value={35}>65%</Meter>
{/if}
