<script lang="ts">
  import hljs from 'highlight.js';
  import svelte from 'highlightjs-svelte';
  svelte(hljs);

  $: code = `<script>
  import { Button, Card, Fieldset, Form, Input, H1 } from 'sveltewind/components';
  import { theme } from 'sveltewind/stores';
  import { sveltewind } from 'sveltewind/themes';

  theme.set(sveltewind);
<\/script>

<Card>
  <Form>
    <H1>Welcome Back!<\/H1>
    <Fieldset legend="Username or email">
      <Input \/>
    <\/Fieldset>
    <Fieldset legend="Username or email">
      <Input \/>
    <\/Fieldset>
    <Button>Sign In<\/Button>
  <\/Form>
<\/Card>`;

  $: html = hljs.highlight('svelte', code).value;
</script>

<div class="relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6">
  <div class="-mx-4 sm:mx-0">
    <div
      class="relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none]"
    >
      <div class="relative w-full flex flex-col">
        <div class="flex-none border-b border-slate-500/30">
          <div class="flex items-center h-8 space-x-1.5 px-3">
            <div class="w-2.5 h-2.5 bg-slate-600 rounded-full" />
            <div class="w-2.5 h-2.5 bg-slate-600 rounded-full" />
            <div class="w-2.5 h-2.5 bg-slate-600 rounded-full" />
          </div>
        </div>
        <div class="relative min-h-0 flex-auto flex flex-col">
          <div class="w-full flex-auto flex min-h-0 overflow-auto">
            <div class="w-full relative flex-auto">
              <pre class="flex min-h-full text-sm leading-6">
								<div
                  aria-hidden="true"
                  class="hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none"
                  style="width:50px">{[...Array(html.split('\n').length + 1)]
                    .map((_, i) => i + 1)
                    .join('\n')}</div>
								<code class="flex-auto relative block text-slate-50 pt-4 pb-4 px-4 overflow-auto">{@html html}</code
                >
							</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
