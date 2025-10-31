<script lang="ts">
	import { theme } from '$lib';
	import * as components from '$lib/components';
</script>

<components.Div class="flex flex-col">
	<components.Div class="mx-auto flex w-full max-w-7xl flex-col px-4">
		{#each Object.keys(components) as componentKey}
			<components.Div class="flex flex-col py-6">
				<components.H2>{componentKey}</components.H2>
				<components.Div class="flex space-x-4">
					{@render componentVariant(componentKey, 'default')}
					{#each Object.keys(theme.getComponent(componentKey) ?? {}).filter((variant) => variant !== 'default') as variant}
						{@render componentVariant(componentKey, variant)}
					{/each}
				</components.Div>
			</components.Div>
		{/each}
	</components.Div>
</components.Div>

{#snippet componentVariant(componentKey: string, variant: string)}
	{@const Component = components[componentKey]}
	<components.Div class="flex flex-col">
		<components.H3>{variant}</components.H3>
		<Component variants={[variant]}>Child</Component>
	</components.Div>
{/snippet}
