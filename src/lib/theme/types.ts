import { Theme } from './theme.svelte';
export type ThemeObject = Record<string, ThemeComponent>;
export type { Theme };
export type ThemeComponent = {
	base: string;
	variants?: Record<string, string>;
};
