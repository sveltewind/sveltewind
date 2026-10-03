<script lang="ts">
	import { Card, H2, P, Button, Dialog, H3, Div, Alert } from '$lib/components';
	const uid = $props.id();
	let open = $state(false);
	let confirmed = $state(false);
	let value = $state('');
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5"
	><H2 class="text-2xl font-semibold">Delete project confirmation</H2><P class="text-sm"
		>Open the dialog to review this action. Escape or Cancel closes it.</P
	><Button
		type="button"
		onclick={() => {
			open = true;
			confirmed = false;
		}}>Open dialog</Button
	><Dialog
		bind:isVisible={open}
		aria-labelledby={uid}
		class="w-[calc(100%-2rem)] max-w-md space-y-5"
		><H3 id={uid} class="text-xl">Delete this project?</H3><P
			>You can cancel before confirming this demo action.</P
		><Div class="flex flex-wrap justify-end gap-3"
			><Button type="button" variants={['outline']} onclick={() => (open = false)}>Cancel</Button
			><Button
				type="button"
				variants={['danger']}
				onclick={() => {
					confirmed = true;
					open = false;
				}}>Delete project</Button
			></Div
		></Dialog
	>{#if confirmed}<Alert variants={['success']} role="status"
			>Delete project confirmed{value ? ': ' + value : ''}. This demo does not change any account or
			stored data.</Alert
		>{/if}</Card
>
