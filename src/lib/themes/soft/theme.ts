import { createPreset } from '../createPreset.js';

const theme = createPreset({
	datatableScroll: { base: 'rounded-xl' },
	datatableDialog: { base: 'rounded-xl' },
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
		base: 'rounded-2xl shadow-sm'
	},
	comboboxOption: { base: 'rounded-lg' },
	dialog: {
		base: 'rounded-2xl'
	},
	dropdownMenuItem: { base: 'rounded-lg' },
	fieldset: {
		base: 'rounded-xl'
	},
	fileUploadDropzone: { base: 'rounded-2xl' },
	fileUploadItem: { base: 'rounded-xl' },
	input: {
		base: 'rounded-xl'
	},
	popover: {
		base: 'rounded-2xl'
	},
	select: {
		base: 'rounded-xl'
	},
	skeleton: { base: 'rounded-xl' },
	tabs: {
		base: 'rounded-full'
	},
	textarea: {
		base: 'rounded-xl'
	}
});

export default theme;
export { theme };
