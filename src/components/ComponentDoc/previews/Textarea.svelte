<script lang="ts">
	import { Textarea } from '$lib/components';
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
	<Textarea aria-label="Message" rows={3} placeholder="Write a message" />
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Textarea
		variants={[documentationVariant]}
		aria-label="Message"
		rows={3}
		placeholder="Write a message"
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-none border-primary-500 shadow-none locally."} -->
	<Textarea
		class="rounded-none border-primary-500 shadow-none"
		aria-label="Message"
		rows={3}
		placeholder="Write a message"
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change rows, maxlength while retaining the default component styling."} -->
	<Textarea maxlength={120} aria-label="Message" rows={5} placeholder="Write a message" />
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different value values."} -->
	<Textarea
		value="A short project brief with your goals and timeline."
		aria-label="Message"
		rows={3}
		placeholder="Write a message"
	/>
{/if}
