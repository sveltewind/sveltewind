<script lang="ts">
	import { Label, Radio } from '$lib/components';
	const documentationId = $props.id();
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant('radio', 'example', 'rounded-xl border border-primary-500/40 p-4');
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Label class="flex items-center gap-2">
		<Radio name={documentationId + '-default-plan'} value="starter" aria-label="Starter plan" />
		Starter
	</Label>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Label class="flex items-center gap-2">
		<Radio
			variants={['example']}
			theme={documentationTheme}
			name={documentationId + '-default-plan'}
			value="starter"
			aria-label="Starter plan"
		/>
		Starter
	</Label>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Label class="flex items-center gap-2">
		<Radio
			class="rounded-xl border border-primary-500/40 p-4"
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
