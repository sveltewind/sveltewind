import { createPreset } from '../createPreset.js';

const theme = createPreset({
	accordion: {
		base: 'rounded-none inset-ring-0 border-b border-gray-200 dark:border-gray-700'
	},
	badge: {
		base: 'rounded-sm bg-transparent dark:bg-transparent'
	},
	button: {
		base: 'rounded-md bg-gray-950 hover:bg-gray-800 focus:bg-gray-800 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200 dark:hover:text-gray-950 dark:focus:bg-gray-200 dark:focus:text-gray-950'
	},
	card: {
		base: 'rounded-none inset-ring-0 border-b border-gray-200 dark:border-gray-700'
	},
	fieldset: {
		base: 'rounded-none'
	},
	h1: {
		base: 'font-medium'
	},
	h2: {
		base: 'font-medium'
	},
	h3: {
		base: 'font-medium'
	},
	input: {
		base: 'rounded-none inset-ring-0 border-b border-gray-300 focus-visible:border-primary-500 dark:border-gray-600'
	},
	select: {
		base: 'rounded-none inset-ring-0 border-b border-gray-300 dark:border-gray-600'
	},
	tabs: {
		base: 'rounded-none inset-ring-0 border-b border-gray-200 dark:border-gray-700'
	},
	textarea: {
		base: 'rounded-none inset-ring-0 border-b border-gray-300 dark:border-gray-600'
	}
});

export default theme;
export { theme };
