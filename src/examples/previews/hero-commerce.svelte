<script lang="ts">
	import { Alert, Badge, Button, Div, H2, P } from '$lib/components';
	let color = $state('Clay');
	let added = $state(false);
	const colors: Record<string, string> = { Clay: '#b87559', Forest: '#467461', Ink: '#414957' };
</script>

<Div
	class="grid overflow-hidden rounded-2xl border border-gray-200 lg:grid-cols-2 dark:border-gray-800"
	><Div
		class="relative flex min-h-72 items-center justify-center overflow-hidden bg-primary-500/5 p-8 sm:min-h-96"
		><Div
			aria-hidden="true"
			class="relative h-48 w-44 rounded-t-lg rounded-b-3xl shadow-2xl transition-colors"
			style={`background-color:${colors[color]}`}
			><span
				class="absolute -top-12 left-10 h-20 w-24 rounded-t-full border-8"
				style={`border-color:${colors[color]}`}
			></span><span
				class="absolute inset-x-0 top-20 text-center text-xl font-semibold tracking-widest text-white/80"
				>EVERYDAY</span
			><span class="absolute inset-x-5 bottom-5 border-t border-white/20"></span></Div
		><Badge class="absolute bottom-5 left-5">The Everyday Collection</Badge></Div
	><Div class="flex flex-col justify-center p-6 sm:p-10"
		><Badge>Carry less. Go further.</Badge><H2
			class="mt-5 text-4xl font-bold tracking-tight sm:text-5xl"
			>Your everyday.<br />A little lighter.</H2
		><P class="mt-5"
			>A simple canvas tote for market mornings, library afternoons, and everything in between.</P
		><Div class="mt-6 flex items-center justify-between gap-3"
			><P class="text-2xl font-semibold">$38</P><P class="text-sm">Color: {color}</P></Div
		><Div class="mt-4 flex flex-wrap gap-2" role="group" aria-label="Choose tote color"
			>{#each Object.keys(colors) as name}<Button
					type="button"
					variants={color === name ? [] : ['outline']}
					aria-pressed={color === name}
					onclick={() => {
						color = name;
						added = false;
					}}>{name}</Button
				>{/each}</Div
		><Button type="button" class="mt-6 w-full" onclick={() => (added = true)}
			>Add to demo bag</Button
		>{#if added}<Alert role="status" variants={['success']}
				>{color} tote added to your demo bag. No order was placed.</Alert
			>{/if}<P class="mt-4 text-xs">Heavyweight canvas · Interior pocket · Washable</P></Div
	></Div
>
