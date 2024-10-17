import { twMerge } from 'tailwind-merge';
import { type Theme } from './types.js';

let state: Theme = $state({});

export default {
	get: () => state,
	getComponent: (componentKey: string) => state?.[componentKey],
	getComponentVariant: (componentKey: string, variantKey: string) =>
		state?.[componentKey]?.[variantKey],
	set: (input: Theme) => (state = structuredClone(input)),
	setComponent: (componentKey: string, value: Record<string, string> & { default: string }) => {
		if (typeof value !== 'string') state[componentKey] = structuredClone(value);
		if (typeof value === 'string') state[componentKey]['default'] = value;
	},
	setComponentVariant: (componentKey: string, variantKey: string, value: string) =>
		(state[componentKey][variantKey] = value),
	update: (input: Theme) =>
		(state = Object.keys(input).reduce((obj, componentKey) => {
			if (obj?.[componentKey]) {
				obj[componentKey] = Object.keys(obj[componentKey]).reduce((obj, variantKey) => {
					if (obj?.[variantKey]) {
						obj[variantKey] = twMerge(obj[variantKey], input[componentKey][variantKey]);
					}
					return obj;
				}, obj[componentKey]);
			}
			return obj;
		}, state)),
	updateComponent: (componentKey: string, value: Record<string, string>) =>
		(state[componentKey] = Object.keys(value).reduce((obj, variantKey) => {
			if (obj?.[variantKey]) {
				obj[variantKey] = twMerge(obj[variantKey], value[variantKey]);
			}
			return obj;
		}, state[componentKey])),
	updateComponentVariant: (componentKey: string, variantKey: string, value: string) => {
		if (state?.[componentKey]) {
			state[componentKey][variantKey] = twMerge(state[componentKey][variantKey], value);
		}
	}
};
