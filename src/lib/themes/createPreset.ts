import { twMerge } from 'tailwind-merge';
import type { ThemeUpdate } from '$lib/theme/theme.svelte.js';
import type { ThemeObject } from '$lib/theme/types.js';
import { theme as classic } from './classic/theme.js';
import { completeSecondaryVariants } from './secondaryVariants.js';

/** Build a complete, independent preset while retaining Classic's variants and behavior. */
export function createPreset(overrides: ThemeUpdate): ThemeObject {
	const theme = Object.fromEntries(
		Object.entries(classic).map(([name, component]) => {
			const override = overrides[name];
			return [
				name,
				{
					base: twMerge(component.base, override?.base),
					variants: { ...component.variants, ...override?.variants }
				}
			];
		})
	);
	completeSecondaryVariants(theme);
	return theme;
}
