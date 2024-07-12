<script lang="ts">
	import { IphoneMockup } from '$components/index.js';
	import { Button, Card, Div, H1, H6, Img, Input, Nav } from '$lib/components/index.js';
	import {
		BellDot,
		BriefcaseBusiness,
		CircleUserRound,
		Earth,
		FileStack,
		Heart,
		Home,
		List,
		LocateFixed,
		MapPin,
		MessageSquareText,
		Pencil,
		Rows2,
		Search
	} from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import { jobs } from './jobs.svelte.js';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';

	// props
	let currentTab = $state('Explore');
	const tabBarData = [
		{ icon: Home, label: 'Home' },
		{ icon: Earth, label: 'Explore' },
		{ icon: FileStack, label: 'Activity' },
		{ icon: BellDot, label: 'Notifications' },
		{ icon: CircleUserRound, label: 'Profile' }
	];
	let view = $state(List);
	const viewOptions = [Rows2, List];

	code.set(`<script lang="ts">
	import { Button, Card, Div, H1, H6, Img, Input, Nav } from 'sveltewind/components';
	import {
		BellDot,
		BriefcaseBusiness,
		CircleUserRound,
		Earth,
		FileStack,
		Heart,
		Home,
		List,
		LocateFixed,
		MapPin,
		MessageSquareText,
		Pencil,
		Rows2,
		Search
	} from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import { jobs } from './jobs.svelte.js';

	// props
	let currentTab = $state('Explore');
	const tabBarData = [
		{ icon: Home, label: 'Home' },
		{ icon: Earth, label: 'Explore' },
		{ icon: FileStack, label: 'Activity' },
		{ icon: BellDot, label: 'Notifications' },
		{ icon: CircleUserRound, label: 'Profile' }
	];
	let view = $state(List);
	const viewOptions = [Rows2, List];
<\/script>

{#snippet exploreTab()}
	<Div class="absolute left-0 top-0 flex h-full w-full flex-grow flex-col overflow-auto">
		<Div class="flex flex-col space-y-4 bg-[#3755E0] px-4 pb-4 pt-12 text-white">
			<Div class="flex items-center justify-between">
				{@render logo()}
				<Div class="flex items-center space-x-2">
					<Button
						class="bg-transparent p-1 shadow-none hover:bg-white/5 focus:bg-white/5 focus:ring-white/30"
					>
						<Heart class="h-4 w-4" />
					<\/Button>
					<Button
						class="bg-transparent p-1 shadow-none hover:bg-white/5 focus:bg-white/5 focus:ring-white/30"
					>
						<MessageSquareText class="h-4 w-4" />
					<\/Button>
				<\/Div>
			<\/Div>
			{@render search()}
		<\/Div>
		<Div class="relative flex flex-grow flex-col overflow-auto">
			<Card class="rounded-none p-4 font-bold shadow-none">Best matches<\/Card>
			<Card
				class="flex-row justify-between rounded-none bg-slate-50 px-4 py-2 shadow-none dark:bg-white/[.025] dark:shadow-none"
			>
				<Div class="flex items-center">
					{#each viewOptions as option}
						<Button
							class={twMerge(
								'bg-transparent p-1 shadow-none hover:bg-slate-950/5 focus:bg-slate-950/5 focus:ring-slate-950/30 dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-slate-50/30',
								view === option ? 'text-[#3755E0]' : 'text-current'
							)}
							onclick={() => (view = option)}
						>
							<svelte:component this={option} class="h-4 w-4" />
						<\/Button>
					{/each}
				<\/Div>
				<Button
					class="items-center space-x-1 rounded-full bg-slate-800 px-3 py-2 text-xs text-slate-50 hover:bg-slate-950 focus:bg-slate-950 focus:ring-slate-950/30 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-50 dark:focus:bg-slate-50 dark:focus:ring-slate-50/30"
				>
					<Pencil class="h-[1em] w-[1em]" />
					<span>Edit<\/span>
				<\/Button>
			<\/Card>
			<Card class="flex-grow space-y-4 overflow-auto rounded-none px-0 pb-20 pt-4 shadow-none">
				{#each jobs as jobData}
					{@render job(jobData)}
				{/each}
			<\/Card>
			<Button
				class="absolute bottom-4 left-1/2 w-[calc(100%_-_2rem)] -translate-x-1/2 items-center space-x-2 rounded-md bg-slate-800 font-medium text-slate-50 hover:bg-slate-950 focus:bg-slate-950 focus:ring-slate-950/30 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-50 dark:focus:bg-slate-50 dark:focus:ring-slate-50/30"
			>
				<LocateFixed class="h-[1em] w-[1em]" />
				<span>See nearby<\/span>
			<\/Button>
		<\/Div>
	<\/Div>
{/snippet}
{#snippet job(jobData)}
	<Div class="flex flex-col space-y-2 px-4">
		<Div class="flex items-center space-x-2">
			<Div class="overflow-hidden rounded-full p-2 ring-1 ring-slate-950/10 dark:ring-slate-50/10">
				<Img alt={jobData.company} class="aspect-square w-4 object-contain" src={jobData.icon} />
			<\/Div>
			<Div class="flex flex-grow flex-col">
				<H6 class="text-[.75rem]">{jobData.title}<\/H6>
				<span class="text-[.625rem] opacity-70">{jobData.company}<\/span>
			<\/Div>
			<Button
				class={twMerge(
					'bg-transparent p-2 text-current shadow-none ring-0 hover:bg-transparent focus:bg-transparent',
					jobData.liked ? 'text-[#CD204B]' : 'hover:text-[#CD204B] focus:text-[#CD204B]'
				)}
				onclick={() => (jobData.liked = !jobData.liked)}
			>
				<Heart class="h-4 w-4" fill={jobData.liked ? '#CD204B' : 'none'} />
			<\/Button>
		<\/Div>
		<Div class="flex items-center justify-between space-x-2 text-[.625rem]">
			<Div class="flex items-center space-x-2">
				<Div class="flex items-center space-x-1">
					<BriefcaseBusiness class="h-[1em] w-[1em] opacity-50" />
					<span>{jobData.status}<\/span>
				<\/Div>
				<Div class="flex items-center space-x-1">
					<MapPin class="h-[1em] w-[1em] opacity-50" />
					<span>{jobData.location}<\/span>
				<\/Div>
			<\/Div>
			<Div class="rounded-sm bg-slate-950/5 px-2 py-1 font-bold dark:bg-slate-50/5">
				{new Intl.NumberFormat('en-us', {
					currency: 'USD',
					notation: 'compact',
					style: 'currency'
				}).format(jobData.min)} - {new Intl.NumberFormat('en-us', {
					currency: 'USD',
					notation: 'compact',
					style: 'currency'
				}).format(jobData.max)}
			<\/Div>
		<\/Div>
	<\/Div>
{/snippet}
{#snippet logo()}
	<H1 class="text-sm font-medium">Workedin<\/H1>
{/snippet}
{#snippet main()}
	<Div class="relative flex-grow overflow-hidden text-slate-950 dark:text-slate-50">
		{@render exploreTab()}
	<\/Div>
{/snippet}
{#snippet search()}
	<Div class="relative">
		<Input
			class="w-full rounded-sm bg-white pl-10 text-slate-950 focus:ring-white/30 dark:bg-white"
			placeholder="Search"
		/>
		<Search
			class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-950 opacity-50"
		/>
	<\/Div>
{/snippet}
{#snippet tab({ icon, label })}
	<Button
		class={twMerge(
			'flex-col items-center space-y-1 rounded-none bg-transparent pb-6 pt-4 ring-0 hover:bg-transparent focus:bg-transparent dark:shadow-none',
			label === currentTab
				? 'text-[#3755DF] hover:text-[#3755DF] focus:text-[#3755DF]'
				: 'text-current opacity-50 hover:opacity-100 focus:opacity-100'
		)}
	>
		<svelte:component this={icon} class="h-4 w-4" />
		<span class="text-[.5rem] leading-[1em]">{label}<\/span>
	<\/Button>
{/snippet}
{#snippet tabBar()}
	<Nav
		class="grid flex-grow-0 grid-cols-5 text-slate-950 ring-1 ring-slate-950/5 dark:text-slate-50 dark:ring-slate-50/5"
	>
		{#each tabBarData as { icon, label }}
			{@render tab({ icon, label })}
		{/each}
	<\/Nav>
{/snippet}

<Card class="flex-grow p-0">
	{@render main()}
	{@render tabBar()}
<\/Card>`);
	inspiration.set({
		href: 'https://dribbble.com/shots/24505954-Workedin-Job-Board-Mobile-App-Explore',
		src: 'https://cdn.dribbble.com/userupload/15552224/file/original-12d76745a1ff43a93084fc4a067ff60d.png?resize=1024x768'
	});
