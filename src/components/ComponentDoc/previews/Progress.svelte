<script lang="ts">
	import { Label, Progress } from '$lib/components';
	const documentationId = $props.id();
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Label for={documentationId + '-primitive-upload'}>Upload progress</Label>
	<Progress id={documentationId + '-primitive-upload'} max={100} value={60}>60%</Progress>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Label for={documentationId + '-primitive-upload'}>Upload progress</Label>
	<Progress variants={['compact']} id={documentationId + '-primitive-upload'} max={100} value={60}>
		60%
	</Progress>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Label for={documentationId + '-primitive-upload'}>Upload progress</Label>
	<Progress
		class="rounded-xl border border-primary-500/40 p-4"
		id={documentationId + '-primitive-upload'}
		max={100}
		value={60}
	>
		60%
	</Progress>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change value, max while retaining the default component styling."} -->
	<Label for={documentationId + '-primitive-upload'}>Upload progress</Label>
	<Progress id={documentationId + '-primitive-upload'} max={100} value={75}>60%</Progress>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different value, max values."} -->
	<Label for={documentationId + '-primitive-upload'}>Upload progress</Label>
	<Progress id={documentationId + '-primitive-upload'} max={100} value={35}>60%</Progress>
{/if}
