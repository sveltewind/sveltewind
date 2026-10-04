<script lang="ts">
	import { Div, Avatar } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Div class="w-full min-w-0">
		<Div class="flex items-center justify-center gap-3">
			<Avatar name="Alex Morgan" />
			<Avatar name="Sam Rivera" />
		</Div>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the lg variant from the component theme."} -->
	<Div class="w-full min-w-0">
		<Div class="flex items-center justify-center gap-3">
			<Avatar variants={['lg']} name="Alex Morgan" />
			<Avatar variants={['lg']} name="Sam Rivera" />
		</Div>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-full font-semibold shadow-sm locally."} -->
	<Div class="w-full min-w-0">
		<Div class="flex items-center justify-center gap-3">
			<Avatar class="rounded-full font-semibold shadow-sm" name="Alex Morgan" />
			<Avatar class="rounded-full font-semibold shadow-sm" name="Sam Rivera" />
		</Div>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change name while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<Div class="flex items-center justify-center gap-3">
			<Avatar name="Quinn Davis" />
			<Avatar name="Quinn Davis" />
		</Div>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different name values."} -->
	<Div class="w-full min-w-0">
		<Div class="flex items-center justify-center gap-3">
			<Avatar name="Riley Chen" />
			<Avatar name="Riley Chen" />
		</Div>
	</Div>
{/if}
