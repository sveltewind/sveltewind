<script lang="ts">
	import { Select, Option } from '$lib/components';
	import { Theme as DocumentationTheme } from '$lib/theme';
	import { classic as documentationPreset } from '$lib/themes';
	const documentationTheme = new DocumentationTheme(structuredClone(documentationPreset));
	documentationTheme.set.variant(
		'option',
		'example',
		'rounded-xl border border-primary-500/40 p-4'
	);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Select aria-label="Choose a plan">
		<Option value="starter">Starter</Option>

		<Option value="team">Team</Option>
	</Select>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Define a reusable example variant on a local theme."} -->
	<Select aria-label="Choose a plan">
		<Option variants={['example']} theme={documentationTheme} value="starter">Starter</Option>

		<Option variants={['example']} theme={documentationTheme} value="team">Team</Option>
	</Select>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Select aria-label="Choose a plan">
		<Option class="rounded-xl border border-primary-500/40 p-4" value="starter">Starter</Option>

		<Option class="rounded-xl border border-primary-500/40 p-4" value="team">Team</Option>
	</Select>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Select aria-label="Choose a plan">
		<Option disabled={true} value="starter">Starter</Option>

		<Option disabled={true} value="team">Team</Option>
	</Select>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different value values."} -->
	<Select aria-label="Choose a plan">
		<Option value="design">Starter</Option>

		<Option value="design">Team</Option>
	</Select>
{/if}
