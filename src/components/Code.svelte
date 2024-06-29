<script lang="ts">
  import { Card, CopyButton, SyntaxHighlighter } from '$components/index.js';
  import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';
  import { twMerge } from 'tailwind-merge';

  // props
  let {
    class: className = undefined,
    code = $bindable(),
    filename = $bindable(),
    options = $bindable()
  }: {
    class?: string;
    code: string;
    filename: string;
    options?: CodeToHastOptions<BundledLanguage, BundledTheme>;
  } = $props();

  // effects
  $effect(() => {
    if (code === undefined) code = '';
  });
</script>

<Card class={twMerge('p-0 overflow-visible', className)}>
  <div
    class="px-4 pr-2 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center"
  >
    <span>
      {filename}
    </span>
    <CopyButton text={code} />
  </div>
  <SyntaxHighlighter {code} {options} />
</Card>
