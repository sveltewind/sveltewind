<script lang="ts">
	import { Iframe } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Iframe title="Embedded example" srcdoc="<p>Hello from an embedded document.</p>" />
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the bordered variant from the component theme."} -->
	<Iframe
		variants={['bordered']}
		title="Embedded example"
		srcdoc="<p>Hello from an embedded document.</p>"
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border-2 border-primary-500/50 shadow-md locally."} -->
	<Iframe
		class="rounded-xl border-2 border-primary-500/50 shadow-md"
		title="Embedded example"
		srcdoc="<p>Hello from an embedded document.</p>"
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change title, loading, width, height while retaining the default component styling."} -->
	<Iframe
		height={180}
		width={320}
		loading="lazy"
		title="Example document"
		srcdoc="<p>Hello from an embedded document.</p>"
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different srcdoc values."} -->
	<Iframe
		title="Embedded example"
		srcdoc="<h1>Hello from the frame</h1><p>A different embedded document.</p>"
	/>
{/if}
