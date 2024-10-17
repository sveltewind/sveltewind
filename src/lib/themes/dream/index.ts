import { twMerge } from 'tailwind-merge';
import type { Theme } from '$lib/types.js';

const card =
	'shadow-md bg-white dark:bg-gray-800 dark:shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.3),_0_2px_4px_-2px_rgb(0_0_0_/_0.3)] ring-1 rounded flex flex-col p-[1.5rem] ring-gray-800/[.1] dark:ring-white/[.1]';
const inputBaseClasses =
	'bg-transparent dark:bg-transparent appearance-none rounded px-[1.5rem] py-[.5rem] transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-gray-300 hover:ring-offset-blue-500 focus:ring-offset-blue-500 focus:ring-blue-500/[.3] dark:text-gray-50 dark:ring-offset-white/[.05]';

const theme: Theme = {
	a: {
		default:
			'relative outline-none hover:text-white shadow-[inset_0_-1px_0_0_#bdb] hover:shadow-[inset_0_0_-10px_0_#f00]'
	},
	badge: { default: 'bg-blue-500 text-white rounded text-[.875rem] px-[.5rem]' },
	breadcrumb: { default: 'flex space-x-[.5rem]' },
	button: {
		default:
			'flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 disabled:bg-gray-500 disabled:cursor-default px-[1.5rem] py-[.5rem] rounded text-white transition duration-200 outline-none ring ring-transparent focus:ring-blue-500/30'
	},
	card: { default: card },
	checkbox: {
		default: `${inputBaseClasses.replace(
			'px-[1.5rem]',
			''
		)} mr-[.5rem] peer-focus:ring-offset-blue-500 peer-focus:ring-blue-500/[.3] cursor-pointer px-[0] py-[0]`
	},
	container: { default: 'mx-auto w-full px-[1rem] lg:max-w-[90rem]' },
	dataTableToolbar: {
		default:
			'flex flex-row rounded-none rounded-t items-center justify-end py-[.5rem] px-[.5rem] space-x-[.5rem] shadow-none dark:shadow-none'
	},
	dataTableTh: {
		default: 'cursor-pointer transition duration-200 hover:bg-blue-50 dark:hover:bg-blue-950'
	},
	dataTableType: {
		default: twMerge(inputBaseClasses, 'ring-0 dark:ring-0 ring-offset-0 rounded-none')
	},
	drawer: { default: 'fixed transition duration-200 bg-white dark:bg-white/[.025]' },
	fieldset: { default: 'flex flex-col space-y-[.25rem]' },
	form: { default: 'flex flex-col space-y-[1rem]' },
	h1: { default: 'font-bold text-[2rem] leading-[2rem]' },
	h2: { default: 'font-bold text-[1.75rem] leading-[1.75rem]' },
	h3: { default: 'font-bold text-[1.5rem] leading-[1.5rem]' },
	h4: { default: 'font-bold text-[1.25rem] leading-[1.25rem]' },
	h5: { default: 'font-bold text-[1.125rem] leading-[1.125rem]' },
	h6: { default: 'font-bold text-[1rem] leading-[1rem]' },
	header: {
		default:
			'flex justify-end ring-1 ring-black/[.1] lg:flex-col lg:justify-start dark:ring-white/[.05]'
	},
	icon: { default: 'h-[1.5rem] w-[1.5rem]' },
	input: { default: inputBaseClasses },
	label: { default: '' },
	legend: { default: '' },
	main: { default: 'flex flex-col' },
	modal: {
		default:
			'flex fixed top-1/2 left-1/2 -translate-x-1/2 max-w-[calc(100dvw_-_2rem)] min-w-[calc(375px_-_2rem)] -translate-y-1/2 z-[2] transition duration-200 max-h-[calc(100dvh_-_2rem)]'
	},
	nav: { default: 'flex flex-col flex-grow overflow-y-auto' },
	option: { default: 'dark:bg-gray-800 py-[.5rem]' },
	overlay: {
		default:
			'absolute top-0 left-0 h-full w-[100dvw] h-[100dvh] bg-black/70 transition duration-200'
	},
	p: { default: 'text-[1rem] leading-[1.5rem]' },
	progressIndicator: { default: '' },
	radio: {
		default: twMerge(
			inputBaseClasses,
			'after:scale-0 bg-transparent dark:bg-transparent group-hover:ring-offset-blue-500 px-0 py-0 w-[1.5rem] h-[1.5rem] rounded-full mr-[.5rem] relative after:content-[""] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white after:w-[.5rem] after:h-[.5rem]'
		)
	},
	radioSelected: { default: 'bg-blue-500 dark:bg-blue-500 after:scale-100' },
	section: { default: 'flex flex-col py-[5rem]' },
	select: { default: `${inputBaseClasses} cursor-pointer py-0` },
	table: { default: twMerge(card, 'table p-0 text-left relative rounded-none') },
	tbody: { default: '' },
	td: { default: 'px-[1.5rem] py-[.5rem] whitespace-nowrap' },
	textarea: { default: inputBaseClasses },
	th: {
		default:
			'px-[1.5rem] py-[.5rem] whitespace-nowrap top-0 bg-gray-50 dark:bg-gray-900 shadow-[inset_0_-1px_0_rgba(0,0,0,.1)] dark:shadow-[inset_0_-1px_0_rgba(255,255,255,.1)] sticky'
	},
	thead: { default: '' },
	tr: {
		default:
			'border-b border-black/10 last:border-b-0 dark:border-white/10 dark:last:border-b-0even:bg-black/[.05] dark:even:bg-white/[.025] hover:bg-blue-500/[.1] hover:even:bg-blue-500/[.1] transition duration-200'
	}
};

export default theme;
