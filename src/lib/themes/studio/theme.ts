import { createPreset } from '../createPreset.js';

const theme = createPreset({
	accordion: {
		base: 'rounded-xl bg-white dark:bg-gray-900'
	},
	alert: {
		base: 'rounded-xl'
	},
	badge: {
		base: 'rounded-md'
	},
	button: {
		base: 'rounded-lg shadow-md shadow-primary-500/20'
	},
	card: {
		base: 'rounded-xl bg-white shadow-lg dark:bg-gray-900'
	},
	dialog: {
		base: 'rounded-xl bg-white shadow-xl dark:bg-gray-900'
	},
	fieldset: {
		base: 'rounded-xl'
	},
	input: {
		base: 'rounded-lg bg-white dark:bg-gray-900'
	},
	popover: {
		base: 'rounded-xl shadow-xl'
	},
	select: {
		base: 'rounded-lg bg-white dark:bg-gray-900'
	},
	tabs: {
		base: 'rounded-xl bg-gray-100 dark:bg-gray-900'
	},
	textarea: {
		base: 'rounded-lg bg-white dark:bg-gray-900'
	}
});

export default theme;
export { theme };
