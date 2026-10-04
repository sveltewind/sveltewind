<script lang="ts">
	import { Pile, Card } from '$lib/components';

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
	<Pile>
		<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card>

		<Card class="bg-gray-50 dark:bg-gray-950">On top</Card>
	</Pile>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Pile variants={[documentationVariant]}>
		<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card>

		<Card class="bg-gray-50 dark:bg-gray-950">On top</Card>
	</Pile>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Pile class="rounded-xl border border-primary-500/40 p-4">
		<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card>

		<Card class="bg-gray-50 dark:bg-gray-950">On top</Card>
	</Pile>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Pile visibility
	</VisibilityButton>

	<Pile bind:isVisible={exampleVisible}>
		<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Card>

		<Card class="bg-gray-50 dark:bg-gray-950">On top</Card>
	</Pile>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Pile>
		<Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Your project content</Card>

		<Card class="bg-gray-50 dark:bg-gray-950">On top</Card>
	</Pile>
{/if}
