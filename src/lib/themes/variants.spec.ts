import { describe, expect, it } from 'vitest';
import { classic, minimal, sharp, soft, studio } from './index.js';
import { completeVariants } from './completeVariants.js';

describe('built-in theme variants', () => {
	for (const [name, theme] of Object.entries({ classic, minimal, sharp, soft, studio })) {
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
