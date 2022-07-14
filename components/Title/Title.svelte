<script>
  // imports
  import { page } from '$app/stores';

  // props (internal)
  const routeMap = (route) => route.split('-').map(wordMap).join(' ');
  const wordMap = (string) => (string === '' ? 'Home' : string[0].toUpperCase() + string.slice(1));

  // props (external)
  export let base = '';

  // props (dynamic)
  $: title = [
    ...$page.url.pathname.slice(1).split('/').map(routeMap).reverse(),
    base
  ].join(' - ');
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>