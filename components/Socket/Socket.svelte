<script>
  // imports
  import { io } from 'socket.io-client';
  import { onMount } from 'svelte';
  import { socket } from '../../stores';

  // lifecycle
  onMount(() => {
    $socket = io();
  })
</script>

<slot />