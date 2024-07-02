<script lang="ts">
	import { Button, Card, Checkbox, Div, Drawer, Fieldset, Select } from '$components/index.js';

	// props
	let close: () => void;
	let isVisible = false;
	let open: () => void;
	let position: 'bottom' | 'left' | 'right' | 'top' = 'left';
	const positions = [
		{ label: 'Bottom', value: 'bottom' },
		{ label: 'Left', value: 'left' },
		{ label: 'Right', value: 'right' },
		{ label: 'Top', value: 'top' }
	];
	let showOverlay: boolean = true;
	let toggle: () => void;
</script>

<Div class="flex flex-col items-start space-y-4">
	<Fieldset legend="Position">
		<Select bind:value={position} options={positions} />
	</Fieldset>

	<Checkbox bind:checked={showOverlay}>Show Overlay?</Checkbox>

	<div class="flex space-x-4">
		<Button disabled={isVisible ? undefined : 'disabled'} onclick={close}>Close</Button>
		<Button disabled={!isVisible ? undefined : 'disabled'} onclick={open}>Open</Button>
		<Button onclick={toggle}>Toggle</Button>
	</div>
</Div>

<Drawer bind:close bind:isVisible bind:open bind:position bind:showOverlay bind:toggle>
	<Card class="flex flex-grow overflow-auto rounded-none">
		Here is a Drawer
		<Button onclick={close}>Close Drawer</Button>
	</Card>
</Drawer>
