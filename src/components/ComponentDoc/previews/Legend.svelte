<script lang="ts">
	import { Fieldset, Legend, Checkbox } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Fieldset>
		<Legend>Account preferences</Legend>

		<Checkbox>Send notifications</Checkbox>
	</Fieldset>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the accent variant from the component theme."} -->
	<Fieldset>
		<Legend variants={['accent']}>Account preferences</Legend>

		<Checkbox>Send notifications</Checkbox>
	</Fieldset>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply font-semibold tracking-wide text-primary-600 dark:text-primary-400 locally."} -->
	<Fieldset>
		<Legend class="font-semibold tracking-wide text-primary-600 dark:text-primary-400">
			Account preferences
		</Legend>

		<Checkbox>Send notifications</Checkbox>
	</Fieldset>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Legend visibility
	</VisibilityButton>

	<Fieldset>
		<Legend bind:isVisible={exampleVisible}>Account preferences</Legend>

		<Checkbox>Send notifications</Checkbox>
	</Fieldset>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Fieldset>
		<Legend>Your own content</Legend>

		<Checkbox>Send notifications</Checkbox>
	</Fieldset>
{/if}
