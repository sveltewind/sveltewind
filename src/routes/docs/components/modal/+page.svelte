<script lang="ts">
	import { Button, Checkbox, Div, Modal } from '$components/index.js';

	// props
	let close: () => void;
	let isVisible = false;
	let open: () => void;
	let showOverlay: boolean = true;
	let toggle: () => void;
</script>

<Div class="flex flex-col items-start space-y-4">
	<Checkbox bind:checked={showOverlay}>Show Overlay?</Checkbox>

	<div class="flex space-x-4">
		<Button disabled={isVisible ? undefined : 'disabled'} onclick={close}>Close</Button>
		<Button disabled={!isVisible ? undefined : 'disabled'} onclick={open}>Open</Button>
		<Button onclick={toggle}>Toggle</Button>
	</div>
</Div>

<Modal bind:close bind:isVisible bind:open bind:showOverlay bind:toggle>Modal Content</Modal>
