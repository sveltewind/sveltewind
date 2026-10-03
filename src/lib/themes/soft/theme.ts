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
		base: 'rounded-2xl shadow-sm'
	},
	details: {
		base: 'rounded-2xl'
	},
	dialog: {
		base: 'rounded-2xl'
	},
	fieldset: {
		base: 'rounded-xl'
	},
	input: {
		base: 'rounded-xl'
	},
	popover: {
		base: 'rounded-2xl'
	},
	select: {
		base: 'rounded-xl'
	},
	tabs: {
		base: 'rounded-full'
	},
	textarea: {
		base: 'rounded-xl'
	}
});

export default theme;
export { theme };
