<script lang="ts">
	import { A, Card, Div, H3, Icon, Img, P, Select } from '$lib/components/index.js';
	import {
		Bell,
		Bolt,
		BookOpen,
		ChevronRight,
		CpuChip,
		EllipsisHorizontal,
		Eye,
		Lifebuoy,
		UserGroup
	} from '$lib/icons/index.js';
	import { DateTime } from 'luxon';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';
	import Button from '$lib/components/Button.svelte';
	import { twMerge } from 'tailwind-merge';
	import { theme } from '$lib/index.js';

	// props
	const educationalProgressChart = new Map([
		['Skill development', { classes: 'z-[1] bg-white', icon: Bolt, amount: 90 }],
		[
			'Skill mastery',
			{
				classes:
					'bg-gradient-to-br from-slate-950 to-slate-700 dark:from-slate-700 dark:to-slate-500',
				icon: CpuChip,
				amount: 70
			}
		],
		['Lessons learned', { classes: 'z-[1] bg-[#D8E788]', icon: Bell, amount: 120 }],
		['Practice sessions', { classes: 'bg-[#FF7A00]', icon: Lifebuoy, amount: 80 }]
	]);
	const financialTransactionOptions = () => {
		const currentDate = DateTime.now();
		const startDate = currentDate.startOf('week');
		const endDate = currentDate.endOf('week');
		return [`${startDate.toFormat('dd')}-${endDate.toFormat('dd')} ${endDate.toFormat('MMM')}`].map(
			(label) => ({ label, value: label })
		);
	};
	const financialTransactionChart = new Map([
		[
			'Mentoring',
			{
				classes:
					'bg-[repeating-linear-gradient(60deg,_#aac425_0px,#aac425_5px,transparent_5px,transparent_10px)]',
				percent: 0.29
			}
		],
		['Webinars', { classes: 'bg-slate-950', percent: 0.1 }],
		['Courses', { classes: 'bg-white', percent: 0.61 }]
	]);
	const recentReceiptList = [
		{
			imgSrc:
				'https://images.generated.photos/0eL12_E4JT2uF-kyTSmuPg-BhqTip4kb2_-QQ77LJcY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ4Njk2LmpwZw.jpg',
			name: 'Lincoln Philips',
			date: 'Apr 17,2023 at 1:30PM',
			amount: 2732
		},
		{
			imgSrc:
				'https://images.generated.photos/pxynqbOIm0915rgmETGjkgplW5NEam2sDzbvOio0dUA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjUwNDAxLmpwZw.jpg',
			name: 'Tatiana Vaccaro',
			date: 'Mar 17,2023 at 1:30PM',
			amount: 1391
		},
		{
			imgSrc:
				'https://images.generated.photos/WJrRFpDN1K7b4IfjRxjdS2HC--b64ERVJ33FuBlbkKA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODM4NDg2LmpwZw.jpg',
			name: 'Martin Kenter',
			date: 'Mar 17,2023 at 1:30PM',
			amount: 3294
		},
		{
			imgSrc:
				'https://images.generated.photos/BOH18NvyzOvuC4aNjDDiN1ZcH_T8L5gYB-_TQvdN0TQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUwNTU5LmpwZw.jpg',
			name: 'Makenna Workman',
			date: 'Mar 17,2023 at 1:30PM',
			amount: 5187
		}
	];
	const statisticalInformationCards = [
		{
			icon: Eye,
			iconClasses: 'bg-[#D5EA6B]/10 text-[#D5EA6B]',
			title: 'Webinar views',
			amount: 500,
			change: 100
		},
		{
			icon: BookOpen,
			iconClasses: 'bg-slate-50/10 text-slate-50 dark:bg-slate-950/10 dark:text-slate-950',
			title: 'Tasks completed',
			amount: 275,
			change: -100
		},
		{
			icon: UserGroup,
			iconClasses: 'bg-orange-500/10 text-orange-500',
			title: 'Blog subscribers',
			amount: 1500,
			change: 200
		}
	];

	code.set(`<script lang="ts">
	import { DateTime } from 'luxon';
	import { theme } from sveltewind';
	import { A, Card, Div, H3, Icon, Img, P, Select } from 'sveltewind/components';
	import {
		Bell,
		Bolt,
		BookOpen,
		ChevronRight,
		CpuChip,
		EllipsisHorizontal,
		Eye,
		Lifebuoy,
		UserGroup
	} from 'sveltewind/icons';
	import Button from 'sveltewind/components/Button.svelte';
	import { twMerge } from 'tailwind-merge';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';

	// props
	const educationalProgressChart = new Map([
		['Skill development', { classes: 'z-[1] bg-white', icon: Bolt, amount: 90 }],
		[
			'Skill mastery',
			{
				classes:
					'bg-gradient-to-br from-slate-950 to-slate-700 dark:from-slate-700 dark:to-slate-500',
				icon: CpuChip,
				amount: 70
			}
		],
		['Lessons learned', { classes: 'z-[1] bg-[#D8E788]', icon: Bell, amount: 120 }],
		['Practice sessions', { classes: 'bg-[#FF7A00]', icon: Lifebuoy, amount: 80 }]
	]);
	const financialTransactionOptions = () => {
		const currentDate = DateTime.now();
		const startDate = currentDate.startOf('week');
		const endDate = currentDate.endOf('week');
		return [\`\${startDate.toFormat('dd')}-\${endDate.toFormat('dd')} \${endDate.toFormat('MMM')}\`].map(
			(label) => ({ label, value: label })
		);
	};
	const financialTransactionChart = new Map([
		[
			'Mentoring',
			{
				classes:
					'bg-[repeating-linear-gradient(60deg,_#aac425_0px,#aac425_5px,transparent_5px,transparent_10px)]',
				percent: 0.29
			}
		],
		['Webinars', { classes: 'bg-slate-950', percent: 0.1 }],
		['Courses', { classes: 'bg-white', percent: 0.61 }]
	]);
	const recentReceiptList = [
		{
			imgSrc:
				'https://images.generated.photos/0eL12_E4JT2uF-kyTSmuPg-BhqTip4kb2_-QQ77LJcY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ4Njk2LmpwZw.jpg',
			name: 'Lincoln Philips',
			date: 'Apr 17,2023 at 1:30PM',
			amount: 2732
		},
		{
			imgSrc:
				'https://images.generated.photos/pxynqbOIm0915rgmETGjkgplW5NEam2sDzbvOio0dUA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjUwNDAxLmpwZw.jpg',
			name: 'Tatiana Vaccaro',
			date: 'Mar 17,2023 at 1:30PM',
			amount: 1391
		},
		{
			imgSrc:
				'https://images.generated.photos/WJrRFpDN1K7b4IfjRxjdS2HC--b64ERVJ33FuBlbkKA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODM4NDg2LmpwZw.jpg',
			name: 'Martin Kenter',
			date: 'Mar 17,2023 at 1:30PM',
			amount: 3294
		},
		{
			imgSrc:
				'https://images.generated.photos/BOH18NvyzOvuC4aNjDDiN1ZcH_T8L5gYB-_TQvdN0TQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUwNTU5LmpwZw.jpg',
			name: 'Makenna Workman',
			date: 'Mar 17,2023 at 1:30PM',
			amount: 5187
		}
	];
	const statisticalInformationCards = [
		{
			icon: Eye,
			iconClasses: 'bg-[#D5EA6B]/10 text-[#D5EA6B]',
			title: 'Webinar views',
			amount: 500,
			change: 100
		},
		{
			icon: BookOpen,
			iconClasses: 'bg-slate-50/10 text-slate-50 dark:bg-slate-950/10 dark:text-slate-950',
			title: 'Tasks completed',
			amount: 275,
			change: -100
		},
		{
			icon: UserGroup,
			iconClasses: 'bg-orange-500/10 text-orange-500',
			title: 'Blog subscribers',
			amount: 1500,
			change: 200
		}
	];
<\/script>

{#snippet statisticalInformation()}
	<Card
		class="space-y-8 rounded-2xl bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-950"
	>
		<Div class="flex items-center justify-between">
			<H3>Statistical<br /> information<\/H3>
			<Select
				class="rounded-full bg-slate-50 px-4 py-2 leading-4 text-slate-950 dark:bg-slate-950 dark:text-slate-50"
				options={[{ label: 'Week', value: 'Week' }]}
				value="Week"
			/>
		<\/Div>
		<Div class="grid grid-cols-3 gap-2">
			{#each statisticalInformationCards as { icon, iconClasses, title, amount, change }}
				<Card
					class="items-center bg-slate-50/10 shadow-none dark:bg-slate-950/[.025] dark:shadow-none"
				>
					<Div class="rounded-full p-2 {iconClasses}">
						<Icon src={icon} />
					<\/Div>
					<P class="mt-4 text-xs opacity-50">{title}<\/P>
					<Div class="mt-2 flex items-center justify-center space-x-2">
						<P class="text-2xl">{new Intl.NumberFormat('en-us').format(amount)}<\/P>
						<P class="text-sm {change > 0 ? 'text-green-500' : 'text-red-500'}">
							{change > 0 ? '+' : ''}{change}
						<\/P>
					<\/Div>
				<\/Card>
			{/each}
		<\/Div>
		<Div class="flex items-center justify-between ">
			<Div class="flex space-x-4">
				<Img
					alt="Avatar"
					class="aspect-square w-10 rounded-full object-cover"
					src="https://thispersondoesnotexist.com/"
				/>
				<Div class="flex flex-col justify-between">
					<Div class="text-sm font-bold">William Johson<\/Div>
					<A
						class="text-xs opacity-75 shadow-none hover:text-current hover:opacity-100 hover:shadow-none"
						href="#">j.william@gmail.com<\/A
					>
				<\/Div>
			<\/Div>
			<A
				class="flex items-center space-x-2 shadow-none hover:text-current hover:opacity-100 hover:shadow-none"
				href="#"
			>
				<Div class="font-bold">All stats<\/Div>
				<Icon class="h-4 w-4" src={ChevronRight} />
			<\/A>
		<\/Div>
	<\/Card>
{/snippet}

{#snippet financialTransactions()}
	<Card
		class="space-y-8 rounded-2xl bg-[#D5EA6B] text-slate-950 shadow-none dark:bg-[#D5EA6B] dark:text-slate-950 dark:shadow-none"
	>
		<Div class="flex items-center justify-between">
			<H3>Financial<br /> transactions<\/H3>
			<Select
				class="rounded-full bg-slate-50 bg-transparent px-4 py-2 leading-4 text-current ring-offset-0 dark:text-slate-950"
				options={financialTransactionOptions()}
				value={financialTransactionOptions()[0].label}
			/>
		<\/Div>
		<Div class="grid flex-grow grid-cols-3">
			{#each [...financialTransactionChart] as [label, { classes, percent }]}
				<Div class="flex flex-grow flex-col space-y-1">
					<Div class="flex flex-grow items-end justify-between px-2">
						<Div class="text-xl font-bold">
							{new Intl.NumberFormat('en-us', {
								style: 'percent',
								maximumFractionDigits: 0
							}).format(percent)}<\/Div
						>
						<Div class="text-xs opacity-75">{label}<\/Div>
					<\/Div>
					<Div class="rounded-lg {classes}" style="height:{(percent / 0.61) * 100}%" />
				<\/Div>
			{/each}
		<\/Div>
	<\/Card>
{/snippet}

{#snippet educationalProgress()}
	<Card
		class="space-y-8 rounded-2xl bg-slate-100 shadow-none dark:bg-slate-800 dark:text-slate-50 dark:shadow-none"
	>
		<Div class="flex items-center justify-between">
			<H3>Educational progress<\/H3>
			<Button
				class="bg-transparent px-3 text-current shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:shadow-none dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
			>
				<Icon src={EllipsisHorizontal} />
			<\/Button>
		<\/Div>
		<Div class="grid flex-grow grid-cols-4">
			{#each [...educationalProgressChart] as [label, { classes, icon, amount }]}
				<Div class="flex flex-grow flex-col items-center">
					<Div class="relative flex w-full flex-grow">
						<Div
							class="absolute -bottom-2 left-1/2 h-16 w-px -translate-x-1/2 bg-slate-950/10 dark:bg-slate-50/10"
						/>
						<Div
							class="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full {classes}"
							style="height:{(amount * 100) / 120}%;"
						/>
					<\/Div>
					<Icon class="mt-4" src={icon} />
					<Div class="text-xl font-bold">{amount}h<\/Div>
					<Div class="opactiy-75 text-xs">{label}<\/Div>
				<\/Div>
			{/each}
		<\/Div>
	<\/Card>
{/snippet}

{#snippet recentReceipts()}
	<Card
		class="space-y-8 rounded-2xl bg-[#F7D8C6] text-slate-950 shadow-none dark:bg-[#F7D8C6] dark:shadow-none"
	>
		<Div class="flex items-center justify-between">
			<H3>Recent receipts<\/H3>
			<A
				class={twMerge(
					theme.get('button'),
					'rounded-full bg-white px-4 py-2 leading-4 text-slate-950 shadow-none hover:bg-slate-50 hover:text-slate-950 hover:shadow-none focus:bg-slate-50 focus:ring-slate-50/30'
				)}
				href="#"
			>
				View all
			<\/A>
		<\/Div>
		<Div class="grid flex-grow grid-rows-4">
			{#each recentReceiptList as { imgSrc, name, date, amount }}
				<A
					class="flex items-center justify-between rounded-xl px-4 shadow-none hover:bg-white hover:text-current hover:shadow-none focus:bg-white focus:text-current focus:shadow-none focus:ring-white/30"
					href="#"
				>
					<Div class="flex items-center space-x-4">
						<Img alt="Avatar" class="aspect-square w-10 rounded-full object-cover" src={imgSrc} />
						<Div class="flex flex-col justify-between">
							<Div class="text-sm font-bold">{name}<\/Div>
							<A
								class="text-xs opacity-75 shadow-none hover:text-current hover:opacity-100 hover:shadow-none"
								href="#"
							>
								{date}
							<\/A>
						<\/Div>
					<\/Div>
					<Div class="flex items-center space-x-2">
						<Div class="font-bold">
							{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(
								amount
							)}
						<\/Div>
						<Icon class="h-4 w-4" src={ChevronRight} />
					<\/Div>
				<\/A>
			{/each}
		<\/Div>
	<\/Card>
{/snippet}

<Div class="grid auto-rows-fr grid-cols-2 gap-4">
	{@render statisticalInformation()}
	{@render financialTransactions()}
	{@render educationalProgress()}
	{@render recentReceipts()}
<\/Div>
`);
	inspiration.set({
		href: 'https://dribbble.com/shots/23891404-Polyfin-UI-UX',
		src: 'https://cdn.dribbble.com/userupload/13767981/file/original-194aaa8c816801b930cf5abef1ea5efd.png?resize=1024x768'
	});
