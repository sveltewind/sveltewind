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
	accordion: {
		base: 'w-full rounded-md inset-ring-1 inset-ring-gray-200 dark:inset-ring-gray-700'
	},
	accordionContent: { base: 'px-6 pb-6' },
	accordionSummary: {
		base: 'cursor-pointer rounded-md px-6 py-4 font-medium focus-visible:outline-2 focus-visible:outline-primary-500'
	},
	alert: {
		base: 'rounded-md p-4 inset-ring-1 inset-ring-gray-200 bg-gray-50 text-gray-950 dark:inset-ring-gray-700 dark:bg-gray-900 dark:text-gray-50',
		variants: {
			error:
				'bg-red-50 text-red-800 inset-ring-red-200 dark:bg-red-950 dark:text-red-200 dark:inset-ring-red-800',
			info: 'bg-blue-50 text-blue-800 inset-ring-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:inset-ring-blue-800',
			success:
				'bg-green-50 text-green-800 inset-ring-green-200 dark:bg-green-950 dark:text-green-200 dark:inset-ring-green-800',
			warning:
				'bg-amber-50 text-amber-800 inset-ring-amber-200 dark:bg-amber-950 dark:text-amber-200 dark:inset-ring-amber-800'
		}
	},
	badge: {
		base: 'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium inset-ring-1 inset-ring-gray-200 bg-gray-100 text-gray-950 dark:inset-ring-gray-700 dark:bg-gray-800 dark:text-gray-50',
		variants: {
			error:
				'bg-red-50 text-red-800 inset-ring-red-200 dark:bg-red-950 dark:text-red-200 dark:inset-ring-red-800',
			info: 'bg-blue-50 text-blue-800 inset-ring-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:inset-ring-blue-800',
			success:
				'bg-green-50 text-green-800 inset-ring-green-200 dark:bg-green-950 dark:text-green-200 dark:inset-ring-green-800',
			warning:
				'bg-amber-50 text-amber-800 inset-ring-amber-200 dark:bg-amber-950 dark:text-amber-200 dark:inset-ring-amber-800'
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
	checkbox: {
		base: twMerge('flex items-center gap-2 cursor-pointer')
	},
	code: {
		base: 'bg-primary-500 text-primary-200 rounded-sm px-1'
	},
	codeBlock: { base: 'p-0 overflow-visible' },
	container: {
		base: 'mx-auto px-6'
	},
	details: { base: '' },
	dialog: {
		base: twMerge(
			defaults.borderRadius.md,
			defaults.insetRing.neutral,
			defaults.padding.x,
			defaults.padding.y,
			'm-auto',
			'backdrop:backdrop-blur-none backdrop:opacity-0 backdrop:transition-[backdrop-filter] backdrop:duration-200 open:backdrop:backdrop-blur open:backdrop:opacity-100 starting:open:backdrop:opacity-0 starting:open:backdrop:backdrop-blur-none'
		)
	},
	div: {
		base: ''
	},
	field: {
		base: 'flex flex-col'
	},
	form: { base: 'flex flex-col space-y-6' },
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
	input: {
		base: twMerge(
			defaults.borderRadius.md,
			defaults.insetRing.neutral,
			defaults.padding.input.x,
			defaults.padding.input.y,
			defaults.transiton
		)
	},
	nav: {
		base: ''
	},
	p: { base: 'text-gray-600 dark:text-gray-400' },
	pile: { base: 'grid [&>*]:[grid-area:1/1]' },
	popover: {
		base: twMerge(
			defaults.borderRadius.md,
			defaults.insetRing.neutral,
			defaults.padding.x,
			defaults.padding.y,
			'border-0 bg-gray-50 text-gray-950 shadow-lg dark:bg-gray-950 dark:text-gray-50',
			'fixed inset-auto m-0 w-max max-h-[calc(100dvh-16px)] max-w-[calc(100vw-16px)] overflow-auto',
			'left-(--popover-left) top-(--popover-top) data-anchored:left-auto data-anchored:top-auto',
			'data-anchored:[align-self:safe_center] data-anchored:[justify-self:safe_center]',
			'data-anchored:[margin:var(--popover-gap)] data-anchored:[position-anchor:var(--popover-anchor)]',
			'data-anchored:[position-area:var(--popover-placement)] data-anchored:[position-try-fallbacks:flip-block,flip-inline,flip-block_flip-inline]'
		)
	},
	pre: { base: 'flex' },
	radio: {
		base: twMerge(
			defaults.insetRing.neutral,
			defaults.transiton,
			'appearance-none w-6 aspect-square rounded-full p-0',
			'checked:bg-primary-500 checked:inset-ring-5 checked:inset-ring-gray-950 dark:checked:inset-ring-gray-50'
		)
	},
	range: { base: 'relative h-4' },
	section: {
		base: ''
	},
	shiki: { base: '' },
	source: { base: '' },
	summary: { base: '' },
	svg: { base: '' },
	switch: {
		base: 'inline-flex items-center gap-3 cursor-pointer has-disabled:cursor-not-allowed has-disabled:opacity-50'
	},
	switchControl: {
		base: "relative h-6 w-11 shrink-0 p-0 inset-ring-0 appearance-none rounded-full bg-gray-300 transition-colors checked:bg-primary-500 dark:bg-gray-700 dark:checked:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:cursor-not-allowed after:absolute after:top-0.5 after:left-0.5 after:size-5 after:rounded-full after:bg-white after:content-[''] after:transition-transform checked:after:translate-x-5"
	},
	tabs: {
		base: twMerge(defaults.insetRing.neutral, defaults.borderRadius.md, 'flex p-1')
	},
	td: { base: twMerge(defaults.padding.input.x, defaults.padding.input.y) },
	th: { base: twMerge(defaults.padding.input.x, defaults.padding.input.y) },
	tr: { base: twMerge(defaults.borderColor.neutral, 'border-t') },
	tooltip: { base: 'pointer-events-none fixed z-20' },
	ul: {
		base: 'flex list-disc flex-col gap-3 pl-6 text-gray-600 marker:text-primary-500 dark:text-gray-400'
	},
	video: { base: '' }
};

theme.select = theme.input;
theme.textarea = theme.input;

export default theme;
export { theme };
