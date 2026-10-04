<script lang="ts">
	import { Select, Option } from '$lib/components';

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
	<Select aria-label="Choose a plan">
		<Option value="starter">Starter</Option>

		<Option value="team">Team</Option>
	</Select>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Select aria-label="Choose a plan">
		<Option variants={[documentationVariant]} value="starter">Starter</Option>

		<Option variants={[documentationVariant]} value="team">Team</Option>
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
