<script lang="ts">
	import { Div, MultiSelect } from '$lib/components';
	const options = [
		{ label: 'Svelte', value: 'svelte' },
		{ label: 'TypeScript', value: 'typescript' },
		{ label: 'Tailwind CSS', value: 'tailwind' },
		{ disabled: true, label: 'Unavailable option', value: 'disabled' }
	];
	let selectedMany = $state(['svelte']);
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Div class="w-full min-w-0">
		<MultiSelect {options} label="Your tools" bind:value={selectedMany} />
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	<Div class="w-full min-w-0">
		<MultiSelect variants={['compact']} {options} label="Your tools" bind:value={selectedMany} />
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-none border-primary-500 shadow-none locally."} -->
	<Div class="w-full min-w-0">
		<MultiSelect
			class="rounded-none border-primary-500 shadow-none"
			{options}
			label="Your tools"
			bind:value={selectedMany}
		/>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change disabled while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<MultiSelect disabled={true} {options} label="Your tools" bind:value={selectedMany} />
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different options, label values."} -->
	<Div class="w-full min-w-0">
		<MultiSelect
			options={[
				{ label: 'Design', value: 'design' },
				{ label: 'Engineering', value: 'engineering' },
				{ label: 'Operations', value: 'operations' }
			]}
			label="Project teams"
			bind:value={selectedMany}
		/>
	</Div>
{/if}
