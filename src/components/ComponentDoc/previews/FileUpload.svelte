<script lang="ts">
	import { Div, FileUpload } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Div class="w-full min-w-0">
		<FileUpload label="Images or PDFs" multiple accept="image/*,.pdf" maxSize={5 * 1024 * 1024} />
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Div class="w-full min-w-0">
		<FileUpload
			variants={['compact']}
			label="Images or PDFs"
			multiple
			accept="image/*,.pdf"
			maxSize={5 * 1024 * 1024}
		/>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<FileUpload
			class="rounded-xl border border-primary-500/40 p-4"
			label="Images or PDFs"
			multiple
			accept="image/*,.pdf"
			maxSize={5 * 1024 * 1024}
		/>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change multiple, accept, maxSize while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<FileUpload label="Images or PDFs" multiple={false} accept=".pdf" maxSize={1024 * 1024} />
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different label values."} -->
	<Div class="w-full min-w-0">
		<FileUpload
			label="Upload a project brief"
			multiple
			accept="image/*,.pdf"
			maxSize={5 * 1024 * 1024}
		/>
	</Div>
{/if}
