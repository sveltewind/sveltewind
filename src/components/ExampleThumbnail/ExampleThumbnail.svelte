<script lang="ts">
	import type { Component } from 'svelte';
	import SaasLanding from '../../examples/previews/saas-landing-page.svelte';
	import StudioLanding from '../../examples/previews/studio-landing-page.svelte';
	import RestaurantLanding from '../../examples/previews/restaurant-landing-page.svelte';
	import CourseLanding from '../../examples/previews/course-landing-page.svelte';
	const landingPreviews: Record<string, Component> = {
		'saas-landing-page': SaasLanding,
		'studio-landing-page': StudioLanding,
		'restaurant-landing-page': RestaurantLanding,
		'course-landing-page': CourseLanding
	};
	const previews = import.meta.glob<Component>('../../examples/previews/*.svelte', {
		eager: true,
		import: 'default'
	});
	let { id }: { id: string } = $props();
	const Preview = $derived(landingPreviews[id] ?? previews[`../../examples/previews/${id}.svelte`]);
</script>

<div
	aria-hidden="true"
	inert
	class="pointer-events-none relative h-48 overflow-hidden border-b border-gray-200 bg-primary-500/5 dark:border-gray-800"
>
	<div class="absolute top-4 left-1/2 w-[640px] origin-top -translate-x-1/2 scale-[0.43]">
		{#if Preview}
			<Preview />
		{:else}
			<div class="flex h-96 items-center justify-center text-2xl text-primary-500">
				Preview unavailable
			</div>
		{/if}
	</div>
	<div
		class="absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-gray-50 to-transparent dark:from-gray-950"
	></div>
</div>
