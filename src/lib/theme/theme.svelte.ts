import { twMerge } from 'tailwind-merge';
import type { Theme, ThemeComponent, ThemeComponentVariant } from './types.js';

class ThemeClass {
	theme: Theme;

	constructor(theme: Theme) {
		this.theme = $state(theme);
	}

	get() {
		return this.theme;
	}
	getComponent(componentName: string) {
		return this.theme?.[componentName];
	}
	getComponentVariant(componentName: string, variantName: string) {
		return this.theme?.[componentName]?.[variantName];
	}
	set(set: Theme) {
		this.theme = set;
	}
	setComponent(componentName: string, component: ThemeComponent) {
		this.theme[componentName] = component;
	}
	setComponentVariant(componentName: string, variantName: string, variant: string) {
		if (!(componentName in this.theme)) this.theme[componentName] = { default: '' };
		this.theme[componentName][variantName] = variant;
	}
	update(update: Theme) {
		for (const componentName in update) {
			this.updateComponent(componentName, update[componentName]);
		}
	}
	updateComponent(componentName: string, update: ThemeComponent) {
		if (!(componentName in this.theme)) this.theme[componentName] = { default: '' };
		for (const variantName in update) {
			this.updateComponentVariant(componentName, variantName, update[variantName]);
		}
	}
	updateComponentVariant(
		componentName: string,
		variantName: string,
		variant: ThemeComponentVariant
	) {
		if (!(componentName in this.theme)) this.theme[componentName] = { default: '' };
		if (!(variantName in this.theme[componentName])) this.theme[componentName][variantName] = '';
		this.theme[componentName][variantName] = twMerge(
			this.theme[componentName][variantName],
			variant
		);
	}
}

export const theme = new ThemeClass({});
