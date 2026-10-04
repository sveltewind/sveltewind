<script lang="ts">
	import { Select } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Select
		aria-label="Choose a plan"
		options={[
			{ label: 'Starter', value: 'starter' },
			{ label: 'Team', value: 'team' }
		]}
	/>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the filled variant from the component theme."} -->
	<Select
		variants={['filled']}
		aria-label="Choose a plan"
		options={[
			{ label: 'Starter', value: 'starter' },
			{ label: 'Team', value: 'team' }
		]}
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-none border-primary-500 shadow-none locally."} -->
	<Select
		class="rounded-none border-primary-500 shadow-none"
		aria-label="Choose a plan"
		options={[
			{ label: 'Starter', value: 'starter' },
			{ label: 'Team', value: 'team' }
		]}
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Select
		disabled={true}
		aria-label="Choose a plan"
		options={[
			{ label: 'Starter', value: 'starter' },
			{ label: 'Team', value: 'team' }
		]}
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different aria-label values."} -->
	<Select
		aria-label="Project category"
		options={[
			{ label: 'Starter', value: 'starter' },
			{ label: 'Team', value: 'team' }
		]}
	/>
{/if}
