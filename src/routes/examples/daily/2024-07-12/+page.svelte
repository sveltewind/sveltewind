<script lang="ts">
	import IphoneMockup from '$components/IphoneMockup.svelte';
	import { A, Button, Card, Div, H4, H6, P, Radio } from '$lib/components/index.js';
	import {
		ChevronRight,
		CircleHelp,
		FileCheck2,
		FileLock2,
		FileText,
		Hexagon,
		Megaphone,
		ScanEye,
		Settings,
		Signature,
		Star,
		Upload,
		X,
		Zap
	} from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	// props
	const nav = [
		{ icon: CircleHelp, label: 'Support' },
		{ icon: Star, label: 'Rate Us' },
		{ icon: FileCheck2, label: 'Terms of Use' },
		{ icon: FileLock2, label: 'Privacy Policy' }
	];
	const tabBar = [
		{ icon: FileText, isCurrent: false, label: 'Documents' },
		{ icon: Settings, isCurrent: true, label: 'Settings' }
	];
	let upgradeIsVisible = $state(false);
	const upgradeOptions = [
		{ title: 'Weekly', amount: 9.99, savePercent: 0.34, isPopular: false },
		{ title: 'Monthly', amount: 29.99, savePercent: 0.65, isPopular: true },
		{ title: 'Annual', amount: 299, savePercent: 0.34, isPopular: false }
	];
	let upgradeOption = $state('Monthly');
	const upgradePerks = [
		{ icon: Megaphone, label: 'No Ads' },
		{ icon: Upload, label: 'Unlimited Exports' },
		{ icon: ScanEye, label: 'Unlimited Scans' },
		{ icon: Signature, label: 'Sign Documents' }
	];

	code.set(`<script lang="ts">
	import { A, Button, Card, Div, H4, H6, P, Radio } from 'sveltewind/components';
	import {
		ChevronRight,
		CircleHelp,
		FileCheck2,
		FileLock2,
		FileText,
		Hexagon,
		Megaphone,
		ScanEye,
		Settings,
		Signature,
		Star,
		Upload,
		X,
		Zap
	} from 'lucide-svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	// props
	const nav = [
		{ icon: CircleHelp, label: 'Support' },
		{ icon: Star, label: 'Rate Us' },
		{ icon: FileCheck2, label: 'Terms of Use' },
		{ icon: FileLock2, label: 'Privacy Policy' }
	];
	const tabBar = [
		{ icon: FileText, isCurrent: false, label: 'Documents' },
		{ icon: Settings, isCurrent: true, label: 'Settings' }
	];
	let upgradeIsVisible = $state(false);
	const upgradeOptions = [
		{ title: 'Weekly', amount: 9.99, savePercent: 0.34, isPopular: false },
		{ title: 'Monthly', amount: 29.99, savePercent: 0.65, isPopular: true },
		{ title: 'Annual', amount: 299, savePercent: 0.34, isPopular: false }
	];
	let upgradeOption = $state('Monthly');
	const upgradePerks = [
		{ icon: Megaphone, label: 'No Ads' },
		{ icon: Upload, label: 'Unlimited Exports' },
		{ icon: ScanEye, label: 'Unlimited Scans' },
		{ icon: Signature, label: 'Sign Documents' }
	];
<\/script>

{#snippet logo()}
	<Div class="relative">
		<Hexagon class="h-12 w-12 text-[#EEC475]" \/>
		<Zap
			class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-[#EEC475]"
		/>
	<\/Div>
{/snippet}

{#snippet logoWithType(title, subtitle)}
	{@render logo()}

	<Div class="flex flex-col items-center space-y-2">
		<H6>{title}<\/H6>
		<P class="text-xs opacity-70">{subtitle}<\/P>
	<\/Div>
{/snippet}

<Card class="absolute left-0 top-0 h-full w-full bg-white p-0 dark:bg-[#1C1C1E]">
	<Div class="flex flex-grow flex-col space-y-6 overflow-auto px-4 pb-8 pt-12">
		<H4>Settings<\/H4>
		<Card
			class="items-center space-y-3 bg-slate-50 p-2 shadow-none dark:bg-[#363638] dark:shadow-none dark:ring-[#444446]"
		>
			{@render logoWithType('Upgrade Plan', 'Upgrade to Pro to unlock all features')}
			<Button
				class="w-full items-center space-x-2 bg-[#007AFF] hover:bg-[#007AFF] focus:bg-[#007AFF] focus:ring-[#007AFF30]"
				onclick={() => (upgradeIsVisible = true)}
			>
				<span>Upgrade Plan<\/span>
				<ChevronRight class="h-4 w-4" \/>
			<\/Button>
		<\/Card>
		<ul>
			{#each nav as { icon, label }}
				<li>
					<A
						class="grid grid-cols-[fit-content(0px)_1fr_fit-content(0px)] items-center gap-2 border-b border-slate-950/5 py-2 text-xs shadow-none hover:shadow-none dark:border-slate-50/5"
						href="#"
					>
						<Div class="rounded-lg bg-slate-100 p-2 dark:bg-[#363638]">
							<svelte:component this={icon} class="h-4 w-4" \/>
						<\/Div>
						<span>{label}<\/span>
						<ChevronRight class="h-3 w-3" \/>
					<\/A>
				<\/li>
			{/each}
		<\/ul>
	<\/Div>
	<Card
		class="grid grid-cols-2 rounded-none bg-slate-50 p-0 shadow-none dark:bg-[#242426] dark:shadow-none"
	>
		{#each tabBar as { icon, isCurrent, label }}
			<Button
				class={twMerge(
					'shadow-0 flex-col space-y-1 rounded-none bg-transparent pb-8 font-medium ring-0 hover:bg-transparent focus:bg-transparent',
					isCurrent
						? 'text-blue-500'
						: 'text-current opacity-70 hover:opacity-100 focus:opacity-100'
				)}
			>
				<svelte:component this={icon} class="h-4 w-4" \/>
				<span class="text-xs">{label}<\/span>
			<\/Button>
		{/each}
	<\/Card>
<\/Card>
<Card
	class="absolute left-0 top-0 h-full w-full overflow-visible bg-white p-0 shadow-2xl shadow-black dark:bg-[#1C1C1E] dark:shadow-2xl dark:shadow-black"
	isVisible={upgradeIsVisible}
	transition={[fly, { duration: 500, easing: cubicInOut, opacity: 1, x: '120%' }]}
>
	<Div class="flex flex-grow flex-col space-y-6 px-4 pb-8 pt-12">
		<Div class="flex flex-col items-center space-y-3">
			{@render logoWithType('Plans and Pricing', 'Upgrade to Pro to unlock all features')}
		<\/Div>
		<Div class="flex flex-col space-y-2">
			{#each upgradeOptions as { title, amount, savePercent, isPopular }}
				<Radio bind:group={upgradeOption} id="upgradeOption" value={title}>
					{#snippet handle()}
						<Card
							class={twMerge(
								'flex-grow flex-row items-center space-x-2 bg-slate-50 p-3 shadow-none transition duration-200 dark:bg-[#242426] dark:shadow-none',
								upgradeOption === title ? 'ring-[#007AFF] dark:ring-[#007AFF]' : undefined
							)}
						>
							<Div class="flex flex-grow flex-col">
								<Div class="text-[.625rem] uppercase opacity-70">{title}<\/Div>
								<Div class="flex items-center justify-between space-x-2">
									<Div class="flex items-center space-x-2">
										<Div class="font-bold"
											>{new Intl.NumberFormat('en-us', {
												style: 'currency',
												currency: 'usd'
											}).format(amount)}<\/Div
										>
										<span class="text-[.625rem] opacity-70">•<\/span>
										<span
											class={twMerge(
												'text-[.625rem]',
												isPopular ? 'text-green-500' : 'opacity-70'
											)}
										>
											Save {new Intl.NumberFormat('en-us', {
												style: 'percent',
												maximumFractionDigits: 0
											}).format(savePercent)}
										<\/span>
									<\/Div>
									<Div
										class={twMerge(
											'rounded bg-[#FFA30010] px-1 py-[.125rem] text-[.625rem] uppercase text-[#FFA300] transition duration-200',
											isPopular ? 'scale-100' : 'scale-0'
										)}
									>
										Popular
									<\/Div>
								<\/Div>
							<\/Div>
							<Card
								class={twMerge(
									'rounded-full p-1 shadow-none dark:shadow-none',
									upgradeOption === title
										? 'bg-[#007AFF] dark:bg-[#007AFF]'
										: 'ring-bg-black/30 bg-slate-950/10 dark:bg-[#363638] dark:ring-white/20'
								)}
							>
								<Div
									class={twMerge(
										'h-2 w-2 rounded-full bg-white transition duration-200',
										upgradeOption === title ? 'scale-100' : 'scale-0'
									)}
								/>
							<\/Card>
						<\/Card>
					{/snippet}
				<\/Radio>
			{/each}
		<\/Div>
		<Div class="flex flex-grow flex-col space-y-3">
			<H6 class="text-[.625rem] font-medium uppercase opacity-70">Enjoy Unlimited Access To:<\/H6>
			<Div class="flex flex-col space-y-3 text-xs">
				{#each upgradePerks as { icon, label }}
					<Div class="flex items-center space-x-2">
						<svelte:component this={icon} class="h-4 w-4 text-[#007AFF]" \/>
						<span>{label}<\/span>
					<\/Div>
				{/each}
			<\/Div>
		<\/Div>
		<Div class="flex flex-col items-center space-y-3">
			<Button
				class="w-full items-center space-x-2 bg-[#007AFF] hover:bg-[#007AFF] focus:bg-[#007AFF] focus:ring-[#007AFF30]"
			>
				Continue with {new Intl.NumberFormat('en-us', {
					currency: 'USD',
					style: 'currency'
				}).format(
					upgradeOptions.find((option) => option.title === upgradeOption).amount
				)}/{upgradeOptions.find((option) => option.title === upgradeOption)?.title.toLowerCase()}
			<\/Button>
			<Div class="flex items-center space-x-2 text-[.625rem] opacity-50">
				<span>Privacy Policy<\/span>
				<span>•<\/span>
				<span>Terms of Use<\/span>
			<\/Div>
		<\/Div>
	<\/Div>
	<Button
		class="absolute left-4 top-12 rounded-full bg-slate-950/5 p-2 text-current hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:bg-[#353537] dark:hover:bg-[#353537] dark:focus:bg-[#353537] dark:focus:ring-[#35353730]"
		onclick={() => (upgradeIsVisible = false)}
	>
		<X class="h-4 w-4" \/>
	<\/Button>
<\/Card>`);
	inspiration.set({
		href: 'https://dribbble.com/shots/24498751-Upgrade-Plan',
		src: 'https://cdn.dribbble.com/userupload/15531646/file/original-731b874ba896b831434980d4bd2f8e3a.png?resize=1024x768'
	});
