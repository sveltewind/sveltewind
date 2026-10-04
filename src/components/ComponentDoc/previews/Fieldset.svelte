<script lang="ts">
	import { Fieldset, Legend, Checkbox } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Fieldset>
		<Legend>Notifications</Legend>

		<Checkbox>Email updates</Checkbox>
	</Fieldset>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Fieldset variants={['compact']}>
		<Legend>Notifications</Legend>

		<Checkbox>Email updates</Checkbox>
	</Fieldset>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Fieldset class="rounded-xl border border-primary-500/40 p-4">
		<Legend>Notifications</Legend>

		<Checkbox>Email updates</Checkbox>
	</Fieldset>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Fieldset disabled={true}>
		<Legend>Notifications</Legend>

		<Checkbox>Email updates</Checkbox>
	</Fieldset>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Fieldset>
		<Legend>Your project content</Legend>

		<Checkbox>Email updates</Checkbox>
	</Fieldset>
{/if}
