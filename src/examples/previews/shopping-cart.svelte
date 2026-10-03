<script lang="ts">
	import { Alert, Badge, Button, Card, Div, Form, H2, H3, Input, P } from '$lib/components';
	const products = [
		{ id: 1, name: 'Grid notebook', detail: 'A5 · Forest', price: 1800, quantity: 2 },
		{ id: 2, name: 'Canvas tote', detail: 'Natural cotton', price: 2400, quantity: 1 }
	];
	let cart = $state(products.map((product) => ({ ...product })));
	let coupon = $state('');
	let discount = $state(false);
	let message = $state('');
	let ordered = $state(false);
	const subtotal = $derived(cart.reduce((total, item) => total + item.price * item.quantity, 0));
	const savings = $derived(discount ? Math.round(subtotal * 0.1) : 0);
	const shipping = $derived(subtotal === 0 || subtotal >= 5000 ? 0 : 599);
	const total = $derived(subtotal - savings + shipping);
	const money = (cents: number) => '$' + (cents / 100).toFixed(2);
	function apply(event: SubmitEvent) {
		event.preventDefault();
		discount = coupon.trim().toUpperCase() === 'SAVE10';
		message = discount ? '10% discount applied.' : 'Try the demo code SAVE10.';
		ordered = false;
	}
</script>

<Div class="grid w-full gap-5 lg:grid-cols-[1.4fr_1fr]"
	><Card class="space-y-5"
		><H2 class="text-2xl font-semibold">Your shopping bag</H2>{#each cart as item (item.id)}<Div
				class="flex flex-wrap items-center gap-4 border-b border-gray-200 pb-4 dark:border-gray-700"
				><Div
					class="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-2xl font-semibold text-primary-500"
					>{item.name[0]}</Div
				><Div class="min-w-0 grow"
					><P class="font-medium">{item.name}</P><P class="text-xs">{item.detail}</P><P
						class="mt-1 text-sm">{money(item.price)}</P
					></Div
				><Div class="flex items-center gap-2"
					><Button
						type="button"
						variants={['outline']}
						class="size-8 p-0"
						disabled={item.quantity <= 1}
						aria-label={'Decrease ' + item.name}
						onclick={() => {
							item.quantity--;
							ordered = false;
						}}>−</Button
					><span>{item.quantity}</span><Button
						type="button"
						variants={['outline']}
						class="size-8 p-0"
						disabled={item.quantity >= 10}
						aria-label={'Increase ' + item.name}
						onclick={() => {
							item.quantity++;
							ordered = false;
						}}>+</Button
					><Button
						type="button"
						variants={['ghost']}
						aria-label={'Remove ' + item.name}
						onclick={() => {
							cart = cart.filter((product) => product.id !== item.id);
							ordered = false;
						}}>×</Button
					></Div
				></Div
			>{/each}{#if !cart.length}<P>Your shopping bag is empty.</P><Button
				type="button"
				variants={['outline']}
				onclick={() => {
					cart = products.map((product) => ({ ...product }));
					ordered = false;
				}}>Restore sample products</Button
			>{/if}</Card
	><Card class="space-y-5"
		><H3 class="text-xl font-semibold">Order summary</H3><Div class="flex justify-between"
			><P>Subtotal</P><P>{money(subtotal)}</P></Div
		><Div class="flex justify-between"
			><P>Shipping</P><P>{shipping ? money(shipping) : 'Free'}</P></Div
		>{#if discount}<Div class="flex justify-between text-primary-500"
				><P>Discount</P><P>−{money(savings)}</P></Div
			>{/if}<Form class="flex gap-2" onsubmit={apply}
			><Input
				aria-label="Coupon code"
				bind:value={coupon}
				placeholder="SAVE10"
				class="w-full min-w-0"
			/><Button type="submit" variants={['outline']}>Apply</Button></Form
		>{#if message}<P role="status" class="text-xs">{message}</P>{/if}<Div
			class="flex justify-between border-t border-gray-200 pt-4 text-xl font-semibold dark:border-gray-700"
			><P>Total</P><P>{money(total)}</P></Div
		><Badge>Free shipping on orders over $50</Badge><Button
			type="button"
			class="w-full"
			disabled={!cart.length}
			onclick={() => (ordered = true)}>Confirm demo order</Button
		>{#if ordered}<Alert role="status" variants={['success']}
				>Demo order confirmed for {money(total)}. No payment was taken.</Alert
			>{/if}</Card
	></Div
>
