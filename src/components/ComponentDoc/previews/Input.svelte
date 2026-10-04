<script lang="ts">
	import { Input } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Input aria-label="Email address" type="email" placeholder="you@example.com" />
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the filled variant from the component theme."} -->
	<Input
		variants={['filled']}
		aria-label="Email address"
		type="email"
		placeholder="you@example.com"
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-none border-primary-500 shadow-none locally."} -->
	<Input
		class="rounded-none border-primary-500 shadow-none"
		aria-label="Email address"
		type="email"
		placeholder="you@example.com"
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change type, autocomplete while retaining the default component styling."} -->
	<Input
		autocomplete="new-password"
		aria-label="Email address"
		type="password"
		placeholder="you@example.com"
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different value, placeholder values."} -->
	<Input
		value="hello@example.com"
		aria-label="Email address"
		type="email"
		placeholder="Work email"
	/>
{/if}
