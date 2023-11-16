<script lang="ts">
  import * as Icons from '../../../Icons';

  const links = [
    { href: '/docs/installation', label: 'Docs' },
    { href: 'https://tailwindui.com?ref=top', label: 'Components' },
    { href: '/blog', label: 'Blog' },
    { href: '/showcase', label: 'Showcase' }
  ];
</script>

<div class="flex items-center">
  <button
    type="button"
    class="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300"
  >
    <span class="sr-only">Search</span>
    <Icons.MagnifyingGlass />
  </button>
  <div class="-my-1 ml-2 -mr-1 md:hidden">
    <button
      type="button"
      class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
    >
      <span class="sr-only">Navigation</span>
      <Icons.ThreeDots />
    </button>
    <div
      style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"
    />
  </div>
  <div class="hidden md:flex items-center">
    <nav>
      <ul class="flex items-center gap-x-8">
        {#each links as { href, label }}
          <li>
            <a class="hover:text-violet-500 dark:hover:text-violet-400" {href}>{label}</a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
      <label class="sr-only"> Theme </label>
      <button type="button">
        <span class="dark:hidden"><Icons.Sun /></span>
        <span class="hidden dark:inline"><Icons.Moon /></span>
      </button>
      <a
        href="https://github.com/tailwindlabs/tailwindcss"
        class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
      >
        <span class="sr-only">Tailwind CSS on GitHub</span><Icons.Github />
      </a>
    </div>
  </div>
</div>
