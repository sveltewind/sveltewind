import { createPreset } from '../createPreset.js';

const theme = createPreset({
	datatableScroll: { base: 'rounded-xl shadow-sm' },
	datatableDialog: { base: 'rounded-xl shadow-sm' },
	accordion: {
		base: 'rounded-xl'
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
		base: 'rounded-xl shadow-lg'
	},
	fieldset: {
		base: 'rounded-xl'
	},
	fileUploadDropzone: { base: 'rounded-xl' },
	fileUploadItem: { base: 'rounded-lg' },
	input: {
		base: 'rounded-lg'
	},
	popover: {
		base: 'rounded-xl shadow-xl'
	},
	select: {
		base: 'rounded-lg'
	},
	skeleton: { base: 'rounded-lg' },
	tabs: {
		base: 'rounded-xl'
	},
	textarea: {
		base: 'rounded-lg'
	}
});

export default theme;
export { theme };
