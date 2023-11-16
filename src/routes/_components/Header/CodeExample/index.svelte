<script lang="ts">
  import Code from './Code/index.svelte';
  import Example from './Example/index.svelte';
</script>

<div
  class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center"
>
  <Code />
  <div class="relative row-start-1 col-start-1 col-span-5 xl:col-span-6 -mt-10">
    <div class="h-[24.25rem] max-w-xl mx-auto lg:max-w-none flex items-center justify-center">
      <Example />
    </div>
  </div>
</div>
