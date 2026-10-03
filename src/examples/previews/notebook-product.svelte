<script lang="ts">
	import { Card, Div, Span, Badge, H2, P, Field, Label, Select, Button } from '$lib/components';
	const options = [
		{ label: 'Grid', value: 'Grid' },
		{ label: 'Lined', value: 'Lined' },
		{ label: 'Blank', value: 'Blank' }
	];
	let option = $state(options[0].value);
	let quantity = $state(1);
	let cart = $state(0);
	const price = 18;
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<Div class="flex h-40 items-center justify-center rounded-xl bg-primary-500/10">
		<Span class="text-5xl font-semibold text-primary-500" aria-hidden="true">N</Span>
	</Div>
	<Badge>Available now</Badge>
	<H2 class="text-2xl font-semibold">Notebook product</H2>
	<P>A thoughtfully made everyday essential. Choose the option that fits your needs.</P>
	<P class="text-3xl font-semibold">&#36;{price}</P>
	<Field>
		<Label for="product-option">Choose an option</Label>
		<Select id="product-option" {options} bind:value={option} />
	</Field>
	<Div class="flex flex-wrap items-center gap-3">
		<Button
			type="button"
			variants={['outline']}
			aria-label="Decrease quantity"
			disabled={quantity === 1}
			onclick={() => quantity--}
		>
			−
		</Button>
		<Span aria-live="polite">{quantity}</Span>
		<Button
			type="button"
			variants={['outline']}
			aria-label="Increase quantity"
			onclick={() => quantity++}
		>
			+
		</Button>
		<Button type="button" onclick={() => (cart += quantity)}>
			Add to cart · &#36;{price * quantity}
		</Button>
	</Div>
	<P role="status">
		{cart
			? cart + ' items in your demo cart. Selected option: ' + option
			: 'Your demo cart is empty.'}
	</P>
</Card>
