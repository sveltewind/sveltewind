import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { classic, colors, minimal, sharp, soft, studio } from './index.js';
import { completeVariants } from './completeVariants.js';
import { twMerge } from 'tailwind-merge';

describe('color palettes', () => {
	const css = readFileSync(new URL('./palettes.css', import.meta.url), 'utf8');
	it('provides complete primary, secondary, and neutral foreground scales for every selectable palette', () => {
		for (const color of colors) {
			const block = css.match(new RegExp(`html\\[data-color='${color}'\\]\\s*\\{([^}]+)\\}`))?.[1];
			expect(block, color).toBeDefined();
			for (const shade of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]) {
				expect(block).toContain(`--color-primary-${shade}: oklch(`);
				expect(block).toContain(`--color-secondary-${shade}: oklch(`);
				expect(block).toMatch(
					new RegExp(`--primary-foreground-${shade}: var\\(--color-gray-(50|950)\\)`)
				);
				expect(block).toMatch(
					new RegExp(`--secondary-foreground-${shade}: var\\(--color-gray-(50|950)\\)`)
				);
			}
		}
	});
});

describe('built-in theme variants', () => {
	for (const [name, theme] of Object.entries({ classic, minimal, sharp, soft, studio })) {
		it(`${name} overrides link foregrounds when composing button styles in dark mode`, () => {
			const classes = twMerge(theme.a.base, theme.button.base).split(/\s+/);
			expect(classes).toContain('dark:text-primary-contrast-500');
			expect(classes).toContain('dark:hover:text-primary-contrast-600');
			expect(classes).toContain('dark:focus:text-primary-contrast-600');
			expect(classes).not.toContain('dark:text-gray-50');
		});
		it(`${name} pairs solid primary surfaces with shade-specific contrast colors`, () => {
			expect(theme.button.base).toContain('text-primary-contrast-500');
			expect(theme.button.base).toContain('hover:text-primary-contrast-600');
			expect(theme.button.base).toContain('focus:text-primary-contrast-600');
			expect(theme.code.base).toContain('text-primary-contrast-500');
			expect(theme.calendarDay.variants?.selected).toContain('text-primary-contrast-500');
			expect(theme.calendarDay.variants?.selected).toContain('hover:text-primary-contrast-600');
			expect(theme.mark.variants?.solid).toContain('text-primary-contrast-500');
		});
		it(`${name} keeps secondary buttons on the primary shade scale with neutral foregrounds`, () => {
			const secondary = theme.button.variants?.secondary ?? '';
			expect(secondary).toContain('bg-secondary-500');
			expect(secondary).toContain('dark:bg-secondary-500');
			expect(secondary).toContain('hover:bg-secondary-600');
			expect(secondary).toContain('focus:bg-secondary-600');
			expect(secondary).toContain('text-(--secondary-foreground-500)');
			expect(secondary).toContain('hover:text-(--secondary-foreground-600)');
			expect(secondary).not.toContain('bg-secondary-300');
			expect(secondary).not.toContain('text-secondary-');
			expect(theme.code.variants?.secondary).toContain('bg-secondary-500');
		});
		it(`${name} supplies secondary colors for primary bases and primary variants`, () => {
			for (const component of Object.values(theme)) {
				if (!component.base.includes('primary-') && !component.variants?.primary) continue;
				expect(component.variants?.secondary).toContain('secondary-');
				expect(component.variants?.secondary).not.toContain('primary-');
			}
		});
		it(`${name} supplies at least three variants for every component and part`, () => {
			expect(
				Object.entries(theme).filter(
					([, component]) => Object.keys(component.variants ?? {}).length < 3
				)
			).toEqual([]);
		});
		it(`${name} exposes the same variant names as Classic`, () => {
			expect(
				Object.fromEntries(
					Object.entries(theme).map(([key, component]) => [
						key,
						Object.keys(component.variants ?? {}).sort()
					])
				)
			).toEqual(
				Object.fromEntries(
					Object.entries(classic).map(([key, component]) => [
						key,
						Object.keys(component.variants ?? {}).sort()
					])
				)
			);
		});
	}
	it('retains existing variant styles and default styles', () => {
		const theme = {
			checkbox: { base: 'original-base', variants: { compact: 'original-compact' } }
		};
		completeVariants(theme);
		expect(theme.checkbox.base).toBe('original-base');
		expect(theme.checkbox.variants.compact).toBe('original-compact');
	});
});
