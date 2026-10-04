<script lang="ts">
	import { Label, Radio } from '$lib/components';
	const documentationId = $props.id();

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
	<Label class="flex items-center gap-2">
		<Radio name={documentationId + '-default-plan'} value="starter" aria-label="Starter plan" />
		Starter
	</Label>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Label class="flex items-center gap-2">
		<Radio
			variants={[documentationVariant]}
			name={documentationId + '-default-plan'}
			value="starter"
			aria-label="Starter plan"
		/>
		Starter
	</Label>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Increase the control size and customize its border while retaining a square aspect ratio."} -->
	<Label class="flex items-center gap-2">
		<Radio
			class="size-8 border-2 border-primary-500/40"
			name={documentationId + '-default-plan'}
			value="starter"
			aria-label="Starter plan"
		/>
		Starter
	</Label>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Label class="flex items-center gap-2">
		<Radio
			disabled={true}
			name={documentationId + '-default-plan'}
			value="starter"
			aria-label="Starter plan"
		/>
		Starter
	</Label>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different value values."} -->
	<Label class="flex items-center gap-2">
		<Radio name={documentationId + '-default-plan'} value="annual" aria-label="Starter plan" />
		Starter
	</Label>
{/if}
