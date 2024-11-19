<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { Modal, Checkbox, Fieldset, Select, Button } from '$lib/components';

	let isVisible = $state(false);
	let transition = $state(fade);
	let transitionOptions = [
		{ label: 'fade', value: fade },
		{ label: 'slide', value: slide }
	];
</script>

<!-- <Checkbox bind:checked={isVisible} onclick={() => console.log('test')}>isVisible</Checkbox> -->
<Button onclick={() => (isVisible = true)}>Modal</Button>
<!-- <Fieldset legend="Transition">
	<Select bind:value={transition} options={transitionOptions} />
</Fieldset> -->

<Modal bind:isVisible>Test</Modal>
<!-- <Modal bind:isVisible transition={[transition]}>Test</Modal> -->
