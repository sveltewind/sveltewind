const inputBaseClasses =
  'bg-white appearance-none rounded px-[1.5rem] py-[.5rem] transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-gray-300 hover:ring-offset-blue-500 focus:ring-offset-blue-500 focus:ring-blue-500/[.3]';

export default {
  button:
    'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 px-[1.5rem] py-[.5rem] rounded text-white transition duration-200 outline-none ring ring-transparent focus:ring-blue-500/30',
  card: 'rounded flex flex-col bg-white p-[1.5rem] shadow',
  fieldset: 'flex flex-col',
  form: 'flex flex-col space-y-[1rem]',
  h1: 'font-bold text-[4rem] leading-[6rem]',
  h2: 'font-bold text-[3.5rem] leading-[5.25rem]',
  h3: 'font-bold text-[3rem] leading-[4.5rem]',
  h4: 'font-bold text-[2.5rem] leading-[3.75rem]',
  h5: 'font-bold text-[2rem] leading-[3rem]',
  h6: 'font-bold text-[1.5rem] leading-[2.25rem]',
  icon: 'h-[1.5rem] w-[1.5rem]',
  input: inputBaseClasses,
  legend: '',
  main: 'flex flex-col flex-grow relative overflow-hidden lg:flex-row-reverse',
  modal:
    'fixed z-[1] top-0 left-0 h-full w-full transition duration-200 flex items-center justify-center pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]',
  nav: 'flex justify-start items-center bg-gray-200 lg:flex-col',
  option: '',
  overlay: 'absolute top-0 left-0 h-full w-full bg-black/70',
  p: 'text-[1rem] leading-[1.5rem]',
  safeArea:
    'flex flex-col flex-grow pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] overflow-hidden',
  select: `${inputBaseClasses} cursor-pointer`,
  table: 'text-left relative bg-white shadow',
  tbody: '',
  td: 'px-[1.5rem] py-[.5rem] whitespace-nowrap',
  th:
    'px-[1.5rem] py-[.5rem] border-b border-black whitespace-nowrap top-0 bg-white',
  thead: '',
  tr: 'border-b border-black/10 last:border-b-0',
};
