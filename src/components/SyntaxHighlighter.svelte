<script lang="ts">
  import { SyntaxHighlighter } from '$lib/components/index.js';
  import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';

  // props
  let {
    code = $bindable(),
    options = $bindable()
  }: {
    code: string;
    options?: CodeToHastOptions<BundledLanguage, BundledTheme>;
  } = $props();
  $effect(() => {
    if (options === undefined) options = {};
    if (options?.defaultColor === undefined) options.defaultColor = false;
    if (options?.transformers === undefined)
      options.transformers = [
        {
          pre(node) {
            this.addClassToHast(node, 'px-4 py-2 overflow-auto');
          }
        }
      ];
  });
</script>

<SyntaxHighlighter {code} {options} />
