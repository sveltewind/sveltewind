<script lang="ts">
  const backgroundImageStroke = {
    dark: 'rgb(148 163 184 / 0.05)',
    light: 'rgb(15 23 42 / 0.04)'
  };
  const backgroundImage = (mode: 'dark' | 'light') =>
    btoa(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${backgroundImageStroke[mode]}'><path d='M0 .5H31.5V32'/></svg>`
    );
</script>

<div class="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-slate-950">
  <img
    alt="Index Beam"
    class="dark:hidden w-[150rem] absolute bottom-0 left-1/2 -translate-x-1/2"
    src="/media/hero@75.b2469a49.jpg"
  />
  <img
    alt="Index Beam"
    class="hidden dark:block w-[86.125rem] absolute bottom-0 left-1/2 -translate-x-1/2"
    src="/media/hero-dark@90.dba36cdf.jpg"
  />
  <div
    class="absolute inset-0 dark:hidden bg-[bottom_1px_center]"
    style="background-image: url(data:image/svg+xml;base64,{backgroundImage(
      'light'
    )}); -webkit-mask-image:linear-gradient(to bottom, transparent, black);"
  />
  <div
    class="absolute inset-0 hidden bg-bottom dark:block"
    style="background-image: url(data:image/svg+xml;base64,{backgroundImage(
      'dark'
    )}); -webkit-mask-image:linear-gradient(to bottom, transparent, black);"
  />
</div>
