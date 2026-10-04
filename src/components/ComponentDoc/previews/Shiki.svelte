<script lang="ts">
	import { Shiki } from '$lib/components';

	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
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
	<Shiki
		code={"const hello = 'world';"}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Shiki
		variants={[documentationVariant]}
		code={"const hello = 'world';"}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Shiki
		class="rounded-xl border border-primary-500/40 p-4"
		code={"const hello = 'world';"}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Shiki visibility
	</VisibilityButton>

	<Shiki
		bind:isVisible={exampleVisible}
		code={"const hello = 'world';"}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different code values."} -->
	<Shiki
		code={'export const answer = 42;'}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{/if}
