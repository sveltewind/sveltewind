import { createPreset } from '../createPreset.js';

const theme = createPreset({
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
	dialog: {
		base: 'rounded-xl shadow-xl'
	},
	fieldset: {
		base: 'rounded-xl'
	},
	input: {
		base: 'rounded-lg'
	},
	popover: {
		base: 'rounded-xl shadow-xl'
	},
	select: {
		base: 'rounded-lg'
	},
	tabs: {
		base: 'rounded-xl'
	},
	textarea: {
		base: 'rounded-lg'
	}
});

export default theme;
export { theme };
