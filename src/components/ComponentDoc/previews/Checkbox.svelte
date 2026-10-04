<script lang="ts">
	import { Checkbox } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Checkbox>Receive email updates</Checkbox>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Checkbox variants={['compact']}>Receive email updates</Checkbox>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Checkbox class="rounded-xl border border-primary-500/40 p-4">Receive email updates</Checkbox>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Checkbox disabled={true}>Receive email updates</Checkbox>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different value values."} -->
	<Checkbox value="newsletter">Receive email updates</Checkbox>
{/if}