</script>

{#snippet exploreTab()}
	<Div class="absolute left-0 top-0 flex h-full w-full flex-grow flex-col overflow-auto">
		<Div class="flex flex-col space-y-4 bg-[#3755E0] px-4 pb-4 pt-12 text-white">
			<Div class="flex items-center justify-between">
				{@render logo()}
				<Div class="flex items-center space-x-2">
					<Button
						class="bg-transparent p-1 shadow-none hover:bg-white/5 focus:bg-white/5 focus:ring-white/30"
					>
						<Heart class="h-4 w-4" />
					</Button>
					<Button
						class="bg-transparent p-1 shadow-none hover:bg-white/5 focus:bg-white/5 focus:ring-white/30"
					>
						<MessageSquareText class="h-4 w-4" />
					</Button>
				</Div>
			</Div>
			{@render search()}
		</Div>
		<Div class="relative flex flex-grow flex-col overflow-auto">
			<Card class="rounded-none p-4 font-bold shadow-none">Best matches</Card>
			<Card
				class="flex-row justify-between rounded-none bg-slate-50 px-4 py-2 shadow-none dark:bg-white/[.025] dark:shadow-none"
			>
				<Div class="flex items-center">
					{#each viewOptions as option}
						<Button
							class={twMerge(
								'bg-transparent p-1 shadow-none hover:bg-slate-950/5 focus:bg-slate-950/5 focus:ring-slate-950/30 dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-slate-50/30',
								view === option ? 'text-[#3755E0]' : 'text-current'
							)}
							onclick={() => (view = option)}
						>
							<svelte:component this={option} class="h-4 w-4" />
						</Button>
					{/each}
				</Div>
				<Button
					class="items-center space-x-1 rounded-full bg-slate-800 px-3 py-2 text-xs text-slate-50 hover:bg-slate-950 focus:bg-slate-950 focus:ring-slate-950/30 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-50 dark:focus:bg-slate-50 dark:focus:ring-slate-50/30"
				>
					<Pencil class="h-[1em] w-[1em]" />
					<span>Edit</span>
				</Button>
			</Card>
			<Card class="flex-grow space-y-4 overflow-auto rounded-none px-0 pb-20 pt-4 shadow-none">
				{#each jobs as jobData}
					{@render job(jobData)}
				{/each}
			</Card>
			<Button
				class="absolute bottom-4 left-1/2 w-[calc(100%_-_2rem)] -translate-x-1/2 items-center space-x-2 rounded-md bg-slate-800 font-medium text-slate-50 hover:bg-slate-950 focus:bg-slate-950 focus:ring-slate-950/30 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-50 dark:focus:bg-slate-50 dark:focus:ring-slate-50/30"
			>
				<LocateFixed class="h-[1em] w-[1em]" />
				<span>See nearby</span>
			</Button>
		</Div>
	</Div>
{/snippet}
{#snippet job(jobData)}
	<Div class="flex flex-col space-y-2 px-4">
		<Div class="flex items-center space-x-2">
			<Div class="overflow-hidden rounded-full p-2 ring-1 ring-slate-950/10 dark:ring-slate-50/10">
				<Img alt={jobData.company} class="aspect-square w-4 object-contain" src={jobData.icon} />
			</Div>
			<Div class="flex flex-grow flex-col">
				<H6 class="text-[.75rem]">{jobData.title}</H6>
				<span class="text-[.625rem] opacity-70">{jobData.company}</span>
			</Div>
			<Button
				class={twMerge(
					'bg-transparent p-2 text-current shadow-none ring-0 hover:bg-transparent focus:bg-transparent',
					jobData.liked ? 'text-[#CD204B]' : 'hover:text-[#CD204B] focus:text-[#CD204B]'
				)}
				onclick={() => (jobData.liked = !jobData.liked)}
			>
				<Heart class="h-4 w-4" fill={jobData.liked ? '#CD204B' : 'none'} />
			</Button>
		</Div>
		<Div class="flex items-center justify-between space-x-2 text-[.625rem]">
			<Div class="flex items-center space-x-2">
				<Div class="flex items-center space-x-1">
					<BriefcaseBusiness class="h-[1em] w-[1em] opacity-50" />
					<span>{jobData.status}</span>
				</Div>
				<Div class="flex items-center space-x-1">
					<MapPin class="h-[1em] w-[1em] opacity-50" />
					<span>{jobData.location}</span>
				</Div>
			</Div>
			<Div class="rounded-sm bg-slate-950/5 px-2 py-1 font-bold dark:bg-slate-50/5">
				{new Intl.NumberFormat('en-us', {
					currency: 'USD',
					notation: 'compact',
					style: 'currency'
				}).format(jobData.min)} - {new Intl.NumberFormat('en-us', {
					currency: 'USD',
					notation: 'compact',
					style: 'currency'
				}).format(jobData.max)}
			</Div>
		</Div>
	</Div>
{/snippet}
{#snippet logo()}
	<H1 class="text-sm font-medium">Workedin</H1>
{/snippet}
{#snippet main()}
	<Div class="relative flex-grow overflow-hidden text-slate-950 dark:text-slate-50">
		{@render exploreTab()}
	</Div>
{/snippet}
{#snippet search()}
	<Div class="relative">
		<Input
			class="w-full rounded-sm bg-white pl-10 text-slate-950 focus:ring-white/30 dark:bg-white"
			placeholder="Search"
		/>
		<Search
			class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-950 opacity-50"
		/>
	</Div>
{/snippet}
{#snippet tab({ icon, label })}
	<Button
		class={twMerge(
			'flex-col items-center space-y-1 rounded-none bg-transparent pb-6 pt-4 ring-0 hover:bg-transparent focus:bg-transparent dark:shadow-none',
			label === currentTab
				? 'text-[#3755DF] hover:text-[#3755DF] focus:text-[#3755DF]'
				: 'text-current opacity-50 hover:opacity-100 focus:opacity-100'
		)}
	>
		<svelte:component this={icon} class="h-4 w-4" />
		<span class="text-[.5rem] leading-[1em]">{label}</span>
	</Button>
{/snippet}
{#snippet tabBar()}
	<Nav
		class="grid flex-grow-0 grid-cols-5 text-slate-950 ring-1 ring-slate-950/5 dark:text-slate-50 dark:ring-slate-50/5"
	>
		{#each tabBarData as { icon, label }}
			{@render tab({ icon, label })}
		{/each}
	</Nav>
{/snippet}

<IphoneMockup class="rounded-[2.5rem] text-white">
	<Card class="flex-grow p-0">
		{@render main()}
		{@render tabBar()}
	</Card>
</IphoneMockup>
