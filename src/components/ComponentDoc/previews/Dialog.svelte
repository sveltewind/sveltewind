<script lang="ts">
	import { Button, Dialog, P } from '$lib/components';
	let open = $state(false);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Button type="button" onclick={() => (open = true)}>Open dialog</Button>
	<Dialog bind:isVisible={open} aria-label="Example dialog">
		<P>Hello from Dialog.</P>

		<Button type="button" onclick={() => (open = false)}>Close</Button>
	</Dialog>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Button type="button" onclick={() => (open = true)}>Open dialog</Button>
	<Dialog variants={['compact']} bind:isVisible={open} aria-label="Example dialog">
		<P>Hello from Dialog.</P>

		<Button type="button" onclick={() => (open = false)}>Close</Button>
	</Dialog>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Button type="button" onclick={() => (open = true)}>Open dialog</Button>
	<Dialog
		class="rounded-xl border border-primary-500/40 p-4"
		bind:isVisible={open}
		aria-label="Example dialog"
	>
		<P>Hello from Dialog.</P>

		<Button type="button" onclick={() => (open = false)}>Close</Button>
	</Dialog>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change isModal while retaining the default component styling."} -->
	<Button type="button" onclick={() => (open = true)}>Open dialog</Button>
	<Dialog isModal={false} bind:isVisible={open} aria-label="Example dialog">
		<P>Hello from Dialog.</P>

		<Button type="button" onclick={() => (open = false)}>Close</Button>
	</Dialog>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Button type="button" onclick={() => (open = true)}>Open dialog</Button>
	<Dialog bind:isVisible={open} aria-label="Example dialog">
		<P>Your project content</P>

		<Button type="button" onclick={() => (open = false)}>Close</Button>
	</Dialog>
{/if}
