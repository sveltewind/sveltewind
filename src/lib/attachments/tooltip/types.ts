import type { Snippet } from 'svelte';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipState = {
	content: string | Snippet;
	parentElement: HTMLElement;
	placement: TooltipPlacement;
};
