<script lang="ts">
	import { Tabs } from '$lib/components';
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
	<Tabs
		tabs={[
			{ title: 'Overview', value: 'overview' },
			{ title: 'Details', value: 'details' }
		]}
		value="overview"
	/>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Tabs
		variants={[documentationVariant]}
		tabs={[
			{ title: 'Overview', value: 'overview' },
			{ title: 'Details', value: 'details' }
		]}
		value="overview"
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Tabs
		class="rounded-xl border border-primary-500/40 p-4"
		tabs={[
			{ title: 'Overview', value: 'overview' },
			{ title: 'Details', value: 'details' }
		]}
		value="overview"
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change aria-label while retaining the default component styling."} -->
	<Tabs
		aria-label="Workspace views"
		tabs={[
			{ title: 'Overview', value: 'overview' },
			{ title: 'Details', value: 'details' }
		]}
		value="overview"
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Tabs
		aria-label="Custom tabs example"
		tabs={[
			{ title: 'Overview', value: 'overview' },
			{ title: 'Details', value: 'details' }
		]}
		value="overview"
	/>
{/if}
