<script>
  // imports
  import { page } from '$app/stores';

  // props (external)
  export let base = '';
  export let generateTitle = ({ base, pathname }) => [
      pathname
        .slice(1)
        .split('/')
        .reverse()
        .map(directory=>directory
          .split('-')
          .map(word=>word === '' ? '' : word[0].toUpperCase() + word.slice(1))
          .join(' ')
        )
        .join(' - ')
      ,
      base
    ]
    .filter(s => s !== '')
    .join(' - ')
  export let title = ''

  // props (dynamic)
  $: if ($page && $page?.url?.pathname) {
    title = generateTitle({ base, pathname: $page.url.pathname })
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>