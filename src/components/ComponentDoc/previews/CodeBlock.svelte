<script lang="ts">
	import { CodeBlock } from '$lib/components';
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant(
		'codeBlock',
		'example',
		'rounded-xl border border-primary-500/40 p-4'
	);
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<CodeBlock
		title="hello.ts"
		code={"const hello = 'world';"}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<CodeBlock
		variants={['example']}
		theme={documentationTheme}
		title="hello.ts"
		code={"const hello = 'world';"}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<CodeBlock
		class="rounded-xl border border-primary-500/40 p-4"
		title="hello.ts"
		code={"const hello = 'world';"}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle CodeBlock visibility
	</VisibilityButton>

	<CodeBlock
		bind:isVisible={exampleVisible}
		title="hello.ts"
		code={"const hello = 'world';"}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different code, title values."} -->
	<CodeBlock
		title="answer.ts"
		code={'export const answer = 42;'}
		options={{ lang: 'ts', themes: { light: 'github-light', dark: 'github-dark' } }}
	/>
{/if}
