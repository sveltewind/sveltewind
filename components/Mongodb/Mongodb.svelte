<script>
  // imports
  import { mongodb, pageLoaded, socket } from '../../stores/index.js';

  // utilities
  const init = async () => {
    await mongodb.init();
    $pageLoaded.mongodb = true;
  }

  // props (dynamic)
  $: if ($socket !== undefined) init();
</script>