<script>
	// imports
	import { twMerge } from 'tailwind-merge';
	import { Button, Fieldset, Icon, Modal, Radio } from '..';
	import { DocumentArrowDown } from '../icons';
	import { download } from '../../utilities';
	import { theme } from '../../stores';

	// props (internal)
	let downloadType = 'XLSX';
	const downloadTypeOptions = ['Clipboard', 'CSV', 'XLSX'].map((label) => {
		return { label, value: label };
	});

	// props (external)
	export let active = true;
	export let clickHandler = () => {
		open();
	};
	export let close;
	export let confirmHandler = async () => {
		try {
			const headers = [...columns].filter((column) => column?.isVisible !== false);
			const body = selectedRows.map((row) => [...headers].map((column) => row[column.key]));
			if (downloadType === 'Clipboard')
				download.clipboard(
					[headers.map(({ label }) => label), ...body].map((row) => row.join('\t')).join('\r\n')
				);
			if (downloadType === 'CSV') download.csv([headers.map(({ label }) => label), ...body]);
			if (downloadType === 'XLSX')
				download.xlsx(
					headers.map(({ label }) => label),
					body
				);
			close();
		} catch (error) {
			console.log(error);
		}
	};
	export let columns = [];
	export let isOpen = false;
	export let open;
	export let toggle;
	export let selectedRows = [];
</script>

{#if active}
	<Button
		class={twMerge($theme.buttonIcon)}
		disabled={selectedRows.length > 0 ? undefined : 'disabled'}
		on:click={clickHandler}
	>
		<Icon src={DocumentArrowDown} />
	</Button>
	<Modal bind:close bind:isOpen bind:open bind:toggle class="space-y-[1rem]">
		<Fieldset class="flex flex-col space-y-[.5rem]" legend="Download Type">
			{#each downloadTypeOptions as { label, value }}
				<Radio bind:group={downloadType} {value}>{label}</Radio>
			{/each}
		</Fieldset>
		<div class="grid grid-cols-2 gap-[.5rem]">
			<Button class={$theme.buttonOutline} on:click={close}>Cancel</Button>
			<Button on:click={confirmHandler}>{downloadType === 'Clipboard' ? 'Copy' : 'Download'}</Button
			>
		</div>
	</Modal>
{/if}
