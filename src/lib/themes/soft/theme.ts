import { createPreset } from '../createPreset.js';

const theme = createPreset({
	accordion: {
		base: 'rounded-2xl'
	},
	alert: {
		base: 'rounded-xl'
	},
	badge: {
		base: 'rounded-full'
	},
	button: {
		base: 'rounded-full shadow-sm'
	},
	card: {
		base: 'rounded-2xl bg-primary-500/5 inset-ring-primary-500/15'
	},
	details: {
		base: 'rounded-2xl'
	},
	dialog: {
		base: 'rounded-2xl bg-gray-50 dark:bg-gray-900'
	},
	fieldset: {
		base: 'rounded-xl'
	},
	input: {
		base: 'rounded-xl bg-gray-100/70 dark:bg-gray-900'
	},
	popover: {
		base: 'rounded-2xl'
	},
	select: {
		base: 'rounded-xl bg-gray-100/70 dark:bg-gray-900'
	},
	tabs: {
		base: 'rounded-full bg-primary-500/5'
	},
	textarea: {
		base: 'rounded-xl bg-gray-100/70 dark:bg-gray-900'
	}
});

export default theme;
export { theme };
