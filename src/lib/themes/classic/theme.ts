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
			'appearance-none w-6 aspect-square rounded-full p-0',
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
	secondary:
		'bg-gray-200 text-gray-950 hover:bg-gray-300 hover:text-gray-950 focus:bg-gray-300 focus:text-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:text-gray-50',
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
	subtle: 'bg-gray-100 text-primary-600 dark:bg-gray-800 dark:text-primary-300'
};
theme.tabs.variants = { pill: 'rounded-full', full: 'w-full [&>button]:flex-1' };
theme.checkbox.variants = { compact: 'gap-1 text-sm' };
theme.switch.variants = { ...theme.checkbox.variants };
// Copy these entries so updating one control does not mutate another control's styles.
theme.select = { base: theme.input.base, variants: { ...theme.input.variants } };
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

export default theme;
export { theme };
