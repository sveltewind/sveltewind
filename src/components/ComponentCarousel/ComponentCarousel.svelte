<script lang="ts">
	import {
		A,
		Accordion,
		Alert,
		Badge,
		Button,
		Card,
		Dialog,
		Div,
		H3,
		Input,
		Label,
		P,
		Span,
		Switch,
		Tabs
	} from '$lib/components';
	import { ArrowLeft, ArrowRight, Check } from '$lib/icons';
	import type { Snippet } from 'svelte';

	// Types
	type FeaturedComponent = { description: string; name: string; preview: Snippet };

	// Constants
	const components: FeaturedComponent[] = [
		{
			description: 'One button. Every action. Endless variants.',
			name: 'Button',
			preview: buttonPreview
		},
		{
			description: 'Native inputs that belong to your design system.',
			name: 'Input',
			preview: inputPreview
		},
		{
			description: 'A shared surface for whatever you are building.',
			name: 'Card',
			preview: cardPreview
		},
		{
			description: 'A small control with a clear on or off state.',
			name: 'Switch',
			preview: switchPreview
		},
		{
			description: 'Native disclosure, styled your way.',
			name: 'Accordion',
			preview: accordionPreview
		},
		{ description: 'Keep related views together.', name: 'Tabs', preview: tabsPreview },
		{
			description: 'Give important messages a place to stand out.',
			name: 'Alert',
			preview: alertPreview
		},
		{ description: 'Bring the next step into focus.', name: 'Dialog', preview: dialogPreview }
	];
	const instanceId = $props.id();

	// $state
	let canScrollBack = $state(false);
	let canScrollForward = $state(true);
	let dialogVisible = $state(false);
	let notifications = $state(true);
	let saved = $state(false);
	let selectedTab = $state('overview');
	let track = $state<HTMLDivElement | null>(null);

	// Helpers
	const scroll = (direction: number) => {
		if (!track) return;
		track.scrollBy({
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
			left: direction * (track.clientWidth + 24)
		});
	};
	const updateScroll = () => {
		if (!track) return;
		canScrollBack = track.scrollLeft > 2;
		canScrollForward = track.scrollLeft + track.clientWidth < track.scrollWidth - 2;
	};

	// $effect
	$effect(() => {
		if (!track) return;
		const observer = new ResizeObserver(updateScroll);
		observer.observe(track);
		updateScroll();
		return () => observer.disconnect();
	});
</script>

