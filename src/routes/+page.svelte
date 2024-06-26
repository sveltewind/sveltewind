<!-- <script lang="ts">
  import { Card } from '$lib/components';
  import * as components from '$lib/components';
  import { Star } from '$lib/icons';

  // props
  const componentProps = {
    A: {
      children: 'Link'
    },
    Badge: {
      children: 'Badge'
    },
    Button: { children: 'Button' },
    Card: { children: 'Card' },
    Checkbox: {
      children: undefined
    },
    Div: {
      children: 'Div'
    },
    Drawer: {
      
    },
    Icon: { props: { src: Star } },
    Label: { children: 'Label' }
  };
</script>

<Card class="flex-grow rounded-none grid grid-cols-6 max-h-full overflow-auto gap-4">
  {#each Object.keys(components) as componentKey}
    <Card class="aspect-square">
      <div>{componentKey}</div>
      <div class="flex-grow flex items-center justify-center">
        <svelte:component this={components[componentKey]} {...componentProps[componentKey]?.props}>
          {#if componentProps[componentKey]?.children !== undefined}
            {componentProps[componentKey]?.children}
          {/if}
        </svelte:component>
      </div>
    </Card>
  {/each}
</Card> -->
