<script lang="ts">
  // imports
  import { ProgressIndicator } from '$components/index.js';
  import { createHighlighter } from 'shiki';
  import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';
  import { onMount } from 'svelte';

  // props
  let {
    code = $bindable(),
    options = $bindable()
  }: {
    code: string;
    options?: CodeToHastOptions<BundledLanguage, BundledTheme>;
  } = $props();
  let html = $state('');

  // effects
  $effect(() => {
    if (code === undefined) code = 'let banana = 🍌';
  });
  $effect(() => {
    if (options === undefined) options = { lang: 'text', theme: 'github-dark' };
  });
  $effect(() => {
    if (options?.lang === undefined) options.lang = 'text';
    if (options?.theme === undefined) options.theme = 'github-dark';
    if (options?.themes === undefined)
      options.themes = { dark: 'github-dark', light: 'github-light' };
  });

  onMount(async () => {
    const highlighter = await createHighlighter({
      langs: options?.langs || [options?.lang || 'text'],
      themes: Array.isArray(options?.themes)
        ? options.themes
        : options?.themes !== undefined
        ? Object.values(options.themes)
        : [options?.theme || 'github-dark']
    });

    html = highlighter.codeToHtml(code, options);

    highlighter.dispose();
  });
</script>

{#if html === ''}
  <ProgressIndicator />
{:else}
  {@html html}
{/if}
