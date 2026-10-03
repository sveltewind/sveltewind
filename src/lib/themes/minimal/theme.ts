import { createPreset } from '../createPreset.js';

const theme = createPreset({
	accordion: {
		base: 'rounded-none inset-ring-0 border-b border-gray-200 dark:border-gray-700'
	},
	avatar: { base: 'rounded-sm' },
	avatarOverflow: { base: 'rounded-sm' },
	badge: {
		base: 'rounded-sm bg-transparent dark:bg-transparent'
	},
	button: { base: 'rounded-sm px-4 py-2 shadow-none' },
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
	fileUploadDropzone: { base: 'rounded-none bg-transparent dark:bg-transparent' },
	fileUploadItem: { base: 'rounded-none' },
	input: {
		base: 'rounded-none inset-ring-0 border-b border-gray-300 dark:border-gray-600'
	},
	select: {
		base: 'rounded-none inset-ring-0 border-b border-gray-300 dark:border-gray-600'
	},
	skeleton: { base: 'rounded-sm' },
	tabs: {
		base: 'rounded-none inset-ring-0 border-b border-gray-200 dark:border-gray-700'
	},
	textarea: {
		base: 'rounded-none inset-ring-0 border-b border-gray-300 dark:border-gray-600'
	}
});

export default theme;
export { theme };
