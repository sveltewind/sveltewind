<script lang="ts">
	import { Div, Button, Drawer, P, A } from '$lib/components';
	let drawerVisible = $state(false);
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
		<Button type="button" onclick={() => (drawerVisible = true)}>Open drawer</Button>
		<Drawer title="Your workspace" bind:isVisible={drawerVisible}>
			<P>Keep navigation and helpful actions close by.</P>
			<A href="/getting-started/theming" class="mt-4 inline-block">Explore theming</A>
		</Drawer>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Div class="w-full min-w-0">
		<Button type="button" onclick={() => (drawerVisible = true)}>Open drawer</Button>
		<Drawer variants={[documentationVariant]} title="Your workspace" bind:isVisible={drawerVisible}>
			<P>Keep navigation and helpful actions close by.</P>
			<A href="/getting-started/theming" class="mt-4 inline-block">Explore theming</A>
		</Drawer>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<Button type="button" onclick={() => (drawerVisible = true)}>Open drawer</Button>
		<Drawer
			class="rounded-xl border border-primary-500/40 p-4"
			title="Your workspace"
			bind:isVisible={drawerVisible}
		>
			<P>Keep navigation and helpful actions close by.</P>
			<A href="/getting-started/theming" class="mt-4 inline-block">Explore theming</A>
		</Drawer>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change position, showClose while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<Button type="button" onclick={() => (drawerVisible = true)}>Open drawer</Button>
		<Drawer showClose={false} position="left" title="Your workspace" bind:isVisible={drawerVisible}>
			<P>Keep navigation and helpful actions close by.</P>
			<A href="/getting-started/theming" class="mt-4 inline-block">Explore theming</A>
		</Drawer>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Div class="w-full min-w-0">
		<Button type="button" onclick={() => (drawerVisible = true)}>Open drawer</Button>
		<Drawer title="Your workspace" bind:isVisible={drawerVisible}>
			<P>Your project content</P>
			<A href="/getting-started/theming" class="mt-4 inline-block">Explore theming</A>
		</Drawer>
	</Div>
{/if}
