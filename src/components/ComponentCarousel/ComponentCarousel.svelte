<script lang="ts">
	import {
		A,
		Accordion,
		Alert,
		Badge,
		Button,
		Card,
		Carousel,
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
	import { ArrowRight, Check } from '$lib/icons';
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
	let dialogVisible = $state(false);
	let notifications = $state(true);
	let saved = $state(false);
	let selectedTab = $state('overview');
</script>

<P class="mb-4 text-sm">Swipe to explore, or use the arrows. These are real components.</P>
<Carousel
	label="Featured components"
	perView={3}
	showIndicators={false}
	slides={[
		{ content: buttonSlide, id: 'button', label: 'Button' },
		{ content: inputSlide, id: 'input', label: 'Input' },
		{ content: cardSlide, id: 'card', label: 'Card' },
		{ content: switchSlide, id: 'switch', label: 'Switch' },
		{ content: accordionSlide, id: 'accordion', label: 'Accordion' },
		{ content: tabsSlide, id: 'tabs', label: 'Tabs' },
		{ content: alertSlide, id: 'alert', label: 'Alert' },
		{ content: dialogSlide, id: 'dialog', label: 'Dialog' }
	]}
/>

{#snippet componentSlide(component: FeaturedComponent)}
	<Card
		class="flex h-full shrink-0 snap-start flex-col overflow-hidden border border-gray-200 bg-white p-0 shadow-lg inset-ring-0 shadow-primary-950/5 dark:border-gray-700 dark:bg-gray-950 dark:shadow-primary-500/5"
	>
		<Div class="flex min-h-60 items-center justify-center bg-primary-500/5 p-6"
			>{@render component.preview()}</Div
		>
		<Div class="flex grow flex-col border-t border-gray-200 p-6 dark:border-gray-800"
			><H3 class="text-lg font-semibold">{component.name}</H3><P class="mt-2 grow text-sm leading-6"
				>{component.description}</P
			><A
				href={`/components/${component.name.toLowerCase()}`}
				class="mt-5 inline-flex items-center gap-2 text-sm"
				>Explore {component.name}<ArrowRight aria-hidden="true" class="size-4" /></A
			></Div
		>
	</Card>
{/snippet}

{#snippet buttonSlide()}
	{@render componentSlide(components[0])}
{/snippet}

{#snippet inputSlide()}
	{@render componentSlide(components[1])}
{/snippet}

{#snippet cardSlide()}
	{@render componentSlide(components[2])}
{/snippet}

{#snippet switchSlide()}
	{@render componentSlide(components[3])}
{/snippet}

{#snippet accordionSlide()}
	{@render componentSlide(components[4])}
{/snippet}

{#snippet tabsSlide()}
	{@render componentSlide(components[5])}
{/snippet}

{#snippet alertSlide()}
	{@render componentSlide(components[6])}
{/snippet}

{#snippet dialogSlide()}
	{@render componentSlide(components[7])}
{/snippet}
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
		><Button
			type="button"
			class="inline-flex items-center justify-center gap-2"
			onclick={() => (saved = !saved)}
			>{saved ? 'Saved!' : 'Save changes'}
			<Check aria-hidden="true" class="size-4 shrink-0" /></Button
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
