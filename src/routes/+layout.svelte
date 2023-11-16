<script>
  import { theme } from '$lib/stores';
  import { sveltewind } from '$lib/themes';
  import '../app.postcss';

  theme.set(sveltewind);
</script>

<slot />
