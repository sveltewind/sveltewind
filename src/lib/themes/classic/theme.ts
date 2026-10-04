import type { ThemeObject } from '$lib/theme/types';
import { twMerge } from 'tailwind-merge';
import { completeVariants } from '../completeVariants.js';
import { completeSecondaryVariants } from '../secondaryVariants.js';

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
	transition: 'transition duration-200'
};

// Status colors communicate meaning independently of the selected primary palette.
const statuses = {
	error:
		'bg-red-50 text-red-800 inset-ring-red-200 dark:bg-red-950 dark:text-red-200 dark:inset-ring-red-800',
	info: 'bg-blue-50 text-blue-800 inset-ring-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:inset-ring-blue-800',
	success:
		'bg-green-50 text-green-800 inset-ring-green-200 dark:bg-green-950 dark:text-green-200 dark:inset-ring-green-800',
	warning:
		'bg-amber-50 text-amber-800 inset-ring-amber-200 dark:bg-amber-950 dark:text-amber-200 dark:inset-ring-amber-800'
};

const theme: ThemeObject = {
	a: {
		base: twMerge(
			defaults.transition,
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
		variants: { ...statuses }
	},
	badge: {
		base: 'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium inset-ring-1 inset-ring-gray-200 bg-gray-100 text-gray-950 dark:inset-ring-gray-700 dark:bg-gray-800 dark:text-gray-50',
		variants: { ...statuses }
	},
	button: {
		base: twMerge(
			defaults.borderRadius.md,
			defaults.padding.input.x,
			defaults.padding.input.y,
			defaults.transition,
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
			'bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50',
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
			defaults.transition
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
			defaults.transition,
			'appearance-none size-6 shrink-0 aspect-square rounded-full p-0',
			'checked:bg-primary-500 checked:inset-ring-5 checked:inset-ring-gray-950 dark:checked:inset-ring-gray-50'
		)
	},
	range: { base: 'relative h-4 w-full' },
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

// Structural primitives stay unobtrusive so composed components can control layout.
Object.assign(theme, {
	aside: { base: 'min-w-0' },
	circle: { base: 'origin-center' },
	details: { base: 'min-w-0 rounded-md' },
	div: { base: 'min-w-0' },
	fieldset: { base: 'min-w-0 rounded-md border border-gray-200 p-6 dark:border-gray-700' },
	img: { base: 'max-w-full h-auto' },
	label: { base: 'text-sm font-medium text-gray-950 dark:text-gray-50' },
	legend: { base: 'px-2 text-sm font-semibold' },
	li: { base: 'leading-relaxed' },
	main: { base: 'min-w-0' },
	nav: { base: 'min-w-0' },
	ol: {
		base: 'flex list-decimal flex-col gap-3 pl-6 text-gray-600 marker:text-primary-500 dark:text-gray-400'
	},
	option: {
		base: 'bg-gray-50 text-gray-950 disabled:text-gray-400 dark:bg-gray-900 dark:text-gray-50'
	},
	section: { base: 'min-w-0' },
	shiki: { base: 'min-w-0 overflow-x-auto' },
	// Source supplies media metadata and has no rendered box to decorate.
	source: { base: '', variants: {} },
	span: { base: 'align-baseline' },
	spinner: { base: 'inline-block shrink-0 align-middle' },
	summary: {
		base: 'cursor-pointer font-medium focus-visible:outline-2 focus-visible:outline-primary-500'
	},
	svg: { base: 'inline-block shrink-0 align-middle' },
	table: { base: 'w-full border-collapse text-left text-sm' },
	tbody: { base: 'align-middle' },
	thead: { base: 'bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-gray-50' },
	th: { base: 'px-6 py-3 text-left font-semibold' },
	video: { base: 'max-w-full rounded-md' }
});

const sizes = {
	lg: 'px-8 py-4 text-lg',
	md: 'px-6 py-3 text-base',
	sm: 'px-4 py-2 text-sm',
	xs: 'px-3 py-1.5 text-xs'
};
const surfaces = {
	compact: 'p-4',
	elevated: 'bg-white shadow-lg dark:bg-gray-900',
	flat: 'shadow-none inset-ring-0',
	outline: 'bg-transparent inset-ring-1 inset-ring-gray-300 dark:inset-ring-gray-600',
	soft: 'bg-primary-500/5 inset-ring-primary-500/20',
	spacious: 'p-8'
};
const layouts = {
	center: 'flex items-center justify-center',
	column: 'flex flex-col gap-4',
	grid: 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
	row: 'flex flex-wrap items-center gap-4',
	stack: 'flex flex-col gap-6'
};

Object.assign(theme.button.variants!, sizes, {
	danger:
		'bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 focus:outline-red-500/30 dark:bg-red-600 dark:text-white dark:hover:bg-red-700 dark:hover:text-white dark:focus:bg-red-700 dark:focus:text-white',
	full: 'w-full justify-center',
	link: 'bg-transparent p-0 text-primary-600 underline hover:bg-transparent hover:text-primary-700 focus:bg-transparent focus:text-primary-700 dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent dark:text-primary-400 dark:hover:text-primary-300 dark:focus:text-primary-300',
	pill: 'rounded-full',
	primary:
		'bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-600 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600 dark:hover:text-white dark:focus:bg-primary-600 dark:focus:text-white',
	soft: 'bg-primary-500/10 text-primary-600 hover:bg-primary-500/20 hover:text-primary-600 focus:bg-primary-500/20 focus:text-primary-600 dark:bg-primary-500/10 dark:hover:bg-primary-500/20 dark:focus:bg-primary-500/20 dark:text-primary-300 dark:hover:text-primary-300 dark:focus:text-primary-300',
	success:
		'bg-green-600 text-white hover:bg-green-700 focus:bg-green-700 focus:outline-green-500/30 dark:bg-green-600 dark:text-white dark:hover:bg-green-700 dark:hover:text-white dark:focus:bg-green-700 dark:focus:text-white'
});
// Interaction states belong in the base so they apply to every visual variant.
theme.button.variants!.outline =
	'bg-primary-500/10 text-primary-600 inset-ring-1 inset-ring-primary-500 hover:bg-primary-500/20 hover:text-primary-700 focus:bg-primary-500/20 focus:text-primary-700 dark:bg-primary-500/10 dark:text-primary-300 dark:hover:bg-primary-500/20 dark:hover:text-primary-200 dark:focus:bg-primary-500/20 dark:focus:text-primary-200';
theme.button.base = twMerge(
	theme.button.base,
	'font-medium disabled:pointer-events-none disabled:opacity-50'
);
theme.input.base = twMerge(
	theme.input.base,
	'bg-transparent text-gray-950 placeholder:text-gray-500 outline-none focus-visible:inset-ring-2 focus-visible:inset-ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-50'
);
theme.input.variants = {
	...sizes,
	error: 'border-red-500 inset-ring-red-500 focus-visible:inset-ring-red-500 dark:border-red-500',
	filled: 'bg-gray-100 dark:bg-gray-800',
	success:
		'border-green-500 inset-ring-green-500 focus-visible:inset-ring-green-500 dark:border-green-500',
	unstyled:
		'rounded-none border-0 bg-transparent p-0 inset-ring-0 focus-visible:inset-ring-0 dark:bg-transparent'
};
for (const key of ['card', 'dialog', 'popover', 'fieldset']) {
	theme[key].variants = { ...surfaces };
}
for (const key of ['div', 'section', 'main', 'aside', 'nav']) {
	theme[key].variants = { ...layouts };
}
for (const key of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'legend']) {
	theme[key].variants = {
		accent: 'text-primary-600 dark:text-primary-400',
		muted: 'text-gray-500 dark:text-gray-400',
		uppercase: 'uppercase tracking-wider'
	};
}
theme.a.variants = {
	...theme.a.variants,
	muted: 'text-gray-500 dark:text-gray-400',
	subtle: 'decoration-transparent hover:decoration-primary-500',
	external: 'inline-flex items-center gap-2'
};
theme.alert.variants = { ...statuses, compact: 'p-3 text-sm' };
theme.badge.variants = {
	...statuses,
	outline: 'bg-transparent dark:bg-transparent',
	pill: 'rounded-full',
	square: 'rounded-sm'
};
theme.accordion.variants = {
	compact: '[&>summary]:px-4 [&>summary]:py-3 [&>div]:px-4 [&>div]:pb-4',
	flush: 'rounded-none inset-ring-0 border-b border-gray-200 dark:border-gray-700'
};
theme.container.variants = { fluid: 'w-full', narrow: 'max-w-3xl', wide: 'max-w-7xl' };
theme.table.variants = {
	compact: '[&_td]:px-4 [&_td]:py-2 [&_th]:px-4 [&_th]:py-2',
	striped: '[&_tbody_tr:nth-child(even)]:bg-gray-100 dark:[&_tbody_tr:nth-child(even)]:bg-gray-900',
	hover: '[&_tbody_tr]:hover:bg-primary-500/5'
};
theme.ul.variants = { plain: 'list-none pl-0', compact: 'gap-1' };
theme.ol.variants = { ...theme.ul.variants };
theme.img.variants = {
	rounded: 'rounded-md',
	circle: 'aspect-square rounded-full object-cover',
	cover: 'h-full w-full object-cover'
};
theme.pre.variants = { wrap: 'whitespace-pre-wrap break-words' };
theme.code.variants = {
	subtle: 'bg-gray-100 text-primary-800 dark:bg-gray-800 dark:text-primary-200',
	accent: 'bg-primary-100 text-primary-950 dark:bg-primary-950 dark:text-primary-100',
	muted: 'bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400'
};
theme.tabs.variants = { pill: 'rounded-full', full: 'w-full [&>button]:flex-1' };
theme.checkbox.variants = { compact: 'gap-1 text-sm' };
theme.switch.variants = { ...theme.checkbox.variants };
// Copy these entries so updating one control does not mutate another control's styles.
// Remove the native iOS appearance so inset rings remain visible without adding border width.
theme.select = {
	base: twMerge(
		theme.input.base,
		"appearance-none pr-10 bg-no-repeat bg-[length:1rem_1rem] bg-[position:right_0.75rem_center] rtl:bg-[position:left_0.75rem_center] bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%20fill=%22none%22%20stroke=%22%236b7280%22%20stroke-width=%221.5%22%3E%3Cpath%20d=%22m4%206%204%204%204-4%22/%3E%3C/svg%3E')] [&[multiple]]:bg-none [&[multiple]]:pr-6 [&[size]]:bg-none"
	),
	variants: {
		...theme.input.variants,
		unstyled: twMerge(theme.input.variants.unstyled, 'bg-none')
	}
};
theme.textarea = {
	base: twMerge(theme.input.base, 'min-h-24 resize-y'),
	variants: { ...theme.input.variants }
};

// Restrained HTML primitives; all style presets inherit their variants.
Object.assign(theme, {
	abbr: {
		base: 'decoration-dotted underline-offset-4',
		variants: { plain: 'no-underline', underlined: 'underline' }
	},
	address: {
		base: 'not-italic',
		variants: { compact: 'text-sm', muted: 'text-gray-500 dark:text-gray-400' }
	},
	article: {
		base: 'min-w-0',
		variants: { compact: 'space-y-3', spacious: 'space-y-6' }
	},
	audio: {
		base: 'max-w-full',
		variants: { compact: 'h-10', full: 'w-full' }
	},
	blockquote: {
		base: 'border-l-2 border-gray-300 pl-4 dark:border-gray-600',
		variants: { accent: 'border-primary-500 dark:border-primary-500', plain: 'border-0 pl-0' }
	},
	canvas: {
		base: 'max-w-full',
		variants: {
			bordered: 'rounded-md inset-ring-1 inset-ring-gray-200 dark:inset-ring-gray-700',
			responsive: 'h-auto w-full'
		}
	},
	caption: {
		base: 'caption-top py-3 text-left text-sm text-gray-500 dark:text-gray-400',
		variants: { bottom: 'caption-bottom', center: 'text-center' }
	},
	cite: {
		base: 'italic',
		variants: { muted: 'text-gray-500 dark:text-gray-400', plain: 'not-italic' }
	},
	col: {
		base: '',
		variants: { narrow: 'w-24', wide: 'w-64' }
	},
	colgroup: {
		base: '',
		variants: { narrow: 'w-24', wide: 'w-64' }
	},
	datalist: {
		base: '',
		variants: { hidden: 'hidden' }
	},
	dd: {
		base: 'min-w-0',
		variants: { indented: 'pl-4', muted: 'text-gray-500 dark:text-gray-400' }
	},
	dl: {
		base: 'min-w-0',
		variants: { compact: 'space-y-2', spacious: 'space-y-6' }
	},
	dt: {
		base: 'font-medium',
		variants: {
			muted: 'text-gray-500 dark:text-gray-400',
			uppercase: 'text-xs uppercase tracking-wide'
		}
	},
	em: {
		base: 'italic',
		variants: {
			accent: 'text-primary-600 dark:text-primary-400',
			subtle: 'text-gray-600 dark:text-gray-400'
		}
	},
	figcaption: {
		base: 'mt-2 text-sm text-gray-500 dark:text-gray-400',
		variants: { center: 'text-center', compact: 'text-xs' }
	},
	figure: {
		base: 'min-w-0',
		variants: {
			bordered: 'rounded-md p-4 inset-ring-1 inset-ring-gray-200 dark:inset-ring-gray-700',
			compact: 'space-y-1'
		}
	},
	footer: {
		base: 'min-w-0',
		variants: {
			bordered: 'border-t border-gray-200 pt-6 dark:border-gray-700',
			compact: 'py-3 text-sm'
		}
	},
	hr: {
		base: 'my-4 border-0 border-t border-gray-200 dark:border-gray-700',
		variants: { accent: 'border-primary-500 dark:border-primary-500', spacious: 'my-8' }
	},
	iframe: {
		base: 'max-w-full border-0',
		variants: {
			bordered: 'rounded-md inset-ring-1 inset-ring-gray-200 dark:inset-ring-gray-700',
			responsive: 'aspect-video h-auto w-full'
		}
	},
	kbd: {
		base: 'rounded-sm px-1.5 py-0.5 font-mono text-xs inset-ring-1 inset-ring-gray-300 dark:inset-ring-gray-600',
		variants: { plain: 'rounded-none p-0 inset-ring-0', raised: 'shadow-sm' }
	},
	mark: {
		base: 'rounded-sm bg-primary-500/15 px-0.5 text-inherit',
		variants: {
			solid: 'bg-primary-500 text-white',
			underline:
				'rounded-none bg-transparent px-0 underline decoration-primary-500 decoration-2 underline-offset-4'
		}
	},
	meter: {
		base: 'h-2 w-full appearance-none overflow-hidden rounded-sm bg-gray-200 dark:bg-gray-700 [&::-webkit-meter-bar]:h-full [&::-webkit-meter-bar]:border-0 [&::-webkit-meter-bar]:rounded-none [&::-webkit-meter-bar]:bg-gray-200 dark:[&::-webkit-meter-bar]:bg-gray-700 [&::-webkit-meter-optimum-value]:bg-primary-500 [&::-webkit-meter-suboptimum-value]:bg-primary-500 [&::-webkit-meter-even-less-good-value]:bg-primary-500 [&::-moz-meter-bar]:bg-primary-500',
		variants: { compact: 'h-1', large: 'h-4' }
	},
	optgroup: {
		base: 'font-medium',
		variants: { muted: 'text-gray-500 dark:text-gray-400', normal: 'font-normal' }
	},
	output: {
		base: 'tabular-nums',
		variants: {
			accent: 'text-primary-600 dark:text-primary-400',
			muted: 'text-gray-500 dark:text-gray-400'
		}
	},
	picture: {
		base: 'block max-w-full',
		variants: { full: 'w-full', inline: 'inline-block' }
	},
	progress: {
		base: 'h-2 w-full appearance-none overflow-hidden rounded-sm bg-gray-200 dark:bg-gray-700 [&::-webkit-progress-bar]:bg-gray-200 dark:[&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-primary-500 [&::-moz-progress-bar]:bg-primary-500',
		variants: { compact: 'h-1', large: 'h-4' }
	},
	q: {
		base: '',
		variants: { accent: 'text-primary-600 dark:text-primary-400', italic: 'italic' }
	},
	samp: {
		base: 'font-mono text-sm',
		variants: {
			muted: 'text-gray-500 dark:text-gray-400',
			soft: 'rounded-sm bg-gray-100 px-1 dark:bg-gray-800'
		}
	},
	small: {
		base: 'text-sm',
		variants: { muted: 'text-gray-500 dark:text-gray-400', tiny: 'text-xs' }
	},
	strong: {
		base: 'font-semibold',
		variants: { accent: 'text-primary-600 dark:text-primary-400', bold: 'font-bold' }
	},
	tfoot: {
		base: 'font-medium',
		variants: {
			bordered: 'border-t border-gray-200 dark:border-gray-700',
			soft: 'bg-gray-100 dark:bg-gray-900'
		}
	},
	time: {
		base: 'tabular-nums',
		variants: { compact: 'text-sm', muted: 'text-gray-500 dark:text-gray-400' }
	},
	track: {
		base: '',
		variants: { hidden: 'hidden' }
	}
});

// SVG primitives preserve native paint unless a variant is requested.
Object.assign(theme, {
	circle: {
		base: theme.circle.base,
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	clipPath: {
		base: '',
		variants: { unstyled: '' }
	},
	defs: {
		base: '',
		variants: { unstyled: '' }
	},
	ellipse: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	foreignObject: {
		base: '',
		variants: { clip: 'overflow-hidden', visible: 'overflow-visible' }
	},
	g: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	line: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	linearGradient: {
		base: '',
		variants: { unstyled: '' }
	},
	marker: {
		base: '',
		variants: { unstyled: '' }
	},
	mask: {
		base: '',
		variants: { unstyled: '' }
	},
	path: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	pattern: {
		base: '',
		variants: { unstyled: '' }
	},
	polygon: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	polyline: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	radialGradient: {
		base: '',
		variants: { unstyled: '' }
	},
	rect: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	stop: {
		base: '',
		variants: {
			current: '[stop-color:currentColor]',
			primary: '[stop-color:var(--color-primary-500)]',
			transparent: '[stop-opacity:0]'
		}
	},
	svgDesc: {
		base: '',
		variants: { unstyled: '' }
	},
	svgImage: {
		base: '',
		variants: { grayscale: 'grayscale', muted: 'opacity-50' }
	},
	svgTitle: {
		base: '',
		variants: { unstyled: '' }
	},
	symbol: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	},
	text: {
		base: 'fill-current',
		variants: {
			bold: 'font-semibold',
			muted: 'text-gray-500 dark:text-gray-400',
			primary: 'text-primary-500'
		}
	},
	textPath: {
		base: 'fill-current',
		variants: {
			bold: 'font-semibold',
			muted: 'text-gray-500 dark:text-gray-400',
			primary: 'text-primary-500'
		}
	},
	tspan: {
		base: 'fill-current',
		variants: {
			bold: 'font-semibold',
			muted: 'text-gray-500 dark:text-gray-400',
			primary: 'text-primary-500'
		}
	},
	use: {
		base: '',
		variants: {
			fill: 'fill-current',
			outline: 'fill-none stroke-current',
			primary: 'text-primary-500',
			rounded: '[stroke-linecap:round] [stroke-linejoin:round]'
		}
	}
});

// Line breaks retain native inline flow.
theme.br = { base: '', variants: { hidden: 'hidden' } };

// Composed components and their independently themeable parts.
Object.assign(theme, {
	avatar: {
		base: 'relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-300',
		variants: {
			lg: 'size-14 text-lg',
			sm: 'size-8 text-xs',
			square: 'rounded-md'
		}
	},
	avatarFallback: {
		base: 'font-medium',
		variants: {
			bold: 'font-bold'
		}
	},
	avatarGroup: {
		base: 'flex items-center -space-x-3 [&>*]:ring-2 [&>*]:ring-gray-50 dark:[&>*]:ring-gray-950',
		variants: {
			spaced: 'space-x-2'
		}
	},
	avatarImage: {
		base: 'size-full object-cover',
		variants: {
			muted: 'opacity-70'
		}
	},
	avatarOverflow: {
		base: 'inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-medium dark:bg-gray-800',
		variants: {
			compact: 'text-sm'
		}
	},
	breadcrumbs: {
		base: 'min-w-0',
		variants: {
			compact: 'text-xs'
		}
	},
	breadcrumbsItem: {
		base: 'flex items-center gap-2',
		variants: {
			spacious: 'gap-4'
		}
	},
	breadcrumbsList: {
		base: 'flex list-none flex-wrap items-center gap-2 pl-0 text-sm',
		variants: {
			spacious: 'gap-4'
		}
	},
	breadcrumbsSeparator: {
		base: 'text-gray-400',
		variants: {
			primary: 'text-primary-500'
		}
	},
	carousel: {
		base: 'min-w-0',
		variants: {
			compact: 'text-sm'
		}
	},
	carouselControls: {
		base: 'mb-4 flex justify-end gap-2',
		variants: {
			compact: 'text-sm'
		}
	},
	carouselIndicator: {
		base: 'size-2 rounded-full bg-gray-300 p-0 dark:bg-gray-700',
		variants: {
			active: 'bg-primary-500 dark:bg-primary-500'
		}
	},
	carouselIndicators: {
		base: 'mt-3 flex justify-center gap-2',
		variants: {
			compact: 'text-sm'
		}
	},
	carouselSlide: {
		base: 'min-w-0 snap-start',
		variants: {
			compact: 'text-sm'
		}
	},
	carouselTrack: {
		base: 'relative grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-6 overflow-x-auto overscroll-x-contain pb-4 focus-visible:outline-2 focus-visible:outline-primary-500 sm:auto-cols-[calc((100%-(var(--carousel-tablet-columns)-1)*1.5rem)/var(--carousel-tablet-columns))] lg:auto-cols-[calc((100%-(var(--carousel-columns)-1)*1.5rem)/var(--carousel-columns))]',
		variants: {
			compact: 'text-sm'
		}
	},
	combobox: {
		base: 'relative min-w-0',
		variants: {
			compact: 'text-sm'
		}
	},
	comboboxEmpty: {
		base: 'px-3 py-2 text-sm text-gray-500',
		variants: {
			compact: 'text-sm'
		}
	},
	comboboxInput: {
		base: 'w-full',
		variants: {
			compact: 'text-sm'
		}
	},
	comboboxLabel: {
		base: 'mb-2 block text-sm font-medium',
		variants: {
			hidden: 'sr-only'
		}
	},
	comboboxList: {
		base: 'flex max-h-64 list-none flex-col gap-0 overflow-y-auto pl-0',
		variants: {
			compact: 'text-sm'
		}
	},
	comboboxOption: {
		base: 'cursor-pointer rounded-sm px-3 py-2 text-sm',
		variants: {
			active: 'bg-primary-500/10 text-primary-600 dark:text-primary-300',
			disabled: 'cursor-not-allowed opacity-50'
		}
	},
	comboboxPanel: {
		base: 'min-w-64 max-w-[calc(100vw-2rem)] p-1',
		variants: {
			compact: 'text-sm'
		}
	},
	drawer: {
		base: 'fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[min(24rem,100vw)] max-w-none overflow-y-auto rounded-none border-0 bg-gray-50 p-0 text-gray-950 shadow-xl dark:bg-gray-950 dark:text-gray-50',
		variants: {
			left: 'right-auto left-0',
			right: 'right-0 left-auto',
			wide: 'w-[min(36rem,100vw)]'
		}
	},
	drawerClose: {
		base: 'size-10 p-0 text-xl',
		variants: {
			compact: 'text-sm'
		}
	},
	drawerContent: {
		base: 'p-6',
		variants: {
			compact: 'text-sm'
		}
	},
	drawerHeader: {
		base: 'flex items-center justify-between gap-4 border-b border-gray-200 px-6 py-4 dark:border-gray-700',
		variants: {
			compact: 'text-sm'
		}
	},
	drawerTitle: {
		base: 'text-xl font-semibold',
		variants: {
			compact: 'text-sm'
		}
	},
	dropdownMenu: {
		base: 'inline-block',
		variants: {
			full: 'block w-full'
		}
	},
	dropdownMenuItem: {
		base: 'block w-full rounded-sm px-3 py-2 text-left text-sm no-underline hover:bg-primary-500/10 focus:bg-primary-500/10 focus:outline-none dark:hover:bg-primary-500/10 dark:focus:bg-primary-500/10',
		variants: {
			compact: 'text-sm'
		}
	},
	dropdownMenuList: {
		base: 'flex list-none flex-col gap-0 pl-0',
		variants: {
			compact: 'text-sm'
		}
	},
	dropdownMenuPanel: {
		base: 'min-w-48 p-1',
		variants: {
			wide: 'min-w-64'
		}
	},
	fileUpload: {
		base: 'min-w-0',
		variants: {
			compact: 'text-sm'
		}
	},
	fileUploadDropzone: {
		base: 'flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center focus-within:outline-2 focus-within:outline-primary-500 dark:border-gray-700 dark:bg-gray-900',
		variants: {
			active: 'border-primary-500 bg-primary-500/5 dark:border-primary-500 dark:bg-primary-500/5',
			disabled: 'opacity-50'
		}
	},
	fileUploadError: {
		base: 'mt-3 text-sm text-red-600 dark:text-red-400',
		variants: {
			compact: 'text-sm'
		}
	},
	fileUploadHint: {
		base: 'text-sm',
		variants: {
			compact: 'text-sm'
		}
	},
	fileUploadItem: {
		base: 'flex items-center justify-between gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800',
		variants: {
			compact: 'text-sm'
		}
	},
	fileUploadList: {
		base: 'mt-3 flex list-none flex-col gap-2 pl-0',
		variants: {
			compact: 'text-sm'
		}
	},
	fileUploadRemove: {
		base: 'size-6 p-0 text-lg',
		variants: {
			compact: 'text-sm'
		}
	},
	multiSelect: {
		base: 'min-w-0',
		variants: {
			compact: 'text-sm'
		}
	},
	multiSelectChip: {
		base: 'inline-flex items-center gap-1 pr-1',
		variants: {
			compact: 'text-sm'
		}
	},
	multiSelectRemove: {
		base: 'size-5 rounded-full p-0 text-sm',
		variants: {
			compact: 'text-sm'
		}
	},
	multiSelectValues: {
		base: 'mt-3 flex flex-wrap gap-2',
		variants: {
			compact: 'text-sm'
		}
	},
	searchField: {
		base: 'relative flex flex-row items-center gap-2 space-y-0',
		variants: {
			compact: 'text-sm',
			stacked: 'flex-col items-stretch'
		}
	},
	searchFieldClear: {
		base: 'absolute right-28 size-8 p-0 text-lg',
		variants: {
			compact: 'text-sm'
		}
	},
	searchFieldInput: {
		base: 'min-w-0 grow pr-10',
		variants: {
			compact: 'text-sm'
		}
	},
	searchFieldSubmit: {
		base: 'shrink-0',
		variants: {
			compact: 'text-sm'
		}
	},
	skeleton: {
		base: 'h-4 w-full animate-pulse rounded-md bg-gray-200 motion-reduce:animate-none dark:bg-gray-800',
		variants: {
			circle: 'size-10 rounded-full',
			rectangular: 'h-24',
			static: 'animate-none',
			text: 'h-4'
		}
	},
	stepper: {
		base: 'flex list-none flex-wrap gap-6 pl-0',
		variants: {
			compact: 'gap-3',
			vertical: 'flex-col'
		}
	},
	stepperDescription: {
		base: 'mt-1 block text-xs text-gray-500 dark:text-gray-400',
		variants: {
			compact: 'text-sm'
		}
	},
	stepperIndicator: {
		base: 'inline-flex size-9 shrink-0 items-center justify-center rounded-full p-0 text-sm font-medium',
		variants: {
			complete: 'bg-primary-500/10 text-primary-600 dark:text-primary-300',
			current: 'bg-primary-500 text-white',
			upcoming: 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
		}
	},
	stepperItem: {
		base: 'flex items-start gap-3',
		variants: {
			compact: 'text-sm'
		}
	},
	stepperLabel: {
		base: 'block text-sm font-medium',
		variants: {
			compact: 'text-sm'
		}
	},
	toast: {
		base: 'pointer-events-auto flex items-start gap-3 p-4 shadow-lg',
		variants: {
			compact: 'p-3 text-sm'
		}
	},
	toastClose: {
		base: '-mt-1 -mr-1 size-7 shrink-0 p-0 text-lg',
		variants: {
			compact: 'text-sm'
		}
	},
	toastContent: {
		base: 'min-w-0 grow text-sm',
		variants: {
			compact: 'text-sm'
		}
	},
	toastTitle: {
		base: 'mb-1 block font-semibold',
		variants: {
			compact: 'text-sm'
		}
	},
	toaster: {
		base: 'pointer-events-none fixed z-50 flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-3',
		variants: {
			'bottom-left': 'bottom-4 left-4',
			'bottom-right': 'right-4 bottom-4',
			'top-left': 'top-4 left-4',
			'top-right': 'top-4 right-4'
		}
	}
});

Object.assign(theme, {
	datatable: { base: 'flex min-w-0 flex-col gap-4', variants: { compact: 'text-sm' } },
	datatableActions: { base: 'flex justify-end gap-2', variants: { compact: 'text-sm' } },
	datatableApply: { base: 'flex justify-end', variants: { compact: 'text-sm' } },
	datatableCell: { base: 'p-0', variants: { compact: 'text-sm' } },
	datatableClose: { base: 'ml-auto', variants: { compact: 'text-sm' } },
	datatableDeleteActions: {
		base: 'flex w-full justify-end gap-2',
		variants: { compact: 'text-sm' }
	},
	datatableDeleteDialog: {
		base: 'flex flex-col items-center gap-4',
		variants: { compact: 'text-sm' }
	},
	datatableDialog: { base: 'flex flex-col gap-4', variants: { compact: 'text-sm' } },
	datatableFilterAnchor: { base: 'relative', variants: { compact: 'text-sm' } },
	datatableFilterCount: {
		base: 'pointer-events-none absolute -top-1.5 -right-1.5 flex aspect-square w-4 items-center justify-center rounded-full bg-primary-500 text-[.625rem] text-white',
		variants: { compact: 'text-sm' }
	},
	datatableFilters: {
		base: 'grid grid-cols-[repeat(4,minmax(0,1fr))] gap-2',
		variants: { compact: 'text-sm' }
	},
	datatableHeading: { base: 'whitespace-nowrap', variants: { compact: 'text-sm' } },
	datatableIcon: { base: 'size-6', variants: { compact: 'text-sm' } },
	datatableNumericInput: { base: 'text-right', variants: { compact: 'text-sm' } },
	datatablePageControls: {
		base: 'flex flex-wrap items-center gap-2',
		variants: { compact: 'text-sm' }
	},
	datatablePagination: {
		base: 'flex flex-wrap items-center justify-between gap-4',
		variants: { compact: 'text-sm' }
	},
	datatableScroll: { base: 'max-w-full overflow-auto p-0', variants: { compact: 'text-sm' } },
	datatableSort: {
		base: 'flex w-full items-center justify-between',
		variants: { compact: 'text-sm' }
	},
	datatableSortIcon: { base: 'size-4', variants: { compact: 'text-sm' } },
	datatableToolbar: {
		base: 'flex flex-wrap items-center justify-end gap-2',
		variants: { compact: 'text-sm' }
	},
	datatableUnsortedIcon: { base: 'size-4 opacity-50', variants: { compact: 'text-sm' } },
	datatableWarningIcon: { base: 'size-24', variants: { compact: 'text-sm' } }
});

Object.assign(theme, {
	calendar: {
		base: 'w-80 max-w-full rounded-lg bg-white p-4 text-gray-900 dark:bg-gray-950 dark:text-gray-100',
		variants: {
			compact: 'w-64 p-2 text-sm [&_[data-calendar-date]]:h-8',
			bordered: 'border border-gray-200 dark:border-gray-700',
			soft: 'bg-gray-100 dark:bg-gray-900'
		}
	},
	calendarHeader: {
		base: 'mb-3 flex items-center justify-between gap-2',
		variants: {}
	},
	calendarTitle: {
		base: 'text-sm font-semibold',
		variants: {}
	},
	calendarNavigation: {
		base: 'flex size-8 items-center justify-center rounded-md border-0 bg-transparent p-0 text-xl text-gray-700 shadow-none hover:text-gray-700 focus:text-gray-700 focus:bg-gray-100 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-transparent dark:text-gray-200 dark:hover:text-gray-200 dark:focus:text-gray-200 dark:focus:bg-gray-800 dark:hover:bg-gray-800',
		variants: {}
	},
	calendarGrid: {
		base: 'w-full table-fixed border-collapse text-center',
		variants: {}
	},
	calendarWeekday: {
		base: 'h-8 p-0 text-center text-xs font-medium text-gray-500 dark:text-gray-400',
		variants: {}
	},
	calendarHead: { base: 'bg-transparent dark:bg-transparent', variants: {} },
	calendarRow: { base: 'border-0', variants: {} },
	calendarCell: {
		base: 'p-0.5',
		variants: {}
	},
	calendarDay: {
		base: 'flex h-10 w-full items-center justify-center rounded-md border-0 bg-transparent p-0 text-sm font-normal text-gray-900 shadow-none hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:bg-transparent dark:text-gray-100 dark:hover:text-gray-100 dark:focus:text-gray-100 dark:focus:bg-gray-800 dark:hover:bg-gray-800',
		variants: {
			today: 'ring-1 ring-primary-500',
			selected:
				'bg-primary-500 text-white hover:text-white focus:text-white hover:bg-primary-600 focus:bg-primary-600 dark:bg-primary-500 dark:text-white dark:hover:text-white dark:focus:text-white dark:hover:bg-primary-600 dark:focus:bg-primary-600',
			disabled: 'cursor-not-allowed opacity-40'
		}
	}
});

completeVariants(theme);
theme.checkbox.variants.secondary =
	'[&_[data-checkbox-control][data-checked=true]]:bg-secondary-500 [&_[data-checkbox-control][data-checked=true]]:text-(--secondary-foreground-500) [&_[data-checkbox-control][data-checked=true]]:hover:bg-secondary-600 [&_[data-checkbox-control][data-checked=true]]:hover:text-(--secondary-foreground-600) [&_[data-checkbox-control][data-checked=true]]:focus:bg-secondary-600 [&_[data-checkbox-control][data-checked=true]]:focus:text-(--secondary-foreground-600) dark:[&_[data-checkbox-control][data-checked=true]]:bg-secondary-500 dark:[&_[data-checkbox-control][data-checked=true]]:hover:bg-secondary-600 dark:[&_[data-checkbox-control][data-checked=true]]:focus:bg-secondary-600';
theme.range.variants!.secondary = '[&_[data-range-fill]]:bg-secondary-500';
theme.switch.variants.secondary =
	'[&_[role=switch]]:checked:bg-secondary-500 dark:[&_[role=switch]]:checked:bg-secondary-500';
completeSecondaryVariants(theme);

export default theme;
export { theme };