</script>

{#snippet logo()}
	<Div class="relative">
		<Hexagon class="h-12 w-12 text-[#EEC475]" />
		<Zap
			class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-[#EEC475]"
		/>
	</Div>
{/snippet}

{#snippet logoWithType(title, subtitle)}
	{@render logo()}

	<Div class="flex flex-col items-center space-y-2">
		<H6>{title}</H6>
		<P class="text-xs opacity-70">{subtitle}</P>
	</Div>
{/snippet}

<IphoneMockup class="rounded-[3rem] dark:bg-[#1C1C1E] dark:text-[#F6F6F6]">
	<Card class="absolute left-0 top-0 h-full w-full bg-white p-0 dark:bg-[#1C1C1E]">
		<Div class="flex flex-grow flex-col space-y-6 overflow-auto px-4 pb-8 pt-12">
			<H4>Settings</H4>
			<Card
				class="items-center space-y-3 bg-slate-50 p-2 shadow-none dark:bg-[#363638] dark:shadow-none dark:ring-[#444446]"
			>
				{@render logoWithType('Upgrade Plan', 'Upgrade to Pro to unlock all features')}
				<Button
					class="w-full items-center space-x-2 bg-[#007AFF] hover:bg-[#007AFF] focus:bg-[#007AFF] focus:ring-[#007AFF30]"
					onclick={() => (upgradeIsVisible = true)}
				>
					<span>Upgrade Plan</span>
					<ChevronRight class="h-4 w-4" />
				</Button>
			</Card>
			<ul>
				{#each nav as { icon, label }}
					<li>
						<A
							class="grid grid-cols-[fit-content(0px)_1fr_fit-content(0px)] items-center gap-2 border-b border-slate-950/5 py-2 text-xs shadow-none hover:shadow-none dark:border-slate-50/5"
							href="#"
						>
							<Div class="rounded-lg bg-slate-100 p-2 dark:bg-[#363638]">
								<svelte:component this={icon} class="h-4 w-4" />
							</Div>
							<span>{label}</span>
							<ChevronRight class="h-3 w-3" />
						</A>
					</li>
				{/each}
			</ul>
		</Div>
		<Card
			class="grid grid-cols-2 rounded-none bg-slate-50 p-0 shadow-none dark:bg-[#242426] dark:shadow-none"
		>
			{#each tabBar as { icon, isCurrent, label }}
				<Button
					class={twMerge(
						'shadow-0 flex-col space-y-1 rounded-none bg-transparent pb-8 font-medium ring-0 hover:bg-transparent focus:bg-transparent',
						isCurrent
							? 'text-blue-500'
							: 'text-current opacity-70 hover:opacity-100 focus:opacity-100'
					)}
				>
					<svelte:component this={icon} class="h-4 w-4" />
					<span class="text-xs">{label}</span>
				</Button>
			{/each}
		</Card>
	</Card>
	<Card
		class="absolute left-0 top-0 h-full w-full overflow-visible bg-white p-0 shadow-2xl shadow-black dark:bg-[#1C1C1E] dark:shadow-2xl dark:shadow-black"
		isVisible={upgradeIsVisible}
		transition={[fly, { duration: 500, easing: cubicInOut, opacity: 1, x: '120%' }]}
	>
		<Div class="flex flex-grow flex-col space-y-6 px-4 pb-8 pt-12">
			<Div class="flex flex-col items-center space-y-3">
				{@render logoWithType('Plans and Pricing', 'Upgrade to Pro to unlock all features')}
			</Div>
			<Div class="flex flex-col space-y-2">
				{#each upgradeOptions as { title, amount, savePercent, isPopular }}
					<Radio bind:group={upgradeOption} id="upgradeOption" value={title}>
						{#snippet handle()}
							<Card
								class={twMerge(
									'flex-grow flex-row items-center space-x-2 bg-slate-50 p-3 shadow-none transition duration-200 dark:bg-[#242426] dark:shadow-none',
									upgradeOption === title ? 'ring-[#007AFF] dark:ring-[#007AFF]' : undefined
								)}
							>
								<Div class="flex flex-grow flex-col">
									<Div class="text-[.625rem] uppercase opacity-70">{title}</Div>
									<Div class="flex items-center justify-between space-x-2">
										<Div class="flex items-center space-x-2">
											<Div class="font-bold"
												>{new Intl.NumberFormat('en-us', {
													style: 'currency',
													currency: 'usd'
												}).format(amount)}</Div
											>
											<span class="text-[.625rem] opacity-70">•</span>
											<span
												class={twMerge(
													'text-[.625rem]',
													isPopular ? 'text-green-500' : 'opacity-70'
												)}
											>
												Save {new Intl.NumberFormat('en-us', {
													style: 'percent',
													maximumFractionDigits: 0
												}).format(savePercent)}
											</span>
										</Div>
										<Div
											class={twMerge(
												'rounded bg-[#FFA30010] px-1 py-[.125rem] text-[.625rem] uppercase text-[#FFA300] transition duration-200',
												isPopular ? 'scale-100' : 'scale-0'
											)}
										>
											Popular
										</Div>
									</Div>
								</Div>
								<Card
									class={twMerge(
										'rounded-full p-1 shadow-none dark:shadow-none',
										upgradeOption === title
											? 'bg-[#007AFF] dark:bg-[#007AFF]'
											: 'ring-bg-black/30 bg-slate-950/10 dark:bg-[#363638] dark:ring-white/20'
									)}
								>
									<Div
										class={twMerge(
											'h-2 w-2 rounded-full bg-white transition duration-200',
											upgradeOption === title ? 'scale-100' : 'scale-0'
										)}
									/>
								</Card>
							</Card>
						{/snippet}
					</Radio>
				{/each}
			</Div>
			<Div class="flex flex-grow flex-col space-y-3">
				<H6 class="text-[.625rem] font-medium uppercase opacity-70">Enjoy Unlimited Access To:</H6>
				<Div class="flex flex-col space-y-3 text-xs">
					{#each upgradePerks as { icon, label }}
						<Div class="flex items-center space-x-2">
							<svelte:component this={icon} class="h-4 w-4 text-[#007AFF]" />
							<span>{label}</span>
						</Div>
					{/each}
				</Div>
			</Div>
			<Div class="flex flex-col items-center space-y-3">
				<Button
					class="w-full items-center space-x-2 bg-[#007AFF] hover:bg-[#007AFF] focus:bg-[#007AFF] focus:ring-[#007AFF30]"
				>
					Continue with {new Intl.NumberFormat('en-us', {
						currency: 'USD',
						style: 'currency'
					}).format(
						upgradeOptions.find((option) => option.title === upgradeOption).amount
					)}/{upgradeOptions.find((option) => option.title === upgradeOption)?.title.toLowerCase()}
				</Button>
				<Div class="flex items-center space-x-2 text-[.625rem] opacity-50">
					<span>Privacy Policy</span>
					<span>•</span>
					<span>Terms of Use</span>
				</Div>
			</Div>
		</Div>
		<Button
			class="absolute left-4 top-12 rounded-full bg-slate-950/5 p-2 text-current hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:bg-[#353537] dark:hover:bg-[#353537] dark:focus:bg-[#353537] dark:focus:ring-[#35353730]"
			onclick={() => (upgradeIsVisible = false)}
		>
			<X class="h-4 w-4" />
		</Button>
	</Card>
</IphoneMockup>