<Div role="region" aria-label="Featured components" aria-roledescription="carousel">
	<Div class="mb-6 flex flex-wrap items-center justify-between gap-4">
		<P class="text-sm">Swipe to explore, or use the arrows. These are real components.</P>
		<Div class="flex gap-2">
			<Button
				type="button"
				aria-label="Previous components"
				aria-controls={`${instanceId}-track`}
				disabled={!canScrollBack}
				onclick={() => scroll(-1)}
				variants={['outline']}
				class="flex size-11 items-center justify-center p-0"
				><ArrowLeft aria-hidden="true" class="size-4" /></Button
			>
			<Button
				type="button"
				aria-label="Next components"
				aria-controls={`${instanceId}-track`}
				disabled={!canScrollForward}
				onclick={() => scroll(1)}
				variants={['outline']}
				class="flex size-11 items-center justify-center p-0"
				><ArrowRight aria-hidden="true" class="size-4" /></Button
			>
		</Div>
	</Div>
	<Div
		id={`${instanceId}-track`}
		bind:element={track}
		onscroll={updateScroll}
		tabindex={0}
		aria-label="Scrollable component previews"
		class="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-1 pt-2 pb-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
	>
		{#each components as component, index (component.name)}
			<Card
				role="group"
				aria-roledescription="slide"
				aria-label={`${index + 1} of ${components.length}: ${component.name}`}
				class="flex w-[min(85vw,21rem)] shrink-0 snap-start flex-col overflow-hidden border border-gray-200 bg-white p-0 shadow-lg inset-ring-0 shadow-primary-950/5 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] dark:border-gray-700 dark:bg-gray-950 dark:shadow-primary-500/5"
			>
				<Div class="flex min-h-60 items-center justify-center bg-primary-500/5 p-6"
					>{@render component.preview()}</Div
				>
				<Div class="flex grow flex-col border-t border-gray-200 p-6 dark:border-gray-800"
					><H3 class="text-lg font-semibold">{component.name}</H3><P
						class="mt-2 grow text-sm leading-6">{component.description}</P
					><A
						href={`/components/${component.name.toLowerCase()}`}
						class="mt-5 inline-flex items-center gap-2 text-sm"
						>Explore {component.name}<ArrowRight aria-hidden="true" class="size-4" /></A
					></Div
				>
			</Card>
		{/each}
	</Div>
</Div>

{#snippet accordionPreview()}
	<Accordion summary="Can I make it my own?" class="w-full bg-white dark:bg-gray-950"
		><P class="text-sm">Change its theme, add variants, or use your own classes.</P></Accordion
	>
{/snippet}
{#snippet alertPreview()}
	<Alert variants={['success']} class="w-full"
		><Div class="flex items-start gap-3"
			><Check aria-hidden="true" class="mt-1 size-4 shrink-0" /><Div
				><Span class="font-semibold">You're all set.</Span><P
					class="mt-1 text-sm text-inherit dark:text-inherit">Your changes have been saved.</P
				></Div
			></Div
		></Alert
	>
{/snippet}
{#snippet buttonPreview()}
	<Div class="flex flex-col items-center gap-3"
		><Button type="button" onclick={() => (saved = !saved)}
			>{saved ? 'Saved!' : 'Save changes'} <Check aria-hidden="true" class="ml-2 size-4" /></Button
		><Button type="button" variants={['outline']}>Another possibility</Button></Div
	>
{/snippet}
{#snippet cardPreview()}
	<Card class="w-full bg-white dark:bg-gray-950"
		><Badge>Workspace</Badge><H3 class="mt-3 text-base font-semibold"
			>A place for your next idea.</H3
		><P class="mt-2 text-sm">One surface. A thousand possibilities.</P></Card
	>
{/snippet}
{#snippet dialogPreview()}
	<Button type="button" onclick={() => (dialogVisible = true)}>Open dialog</Button>
	<Dialog
		bind:isVisible={dialogVisible}
		aria-labelledby={`${instanceId}-dialog-title`}
		class="w-[calc(100vw-3rem)] max-w-sm bg-white dark:bg-gray-950"
		><H3 id={`${instanceId}-dialog-title`} class="text-xl">Room for the important things.</H3><P
			class="mt-3 text-sm">A native dialog with your theme built in.</P
		><Button type="button" class="mt-6" onclick={() => (dialogVisible = false)}>Got it</Button
		></Dialog
	>
{/snippet}
{#snippet inputPreview()}
	<Div class="w-full"
		><Label for={`${instanceId}-email`} class="mb-2 block">Your email</Label><Input
			id={`${instanceId}-email`}
			type="email"
			placeholder="you@example.com"
			class="w-full"
		/><P class="mt-3 text-xs">A familiar control, with your own style.</P></Div
	>
{/snippet}
{#snippet switchPreview()}
	<Card class="w-full bg-white dark:bg-gray-950"
		><Switch bind:checked={notifications} class="w-full justify-between"
			><Span class="text-sm">Notifications</Span></Switch
		><P aria-live="polite" class="mt-4 text-xs"
			>{notifications ? 'Stay in the loop.' : 'A little peace and quiet.'}</P
		></Card
	>
{/snippet}
{#snippet tabsPreview()}
	<Div class="w-full"
		><Tabs
			bind:value={selectedTab}
			tabs={[
				{ title: 'Overview', value: 'overview' },
				{ title: 'Details', value: 'details' }
			]}
		/><P class="mt-4 text-center text-sm"
			>{selectedTab === 'overview' ? 'The bigger picture.' : 'The little things that matter.'}</P
		></Div
	>
{/snippet}
