import type { Theme } from '$lib/theme/types';
import { twMerge } from 'tailwind-merge';

const input = {
	background: 'bg-white dark:bg-gray-900',
	outline: 'outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10',
	padding: 'px-6 py-3',
	rounded: 'rounded-full',
	shadow: 'shadow-xs dark:shadow-md'
};
const transition = 'transition duration-200';

export const theme: Theme = {
	A: {
		default: twMerge(
			transition,
			'underline underline-offset-4 decoration-1 decoration-gray-950 hover:decoration-primary-500 focus:decoration-primary-500 dark:decoration-gray-50'
		),
		'no-underline': 'no-underline'
	},
	Button: {
		contrast:
			'bg-gray-950 text-gray-50 outline-white/5 hover:bg-gray-900 focus:bg-gray-900 focus:outline-black/30 dark:bg-gray-50 dark:text-gray-950 dark:outline-black/5 dark:hover:bg-white dark:focus:bg-white dark:focus:outline-white/30',
		dark: 'bg-gray-950 text-gray-50 hover:bg-gray-900 focus:bg-gray-900 focus:outline-black/30 dark:focus:outline-white/30',
		default: twMerge(
			input.outline,
			input.padding,
			input.rounded,
			input.shadow,
			transition,
			'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:outline-primary-500/30 focus:outline-2 flex items-center justify-center cursor-pointer text-white'
		),
		error: 'bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:outline-red-500/30',
		icon: twMerge('p-0', 'h-12 aspect-square'),
		light:
			'bg-gray-50 text-gray-950 hover:bg-white focus:bg-white focus:outline-black/30 dark:focus:outline-white/30',
		rounded: 'rounded-xl',
		square: 'rounded-none',
		success:
			'bg-green-500 text-green-950 hover:bg-green-600 focus:bg-green-600 focus:outline-green-500/30',
		transparent:
			'bg-transparent text-current outline-transparent hover:bg-black/10 focus:bg-black/10 focus:outline-black/30 dark:outline-transparent dark:hover:bg-white/10 dark:focus:bg-white/10 dark:focus:outline-white/30',
		warning:
			'bg-amber-500 text-amber-950 hover:bg-amber-600 focus:bg-amber-600 focus:outline-amber-500/30',
		white:
			'bg-white text-gray-950 hover:bg-gray-50 focus:bg-gray-50 focus:outline-black/30 dark:focus:outline-white/30'
	},
	Card: {
		default: twMerge(
			input.background,
			input.outline,
			input.rounded,
			input.shadow,
			'p-6 rounded-xl outline-offset-0'
		),
		muted: 'bg-gray-50 dark:bg-gray-950',
		square: 'rounded-none'
	},
	Drawer: {
		default: twMerge('fixed rounded-none outline-offset-0')
	}
};
