<script lang="ts">
	import { Button, Card, Div, H1, H2, H6, Icon, P, Range, Select } from '$lib/components/index.js';
	import { InformationCircle, XMark } from '$lib/icons/index.js';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';

	// props
	let annualInterestRate = '3.1';
	let collateral = 'ETH';
	const collateralOptions = ['BTC', 'DOGE', 'ETH', 'LTC'].map((label) => ({ label, value: label }));
	let currency = 'USDC';
	let currencyOptions = ['USDC'].map((label) => ({ label, value: label }));

	code.set(`<script lang="ts">
	import { Button, Card, Div, H1, H2, H6, Icon, P, Range, Select } from 'sveltewind/components';
	import { InformationCircle, XMark } from 'sveltewind/icons';

	// props
	let annualInterestRate = '3.1';
	let collateral = 'ETH';
	const collateralOptions = ['BTC', 'DOGE', 'ETH', 'LTC'].map((label) => ({ label, value: label }));
	let currency = 'USDC';
	let currencyOptions = ['USDC'].map((label) => ({ label, value: label }));
<\/script>

<Card class="w-full max-w-lg">
	<Div class="flex items-center justify-between space-x-4">
		<H1 class="text-lg font-medium">Loan Details<\/H1>
		<Button
			class="-mr-3 bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
		>
			<Icon src={XMark} />
		<\/Button>
	<\/Div>
	<Card class="space-y-4 bg-slate-50 shadow-none ring-0 dark:bg-slate-950 dark:shadow-none">
		<H6 class="font-medium uppercase opacity-75">Collateral<\/H6>
		<Div class="flex items-end justify-between">
			<Div class="flex flex-col space-y-2">
				<H2 class="font-medium">23.11<\/H2>
				<P class="text-violet-500">
					{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(203546.56)}
				<\/P>
			<\/Div>
			<Div class="flex flex-col items-end justify-start">
				<Select bind:value={collateral} options={collateralOptions} />
				<P class="text-violet-500">Balance 134.45<\/P>
			<\/Div>
		<\/Div>
	<\/Card>
	<Card class="mt-2 space-y-4 bg-slate-50 shadow-none ring-0 dark:bg-slate-950 dark:shadow-none">
		<H6 class="font-medium uppercase opacity-75">Loan<\/H6>
		<Div class="flex items-end justify-between">
			<Div class="flex flex-col space-y-2">
				<H2 class="font-medium">12,457.11<\/H2>
				<P class="opacity-75">
					{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(203546.56)}
				<\/P>
			<\/Div>
			<Div class="flex flex-col items-end justify-start">
				<Select bind:value={currency} options={currencyOptions} />
			<\/Div>
		<\/Div>
	<\/Card>
	<Card class="mt-6 grid grid-cols-2 gap-2">
		<Div class="col-span-2 flex items-center space-x-2 font-bold">
			<Icon class="h-4 w-4" src={InformationCircle} />
			<Div>1 USDC = 0.00423 ETH<\/Div>
		<\/Div>
		<Div class="font-bold">Loan Term<\/Div>
		<Div class="text-right text-violet-500 underline">Unlimited<\/Div>
		<Div class="font-bold">Liquidation Price<\/Div>
		<Div class="text-right text-red-500">2665.40<\/Div>
	<\/Card>
	<Div class="mt-6 flex flex-col space-y-2">
		<H6 class="font-medium uppercase opacity-75">Annual Interest Rate<\/H6>
		<Div
			class="group relative flex rounded-full p-[1px] ring ring-transparent ring-offset-1 ring-offset-slate-950/10 focus-within:ring-violet-500/30 dark:ring-offset-slate-50/10"
		>
			<Range
				bind:value={annualInterestRate}
				class="flex-grow [&::-webkit-slider-runnable-track]:bg-gradient-to-b [&::-webkit-slider-runnable-track]:from-violet-500 [&::-webkit-slider-runnable-track]:to-violet-700"
				min="2.4"
				max="6.2"
				step=".95"
			/>
		<\/Div>
		<Div class="flex justify-between px-[calc(0)]">
			{#each [...Array(5)] as _, i}
				<Div class="opacity-75">
					{new Intl.NumberFormat('en-us', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					}).format(i * 0.95 + 2.4)}%
				<\/Div>
			{/each}
		<\/Div>
	<\/Div>
	<Button
		class="mt-6 border-[1px] border-violet-400 bg-gradient-to-b from-violet-500 to-violet-700 ring-offset-1 ring-offset-violet-500"
	>
		Get Loan
	<\/Button>
<\/Card>`);
	inspiration.set({
		href: 'https://dribbble.com/shots/24483019-Exchange-Modal',
		src: 'https://cdn.dribbble.com/userupload/15486615/file/original-07f0e40fc201932d67b659b74aa9353d.png?resize=1024x768'
	});
