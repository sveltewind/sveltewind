<script lang="ts">
	import { Div, SearchField, P } from '$lib/components';
	let message = $state('');
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
	<Div class="w-full min-w-0">
		<SearchField
			label="Search components"
			placeholder="Find a component..."
			onSearch={(value) => (message = value ? `Searching for ${value}` : 'Enter a search term.')}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Div class="w-full min-w-0">
		<SearchField
			variants={[documentationVariant]}
			label="Search components"
			placeholder="Find a component..."
			onSearch={(value) => (message = value ? `Searching for ${value}` : 'Enter a search term.')}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-none border-primary-500 shadow-none locally."} -->
	<Div class="w-full min-w-0">
		<SearchField
			class="rounded-none border-primary-500 shadow-none"
			label="Search components"
			placeholder="Find a component..."
			onSearch={(value) => (message = value ? `Searching for ${value}` : 'Enter a search term.')}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<SearchField
			disabled={true}
			label="Search components"
			placeholder="Find a component..."
			onSearch={(value) => (message = value ? `Searching for ${value}` : 'Enter a search term.')}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different label, placeholder values."} -->
	<Div class="w-full min-w-0">
		<SearchField
			label="Search documentation"
			placeholder="Search installation, theming, or APIs..."
			onSearch={(value) => (message = value ? `Searching for ${value}` : 'Enter a search term.')}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{/if}
