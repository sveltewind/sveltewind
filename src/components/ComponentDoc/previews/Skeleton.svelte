<script lang="ts">
	import { Div, Skeleton } from '$lib/components';
	import { Button as VisibilityButton } from '$lib/components';
	let exampleVisible = $state(true);
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
		<Div class="flex items-center gap-4">
			<Skeleton />
			<Div class="grow space-y-3">
				<Skeleton />
				<Skeleton />
			</Div>
		</Div>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Div class="w-full min-w-0">
		<Div class="flex items-center gap-4">
			<Skeleton variants={[documentationVariant]} />
			<Div class="grow space-y-3">
				<Skeleton variants={[documentationVariant]} />
				<Skeleton variants={[documentationVariant]} />
			</Div>
		</Div>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<Div class="flex items-center gap-4">
			<Skeleton class="rounded-xl border border-primary-500/40 p-4" />
			<Div class="grow space-y-3">
				<Skeleton class="rounded-xl border border-primary-500/40 p-4" />
				<Skeleton class="rounded-xl border border-primary-500/40 p-4" />
			</Div>
		</Div>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Bind isVisible and toggle it with a button to control whether the component is rendered."} -->
	<VisibilityButton type="button" onclick={() => (exampleVisible = !exampleVisible)}>
		Toggle Skeleton visibility
	</VisibilityButton>

	<Div class="w-full min-w-0">
		<Div class="flex items-center gap-4">
			<Skeleton bind:isVisible={exampleVisible} />
			<Div class="grow space-y-3">
				<Skeleton bind:isVisible={exampleVisible} />
				<Skeleton bind:isVisible={exampleVisible} />
			</Div>
		</Div>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different aria-label values."} -->
	<Div class="w-full min-w-0">
		<Div class="flex items-center gap-4">
			<Skeleton aria-label="Loading project details" />
			<Div class="grow space-y-3">
				<Skeleton aria-label="Loading project details" />
				<Skeleton aria-label="Loading project details" />
			</Div>
		</Div>
	</Div>
{/if}