</script>

<Card class="w-full max-w-lg">
	<Div class="flex items-center justify-between space-x-4">
		<H1 class="text-lg font-medium">Loan Details</H1>
		<Button
			class="-mr-3 bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
		>
			<Icon src={XMark} />
		</Button>
	</Div>
	<Card class="space-y-4 bg-slate-50 shadow-none ring-0 dark:bg-slate-950 dark:shadow-none">
		<H6 class="font-medium uppercase opacity-75">Collateral</H6>
		<Div class="flex items-end justify-between">
			<Div class="flex flex-col space-y-2">
				<H2 class="font-medium">23.11</H2>
				<P class="text-violet-500">
					{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(203546.56)}
				</P>
			</Div>
			<Div class="flex flex-col items-end justify-start">
				<Select bind:value={collateral} options={collateralOptions} />
				<P class="text-violet-500">Balance 134.45</P>
			</Div>
		</Div>
	</Card>
	<Card class="mt-2 space-y-4 bg-slate-50 shadow-none ring-0 dark:bg-slate-950 dark:shadow-none">
		<H6 class="font-medium uppercase opacity-75">Loan</H6>
		<Div class="flex items-end justify-between">
			<Div class="flex flex-col space-y-2">
				<H2 class="font-medium">12,457.11</H2>
				<P class="opacity-75">
					{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(203546.56)}
				</P>
			</Div>
			<Div class="flex flex-col items-end justify-start">
				<Select bind:value={currency} options={currencyOptions} />
			</Div>
		</Div>
	</Card>
	<Card class="mt-6 grid grid-cols-2 gap-2">
		<Div class="col-span-2 flex items-center space-x-2 font-bold">
			<Icon class="h-4 w-4" src={InformationCircle} />
			<Div>1 USDC = 0.00423 ETH</Div>
		</Div>
		<Div class="font-bold">Loan Term</Div>
		<Div class="text-right text-violet-500 underline">Unlimited</Div>
		<Div class="font-bold">Liquidation Price</Div>
		<Div class="text-right text-red-500">2665.40</Div>
	</Card>
	<Div class="mt-6 flex flex-col space-y-2">
		<H6 class="font-medium uppercase opacity-75">Annual Interest Rate</H6>
		<Div
			class="group relative flex rounded-full p-[1px] ring ring-transparent ring-offset-1 ring-offset-slate-950/10 focus-within:ring-violet-500/30 dark:ring-offset-slate-50/10"
		>
			<Range
				bind:value={annualInterestRate}
				class="flex-grow [&::-webkit-slider-runnable-track]:bg-gradient-to-b [&::-webkit-slider-runnable-track]:from-violet-500 [&::-webkit-slider-runnable-track]:to-violet-700"
				min="2.4"
				max="6.2"
				step=".95"
			/>
		</Div>
		<Div class="flex justify-between px-[calc(0)]">
			{#each [...Array(5)] as _, i}
				<Div class="opacity-75">
					{new Intl.NumberFormat('en-us', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					}).format(i * 0.95 + 2.4)}%
				</Div>
			{/each}
		</Div>
	</Div>
	<Button
		class="mt-6 border-[1px] border-violet-400 bg-gradient-to-b from-violet-500 to-violet-700 ring-offset-1 ring-offset-violet-500"
	>
		Get Loan
	</Button>
</Card>
