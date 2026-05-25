<script lang="ts">
	import { A, Container, Div, H1, P, Section, Span } from '$components';
	import { ArrowRight, Moon, Svelte, SwatchBook, Zap } from '$lib/icons';

	// $state
	const features = $state([
		{
			Icon: Zap,
			title: 'Fast Setup'
		},
		{
			Icon: Svelte,
			title: 'Built for Svelte 5'
		},
		{
			Icon: SwatchBook,
			title: 'Theme Customization'
		}
	]);
</script>

<svelte:head>
	<title>Sveltewind - A batteries included component system for Svelte 5</title>
</svelte:head>

<Section class="flex grow flex-col items-center justify-center">
	<Container class="flex flex-col items-center gap-18 md:gap-24 lg:gap-30">
		<Div class="flex flex-col items-center gap-6 md:gap-9 lg:gap-12">
			<H1 class="text-center sm:max-w-xl md:max-w-2xl md:text-6xl lg:max-w-3xl">
				A batteries included component system for Svelte 5.
			</H1>
			<P
				class="text-center text-gray-600 sm:max-w-md md:max-w-lg lg:max-w-xl lg:text-lg dark:text-gray-400"
			>
				Use the included components, create your own, or override ours —<br />all in the same
				system.
			</P>
			<Div class="flex flex-col items-center gap-6 md:flex-row">
				<A
					class="text-xl"
					href="/getting-started/what-is-sveltewind"
					variants={['button.base', 'button.variant.primary']}
				>
					<Div class="flex items-center gap-2">
						<Span>Get Started</Span>
						<ArrowRight class="h-4" />
					</Div>
				</A>
			</Div>
		</Div>
		<Div class="flex flex-wrap justify-center gap-6">
			{#each features as feature}
				<Div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
					<Div class="rounded-md bg-primary-500/10 p-1 text-primary-500">
						<feature.Icon />
					</Div>
					<Span>{feature.title}</Span>
				</Div>
			{/each}
		</Div>
	</Container>
</Section>
