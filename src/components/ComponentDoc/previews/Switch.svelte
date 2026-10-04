<script lang="ts">
	import { Switch, P } from '$lib/components';
	let checked = $state(false);
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Switch bind:checked>Notifications</Switch>
	<P>Notifications: {checked ? 'on' : 'off'}</P>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Switch variants={['compact']} bind:checked>Notifications</Switch>
	<P>Notifications: {checked ? 'on' : 'off'}</P>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Switch class="rounded-xl border border-primary-500/40 p-4" bind:checked>Notifications</Switch>
	<P>Notifications: {checked ? 'on' : 'off'}</P>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Switch visibility
	</VisibilityButton>

	<Switch bind:isVisible={exampleVisible} bind:checked>Notifications</Switch>
	<P>Notifications: {checked ? 'on' : 'off'}</P>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Switch bind:checked>Your project content</Switch>
	<P>Notifications: {checked ? 'on' : 'off'}</P>
{/if}
