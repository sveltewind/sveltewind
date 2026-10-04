<script lang="ts">
	import { Button } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Button type="button">Save changes</Button>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the outline variant from the component theme."} -->
	<Button variants={['outline']} type="button">Save changes</Button>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-full font-semibold shadow-sm locally."} -->
	<Button class="rounded-full font-semibold shadow-sm" type="button">Save changes</Button>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Button disabled={true} type="button">Save changes</Button>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Button type="button">Your next action</Button>
{/if}
