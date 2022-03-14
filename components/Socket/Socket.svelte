<script>
  // imports
  import { io } from 'socket.io-client';
  import { onMount } from 'svelte';
  import { pageLoaded, socket } from '../../stores';

  // lifecycle
  onMount(async () => {
    $socket = await io();
    $pageLoaded.socket = true;
  })
</script>

<slot />