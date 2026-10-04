<script lang="ts">
	import { Div, Button, Toaster, type ToastItem } from '$lib/components';
	const uid = $props.id();
	let sequence = $state(0);
	let toasts = $state<ToastItem[]>([]);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Div class="w-full min-w-0">
		<Button
			type="button"
			onclick={() => {
				sequence++;
				toasts = [
					...toasts,
					{
						id: `${uid}-${sequence}`,
						message: 'Your changes have been saved.',
						status: 'success',
						title: 'All done'
					}
				];
			}}
		>
			Show notification
		</Button>
		<Toaster bind:toasts />
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the bottom-left variant from the component theme."} -->
	<Div class="w-full min-w-0">
		<Button
			type="button"
			onclick={() => {
				sequence++;
				toasts = [
					...toasts,
					{
						id: `${uid}-${sequence}`,
						message: 'Your changes have been saved.',
						status: 'success',
						title: 'All done'
					}
				];
			}}
		>
			Show notification
		</Button>
		<Toaster variants={['bottom-left']} bind:toasts />
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<Button
			type="button"
			onclick={() => {
				sequence++;
				toasts = [
					...toasts,
					{
						id: `${uid}-${sequence}`,
						message: 'Your changes have been saved.',
						status: 'success',
						title: 'All done'
					}
				];
			}}
		>
			Show notification
		</Button>
		<Toaster class="rounded-xl border border-primary-500/40 p-4" bind:toasts />
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change position while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<Button
			type="button"
			onclick={() => {
				sequence++;
				toasts = [
					...toasts,
					{
						id: `${uid}-${sequence}`,
						message: 'Your changes have been saved.',
						status: 'success',
						title: 'All done'
					}
				];
			}}
		>
			Show notification
		</Button>
		<Toaster position="top-right" bind:toasts />
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Div class="w-full min-w-0">
		<Button
			type="button"
			onclick={() => {
				sequence++;
				toasts = [
					...toasts,
					{
						id: `${uid}-${sequence}`,
						message: 'Your report is ready to download.',
						status: 'success',
						title: 'Export complete'
					}
				];
			}}
		>
			Show an export notification
		</Button>
		<Toaster bind:toasts />
	</Div>
{/if}
