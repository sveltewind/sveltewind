import { twMerge } from 'tailwind-merge';
import type { ThemeObject, ThemeComponent } from './types.js';

export type ThemeComponentUpdate = {
	base?: string;
	variants?: Record<string, string>;
};

export type ThemeUpdate = Partial<Record<string, ThemeComponentUpdate>>;

class Theme {
	theme = $state<ThemeObject>({});

	constructor(initialTheme: ThemeObject = {}) {
		this.theme = initialTheme;
	}

	private ensureComponent(componentName: string): ThemeComponent {
		if (!this.theme[componentName]) {
			this.theme[componentName] = { base: '', variants: {} };
		}

		if (!this.theme[componentName].variants) {
			this.theme[componentName].variants = {};
		}

		return this.theme[componentName];
	}

	private resolveToken(token: string): string {
		const parts = token.split('.');

		// button.base
		if (parts.length === 2 && parts[1] === 'base') {
			return this.theme[parts[0]]?.base ?? '';
		}

		// button.variant.primary
		if (parts.length === 3 && parts[1] === 'variant') {
			return this.theme[parts[0]]?.variants?.[parts[2]] ?? '';
		}

		return '';
	}

	get = {
		theme: () => this.theme,

		component: (componentName: string) => {
			return this.theme[componentName];
		},

		base: (componentName: string) => {
			return this.theme[componentName]?.base ?? '';
		},

		variant: (componentName: string, variantName: string) => {
			return this.theme[componentName]?.variants?.[variantName] ?? '';
		}
	};

	resolve = (componentName: string, variants: string[] = [], className = '') => {
		const component = this.theme[componentName];
		if (!component) return twMerge(className);

		const resolved: string[] = [component.base];

		for (const token of variants) {
			if (!token) continue;

			// local variant
			if (!token.includes('.')) {
				resolved.push(component.variants?.[token] ?? '');
				continue;
			}

			// external ref
			resolved.push(this.resolveToken(token));
		}

		return twMerge(...resolved, className);
	};

	set = {
		theme: (nextTheme: ThemeObject) => {
			this.theme = nextTheme;
			return this;
		},

		component: (componentName: string, component: ThemeComponent) => {
			this.theme[componentName] = {
				base: component.base,
				variants: { ...(component.variants ?? {}) }
			};
			return this;
		},

		base: (componentName: string, base: string) => {
			const component = this.ensureComponent(componentName);
			component.base = base;
			return this;
		},

		variant: (componentName: string, variantName: string, variant: string) => {
			const component = this.ensureComponent(componentName);
			component.variants![variantName] = variant;
			return this;
		}
	};

	update = {
		theme: (update: ThemeUpdate) => {
			for (const componentName in update) {
				const componentUpdate = update[componentName];
				if (componentUpdate) {
					this.update.component(componentName, componentUpdate);
				}
			}
			return this;
		},

		component: (componentName: string, update: ThemeComponentUpdate) => {
			const component = this.ensureComponent(componentName);

			if (update.base) {
				component.base = twMerge(component.base, update.base);
			}

			if (update.variants) {
				for (const variantName in update.variants) {
					const nextVariant = update.variants[variantName];
					const currentVariant = component.variants?.[variantName] ?? '';

					component.variants![variantName] = twMerge(currentVariant, nextVariant);
				}
			}

			return this;
		},

		base: (componentName: string, base: string) => {
			const component = this.ensureComponent(componentName);
			component.base = twMerge(component.base, base);
			return this;
		},

		variant: (componentName: string, variantName: string, variant: string) => {
			const component = this.ensureComponent(componentName);
			const current = component.variants?.[variantName] ?? '';

			component.variants![variantName] = twMerge(current, variant);
			return this;
		}
	};
}

export const theme = new Theme({});
export { Theme };
