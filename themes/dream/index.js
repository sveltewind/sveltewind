const inputBaseClasses =
  'bg-white appearance-none rounded px-[1.5rem] py-[.5rem] transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-gray-300 hover:ring-offset-blue-500 focus:ring-offset-blue-500 focus:ring-blue-500/[.3] dark:bg-gray-900 dark:text-gray-50 dark:ring-offset-white/[.05]';

export default {
  a: 'relative outline-none hover:text-white before:rounded-none before:ring before:ring-blue-500/0 before:transition-all before:duration-200 before:bottom-[-.25rem] before:left-1/2 before:transform before:translate-x-[-50%] before:absolute before:content-[""] before:h-[1px] before:w-full before:bg-blue-500 before:z-[-1] hover:before:h-[calc(100%+1rem)] hover:before:bottom-[-.5rem] hover:before:w-[calc(100%+1.5rem)] hover:before:bg-blue-600 focus:before:h-[calc(100%+1rem)] focus:before:bottom-[-.5rem] focus:before:w-[calc(100%+1.5rem)] focus:before:bg-blue-600 focus:before:ring-blue-500/30 hover:before:rounded focus:before:rounded',
  button:
    'flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 px-[1.5rem] py-[.5rem] rounded text-white transition duration-200 outline-none ring ring-transparent focus:ring-blue-500/30',
  card: 'rounded flex flex-col bg-white p-[1.5rem] shadow dark:bg-white/[.025] dark:shadow-none dark:ring-1 dark:ring-white/[.05]',
  checkbox: `${inputBaseClasses.replace(
    'px-[1.5rem]',
    ''
  )} mr-[.5rem] peer-focus:ring-offset-blue-500 peer-focus:ring-blue-500/[.3] cursor-pointer px-[0] py-[0]`,
  checkboxChecked: 'bg-blue-500 dark:bg-blue-500',
  container: 'mx-auto w-full px-[1rem] lg:max-w-[1488px]',
  fieldset: 'flex flex-col space-y-[.25rem]',
  form: 'flex flex-col space-y-[1rem]',
  h1: 'font-bold text-[2rem] leading-[2rem]',
  h2: 'font-bold text-[1.75rem] leading-[1.75rem]',
  h3: 'font-bold text-[1.5rem] leading-[1.5rem]',
  h4: 'font-bold text-[1.25rem] leading-[1.25rem]',
  h5: 'font-bold text-[1.125rem] leading-[1.125rem]',
  h6: 'font-bold text-[1rem] leading-[1rem]',
  header:
    'flex justify-end ring-1 ring-black/[.1] lg:flex-col lg:justify-start dark:ring-white/[.05]',
  icon: 'h-[1.5rem] w-[1.5rem]',
  input: inputBaseClasses,
  label: '',
  legend: '',
  main: 'flex flex-col',
  modal:
    'fixed z-[1] top-0 left-0 h-full w-full transition duration-200 flex items-center justify-center',
  nav: 'flex flex-col flex-grow overflow-y-auto',
  option: '',
  overlay: 'absolute top-0 left-0 h-full w-full bg-black/70',
  p: 'text-[1rem] leading-[1.5rem]',
  progressIndicator: '',
  section: 'flex flex-col py-[5rem]',
  select: `${inputBaseClasses} cursor-pointer`,
  table:
    'text-left relative bg-white shadow dark:bg-white/[.025] dark:shadow-none dark:ring-1 dark:ring-white/[.05]',
  tbody: '',
  td: 'px-[1.5rem] py-[.5rem] whitespace-nowrap',
  textarea: inputBaseClasses,
  th: 'px-[1.5rem] py-[.5rem] border-b border-black whitespace-nowrap top-0 bg-white dark:border-white',
  thead: '',
  tr: 'border-b border-black/10 last:border-b-0 dark:border-white/10 dark:last:border-b-0',
};
