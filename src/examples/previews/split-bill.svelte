<script lang="ts">
	import {
		Badge,
		Card,
		Checkbox,
		Div,
		Field,
		H2,
		H3,
		Input,
		Label,
		P,
		Range
	} from '$lib/components';
	const uid = $props.id();
	let bill = $state(84);
	let guests = $state(3);
	let tip = $state(15);
	let round = $state(false);
	const gratuity = $derived((bill * tip) / 100);
	const exactShare = $derived((bill + gratuity) / guests);
	const share = $derived(round ? Math.ceil(exactShare) : exactShare);
	const money = (value: number) => '$' + value.toFixed(2);
</script>

<Div class="grid w-full gap-5 md:grid-cols-2">
	<Card class="space-y-5">
		<Badge>Dinner with friends</Badge>
		<H2 class="text-2xl font-semibold">Split the bill</H2>
		<Field>
			<Label for={uid + '-bill'}>Bill amount ($)</Label>
			<Input
				id={uid + '-bill'}
				type="number"
				min={0}
				step="0.01"
				value={bill}
				oninput={(event) => (bill = Math.max(0, Number(event.currentTarget.value) || 0))}
			/>
		</Field>
		<Field>
			<Label for={uid + '-guests'}>Number of guests</Label>
			<Input
				id={uid + '-guests'}
				type="number"
				min={1}
				max={20}
				value={guests}
				oninput={(event) =>
					(guests = Math.max(1, Math.min(20, Number(event.currentTarget.value) || 1)))}
			/>
		</Field>
		<Div class="flex justify-between">
			<Label for={uid + '-tip'}>Tip</Label>
			<Badge>{tip}%</Badge>
		</Div>
		<Range
			id={uid + '-tip'}
			aria-label="Tip percentage"
			bind:value={tip}
			min={0}
			max={30}
			step={1}
			class="w-full"
		/>
		<Checkbox bind:checked={round}>Round each share up to the next dollar</Checkbox>
	</Card>
	<Card class="flex flex-col justify-center gap-5 bg-primary-500/5 text-center">
		<H3 class="text-sm font-medium">Each person pays</H3>
		<P class="text-5xl font-semibold tracking-tight">{money(share)}</P>
		<Div class="space-y-3 text-left text-sm">
			<Div class="flex justify-between">
				<P>Bill</P>
				<P>{money(bill)}</P>
			</Div>
			<Div class="flex justify-between">
				<P>Tip</P>
				<P>{money(gratuity)}</P>
			</Div>
			<Div class="flex justify-between border-t border-primary-500/20 pt-3">
				<P>Total contribution</P>
				<P>{money(share * guests)}</P>
			</Div>
			{#if round}
				<P class="text-xs">
					Rounding adds {money(share * guests - bill - gratuity)} to the shared total.
				</P>
			{/if}
		</Div>
	</Card>
</Div>
