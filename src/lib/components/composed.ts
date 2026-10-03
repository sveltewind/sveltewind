import type { Snippet } from 'svelte';

export type AvatarItem = { name: string; src?: string };
export type BreadcrumbItem = { href?: string; label: string };
export type CarouselSlide = { content: Snippet; id: string; label?: string };
export type MenuItem = { disabled?: boolean; href?: string; label: string; value: string };
export type SelectOption = { disabled?: boolean; label: string; value: string };
export type StepperItem = { description?: string; disabled?: boolean; label: string };
export type ToastItem = {
	duration?: number;
	id: string;
	message: string;
	status?: ToastStatus;
	title?: string;
};
export type ToastStatus = 'error' | 'info' | 'success' | 'warning';
