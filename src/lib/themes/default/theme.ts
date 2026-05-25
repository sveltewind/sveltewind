import type { ThemeObject } from '$lib/theme/types';
import { twMerge } from 'tailwind-merge';

const defaults = {
	backdropBlur: 'backdrop-blur',
	borderColor: {
		neutral: 'border-gray-200 dark:border-gray-700'
	},
	borderRadius: {
		md: 'rounded-md'
	},
	insetRing: {
		neutral: 'inset-ring-1 inset-ring-gray-200 dark:inset-ring-gray-700'
	},
	padding: {
		input: {
			x: 'px-6',
			y: 'py-3'
		},
		x: 'px-6',
		y: 'py-6'
	},
	transiton: 'transition duration-200'
};

const theme: ThemeObject = {
	a: {
		base: twMerge(
			defaults.transiton,
			'underline decoration-primary-500 decoration-2 underline-offset-4',
			'hover:text-primary-500 focus:text-primary-500',
			'text-gray-950 dark:text-gray-50'
		),
		variants: {
			ghost: 'no-underline'
		}
	},
	button: {
		base: twMerge(
			defaults.borderRadius.md,
			defaults.padding.input.x,
			defaults.padding.input.y,
			defaults.transiton,
			'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600',
			'cursor-pointer',
			'no-underline',
			'outline-transparent outline-2 focus:outline-primary-500/30',
			'text-white hover:text-white focus:text-white'
		),
		variants: {
			icon: 'aspect-square px-0 py-0 h-12 flex items-center justify-center',
			ghost: twMerge(
				'bg-transparent hover:bg-gray-950/10 focus:bg-gray-950/10 dark:bg-transparent dark:hover:bg-gray-50/10 dark:focus:bg-gray-50/10 text-current',
				'focus:outline-gray-950/30 dark:focus:outline-gray-50/30',
				'text-gray-950 hover:text-gray-950 focus:text-gray-950 dark:text-gray-50 dark:hover:text-gray-50 dark:focus:text-gray-50'
			),
			outline:
				'inset-ring-1 inset-ring-primary-500 bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 focus:bg-primary-500/20',
			square: 'rounded-none'
		}
	},
	card: {
		base: twMerge(
			defaults.borderRadius.md,
			defaults.insetRing.neutral,
			defaults.padding.x,
			defaults.padding.y
		)
	},
	code: {
		base: 'bg-primary-500 text-primary-200 rounded-sm px-1'
	},
	codeBlock: { base: 'p-0 overflow-visible' },
	container: {
		base: 'mx-auto px-6'
	},
	div: {
		base: ''
	},
	h1: {
		base: 'text-5xl font-bold'
	},
	h2: {
		base: 'text-4xl font-bold'
	},
	h3: {
		base: 'text-3xl font-bold'
	},
	h4: {
		base: 'text-2xl font-bold'
	},
	h5: {
		base: 'text-xl font-bold'
	},
	h6: {
		base: 'text-lg font-bold'
	},
	header: {
		base: twMerge(
			defaults.backdropBlur,
			defaults.borderColor.neutral,
			'bg-gray-50/75 dark:bg-gray-950/90 border-b sticky top-0 z-10'
		)
	},
	nav: {
		base: ''
	},
	p: { base: 'text-gray-600 dark:text-gray-400' },
	pre: { base: 'flex' },
	radio: {
		base: twMerge(
			defaults.insetRing.neutral,
			defaults.transiton,
			'appearance-none w-6 aspect-square rounded-full',
			'checked:bg-primary-500 checked:inset-ring-5 checked:inset-ring-gray-950 dark:checked:inset-ring-gray-50'
		)
	},
	section: {
		base: ''
	},
	shiki: { base: '' },
	tabs: {
		base: twMerge(defaults.insetRing.neutral, defaults.borderRadius.md, 'flex p-1')
	},
	ul: {
		base: 'flex list-disc flex-col gap-3 pl-6 text-gray-600 marker:text-primary-500 dark:text-gray-400'
	}
};

export default theme;
export { theme };
