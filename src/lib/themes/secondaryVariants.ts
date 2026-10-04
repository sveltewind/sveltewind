import { twMerge } from 'tailwind-merge';
import type { ThemeObject } from '$lib/theme/types.js';

/** Match primary colors without copying layout classes over a style preset's overrides. */
export function completeSecondaryVariants(theme: ThemeObject): void {
	for (const component of Object.values(theme)) {
		const baseColors = component.base
			.split(/\s+/)
			.filter((token) => token.includes('primary-'))
			.join(' ');
		const primary = component.variants?.primary;
		if (!baseColors && !primary) continue;
		component.variants ??= {};
		const source = twMerge(baseColors, primary);
		const backgrounds = source.split(/\s+/).filter((token) => /bg-primary-\d+/.test(token));
		if (!backgrounds.length) {
			component.variants.secondary = source.replaceAll('primary-', 'secondary-');
			continue;
		}
		// Background variants retain the original shades and geometry. Neutral text is
		// selected per palette/shade instead of lightening the background in dark mode.
		const foregrounds: string[] = [];
		if (
			/(?:^|[\s:])text-(?:primary-(?:contrast-)?\d+|white|black|gray-\d+)(?:\s|$)/.test(
				`${component.base} ${primary ?? ''}`
			)
		) {
			for (const token of backgrounds) {
				const match = token.match(/^(.*:)?bg-primary-(\d+)(\/[^\s]+)?$/);
				if (!match) continue;
				const [, prefix = '', shade, opacity] = match;
				if (opacity) {
					foregrounds.push(`${prefix}text-gray-950`, `dark:${prefix}text-gray-50`);
				} else {
					foregrounds.push(`${prefix}text-(--secondary-foreground-${shade})`);
				}
			}
		}
		component.variants.secondary = twMerge(
			backgrounds.join(' ').replaceAll('primary-', 'secondary-'),
			...foregrounds
		);
	}
}
