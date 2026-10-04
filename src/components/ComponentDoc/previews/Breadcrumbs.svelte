<script lang="ts">
	import { Div, Breadcrumbs } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Div class="w-full min-w-0">
		<Breadcrumbs
			items={[
				{ href: '/', label: 'Home' },
				{ href: '/components', label: 'Components' },
				{ label: 'Preview' }
			]}
		/>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Div class="w-full min-w-0">
		<Breadcrumbs
			variants={['compact']}
			items={[
				{ href: '/', label: 'Home' },
				{ href: '/components', label: 'Components' },
				{ label: 'Preview' }
			]}
		/>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<Breadcrumbs
			class="rounded-xl border border-primary-500/40 p-4"
			items={[
				{ href: '/', label: 'Home' },
				{ href: '/components', label: 'Components' },
				{ label: 'Preview' }
			]}
		/>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change aria-label while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<Breadcrumbs
			aria-label="Project breadcrumb"
			items={[
				{ href: '/', label: 'Home' },
				{ href: '/components', label: 'Components' },
				{ label: 'Preview' }
			]}
		/>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different items values."} -->
	<Div class="w-full min-w-0">
		<Breadcrumbs
			items={[
				{ href: '/', label: 'Workspace' },
				{ href: '/examples', label: 'Projects' },
				{ label: 'Autumn campaign' }
			]}
		/>
	</Div>
{/if}
