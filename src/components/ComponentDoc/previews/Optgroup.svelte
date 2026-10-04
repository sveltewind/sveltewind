<script lang="ts">
	import { Label, Optgroup, Option, Select } from '$lib/components';
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
	<Label for={documentationId + '-primitive-plan'}>Plan</Label>
	<Select id={documentationId + '-primitive-plan'}>
		<Optgroup label="Personal">
			<Option value="starter">Starter</Option>
			<Option value="pro">Pro</Option>
		</Optgroup>
	</Select>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Label for={documentationId + '-primitive-plan'}>Plan</Label>
	<Select id={documentationId + '-primitive-plan'}>
		<Optgroup variants={[documentationVariant]} label="Personal">
			<Option value="starter">Starter</Option>
			<Option value="pro">Pro</Option>
		</Optgroup>
	</Select>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Label for={documentationId + '-primitive-plan'}>Plan</Label>
	<Select id={documentationId + '-primitive-plan'}>
		<Optgroup class="rounded-xl border border-primary-500/40 p-4" label="Personal">
			<Option value="starter">Starter</Option>
			<Option value="pro">Pro</Option>
		</Optgroup>
	</Select>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Label for={documentationId + '-primitive-plan'}>Plan</Label>
	<Select id={documentationId + '-primitive-plan'}>
		<Optgroup disabled={true} label="Personal">
			<Option value="starter">Starter</Option>
			<Option value="pro">Pro</Option>
		</Optgroup>
	</Select>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different label values."} -->
	<Label for={documentationId + '-primitive-plan'}>Plan</Label>
	<Select id={documentationId + '-primitive-plan'}>
		<Optgroup label="Project teams">
			<Option value="starter">Starter</Option>
			<Option value="pro">Pro</Option>
		</Optgroup>
	</Select>
{/if}
