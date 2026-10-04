<script lang="ts">
	import { Div, Toast, Button } from '$lib/components';
	let toastVisible = $state(true);
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
	<Div class="w-full min-w-0">
		{#if toastVisible}
			<Toast
				title="Changes saved"
				message="You're ready to keep building."
				status="success"
				duration={0}
				bind:isVisible={toastVisible}
			/>
		{:else}
			<Button type="button" onclick={() => (toastVisible = true)}>Show toast</Button>
		{/if}
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Div class="w-full min-w-0">
		{#if toastVisible}
			<Toast
				variants={[documentationVariant]}
				title="Changes saved"
				message="You're ready to keep building."
				status="success"
				duration={0}
				bind:isVisible={toastVisible}
			/>
		{:else}
			<Button type="button" onclick={() => (toastVisible = true)}>Show toast</Button>
		{/if}
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		{#if toastVisible}
			<Toast
				class="rounded-xl border border-primary-500/40 p-4"
				title="Changes saved"
				message="You're ready to keep building."
				status="success"
				duration={0}
				bind:isVisible={toastVisible}
			/>
		{:else}
			<Button type="button" onclick={() => (toastVisible = true)}>Show toast</Button>
		{/if}
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change status, duration while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		{#if toastVisible}
			<Toast
				title="Changes saved"
				message="You're ready to keep building."
				status="warning"
				duration={0}
				bind:isVisible={toastVisible}
			/>
		{:else}
			<Button type="button" onclick={() => (toastVisible = true)}>Show toast</Button>
		{/if}
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different title, message values."} -->
	<Div class="w-full min-w-0">
		{#if toastVisible}
			<Toast
				title="Export complete"
				message="Your report is ready to download."
				status="success"
				duration={0}
				bind:isVisible={toastVisible}
			/>
		{:else}
			<Button type="button" onclick={() => (toastVisible = true)}>Show toast</Button>
		{/if}
	</Div>
{/if}
