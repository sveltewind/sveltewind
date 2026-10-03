<script lang="ts">
	import {
		A,
		Button,
		Card,
		Container,
		Div,
		H1,
		H2,
		Main,
		P,
		Section,
		Shiki,
		Span
	} from '$components';
	import {
		ArrowRight,
		Box,
		Check,
		ChevronDown,
		CodeXml,
		Copy,
		Layers,
		Link,
		Palette
	} from '$lib/icons';
	import { theme, Theme } from '$lib/theme';

	// Types
	type Step = { code: string; description: string; label: string; title: string };

	// Constants
	const steps: Step[] = [
		{
			label: 'Included',
			title: 'Button',
			description: 'Start with a ready-to-use component.',
			code: '<Button>Get Started</Button>'
		},
		{
			label: 'Theme it',
			title: 'Make it yours',
			description: 'Change the theme. Every component follows.',
			code: "theme.update.component('button', {\n  base: 'rounded-full px-8 py-4 text-lg shadow-lg'\n});"
		},
		{
			label: 'Add a variant',
			title: 'One button. More possibilities.',
			description: 'Define a variant once, then use it anywhere.',
			code: "<Button variants={['outline']}>\n  Get Started\n</Button>"
		},
		{
			label: 'Reuse it',
			title: 'Same styles. Different element.',
			description: 'Use button styles on a link or any component.',
			code: `<A href="/getting-started/usage" variants={['button.base']}>\n  Get Started\n</A>`
		}
	];
	const features = [
		{
			Icon: Box,
			title: 'Batteries included',
			description: 'Primitives and common components ready from day one.'
		},
		{
			Icon: Palette,
			title: 'One global theme',
			description: 'A reactive $state shared across all components.'
		},
		{
			Icon: CodeXml,
			title: 'Just JavaScript',
			description: 'Generate, extend, replace, or share your theme.'
		},
		{
			Icon: Layers,
			title: 'Variants built in',
			description: 'Define variants once in your theme.'
		},
		{
			Icon: Link,
			title: 'Styles are composable',
			description: 'Use button styles on a link or any component.'
		}
	];

	// $state
	let selectedStep = $state(0);
	let clicks = $state(0);
	let copyStatus = $state('');

	// $derived
	const step = $derived(steps[selectedStep]);
	const demoTheme = $derived(
		new Theme({
			a: { ...theme.get.component('a') },
			button: {
				base:
					(theme.get.base('button') || '') +
					(selectedStep === 1 ? ' rounded-full px-8 py-4 text-lg shadow-lg' : ''),
				variants: {
					...theme.get.component('button')?.variants
				}
			}
		})
	);

	// Helpers
	function selectStep(index: number) {
		selectedStep = index;
		clicks = 0;
		copyStatus = '';
	}
	function handleTabKey(event: KeyboardEvent, index: number) {
		let next = index;
		if (event.key === 'ArrowRight') next = (index + 1) % steps.length;
		else if (event.key === 'ArrowLeft') next = (index + steps.length - 1) % steps.length;
		else if (event.key === 'Home') next = 0;
		else if (event.key === 'End') next = steps.length - 1;
		else return;
		event.preventDefault();
		selectStep(next);
		event.currentTarget instanceof HTMLElement &&
			event.currentTarget.parentElement
				?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
				[next]?.focus();
	}
	async function copyCode() {
		try {
			await navigator.clipboard.writeText(step.code);
			copyStatus = 'Copied to clipboard';
		} catch {
			copyStatus = 'Copy unavailable. Select the code to copy it.';
		}
	}
</script>

<svelte:head>
	<title>Sveltewind - Everything included. Nothing locked down.</title>
	<meta
		name="description"
		content="A complete Svelte 5 component system powered by one reactive JavaScript theme. Start with ready-to-use components, then extend, replace, variant, and compose them however you want."
	/>
</svelte:head>

