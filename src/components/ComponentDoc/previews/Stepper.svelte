<script lang="ts">
	import { Div, Stepper } from '$lib/components';
	let step = $state(1);
	let {
		documentationExample = 'default',
		documentationVariant = ''
	}: {
		documentationVariant?: string;
		documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content';
	} = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Div class="w-full min-w-0">
		<Stepper
			steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Finish' }]}
			allowNavigation
			bind:current={step}
		/>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Div class="w-full min-w-0">
		<Stepper
			variants={[documentationVariant]}
			steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Finish' }]}
			allowNavigation
			bind:current={step}
		/>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<Stepper
			class="rounded-xl border border-primary-500/40 p-4"
			steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Finish' }]}
			allowNavigation
			bind:current={step}
		/>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change allowNavigation while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<Stepper
			steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Finish' }]}
			allowNavigation={false}
			bind:current={step}
		/>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different steps values."} -->
	<Div class="w-full min-w-0">
		<Stepper
			steps={[{ label: 'Discovery' }, { label: 'Build' }, { label: 'Launch' }]}
			allowNavigation
			bind:current={step}
		/>
	</Div>
{/if}
