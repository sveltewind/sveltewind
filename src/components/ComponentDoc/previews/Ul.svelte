<script lang="ts">
	import { Ul, Li } from '$lib/components';
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
	<Ul>
		<Li>Themed components</Li>

		<Li>Native HTML attributes</Li>
	</Ul>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Ul variants={[documentationVariant]}>
		<Li>Themed components</Li>

		<Li>Native HTML attributes</Li>
	</Ul>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Ul class="rounded-xl border border-primary-500/40 p-4">
		<Li>Themed components</Li>

		<Li>Native HTML attributes</Li>
	</Ul>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Ul visibility
	</VisibilityButton>

	<Ul bind:isVisible={exampleVisible}>
		<Li>Themed components</Li>

		<Li>Native HTML attributes</Li>
	</Ul>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Ul>
		<Li>Your project content</Li>

		<Li>Native HTML attributes</Li>
	</Ul>
{/if}
