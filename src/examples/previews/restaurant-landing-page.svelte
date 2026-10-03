<script lang="ts">
	import {
		A,
		Alert,
		Badge,
		Button,
		Card,
		Div,
		Field,
		Form,
		H2,
		H3,
		Input,
		Label,
		Option,
		P,
		Section,
		Select
	} from '$lib/components';
	const uid = $props.id();
	let menu = $state('Dinner');
	let date = $state('');
	let guests = $state('2');
	let time = $state('18:00');
	let name = $state('');
	let booked = $state(false);
	const dishes: Record<string, { name: string; description: string; price: string }[]> = {
		Dinner: [
			{ name: 'Roasted squash', description: 'Whipped ricotta, sage, toasted seeds', price: '$16' },
			{ name: 'Market fish', description: 'White beans, lemon, seasonal greens', price: '$28' },
			{
				name: 'Mushroom pappardelle',
				description: 'Handmade pasta, woodland mushrooms, parmesan',
				price: '$24'
			}
		],
		Brunch: [
			{
				name: 'Garden eggs',
				description: 'Poached eggs, sourdough, seasonal vegetables',
				price: '$18'
			},
			{
				name: 'Ricotta pancakes',
				description: 'Poached pears, maple syrup, cultured butter',
				price: '$17'
			},
			{ name: 'Breakfast sandwich', description: 'Soft egg, cheddar, tomato relish', price: '$15' }
		]
	};
</script>

<Div class="overflow-hidden rounded-2xl border border-primary-500/20 bg-primary-500/5"
	><Div class="flex flex-wrap items-center justify-between gap-4 p-6"
		><P class="text-2xl font-semibold">Juniper & Rye</P><Div class="flex gap-4 text-sm"
			><A href={'#' + uid + '-menu'}>Menu</A><A href={'#' + uid + '-visit'}>Visit</A><A
				href={'#' + uid + '-book'}>Reserve</A
			></Div
		></Div
	>
	<Section class="grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2"
		><Div
			><Badge>Your neighborhood table</Badge><H2
				class="mt-5 text-4xl font-bold tracking-tight sm:text-6xl"
				>Seasonal food.<br />Good company.<br />Stay a while.</H2
			><P class="mt-5"
				>A warm corner of the neighborhood, serving food shaped by the season and the farmers we
				know.</P
			><A href={'#' + uid + '-book'} variants={['button.base']} class="mt-6 inline-flex"
				>Find your table</A
			></Div
		><Div
			class="relative flex min-h-72 items-center justify-center rounded-t-full bg-primary-500/15 p-8"
			aria-hidden="true"
			><Div
				class="flex size-52 items-center justify-center rounded-full border-[14px] border-white/70 bg-primary-500/20 shadow-xl"
				><Div class="relative size-28 rounded-full bg-primary-500/30"
					><span class="absolute top-4 left-4 h-16 w-8 -rotate-45 rounded-full bg-primary-500/60"
					></span><span class="absolute right-3 bottom-3 size-10 rounded-full bg-white/60"
					></span></Div
				></Div
			></Div
		></Section
	>
	<Section id={uid + '-menu'} class="bg-white p-6 sm:p-10 dark:bg-gray-950"
		><Div class="flex flex-wrap items-center justify-between gap-4"
			><Div
				><P class="text-xs tracking-widest uppercase">From the kitchen</P><H3
					class="mt-2 text-3xl font-semibold">A taste of the season</H3
				></Div
			><Div role="group" aria-label="Choose menu" class="flex gap-2"
				>{#each Object.keys(dishes) as type}<Button
						type="button"
						aria-pressed={menu === type}
						variants={menu === type ? [] : ['outline']}
						onclick={() => (menu = type)}>{type}</Button
					>{/each}</Div
			></Div
		><Div class="mt-6 grid gap-5 md:grid-cols-3"
			>{#each dishes[menu] as dish}<Card class="space-y-3"
					><Div class="flex justify-between gap-3"
						><H3 class="font-semibold">{dish.name}</H3><P>{dish.price}</P></Div
					><P class="text-sm">{dish.description}</P></Card
				>{/each}</Div
		><P class="mt-5 text-xs"
			>Our menu changes with the market. Please let us know about allergies when booking.</P
		></Section
	>
	<Section id={uid + '-visit'} class="grid gap-8 p-6 sm:p-10 md:grid-cols-2"
		><Div
			><H3 class="text-3xl font-semibold">A place to settle in.</H3><P class="mt-4"
				>Fresh bread in the morning. A long dinner with friends. We built Juniper & Rye for the
				small moments that make a good day.</P
			></Div
		><Div class="grid gap-5 sm:grid-cols-2"
			><Div
				><H3 class="font-semibold">Find us</H3><P class="mt-3 text-sm"
					>24 Orchard Lane<br />Portland, Oregon</P
				><P class="mt-2 text-xs">Fictional address for this example.</P></Div
			><Div
				><H3 class="font-semibold">Opening hours</H3><P class="mt-3 text-sm"
					>Dinner: Tue–Sun, 5–10 pm<br />Brunch: Sat–Sun, 9 am–2 pm<br />Closed Monday</P
				></Div
			></Div
		></Section
	>
	<Section id={uid + '-book'} class="bg-white p-6 sm:p-10 dark:bg-gray-950"
		><H3 class="text-3xl font-semibold">We'll save you a seat.</H3><P class="mt-3"
			>Choose a dinner date and time. This reservation form is a local demo.</P
		><Form
			class="mt-6 grid gap-4 sm:grid-cols-2"
			onsubmit={(event) => {
				event.preventDefault();
				booked = true;
			}}
			><Field
				><Label for={uid + '-name'}>Booking name</Label><Input
					id={uid + '-name'}
					required
					bind:value={name}
					class="w-full"
				/></Field
			><Field
				><Label for={uid + '-date'}>Date</Label><Input
					id={uid + '-date'}
					type="date"
					required
					bind:value={date}
					class="w-full"
				/></Field
			><Field
				><Label for={uid + '-guests'}>Guests</Label><Select
					id={uid + '-guests'}
					bind:value={guests}
					class="w-full"
					>{#each ['1', '2', '3', '4', '5', '6'] as count}<Option value={count}
							>{count} guest{count === '1' ? '' : 's'}</Option
						>{/each}</Select
				></Field
			><Field
				><Label for={uid + '-time'}>Time</Label><Select
					id={uid + '-time'}
					bind:value={time}
					class="w-full"
					>{#each ['17:00', '18:00', '19:00', '20:00', '21:00'] as slot}<Option value={slot}
							>{slot}</Option
						>{/each}</Select
				></Field
			><Button type="submit">Reserve demo table</Button>{#if booked}<Alert
					role="status"
					variants={['success']}
					class="sm:col-span-2"
					>{name}, your demo table for {guests} is selected for {date} at {time}. No real
					reservation was made.</Alert
				>{/if}</Form
		></Section
	><Div class="flex flex-wrap justify-between gap-3 p-6 text-xs"
		><P>Juniper & Rye · Food for the everyday</P><A href={'#' + uid + '-menu'}>Back to the menu</A
		></Div
	></Div
>
