import { describe, expect, it } from 'vitest';
import { classic, minimal, sharp, soft, studio } from './index.js';
import { completeVariants } from './completeVariants.js';

describe('built-in theme variants', () => {
	for (const [name, theme] of Object.entries({ classic, minimal, sharp, soft, studio })) {
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
