import { twMerge } from 'tailwind-merge';
import { type Theme } from '$lib/types.js';

const card =
	'shadow-md bg-white dark:bg-slate-900 dark:shadow-[inset_0_1px_0_0_#ffffff0d,_0_4px_6px_-1px_rgb(0_0_0_/_0.3),_0_2px_4px_-2px_rgb(0_0_0_/_0.3)] ring-1 rounded-lg flex flex-col p-6 ring-slate-800/10 dark:ring-white/5';
const inputBaseClasses =
	'bg-transparent dark:bg-transparent appearance-none rounded-lg leading-6 px-6 py-3 transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-slate-300 hover:ring-offset-violet-500 focus:ring-offset-violet-500 focus:ring-violet-500/30 dark:text-slate-50 dark:ring-offset-white/5';

const theme: Theme = {
	a: {
		default:
			'transtion duration-200 relative outline-none hover:text-white shadow-[0_1px_0px_0px_var(--tw-shadow-color)] hover:shadow-[0_2px_0px_0px_var(--tw-shadow-color)] shadow-violet-500'
	},
	badge: { default: 'bg-violet-500 text-white rounded-lg text-sm px-3' },
	breadcrumb: { default: 'flex space-x-3' },
	button: {
		default:
			'text-sm leading-6 font-semibold shadow-[inset_0_1px_0_0_#ffffff0d] flex justify-center items-center bg-violet-500 hover:bg-violet-600 focus:bg-violet-600 disabled:bg-slate-500 disabled:cursor-default px-6 py-3 rounded-lg text-white transition duration-200 outline-none ring ring-transparent focus:ring-violet-500/30',
		icon: 'px-3 py-3'
	},
	card: { default: card },
	checkbox: {
		checked: 'bg-violet-500 dark:bg-violet-500',
		default: `${inputBaseClasses.replace(
			'px-6',
			''
		)} mr-3 peer-focus:ring-offset-violet-500 peer-focus:ring-violet-500/30 cursor-pointer px-0 py-0`
	},
	container: { default: 'mx-auto w-full lg:max-w-[90rem] xl:max-w-[100rem]' },
	drawer: { default: 'fixed flex' },
	fieldset: { default: 'flex flex-col space-y-1' },
	form: { default: 'flex flex-col space-y-4' },
	h1: { default: 'font-bold text-[2rem] leading-8' },
	h2: { default: 'font-bold text-[1.75rem] leading-7' },
	h3: { default: 'font-bold text-[1.5rem] leading-6' },
	h4: { default: 'font-bold text-[1.25rem] leading-5' },
	h5: { default: 'font-bold text-[1.125rem] leading-[1.125rem]' },
	h6: { default: 'font-bold text-[1rem] leading-4' },
	header: { default: 'flex ring-1 ring-black/10 dark:ring-white/5' },
	icon: { default: 'h-6 w-6' },
	input: { default: inputBaseClasses },
	label: { default: '' },
	legend: { default: '' },
	main: { default: 'flex flex-grow flex-col overflow-auto p-4' },
	modal: {
		default:
			'max-w-[calc(100dvw_-_2rem)] max-h-[calc(100dvh_-_2rem)] overflow-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
	},
	nav: { default: 'flex flex-col flex-grow overflow-y-auto' },
	option: { default: 'dark:bg-slate-800 py-3' },
	overlay: {
		default:
			'absolute top-0 left-0 h-full w-full bg-black/70 transition duration-200 backdrop-blur-sm'
	},
	p: { default: 'text-4 leading-6' },
	popover: {
		default: 'text-md absolute left-1/2 -top-2 -translate-x-1/2 -translate-y-full py-0 px-2'
	},
	progressIndicator: { default: '' },
	radio: {
		default: twMerge(
			inputBaseClasses,
			'after:scale-0 bg-transparent dark:bg-transparent group-hover:ring-offset-violet-500 px-0 py-0 w-6 h-6 rounded-full mr-3 relative after:content-[""] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white after:w-3 after:h-3'
		),
		selected: 'bg-violet-500 dark:bg-violet-500 after:scale-100'
	},
	range: {
		default:
			'appearance-none rounded-full outline-none ring ring-transparent focus:ring-violet-500/30 bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-50 p-[1px] [&::-webkit-slider-runnable-track]:bg-violet-500 [&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-runnable-track]:h-8 [&::-webkit-slider-runnable-track]:p-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-violet-500'
	},
	section: { default: 'flex flex-col py-20' },
	select: { default: `${inputBaseClasses} cursor-pointer` },
	summary: {
		default:
			'font-bold transition duration-200 hover:cursor-pointer text-slate-950 dark:text-slate-50 flex items-center justify-between hover:text-slate-950 dark:hover:text-slate-50 py-2 marker:content-none'
	},
	table: { default: twMerge(card, 'table p-0 text-left relative rounded-none') },
	tbody: { default: '' },
	td: { default: 'px-6 py-3 whitespace-nowrap' },
	textarea: { default: inputBaseClasses },
	th: {
		default:
			'px-6 py-3 whitespace-nowrap top-0 bg-slate-50 dark:bg-slate-900 shadow-[inset_0_-1px_0_rgba(0,0,0,.1)] dark:shadow-[inset_0_-1px_0_rgba(255,255,255,.1)] sticky'
	},
	thead: { default: '' },
	tr: {
		default:
			'border-b border-black/10 last:border-b-0 dark:border-white/10 dark:last:border-b-0even:bg-black/5 dark:even:bg-white/25 hover:bg-violet-500/10 hover:even:bg-violet-500/10 transition duration-200'
	}
};

export default theme;
