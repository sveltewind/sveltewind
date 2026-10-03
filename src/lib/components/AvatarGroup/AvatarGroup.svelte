<script lang="ts">
	import { Avatar, Div, Span, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { AvatarItem } from '../composed.js';

	// Types

	type Props = HTMLAttributes<HTMLDivElement> & {
		avatars?: AvatarItem[];
		children?: Snippet;
		class?: string;
		element?: HTMLDivElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		max?: number;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// $props
	let {
		avatars = [],
		children,
		class: className = '',
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		max = 4,
		outTransition,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $derived
	const classes = $derived(theme.resolve('avatarGroup', variants, className));
	const overflow = $derived(Math.max(0, avatars.length - Math.max(0, Math.floor(max))));
	const visibleAvatars = $derived(avatars.slice(0, Math.max(0, Math.floor(max))));
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
	role="group"
	aria-label={restProps['aria-label'] ?? 'People'}
>
	{#if children}{@render children()}{:else}{#each visibleAvatars as avatar, index (index)}<Avatar
				{theme}
				name={avatar.name}
				src={avatar.src}
			/>{/each}{#if overflow > 0}<Span
				{theme}
				class={theme.resolve('avatarOverflow')}
				aria-label={`${overflow} more people`}>+{overflow}</Span
			>{/if}{/if}</Div
>
