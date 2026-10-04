<script lang="ts">
	import { Div, DropdownMenu, P } from '$lib/components';
	let message = $state('');
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Div class="w-full min-w-0">
		<DropdownMenu
			label="Actions"
			items={[
				{ label: 'Edit', value: 'edit' },
				{ label: 'Duplicate', value: 'duplicate' },
				{ disabled: true, label: 'Delete', value: 'delete' }
			]}
			onSelect={(item) => (message = `${item.label} selected`)}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the full variant from the component theme."} -->
	<Div class="w-full min-w-0">
		<DropdownMenu
			variants={['full']}
			label="Actions"
			items={[
				{ label: 'Edit', value: 'edit' },
				{ label: 'Duplicate', value: 'duplicate' },
				{ disabled: true, label: 'Delete', value: 'delete' }
			]}
			onSelect={(item) => (message = `${item.label} selected`)}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<DropdownMenu
			class="rounded-xl border border-primary-500/40 p-4"
			label="Actions"
			items={[
				{ label: 'Edit', value: 'edit' },
				{ label: 'Duplicate', value: 'duplicate' },
				{ disabled: true, label: 'Delete', value: 'delete' }
			]}
			onSelect={(item) => (message = `${item.label} selected`)}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle DropdownMenu visibility
	</VisibilityButton>

	<Div class="w-full min-w-0">
		<DropdownMenu
			bind:isVisible={exampleVisible}
			label="Actions"
			items={[
				{ label: 'Edit', value: 'edit' },
				{ label: 'Duplicate', value: 'duplicate' },
				{ disabled: true, label: 'Delete', value: 'delete' }
			]}
			onSelect={(item) => (message = `${item.label} selected`)}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Div class="w-full min-w-0">
		<DropdownMenu
			aria-label="Custom dropdownmenu example"
			label="Actions"
			items={[
				{ label: 'Edit', value: 'edit' },
				{ label: 'Duplicate', value: 'duplicate' },
				{ disabled: true, label: 'Delete', value: 'delete' }
			]}
			onSelect={(item) => (message = `${item.label} selected`)}
		/>
		<P aria-live="polite" class="mt-3 text-xs">{message}</P>
	</Div>
{/if}