<Main class="relative isolate flex grow flex-col overflow-hidden">
	<Div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(139,92,246,0.06),transparent_55%)]"
	/>
	<Container class="mx-auto flex w-full max-w-7xl grow flex-col px-6 sm:px-10">
		<Section
			aria-labelledby="landing-title"
			class="grid items-center gap-10 pt-16 pb-14 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:pt-28 lg:pb-20 xl:gap-16 xl:pt-32"
		>
			<Div>
				<P
					class="mb-6 text-[11px] font-medium tracking-[0.25em] text-gray-600 uppercase sm:text-xs dark:text-gray-400"
					>Svelte 5 component system</P
				>
				<H1
					id="landing-title"
					class="text-[2.5rem] leading-[1.08] font-bold tracking-[-0.035em] sm:text-5xl xl:text-[3.5rem]"
				>
					Everything included.<br />
					<Span class="text-primary-500 dark:text-primary-400">Nothing locked down.</Span>
				</H1>
				<P
					class="mt-6 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-lg lg:mt-7 lg:text-xl dark:text-gray-400"
				>
					A complete Svelte 5 component system powered by one reactive JavaScript theme. Start with
					ready-to-use components, then extend, replace, variant, and compose them however you want.
				</P>
				<Div class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
					<A
						href="/getting-started/what-is-sveltewind"
						variants={['button.base']}
						class="inline-flex min-h-13 items-center justify-center gap-3 rounded-lg px-6 text-base font-medium no-underline shadow-sm shadow-primary-500/20"
					>
						Get Started <ArrowRight aria-hidden="true" class="size-4" />
					</A>
					<A
						href="/components"
						variants={['ghost']}
						class="inline-flex min-h-13 items-center justify-center rounded-lg border border-gray-300 px-6 text-base font-medium text-gray-950 no-underline transition-colors hover:border-primary-500 hover:bg-primary-500/5 dark:border-gray-700 dark:text-gray-50 dark:hover:border-primary-400"
					>
						Explore Components
					</A>
				</Div>
				<P
					class="mt-8 hidden text-[10px] leading-6 tracking-[0.2em] text-gray-600 uppercase sm:block dark:text-gray-400"
					>Open source <Span class="mx-2" aria-hidden="true">&bull;</Span> Built for Svelte 5 <Span
						class="mx-2"
						aria-hidden="true">&bull;</Span
					> Ready to make yours</P
				>
			</Div>

			<Card
				class="min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white/60 p-0 shadow-lg inset-ring-0 shadow-primary-950/5 dark:border-gray-700/70 dark:bg-gray-900/30 dark:shadow-black/10"
			>
				<Div
					role="tablist"
					aria-label="Component customization steps"
					class="grid grid-cols-4 gap-1 border-b border-gray-200 p-2 dark:border-gray-700/50"
				>
					{#each steps as item, index}
						<Button
							id={`landing-step-${index}`}
							type="button"
							role="tab"
							aria-selected={selectedStep === index}
							aria-controls="landing-demo"
							tabindex={selectedStep === index ? 0 : -1}
							onclick={() => selectStep(index)}
							onkeydown={(event) => handleTabKey(event, index)}
							variants={['ghost']}
							class={`flex min-h-12 items-center justify-center gap-2 rounded-lg px-1 py-2 text-[11px] font-normal focus-visible:outline-2 focus-visible:outline-primary-500 ${selectedStep === index ? 'bg-gray-100 dark:bg-gray-800/70' : ''}`}
						>
							<Span
								class={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs ${selectedStep === index ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}
								>{index + 1}</Span
							>
							<Span class="hidden sm:inline">{item.label}</Span>
							<Span class="sr-only sm:hidden">{item.label}</Span>
						</Button>
					{/each}
				</Div>
				<Div
					id="landing-demo"
					role="tabpanel"
					aria-labelledby={`landing-step-${selectedStep}`}
					tabindex={0}
					class="p-5 focus-visible:outline-2 focus-visible:outline-primary-500 sm:p-6"
				>
					<H2 class="text-xl font-semibold tracking-tight sm:text-2xl">{step.title}</H2>
					<P class="mt-2 min-h-12 text-sm leading-6 text-gray-600 dark:text-gray-400"
						>{step.description}</P
					>
					<Div class="flex min-h-28 items-center justify-center py-6 sm:min-h-32">
						{#if selectedStep === 3}
							<A
								href="/getting-started/usage"
								theme={demoTheme}
								variants={['button.base']}
								class="min-w-44 no-underline"
								>Get Started <ArrowRight class="ml-2 size-4" aria-hidden="true" /></A
							>
						{:else}
							<Button
								type="button"
								theme={demoTheme}
								variants={selectedStep === 2 ? ['outline'] : []}
								class="min-w-44"
								onclick={() => clicks++}>Get Started</Button
							>
						{/if}
					</Div>
					<Card
						class="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-0 inset-ring-0 dark:border-gray-700/60 dark:bg-gray-800/40"
					>
						<Div
							class="flex items-center justify-between border-b border-gray-200 bg-white/50 px-4 py-2 dark:border-gray-700/30 dark:bg-gray-950/40"
						>
							<Span class="text-xs text-gray-600 dark:text-gray-300"
								>{selectedStep === 1 ? 'JavaScript' : 'svelte'}</Span
							>
							<Button
								type="button"
								aria-label="Copy example code"
								title="Copy example code"
								variants={['ghost']}
								class="rounded p-1 text-gray-600 dark:text-gray-300"
								onclick={copyCode}
							>
								{#if copyStatus === 'Copied to clipboard'}<Check
										aria-hidden="true"
										class="size-4"
									/>{:else}<Copy aria-hidden="true" class="size-4" />{/if}
							</Button>
						</Div>
						<Shiki
							code={step.code}
							options={{ lang: selectedStep === 1 ? 'javascript' : 'svelte' }}
							isLineNumbersVisible={false}
							class="min-h-21 overflow-x-auto p-4 text-[11px] sm:text-xs [&_code]:bg-transparent [&_code]:p-0"
						/>
					</Card>
					<P aria-live="polite" class="mt-3 min-h-5 text-xs text-gray-600 dark:text-gray-400"
						>{copyStatus ||
							(clicks
								? `Button clicked ${clicks} ${clicks === 1 ? 'time' : 'times'}. Try another step.`
								: '')}</P
					>
				</Div>
			</Card>
		</Section>

		<Section
			id="features"
			aria-label="Why Sveltewind"
			class="grid scroll-mt-24 grid-cols-1 gap-8 border-t border-gray-200 py-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-7 lg:pt-14 dark:border-gray-700/50"
		>
			{#each features as feature}
				<Div class="flex items-start gap-4 sm:block">
					<feature.Icon
						aria-hidden="true"
						class="size-8 shrink-0 text-primary-500 sm:mb-5 dark:text-primary-400"
						strokeWidth={1.75}
					/>
					<Div>
						<H2 class="mb-2 text-base font-semibold tracking-tight">{feature.title}</H2>
						<P class="text-sm leading-relaxed text-gray-600 dark:text-gray-400"
							>{feature.description}</P
						>
					</Div>
				</Div>
			{/each}
		</Section>
		<A
			href="#features"
			variants={['ghost']}
			class="mx-auto mb-8 hidden flex-col items-center gap-3 text-[10px] tracking-[0.2em] text-gray-600 uppercase no-underline lg:flex dark:text-gray-400"
		>
			<ChevronDown class="size-6" aria-hidden="true" /> Explore the system
		</A>
	</Container>
</Main>
