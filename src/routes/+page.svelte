<script lang="ts">
	import {
		A,
		Badge,
		Br,
		Button,
		Card,
		ComponentCarousel,
		Container,
		Div,
		H1,
		H2,
		H3,
		Input,
		Label,
		Main,
		P,
		Section,
		Shiki,
		Span
	} from '$components';
	import { ArrowRight, Box, Check, CodeXml, Copy, Layers, Link, Palette } from '$lib/icons';
	import { theme, Theme } from '$lib/theme';

	// Types
	type PlaygroundStyle = 'compact' | 'rounded' | 'square';
	type Step = { code: string; description: string; label: string; title: string };

	// Constants

	const customThemeCode =
		"import { Theme, theme } from 'sveltewind/theme';\nimport { classic } from 'sveltewind/themes';\n\nconst brand = new Theme(structuredClone(classic));\n\nbrand.update.base('button', 'rounded-full px-8');\nbrand.update.base('card', 'rounded-2xl');\nbrand.set.variant('button', 'cta', 'py-4 text-lg');\n\n// Use it across your entire app.\ntheme.set.theme(brand.get.theme());\n";
	const playgroundStyles = {
		compact: {
			button: { base: 'rounded-md px-4 py-2 text-sm' },
			card: { base: 'rounded-md p-4' },
			input: { base: 'rounded-md px-3 py-2 text-sm' }
		},
		rounded: {
			button: { base: 'rounded-full px-6 py-3' },
			card: { base: 'rounded-2xl p-6' },
			input: { base: 'rounded-xl px-4 py-3' }
		},
		square: {
			button: { base: 'rounded-none px-6 py-3' },
			card: { base: 'rounded-none p-6' },
			input: { base: 'rounded-none px-4 py-3' }
		}
	};
	const globalThemeCodes = {
		compact:
			"import { theme } from 'sveltewind/theme';\n\ntheme.update.theme({\n\tbutton: {\n\t\tbase: 'rounded-md px-4 py-2 text-sm'\n\t},\n\tcard: {\n\t\tbase: 'rounded-md p-4'\n\t},\n\tinput: {\n\t\tbase: 'rounded-md px-3 py-2 text-sm'\n\t}\n});\n",
		rounded:
			"import { theme } from 'sveltewind/theme';\n\ntheme.update.theme({\n\tbutton: {\n\t\tbase: 'rounded-full px-6 py-3'\n\t},\n\tcard: {\n\t\tbase: 'rounded-2xl p-6'\n\t},\n\tinput: {\n\t\tbase: 'rounded-xl px-4 py-3'\n\t}\n});\n",
		square:
			"import { theme } from 'sveltewind/theme';\n\ntheme.update.theme({\n\tbutton: {\n\t\tbase: 'rounded-none px-6 py-3'\n\t},\n\tcard: {\n\t\tbase: 'rounded-none p-6'\n\t},\n\tinput: {\n\t\tbase: 'rounded-none px-4 py-3'\n\t}\n});\n"
	};

	const reuseCode =
		"<Button variants={['outline']}>Continue</Button>\n\n<!-- A link, with the button's styling. -->\n<A href=\"/components\" variants={['button.base', 'button.variant.outline']}>Explore components</A>\n\n<!-- A div, with the card's styling. -->\n<Div variants={['card.base']}>Same surface. Your markup.</Div>\n";
	const steps: Step[] = [
		{
			label: 'Included',
			title: 'Button',
			description: 'Start with a ready-to-use component.',
			code: '<Button>Get Started</Button>\n'
		},
		{
			label: 'Theme it',
			title: 'Make it yours',
			description: 'Change the theme. Every component follows.',
			code: "theme.update.component('button', {\n\tbase: 'rounded-full px-8 py-4 text-lg shadow-lg'\n});\n"
		},
		{
			label: 'Add a variant',
			title: 'One button. More possibilities.',
			description: 'Define a variant once, then use it anywhere.',
			code: "<Button variants={['outline']}>Get Started</Button>\n"
		},
		{
			label: 'Reuse it',
			title: 'Same styles. Different element.',
			description: 'Use button styles on a link or any component.',
			code: '<A href="/getting-started/usage" variants={[\'button.base\']}>Get Started</A>\n'
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
	let selectedStyle = $state<PlaygroundStyle>('rounded');
	let clicks = $state(0);
	let copyStatus = $state('');

	// $derived

	const customTheme = $derived.by(() => {
		const next = new Theme($state.snapshot(theme.get.theme()));
		next.update.base('button', 'rounded-full px-8');
		next.update.base('card', 'rounded-2xl');
		next.set.variant('button', 'cta', 'py-4 text-lg');
		return next;
	});
	const globalThemeCode = $derived(globalThemeCodes[selectedStyle]);
	const sharedTheme = $derived.by(() => {
		const next = new Theme($state.snapshot(theme.get.theme()));
		next.update.theme(playgroundStyles[selectedStyle]);
		return next;
	});
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
	const selectStep = (index: number) => {
		selectedStep = index;
		clicks = 0;
		copyStatus = '';
	};
	const handleTabKey = (event: KeyboardEvent, index: number) => {
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
	};
	const copyCode = async () => {
		try {
			await navigator.clipboard.writeText(step.code);
			copyStatus = 'Copied to clipboard';
		} catch {
			copyStatus = 'Copy unavailable. Select the code to copy it.';
		}
	};
</script>

<svelte:head>
	<title>Sveltewind - Everything included. Nothing locked down.</title>
	<meta
		name="description"
		content="A complete Svelte 5 component system powered by one reactive JavaScript theme. Start with ready-to-use components, then extend, replace, variant, and compose them however you want."
	/>
</svelte:head>

<Main class="relative isolate flex grow flex-col overflow-hidden">
	<Section
		aria-labelledby="landing-title"
		class="relative isolate w-full bg-gray-50 dark:bg-gray-950  "
	>
		<Div
			aria-hidden="true"
			class="pointer-events-none absolute top-12 -right-24 -z-10 size-80 rounded-full bg-primary-500/10 blur-3xl sm:size-112"
		/>
		<Container
			class="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-16 pb-14 sm:px-10 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:pt-28 lg:pb-20 xl:gap-16 xl:pt-32"
		>
			<Div>
				<P
					class="mb-6 text-[11px] font-medium tracking-[0.25em] text-gray-600 uppercase sm:text-xs dark:text-gray-400"
				>
					Svelte 5 component system
				</P>
				<H1
					id="landing-title"
					class="text-[2.5rem] leading-[1.08] font-bold tracking-[-0.035em] sm:text-5xl xl:text-[3.5rem]"
				>
					Everything included.<Br />
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
				>
					Open source <Span class="mx-2" aria-hidden="true">&bull;</Span> Built for Svelte 5 <Span
						class="mx-2"
						aria-hidden="true"
					>
						&bull;
					</Span> Ready to make yours
				</P>
			</Div>

			<Card
				class="min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white/60 p-0 shadow-lg inset-ring-0 shadow-primary-950/5 dark:border-gray-700/70 dark:bg-gray-950/70 dark:shadow-black/10 dark:shadow-primary-500/5"
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
							>
								{index + 1}
							</Span>
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
					<P class="mt-2 min-h-12 text-sm leading-6 text-gray-600 dark:text-gray-400">
						{step.description}
					</P>
					<Div class="flex min-h-28 items-center justify-center py-6 sm:min-h-32">
						{#if selectedStep === 3}
							<A
								href="/getting-started/usage"
								theme={demoTheme}
								variants={['button.base']}
								class="inline-flex min-w-44 items-center justify-center gap-2 no-underline"
							>
								Get Started <ArrowRight class="size-4 shrink-0" aria-hidden="true" />
							</A>
						{:else}
							<Button
								type="button"
								theme={demoTheme}
								variants={selectedStep === 2 ? ['outline'] : []}
								class="min-w-44"
								onclick={() => clicks++}
							>
								Get Started
							</Button>
						{/if}
					</Div>
					<Card
						class="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-0 inset-ring-0 dark:border-gray-700/60 dark:bg-gray-800/40"
					>
						<Div
							class="flex items-center justify-between border-b border-gray-200 bg-white/50 px-4 py-2 dark:border-gray-700/30 dark:bg-gray-950/40"
						>
							<Span class="text-xs text-gray-600 dark:text-gray-300">
								{selectedStep === 1 ? 'JavaScript' : 'svelte'}
							</Span>
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
					<P aria-live="polite" class="mt-3 min-h-5 text-xs text-gray-600 dark:text-gray-400">
						{copyStatus ||
							(clicks
								? `Button clicked ${clicks} ${clicks === 1 ? 'time' : 'times'}. Try another step.`
								: '')}
					</P>
				</Div>
			</Card>
		</Container>
	</Section>

	<Section
		id="features"
		aria-label="Why Sveltewind"
		class="relative isolate w-full border-y border-gray-200 bg-gray-100 dark:border-gray-800  dark:bg-gray-900 "
	>
		<Container
			class="relative mx-auto grid w-full max-w-7xl scroll-mt-24 grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 sm:gap-10 sm:px-10 lg:grid-cols-5 lg:gap-7 lg:pt-14"
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
						<P class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							{feature.description}
						</P>
					</Div>
				</Div>
			{/each}
		</Container>
	</Section>
	<Section
		aria-labelledby="featured-components-title"
		class="relative isolate w-full bg-gray-50 dark:bg-gray-950  "
	>
		<Div
			aria-hidden="true"
			class="pointer-events-none absolute top-0 right-0 -z-10 size-96 rounded-full bg-primary-500/10 blur-3xl"
		/>
		<Container class="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
			<Div class="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
				<Div>
					<P
						class="mb-4 text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400"
					>
						Meet your building blocks
					</P><H2 id="featured-components-title" class="text-3xl tracking-tight sm:text-4xl">
						Everyday components.<Br />Anything but ordinary.
					</H2>
				</Div>
				<A href="/components" class="inline-flex shrink-0 items-center gap-2 text-sm font-medium">
					Browse all components <ArrowRight aria-hidden="true" class="size-4" />
				</A>
			</Div>
			<ComponentCarousel />
		</Container>
	</Section>

	<Section
		id="global-theming"
		aria-labelledby="global-theming-title"
		class="relative isolate w-full bg-gray-100 dark:bg-gray-900  "
	>
		<Div
			aria-hidden="true"
			class="pointer-events-none absolute top-12 -right-24 -z-10 size-80 rounded-full bg-primary-500/10 blur-3xl sm:size-112"
		/>
		<Container
			class="relative mx-auto grid w-full max-w-7xl scroll-mt-24 gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
		>
			<Div class="lg:pt-6">
				<P
					class="mb-4 text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400"
				>
					01 / Global theming
				</P>
				<H2 id="global-theming-title" class="text-3xl leading-tight tracking-tight sm:text-4xl">
					One change.<Br />Every component follows.
				</H2>
				<P class="mt-6 text-base leading-7">
					Your theme is a shared, reactive source of styles. Update a base style or variant once,
					and every component using it picks up the change. Across forms, pages, and your entire
					app.
				</P>
				<Div class="mt-7 space-y-4">
					{#each ['Roll out a new design without editing every instance.', 'Keep repeated components consistent as your app grows.', 'Change geometry and spacing independently of your color palette.'] as benefit}
						<Div class="flex items-start gap-3">
							<Check aria-hidden="true" class="mt-1 size-4 shrink-0 text-primary-500" /><P
								class="text-sm leading-6"
							>
								{benefit}
							</P>
						</Div>
					{/each}
				</Div>
				<A
					href="/getting-started/theming"
					class="mt-8 inline-flex items-center gap-2 text-sm font-medium"
				>
					Explore the theme API <ArrowRight aria-hidden="true" class="size-4" />
				</A>
			</Div>
			<Card
				class="min-w-0 overflow-hidden border border-gray-200 bg-white p-0 shadow-xl inset-ring-0 shadow-primary-950/5 dark:border-gray-700/70 dark:bg-gray-950/70 dark:shadow-primary-500/5"
			>
				<Div
					class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 px-5 py-4 dark:border-gray-700/50"
				>
					<Span class="text-xs font-medium">One shared theme. Three components.</Span>
					<Div role="group" aria-label="Preview theme style" class="flex flex-wrap gap-1">
						{#each Object.keys(playgroundStyles) as style}
							<Button
								type="button"
								aria-pressed={selectedStyle === style}
								onclick={() => (selectedStyle = style as PlaygroundStyle)}
								variants={['ghost']}
								class={`rounded-md px-3 py-2 text-xs capitalize ${selectedStyle === style ? 'bg-primary-500/10 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300' : ''}`}
							>
								{style}
							</Button>
						{/each}
					</Div>
				</Div>
				<Div class="flex min-h-80 items-center justify-center px-5 py-8 sm:px-8">
					<Card theme={sharedTheme} class="w-full max-w-sm bg-white dark:bg-gray-950">
						<Div class="mb-5 flex items-center justify-between gap-3">
							<H3 class="text-lg font-semibold">Your workspace</H3><Badge>Preview</Badge>
						</Div>
						<Label for="landing-theme-email" class="mb-2 block">Email address</Label>
						<Input
							id="landing-theme-email"
							theme={sharedTheme}
							type="email"
							placeholder="you@example.com"
							class="w-full"
						/>
						<Div class="mt-5 flex flex-wrap gap-3">
							<Button theme={sharedTheme} type="button">Continue</Button><Button
								theme={sharedTheme}
								type="button"
								variants={['outline']}
							>
								Invite a teammate
							</Button>
						</Div>
					</Card>
				</Div>
				<Div
					class="border-t border-gray-200 bg-gray-50 dark:border-gray-700/50 dark:bg-gray-950/50"
				>
					<Div class="flex items-center justify-between px-5 pt-4">
						<Span class="font-mono text-xs text-gray-500">Apply globally</Span><Span
							class="text-xs text-gray-500"
						>
							JavaScript
						</Span>
					</Div>
					<Shiki
						code={globalThemeCode}
						options={{ lang: 'javascript' }}
						isLineNumbersVisible={false}
						class="overflow-x-auto p-5 text-xs [&_code]:bg-transparent [&_code]:p-0"
					/>
				</Div>
			</Card>
		</Container>
	</Section>

	<Section
		aria-labelledby="create-theme-title"
		class="relative isolate w-full border-y border-gray-200 bg-gray-50 dark:border-gray-800  dark:bg-gray-950 "
	>
		<Div
			aria-hidden="true"
			class="pointer-events-none absolute bottom-12 -left-24 -z-10 size-80 rounded-full bg-primary-500/10 blur-3xl sm:size-112"
		/>
		<Container
			class="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-16"
		>
			<Div class="lg:order-2 lg:pt-6">
				<P
					class="mb-4 text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400"
				>
					02 / Make it yours
				</P>
				<H2 id="create-theme-title" class="text-3xl leading-tight tracking-tight sm:text-4xl">
					Your theme.<Br />A few lines of JavaScript.
				</H2>
				<P class="mt-6 text-base leading-7">
					Start with a preset, change what matters, and give it a name. A theme is a plain object of
					component names, base classes, and variants. The Theme API makes extending it just as
					straightforward.
				</P>
				<Div class="mt-7 grid gap-5 sm:grid-cols-3">
					<Div>
						<Span class="text-sm font-semibold">1. Start</Span><P class="mt-1 text-sm leading-6">
							Clone any of the five included presets.
						</P>
					</Div>
					<Div>
						<Span class="text-sm font-semibold">2. Shape</Span><P class="mt-1 text-sm leading-6">
							Merge base classes and define your variants.
						</P>
					</Div>
					<Div>
						<Span class="text-sm font-semibold">3. Share</Span><P class="mt-1 text-sm leading-6">
							Apply it globally or pass it to one component.
						</P>
					</Div>
				</Div>
				<P class="mt-7 text-sm leading-6">
					Keep your theme in its own file and reuse it across projects. Your components keep the
					same API as your design evolves.
				</P>
				<A
					href="/getting-started/theming"
					class="mt-8 inline-flex items-center gap-2 text-sm font-medium"
				>
					Build your first theme <ArrowRight aria-hidden="true" class="size-4" />
				</A>
			</Div>
			<Card
				class="min-w-0 overflow-hidden border border-gray-200 bg-white p-0 shadow-xl inset-ring-0 shadow-primary-950/5 lg:order-1 dark:border-gray-700/70 dark:bg-gray-950/70 dark:shadow-primary-500/5"
			>
				<Div
					class="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-700/50"
				>
					<Span class="font-mono text-xs">brand.ts</Span><Badge>Ready to customize</Badge>
				</Div>
				<Shiki
					code={customThemeCode}
					options={{ lang: 'typescript' }}
					isLineNumbersVisible={false}
					class="overflow-x-auto p-5 text-xs sm:p-6 [&_code]:bg-transparent [&_code]:p-0"
				/>
				<Div class="border-t border-gray-200 p-5 sm:p-6 dark:border-gray-700/50">
					<Card theme={customTheme} class="bg-white dark:bg-gray-950">
						<P class="mb-4 text-xs font-medium tracking-wide uppercase">Your custom cta variant</P>
						<Button
							theme={customTheme}
							type="button"
							variants={['cta']}
							class="inline-flex items-center justify-center gap-2"
						>
							Make it yours <ArrowRight aria-hidden="true" class="size-4 shrink-0" />
						</Button>
					</Card>
				</Div>
			</Card>
		</Container>
	</Section>

	<Section
		aria-labelledby="reuse-styles-title"
		class="relative isolate w-full bg-gray-100 dark:bg-gray-900  "
	>
		<Div
			aria-hidden="true"
			class="pointer-events-none absolute top-12 -right-24 -z-10 size-80 rounded-full bg-primary-500/10 blur-3xl sm:size-112"
		/>
		<Container class="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
			<Div class="mx-auto max-w-2xl text-center">
				<P
					class="mb-4 text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400"
				>
					03 / Styles without boundaries
				</P>
				<H2 id="reuse-styles-title" class="text-3xl leading-tight tracking-tight sm:text-4xl">
					A button's style doesn't<Br class="hidden sm:block" /> have to stay on a button.
				</H2>
				<P class="mt-6 text-base leading-7">
					Reference another component's base classes or a named variant. A link can look like a
					button. A div can use your card surface. Keep the right HTML element and share the same
					design decisions.
				</P>
			</Div>
			<Div class="mt-10 grid gap-6 lg:grid-cols-2">
				<Card
					class="min-w-0 overflow-hidden border border-gray-200 bg-white p-0 shadow-xl inset-ring-0 shadow-primary-950/5 dark:border-gray-700/70 dark:bg-gray-950/70 dark:shadow-primary-500/5"
				>
					<Div class="border-b border-gray-200 px-5 py-4 dark:border-gray-700/50">
						<Span class="font-mono text-xs">Same source. Different elements.</Span>
					</Div>
					<Shiki
						code={reuseCode}
						options={{ lang: 'svelte' }}
						isLineNumbersVisible={false}
						class="overflow-x-auto p-5 text-xs sm:p-6 [&_code]:bg-transparent [&_code]:p-0"
					/>
				</Card>
				<Card
					class="min-w-0 space-y-6 bg-gray-50/50 p-6 sm:p-8 dark:bg-gray-950/70 dark:shadow-primary-500/5"
				>
					<Div class="grid items-center gap-3 sm:grid-cols-[5rem_1fr]">
						<Span class="font-mono text-xs text-gray-500">button</Span><Div>
							<Button type="button" variants={['outline']}>Continue</Button>
						</Div>
					</Div>
					<Div class="grid items-center gap-3 sm:grid-cols-[5rem_1fr]">
						<Span class="font-mono text-xs text-gray-500">a</Span><Div>
							<A
								href="/components"
								variants={['button.base', 'button.variant.outline']}
								class="inline-flex items-center gap-2"
							>
								Explore components <ArrowRight aria-hidden="true" class="size-4" />
							</A>
						</Div>
					</Div>
					<Div class="grid items-center gap-3 sm:grid-cols-[5rem_1fr]">
						<Span class="font-mono text-xs text-gray-500">div</Span><Div
							variants={['card.base']}
							class="bg-white text-sm dark:bg-gray-950"
						>
							Same surface. Your markup.
						</Div>
					</Div>
					<P class="border-t border-gray-200 pt-5 text-sm leading-6 dark:border-gray-700/50">
						Update the source styles and these references follow automatically. Use Settings to
						change the site's style or color and see them stay in sync.
					</P>
				</Card>
			</Div>
		</Container>
	</Section>

	<Section
		aria-labelledby="start-building-title"
		class="relative isolate w-full border-t border-primary-500/15 bg-primary-500/10 "
	>
		<Div
			aria-hidden="true"
			class="pointer-events-none absolute bottom-12 -left-24 -z-10 size-80 rounded-full bg-primary-500/10 blur-3xl sm:size-112"
		/>
		<Container class="relative mx-auto w-full max-w-7xl px-6 py-12 text-center sm:px-10 sm:py-16">
			<P
				class="mb-4 text-xs font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400"
			>
				Your system, your rules
			</P>
			<H2 id="start-building-title" class="text-3xl tracking-tight sm:text-4xl">
				Start with components.<Br />Build a design system that feels like yours.
			</H2>
			<P class="mx-auto mt-5 max-w-xl text-base leading-7">
				One theme to guide your app. Simple tools to shape it. Shared styles that work wherever you
				need them.
			</P>
			<Div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
				<A
					href="/getting-started/installation"
					variants={['button.base']}
					class="inline-flex items-center justify-center gap-2"
				>
					Start building <ArrowRight aria-hidden="true" class="size-4" />
				</A><A
					href="/getting-started/theming"
					variants={['button.base', 'button.variant.outline']}
					class="inline-flex items-center justify-center"
				>
					Read the theming guide
				</A>
			</Div>
		</Container>
	</Section>
</Main>
