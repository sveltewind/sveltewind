<script lang="ts">
	import * as componentImports from '$lib/components/index.js';
	import { Card, H6 } from '$lib/components/index.js';
	import { Check } from '$lib/icons/index.js';

	// props
	let componentKeys = Object.keys(componentImports).filter(
		(componentKey) =>
			!['Drawer', 'Portal', 'Modal', 'Overlay', 'Pwa', 'Title'].includes(componentKey)
	);
	let componentProps = $state({
		Icon: {
			src: Check
		},
		Overlay: {
			isVisible: false
		},
		ProgressIndicator: {
			class: 'h-20 w-20'
		},
		Select: {
			options: [...Array(3)].map((_, i) => ({ label: `Option ${i + 1}`, value: i })),
			value: 0
		}
	});
</script>

<div class="grid flex-grow grid-cols-1 gap-4 lg:grid-cols-6">
	{#each componentKeys as componentKey}
		<Card class="aspect-square">
			<H6>{componentKey}</H6>
			<div class="flex flex-grow items-center justify-center">
				<svelte:component this={componentImports[componentKey]} {...componentProps?.[componentKey]}>
					{componentKey}
				</svelte:component>
			</div>
		</Card>
	{/each}
</div>
