import { twMerge } from 'tailwind-merge';

const card =
  'shadow-md bg-white dark:bg-slate-900 dark:shadow-[inset_0_1px_0_0_#ffffff0d,_0_4px_6px_-1px_rgb(0_0_0_/_0.3),_0_2px_4px_-2px_rgb(0_0_0_/_0.3)] ring-1 rounded-lg flex flex-col p-6 ring-slate-800/10 dark:ring-white/5';
const inputBaseClasses =
  'bg-transparent dark:bg-transparent appearance-none rounded-lg leading-6 px-6 py-3 transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-slate-300 hover:ring-offset-violet-500 focus:ring-offset-violet-500 focus:ring-violet-500/30 dark:text-slate-50 dark:ring-offset-white/5';

export default {
  a: 'transtion duration-200 relative outline-none hover:text-white shadow-[inset_0_-1px_0_0_#bdb] hover:shadow-[inset_0_0_-10px_0_#f00]',
  badge: 'bg-violet-500 text-white rounded-lg text-sm px-3',
  breadcrumb: 'flex space-x-3',
  button:
    'text-sm leading-6 font-semibold shadow-[inset_0_1px_0_0_#ffffff0d] flex justify-center items-center bg-violet-500 hover:bg-violet-600 focus:bg-violet-600 disabled:bg-slate-500 disabled:cursor-default px-6 py-3 rounded-lg text-white transition duration-200 outline-none ring ring-transparent focus:ring-violet-500/30',
  buttonIcon: 'px-3',
  buttonOutline:
    'ring-offset ring-offset-violet-500 bg-transparent hover:bg-violet-500/10 focus:bg-violet-500/10 focus:bg-violet-500/30 text-violet-500',
  card,
  cardError:
    'bg-red-500 dark:bg-red-500 text-white dark:text-white ring-0 selection:bg-white selection:text-red-500',
  checkbox: `${inputBaseClasses.replace(
    'px-6',
    ''
  )} mr-3 peer-focus:ring-offset-violet-500 peer-focus:ring-violet-500/30 cursor-pointer px-0 py-0`,
  checkboxChecked: 'bg-violet-500 dark:bg-violet-500',
  container: 'mx-auto w-full lg:max-w-[90rem] xl:max-w-[100rem]',
  drawer: 'fixed flex',
  fieldset: 'flex flex-col space-y-1',
  form: 'flex flex-col space-y-4',
  h1: 'font-bold text-[2rem] leading-8',
  h2: 'font-bold text-[1.75rem] leading-7',
  h3: 'font-bold text-[1.5rem] leading-6',
  h4: 'font-bold text-[1.25rem] leading-5',
  h5: 'font-bold text-[1.125rem] leading-[1.125rem]',
  h6: 'font-bold text-[1rem] leading-4',
  header: 'flex ring-1 ring-black/10 dark:ring-white/5',
  icon: 'h-6 w-6',
  input: inputBaseClasses,
  label: '',
  legend: '',
  main: 'flex flex-grow flex-col overflow-auto items-start p-4',
  modal: 'pointer-events-auto max-h-full max-w-full overflow-auto',
  nav: 'flex flex-col flex-grow overflow-y-auto',
  option: 'dark:bg-slate-800 py-3',
  overlay:
    'absolute top-0 left-0 h-full w-full bg-black/70 transition duration-200 backdrop-blur-sm',
  p: 'text-4 leading-6',
  progressIndicator: '',
  radio: twMerge(
    inputBaseClasses,
    'after:scale-0 bg-transparent dark:bg-transparent group-hover:ring-offset-violet-500 px-0 py-0 w-6 h-6 rounded-full mr-3 relative after:content-[""] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white after:w-3 after:h-3'
  ),
  radioSelected: 'bg-violet-500 dark:bg-violet-500 after:scale-100',
  section: 'flex flex-col py-20',
  select: `${inputBaseClasses} cursor-pointer`,
  table: twMerge(card, 'table p-0 text-left relative rounded-none'),
  tbody: '',
  td: 'px-6 py-3 whitespace-nowrap',
  textarea: inputBaseClasses,
  th: 'px-6 py-3 whitespace-nowrap top-0 bg-slate-50 dark:bg-slate-900 shadow-[inset_0_-1px_0_rgba(0,0,0,.1)] dark:shadow-[inset_0_-1px_0_rgba(255,255,255,.1)] sticky',
  thead: '',
  tr: 'border-b border-black/10 last:border-b-0 dark:border-white/10 dark:last:border-b-0even:bg-black/5 dark:even:bg-white/25 hover:bg-violet-500/10 hover:even:bg-violet-500/10 transition duration-200'
};