</script>

{#snippet statisticalInformation()}
	<Card
		class="space-y-8 rounded-2xl bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-950"
	>
		<Div class="flex items-center justify-between">
			<H3>Statistical<br /> information</H3>
			<Select
				class="rounded-full bg-slate-50 px-4 py-2 leading-4 text-slate-950 dark:bg-slate-950 dark:text-slate-50"
				options={[{ label: 'Week', value: 'Week' }]}
				value="Week"
			/>
		</Div>
		<Div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
			{#each statisticalInformationCards as { icon, iconClasses, title, amount, change }}
				<Card
					class="items-center bg-slate-50/10 shadow-none dark:bg-slate-950/[.025] dark:shadow-none"
				>
					<Div class="rounded-full p-2 {iconClasses}">
						<Icon src={icon} />
					</Div>
					<P class="mt-4 text-xs opacity-50">{title}</P>
					<Div class="mt-2 flex items-center justify-center space-x-2">
						<P class="text-2xl">{new Intl.NumberFormat('en-us').format(amount)}</P>
						<P class="text-sm {change > 0 ? 'text-green-500' : 'text-red-500'}">
							{change > 0 ? '+' : ''}{change}
						</P>
					</Div>
				</Card>
			{/each}
		</Div>
		<Div class="flex items-center justify-between ">
			<Div class="flex space-x-4">
				<Img
					alt="Avatar"
					class="aspect-square w-10 rounded-full object-cover"
					src="https://thispersondoesnotexist.com/"
				/>
				<Div class="flex flex-col justify-between">
					<Div class="text-sm font-bold">William Johson</Div>
					<A
						class="text-xs opacity-75 shadow-none hover:text-current hover:opacity-100 hover:shadow-none"
						href="#">j.william@gmail.com</A
					>
				</Div>
			</Div>
			<A
				class="flex items-center space-x-2 shadow-none hover:text-current hover:opacity-100 hover:shadow-none"
				href="#"
			>
				<Div class="font-bold">All stats</Div>
				<Icon class="h-4 w-4" src={ChevronRight} />
			</A>
		</Div>
	</Card>
{/snippet}

{#snippet financialTransactions()}
	<Card
		class="space-y-8 rounded-2xl bg-[#D5EA6B] text-slate-950 shadow-none dark:bg-[#D5EA6B] dark:text-slate-950 dark:shadow-none"
	>
		<Div class="flex items-center justify-between">
			<H3>Financial<br /> transactions</H3>
			<Select
				class="rounded-full bg-slate-50 bg-transparent px-4 py-2 leading-4 text-current ring-offset-0 dark:text-slate-950"
				options={financialTransactionOptions()}
				value={financialTransactionOptions()[0].label}
			/>
		</Div>
		<Div class="grid flex-grow grid-cols-3">
			{#each [...financialTransactionChart] as [label, { classes, percent }]}
				<Div class="flex flex-grow flex-col space-y-1">
					<Div class="flex flex-grow items-end justify-between px-2">
						<Div class="text-xl font-bold">
							{new Intl.NumberFormat('en-us', {
								style: 'percent',
								maximumFractionDigits: 0
							}).format(percent)}</Div
						>
						<Div class="text-xs opacity-75">{label}</Div>
					</Div>
					<Div class="rounded-lg {classes}" style="height:{(percent / 0.61) * 100}%" />
				</Div>
			{/each}
		</Div>
	</Card>
{/snippet}

{#snippet educationalProgress()}
	<Card
		class="space-y-8 rounded-2xl bg-slate-100 shadow-none dark:bg-slate-800 dark:text-slate-50 dark:shadow-none"
	>
		<Div class="flex items-center justify-between">
			<H3>Educational progress</H3>
			<Button
				class="bg-transparent px-3 text-current shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:shadow-none dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
			>
				<Icon src={EllipsisHorizontal} />
			</Button>
		</Div>
		<Div class="grid flex-grow grid-cols-4">
			{#each [...educationalProgressChart] as [label, { classes, icon, amount }]}
				<Div class="flex flex-grow flex-col items-center">
					<Div class="relative flex w-full flex-grow">
						<Div
							class="absolute -bottom-2 left-1/2 h-16 w-px -translate-x-1/2 bg-slate-950/10 dark:bg-slate-50/10"
						/>
						<Div
							class="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full {classes}"
							style="height:{(amount * 100) / 120}%;"
						/>
					</Div>
					<Icon class="mt-4" src={icon} />
					<Div class="text-xl font-bold">{amount}h</Div>
					<Div class="opactiy-75 text-xs">{label}</Div>
				</Div>
			{/each}
		</Div>
	</Card>
{/snippet}

{#snippet recentReceipts()}
	<Card
		class="space-y-8 rounded-2xl bg-[#F7D8C6] text-slate-950 shadow-none dark:bg-[#F7D8C6] dark:shadow-none"
	>
		<Div class="flex items-center justify-between">
			<H3>Recent receipts</H3>
			<A
				class={twMerge(
					theme.get('button'),
					'rounded-full bg-white px-4 py-2 leading-4 text-slate-950 shadow-none hover:bg-slate-50 hover:text-slate-950 hover:shadow-none focus:bg-slate-50 focus:ring-slate-50/30'
				)}
				href="#"
			>
				View all
			</A>
		</Div>
		<Div class="grid flex-grow grid-rows-4">
			{#each recentReceiptList as { imgSrc, name, date, amount }}
				<A
					class="flex items-center justify-between rounded-xl px-4 shadow-none hover:bg-white hover:text-current hover:shadow-none focus:bg-white focus:text-current focus:shadow-none focus:ring-white/30"
					href="#"
				>
					<Div class="flex items-center space-x-4">
						<Img alt="Avatar" class="aspect-square w-10 rounded-full object-cover" src={imgSrc} />
						<Div class="flex flex-col justify-between">
							<Div class="text-sm font-bold">{name}</Div>
							<A
								class="text-xs opacity-75 shadow-none hover:text-current hover:opacity-100 hover:shadow-none"
								href="#"
							>
								{date}
							</A>
						</Div>
					</Div>
					<Div class="flex items-center space-x-2">
						<Div class="font-bold">
							{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(
								amount
							)}
						</Div>
						<Icon class="h-4 w-4" src={ChevronRight} />
					</Div>
				</A>
			{/each}
		</Div>
	</Card>
{/snippet}

<Div class="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-2">
	{@render statisticalInformation()}
	{@render financialTransactions()}
	{@render educationalProgress()}
	{@render recentReceipts()}
</Div>
