<script lang="ts">
	import { Button, Div, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { tick, untrack, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CarouselSlide } from '../composed.js';

	// Types

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		inTransition?: TransitionProps;
		index?: number;
		isVisible?: boolean;
		label?: string;
		onIndexChange?: ((index: number) => void) | undefined;
		outTransition?: TransitionProps;
		perView?: number;
		showIndicators?: boolean;
		slides?: CarouselSlide[];
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// Constants
	let observedIndex = 0;
	const uid = $props.id();

	// $props
	let {
		children,
		class: className = '',
		element = $bindable(null),
		inTransition,
		index = $bindable(0),
		isVisible = $bindable(true),
		label = 'Carousel',
		onIndexChange,
		outTransition,
		perView = 1,
		showIndicators = true,
		slides = [],
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let canScrollBack = $state(false);
	let canScrollForward = $state(false);
	let track = $state<HTMLDivElement | null>(null);
	let visibleCount = $state(1);

	// $derived
	const classes = $derived(theme.resolve('carousel', variants, className));
	const columns = $derived(Math.max(1, Math.floor(perView)));
	const indicators = $derived(slides.slice(0, Math.max(1, slides.length - visibleCount + 1)));

	// Helpers
	const move = (next: number) => {
		if (!track || !slides.length) return;
		const node = track.children[Math.max(0, Math.min(slides.length - 1, next))] as
			| HTMLElement
			| undefined;
		if (!node) return;
		track.scrollTo({
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
			left: node.offsetLeft - (track.firstElementChild as HTMLElement).offsetLeft
		});
	};
	const updateScroll = () => {
		if (!track) return;
		canScrollBack = track.scrollLeft > 2;
		canScrollForward = track.scrollLeft + track.clientWidth < track.scrollWidth - 2;
		const first = track.children[0] as HTMLElement | undefined;
		const second = track.children[1] as HTMLElement | undefined;
		const stride =
			second && first ? second.offsetLeft - first.offsetLeft : (first?.offsetWidth ?? 1);
		visibleCount = Math.max(1, Math.round((track.clientWidth + 24) / Math.max(1, stride)));
		const next = Math.max(0, Math.round(track.scrollLeft / Math.max(1, stride)));
		observedIndex = next;
		if (index !== next) {
			index = next;
			onIndexChange?.(next);
		}
	};

	// $effect
	$effect(() => {
		if (track && index !== observedIndex) {
			const target = index;
			observedIndex = index;
			void tick().then(() => move(target));
		}
	});
	$effect(() => {
		if (!track) return;
		const observer = new ResizeObserver(updateScroll);
		observer.observe(track);
		if (track.firstElementChild) observer.observe(track.firstElementChild);
		untrack(updateScroll);
		return () => observer.disconnect();
	});
</script>

<Div
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
	role="region"
	aria-roledescription="carousel"
	aria-label={restProps['aria-label'] ?? label}
>
	<Div {theme} class={theme.resolve('carouselControls')}
		><Button
			{theme}
			type="button"
			variants={['outline']}
			aria-label="Previous slide"
			aria-controls={`${uid}-track`}
			disabled={!canScrollBack}
			onclick={() => move(index - 1)}>Previous</Button
		><Button
			{theme}
			type="button"
			variants={['outline']}
			aria-label="Next slide"
			aria-controls={`${uid}-track`}
			disabled={!canScrollForward}
			onclick={() => move(index + 1)}>Next</Button
		></Div
	>
	<Div
		{theme}
		id={`${uid}-track`}
		bind:element={track}
		tabindex={0}
		aria-label="Scrollable slides"
		class={theme.resolve('carouselTrack')}
		style={`--carousel-columns: ${columns}; --carousel-tablet-columns: ${Math.min(2, columns)};`}
		onscroll={updateScroll}
		onkeydown={(event) => {
			if (event.target !== track) return;
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				move(index + 1);
			} else if (event.key === 'ArrowLeft') {
				event.preventDefault();
				move(index - 1);
			} else if (event.key === 'Home') {
				event.preventDefault();
				move(0);
			} else if (event.key === 'End') {
				event.preventDefault();
				move(slides.length - 1);
			}
		}}
	>
		{#each slides as slide, i (slide.id)}<Div
				{theme}
				role="group"
				aria-roledescription="slide"
				aria-label={`${i + 1} of ${slides.length}${slide.label ? ': ' + slide.label : ''}`}
				class={theme.resolve('carouselSlide')}>{@render slide.content()}</Div
			>{/each}{#if children}{@render children()}{/if}</Div
	>
	{#if showIndicators}<Div {theme} class={theme.resolve('carouselIndicators')}
			>{#each indicators as slide, i (slide.id)}<Button
					{theme}
					type="button"
					variants={['ghost']}
					class={theme.resolve('carouselIndicator', [i === index ? 'active' : ''])}
					aria-label={`Show slide ${i + 1}${slide.label ? ': ' + slide.label : ''}`}
					aria-current={i === index ? 'true' : undefined}
					onclick={() => move(i)}><Span {theme} class="sr-only">{i + 1}</Span></Button
				>{/each}</Div
		>{/if}</Div
>
