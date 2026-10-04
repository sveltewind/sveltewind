<script lang="ts">
	import { Calendar, Div, P } from '$lib/components';
	let value = $state('2026-10-15');
	let {
		documentationExample = 'default',
		documentationVariant = ''
	}: {
		documentationVariant?: string;
		documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content';
	} = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"Bind a date-only selection."} -->
	<Div>
		<Calendar bind:value />
		<P>Selected: {value}</P>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Choose compact spacing, a border, or a soft surface."} -->
	<Calendar bind:value variants={[documentationVariant]} />
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Override the calendar surface locally."} -->
	<Calendar bind:value class="rounded-xl border border-primary-500/40" />
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Date constraints and localization","description":"Use Monday-first weeks, localized labels, and inclusive date bounds."} -->
	<Calendar
		bind:value
		locale="en-GB"
		weekStartsOn={1}
		min="2026-10-05"
		max="2026-11-20"
		isDateDisabled={(date) => date.endsWith('-15')}
	/>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Custom day content","description":"Decorate a day using its date and selection state. Keep snippet content non-interactive."} -->
	<Calendar bind:value>
		{#snippet day({ day, date })}
			<span class="relative">
				{day}
				{#if date === '2026-10-20'}
					<span
						aria-hidden="true"
						class="absolute -bottom-1 left-1/2 size-1 rounded-full bg-current"
					></span>
				{/if}
			</span>
		{/snippet}
		<P class="mt-3 text-xs">Choose a date for your appointment.</P>
	</Calendar>
{/if}
