<script lang="ts">
	import {
		Button,
		Card,
		Checkbox,
		Div,
		H1,
		H4,
		H5,
		H6,
		Header,
		Img,
		P
	} from '$lib/components/index.js';
	import {
		ArrowLeft,
		BatteryFull,
		Check,
		Clock4,
		FileText,
		Plus,
		Send,
		Signal,
		Wifi
	} from 'lucide-svelte';
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';

	// handlers
	const updateDate = () => {
		date = DateTime.now();
		requestAnimationFrame(updateDate);
	};

	// props
	let { data } = $props();
	let addNewButtonIsVisible = $state(false);
	const chipClassMap = new Map([
		['High', 'bg-[#FE8081] text-[#4C0000]'],
		['Normal', 'bg-[#FFCC66] text-[#4D3300]'],
		['Low', 'bg-[#B2B2B2] text-[#252525]'],
		['Ongoing', 'bg-[#B26EF7] text-[#260347]']
	]);
	let currentTask = $state(data.tasks[0]);
	let currentTaskIsVisible = $state(false);
	let date = $state(DateTime.now());
	const filetypeImageMap = new Map([
		[
			'pdf',
			'https://static.vecteezy.com/system/resources/previews/023/234/824/original/pdf-icon-red-and-white-color-for-free-png.png'
		]
	]);
	let todaysTasksAreVisible = $state(false);

	// effects
	$effect(() => {
		if (currentTaskIsVisible || todaysTasksAreVisible) {
			addNewButtonIsVisible = true;
		}
	});

	onMount(() => {
		requestAnimationFrame(updateDate);
	});

	code.set(`<script lang="ts">
	import {
		Button,
		Card,
		Checkbox,
		Div,
		H1,
		H4,
		H5,
		H6,
		Header,
		Img,
		P
	} from 'sveltewind/components';
	import {
		ArrowLeft,
		BatteryFull,
		Check,
		Clock4,
		FileText,
		Plus,
		Send,
		Signal,
		Wifi
	} from 'lucide-svelte';
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	// handlers
	const updateDate = () => {
		date = DateTime.now();
		requestAnimationFrame(updateDate);
	};

	// props
	let { data } = $props();
	let addNewButtonIsVisible = $state(false);
	const chipClassMap = new Map([
		['High', 'bg-[#FE8081] text-[#4C0000]'],
		['Normal', 'bg-[#FFCC66] text-[#4D3300]'],
		['Low', 'bg-[#B2B2B2] text-[#252525]'],
		['Ongoing', 'bg-[#B26EF7] text-[#260347]']
	]);
	let currentTask = $state(data.tasks[0]);
	let currentTaskIsVisible = $state(false);
	let date = $state(DateTime.now());
	const filetypeImageMap = new Map([
		[
			'pdf',
			'https://static.vecteezy.com/system/resources/previews/023/234/824/original/pdf-icon-red-and-white-color-for-free-png.png'
		]
	]);
	let todaysTasksAreVisible = $state(false);

	// effects
	$effect(() => {
		if (currentTaskIsVisible || todaysTasksAreVisible) {
			addNewButtonIsVisible = true;
		}
	});

	onMount(() => {
		requestAnimationFrame(updateDate);
	});
<\/script>

<Card class="relative aspect-[9/19.5] h-[600px] overflow-hidden rounded-xl p-0 shadow-none">
	<Card
		class="absolute left-0 top-0 flex h-full w-full flex-col justify-end space-y-4 rounded-none px-4 py-8 pt-16 shadow-none ring-0"
	>
		<Img
			alt="Rocket"
			class="w-full"
			src="https://cdn3d.iconscout.com/3d/premium/thumb/rocket-8084689-6437619.png?f=webp"
		/>
		<H1 class="leading-[1.25em]">Boost your productivity.<\/H1>
		<Button
			class="bg-[#7E10EF] hover:bg-[#7E10EF] focus:bg-[#7E10EF] focus:ring-[#7E10EF30]"
			onclick={() => (todaysTasksAreVisible = true)}
		>
			Let's gooo
		<\/Button>
	<\/Card>
	<Card
		bind:isVisible={todaysTasksAreVisible}
		class="absolute left-0 top-0 flex h-full w-full flex-col space-y-8 overflow-auto rounded-none px-0 pb-0 pt-16 shadow-none ring-0"
		transition={[fly, { duration: 500, easing: cubicInOut, opacity: 1, y: '100%' }]}
	>
		<Div class="flex flex-col space-y-4 px-4">
			<H1>Today's tasks<\/H1>
			<H6 class="opacity-70">
				{data.tasks.filter((task) => task.complete).length} out of {data.tasks.length} completed.
			<\/H6>
		<\/Div>
		<Div class="relative flex flex-grow flex-col space-y-4 overflow-auto px-4 pb-[6rem] pt-0">
			{#each data.tasks as { priority, title, ongoing, attachments, checklist, complete, ...task }}
				<Button
					class="bg-transparent p-0 text-current shadow-none hover:bg-transparent hover:text-current hover:shadow-none focus:bg-transparent focus:text-current focus:shadow-none"
					onclick={(e) => {
						e.preventDefault();
						currentTask = { priority, title, ongoing, attachments, checklist, complete, ...task };
						currentTaskIsVisible = true;
					}}
				>
					<Card
						class="flex-grow space-y-4 bg-slate-950/5 p-2 text-left shadow-none ring-0 dark:bg-slate-50/5 dark:shadow-none"
					>
						<Div class="flex items-center justify-between">
							<span class={twMerge('rounded p-2 text-xs font-bold', chipClassMap.get(priority))}
								>{priority} priority<\/span
							>
							<Div class="flex items-center justify-end space-x-2">
								{#if complete}
									<Check class="h-4 w-4 text-[#70E395]" />
								{:else}
									{#if attachments}
										<FileText class="text-[#76D5FF]" />
									{/if}
									{#if ongoing}
										<Clock4 class="text-[#B26EF7]" />
									{/if}
								{/if}
							<\/Div>
						<\/Div>
						<H5 class={complete ? 'line-through' : undefined}>{title}<\/H5>
						{#if checklist}
							<Div class="flex flex-col space-y-2 border-l-2 border-current pl-2">
								{#each checklist as checklist}
									<Checkbox bind:checked={checklist.complete}>{checklist.label}<\/Checkbox>
								{/each}
							<\/Div>
						{/if}
					<\/Card>
				<\/Button>
			{/each}
		<\/Div>
	<\/Card>
	<Card
		bind:isVisible={currentTaskIsVisible}
		class="absolute left-0 top-0 flex h-full w-full flex-col space-y-8 overflow-auto rounded-none px-4 py-8 pt-16 shadow-none ring-0"
		transition={[fly, { duration: 500, easing: cubicInOut, opacity: 1, x: '100%' }]}
	>
		<Div class="relative flex justify-center">
			<Div class="opacity-70">Task<\/Div>
			<Button
				class="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent px-3 text-current shadow-none hover:bg-slate-950/5 focus:bg-slate-950/5 focus:ring-slate-950/30 dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-slate-50/30"
				onclick={() => {
					currentTaskIsVisible = false;
				}}
			>
				<ArrowLeft />
			<\/Button>
		<\/Div>
		<Div class="flex flex-col space-y-4">
			<H4>{currentTask.title}<\/H4>
			<Div class="flex space-x-1">
				<span
					class={twMerge('rounded p-2 text-xs font-bold', chipClassMap.get(currentTask.priority))}
				>
					{currentTask.priority} priority
				<\/span>
				{#if currentTask.ongoing}
					<span class={twMerge('rounded p-2 text-xs font-bold', chipClassMap.get('Ongoing'))}>
						Ongoing
					<\/span>
				{/if}
			<\/Div>
		<\/Div>
		{#if currentTask.description}
			<Div class="flex flex-col space-y-4">
				<H4>Description<\/H4>
				<P class="text-xs opacity-70">{currentTask.description}<\/P>
			<\/Div>
		{/if}
		<Div class="flex flex-col space-y-4">
			<H4>Attachments<\/H4>
			<Div class="grid grid-cols-2 gap-4">
				{#if currentTask.attachments}
					{#each currentTask.attachments as attachment}
						<Button
							class="flex flex-row items-center justify-end space-x-1 bg-[#BDCDEE] text-left text-[#081E45] hover:bg-[#BDCDEE] focus:bg-[#BDCDEE]"
						>
							<Img
								alt={attachment.filename}
								class="h-10"
								src={filetypeImageMap.get(attachment.filetype)}
							/>
							<Div class="flex flex-col space-y-0 leading-[1em]">
								<span class="font-bold">{attachment.filename}<\/span>
								<span class="text-xs opacity-70">{attachment.size}<\/span>
							<\/Div>
						<\/Button>
					{/each}
				{/if}
				<Button
					class="border border-dashed border-[#CBA0F9] bg-[#CBA0F910] text-[#CBA0F9] hover:bg-[#CBA0F920] focus:bg-[#CBA0F920] focus:ring-[#CBA0F930]"
				>
					Add a file
				<\/Button>
			<\/Div>
		<\/Div>
		{#if currentTask.checklist}
			<Div class="flex flex-col space-y-4">
				<H4>Check list<\/H4>
				<Div class="flex flex-col space-y-1">
					{#each currentTask.checklist as listItem}
						<Checkbox bind:checked={listItem.complete}>{listItem.label}<\/Checkbox>
					{/each}
					<Button
						class="justify-start bg-transparent p-0 text-base font-medium text-[#983FF3] hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
					>
						<Plus class="ml-[3.5px] mr-[14px] h-4 w-4" />
						<span>Add an item<\/span>
					<\/Button>
				<\/Div>
			<\/Div>
		{/if}
	<\/Card>
	<Button
		bind:isVisible={addNewButtonIsVisible}
		class="absolute bottom-8 right-4 bg-[#7E10EF] hover:bg-[#7E10EF] focus:bg-[#7E10EF] focus:ring-[#7E10EF30]"
		transition={[fly, { duration: 200, easing: cubicInOut, opacity: 1, x: '100%' }]}
	>
		<Plus />
		<span>Add new<\/span>
	<\/Button>
	<Header class="absolute left-0 top-0 flex w-full justify-between p-4 ring-0">
		<Div class="flex items-center space-x-1 text-xs">
			<Div>{date.toFormat('h:mm')}<\/Div>
			<Send class="h-[.75rem] w-[.75rem]" />
		<\/Div>
		<Div class="flex items-center space-x-1">
			<Signal class="h-[.75rem] w-[.75rem]" />
			<Wifi class="h-[.75rem] w-[.75rem]" />
			<BatteryFull class="h-[.75rem] w-[.75rem] text-green-500" />
		<\/Div>
	<\/Header>
<\/Card>`);
	inspiration.set({
		href: 'https://dribbble.com/shots/15837009-Task-management-application',
		src: 'https://cdn.dribbble.com/users/5281901/screenshots/15837009/media/b9c5ccbd1eaa5e57a6427d04396b209c.jpg?resize=1000x750&vertical=center'
	});
</script>

<Card class="relative aspect-[9/19.5] h-[600px] overflow-hidden rounded-xl p-0 shadow-none">
	<Card
		class="absolute left-0 top-0 flex h-full w-full flex-col justify-end space-y-4 rounded-none px-4 py-8 pt-16 shadow-none ring-0"
	>
		<Img
			alt="Rocket"
			class="w-full"
			src="https://cdn3d.iconscout.com/3d/premium/thumb/rocket-8084689-6437619.png?f=webp"
		/>
		<H1 class="leading-[1.25em]">Boost your productivity.</H1>
		<Button
			class="bg-[#7E10EF] hover:bg-[#7E10EF] focus:bg-[#7E10EF] focus:ring-[#7E10EF30]"
			onclick={() => (todaysTasksAreVisible = true)}
		>
			Let's gooo
		</Button>
	</Card>
	<Card
		bind:isVisible={todaysTasksAreVisible}
		class="absolute left-0 top-0 flex h-full w-full flex-col space-y-8 overflow-auto rounded-none px-0 pb-0 pt-16 shadow-none ring-0"
		transition={[fly, { duration: 500, easing: cubicInOut, opacity: 1, y: '100%' }]}
	>
		<Div class="flex flex-col space-y-4 px-4">
			<H1>Today's tasks</H1>
			<H6 class="opacity-70">
				{data.tasks.filter((task) => task.complete).length} out of {data.tasks.length} completed.
			</H6>
		</Div>
		<Div class="relative flex flex-grow flex-col space-y-4 overflow-auto px-4 pb-[6rem] pt-0">
			{#each data.tasks as { priority, title, ongoing, attachments, checklist, complete, ...task }}
				<Button
					class="bg-transparent p-0 text-current shadow-none hover:bg-transparent hover:text-current hover:shadow-none focus:bg-transparent focus:text-current focus:shadow-none"
					onclick={(e) => {
						e.preventDefault();
						currentTask = { priority, title, ongoing, attachments, checklist, complete, ...task };
						currentTaskIsVisible = true;
					}}
				>
					<Card
						class="flex-grow space-y-4 bg-slate-950/5 p-2 text-left shadow-none ring-0 dark:bg-slate-50/5 dark:shadow-none"
					>
						<Div class="flex items-center justify-between">
							<span class={twMerge('rounded p-2 text-xs font-bold', chipClassMap.get(priority))}
								>{priority} priority</span
							>
							<Div class="flex items-center justify-end space-x-2">
								{#if complete}
									<Check class="h-4 w-4 text-[#70E395]" />
								{:else}
									{#if attachments}
										<FileText class="text-[#76D5FF]" />
									{/if}
									{#if ongoing}
										<Clock4 class="text-[#B26EF7]" />
									{/if}
								{/if}
							</Div>
						</Div>
						<H5 class={complete ? 'line-through' : undefined}>{title}</H5>
						{#if checklist}
							<Div class="flex flex-col space-y-2 border-l-2 border-current pl-2">
								{#each checklist as checklist}
									<Checkbox bind:checked={checklist.complete}>{checklist.label}</Checkbox>
								{/each}
							</Div>
						{/if}
					</Card>
				</Button>
			{/each}
		</Div>
	</Card>
	<Card
		bind:isVisible={currentTaskIsVisible}
		class="absolute left-0 top-0 flex h-full w-full flex-col space-y-8 overflow-auto rounded-none px-4 py-8 pt-16 shadow-none ring-0"
		transition={[fly, { duration: 500, easing: cubicInOut, opacity: 1, x: '100%' }]}
	>
		<Div class="relative flex justify-center">
			<Div class="opacity-70">Task</Div>
			<Button
				class="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent px-3 text-current shadow-none hover:bg-slate-950/5 focus:bg-slate-950/5 focus:ring-slate-950/30 dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-slate-50/30"
				onclick={() => {
					currentTaskIsVisible = false;
				}}
			>
				<ArrowLeft />
			</Button>
		</Div>
		<Div class="flex flex-col space-y-4">
			<H4>{currentTask.title}</H4>
			<Div class="flex space-x-1">
				<span
					class={twMerge('rounded p-2 text-xs font-bold', chipClassMap.get(currentTask.priority))}
				>
					{currentTask.priority} priority
				</span>
				{#if currentTask.ongoing}
					<span class={twMerge('rounded p-2 text-xs font-bold', chipClassMap.get('Ongoing'))}>
						Ongoing
					</span>
				{/if}
			</Div>
		</Div>
		{#if currentTask.description}
			<Div class="flex flex-col space-y-4">
				<H4>Description</H4>
				<P class="text-xs opacity-70">{currentTask.description}</P>
			</Div>
		{/if}
		<Div class="flex flex-col space-y-4">
			<H4>Attachments</H4>
			<Div class="grid grid-cols-2 gap-4">
				{#if currentTask.attachments}
					{#each currentTask.attachments as attachment}
						<Button
							class="flex flex-row items-center justify-end space-x-1 bg-[#BDCDEE] text-left text-[#081E45] hover:bg-[#BDCDEE] focus:bg-[#BDCDEE]"
						>
							<Img
								alt={attachment.filename}
								class="h-10"
								src={filetypeImageMap.get(attachment.filetype)}
							/>
							<Div class="flex flex-col space-y-0 leading-[1em]">
								<span class="font-bold">{attachment.filename}</span>
								<span class="text-xs opacity-70">{attachment.size}</span>
							</Div>
						</Button>
					{/each}
				{/if}
				<Button
					class="border border-dashed border-[#CBA0F9] bg-[#CBA0F910] text-[#CBA0F9] hover:bg-[#CBA0F920] focus:bg-[#CBA0F920] focus:ring-[#CBA0F930]"
				>
					Add a file
				</Button>
			</Div>
		</Div>
		{#if currentTask.checklist}
			<Div class="flex flex-col space-y-4">
				<H4>Check list</H4>
				<Div class="flex flex-col space-y-1">
					{#each currentTask.checklist as listItem}
						<Checkbox bind:checked={listItem.complete}>{listItem.label}</Checkbox>
					{/each}
					<Button
						class="justify-start bg-transparent p-0 text-base font-medium text-[#983FF3] hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
					>
						<Plus class="ml-[3.5px] mr-[14px] h-4 w-4" />
						<span>Add an item</span>
					</Button>
				</Div>
			</Div>
		{/if}
	</Card>
	<Button
		bind:isVisible={addNewButtonIsVisible}
		class="absolute bottom-8 right-4 bg-[#7E10EF] hover:bg-[#7E10EF] focus:bg-[#7E10EF] focus:ring-[#7E10EF30]"
		transition={[fly, { duration: 200, easing: cubicInOut, opacity: 1, x: '100%' }]}
	>
		<Plus />
		<span>Add new</span>
	</Button>
	<Header class="absolute left-0 top-0 flex w-full justify-between p-4 ring-0">
		<Div class="flex items-center space-x-1 text-xs">
			<Div>{date.toFormat('h:mm')}</Div>
			<Send class="h-[.75rem] w-[.75rem]" />
		</Div>
		<Div class="flex items-center space-x-1">
			<Signal class="h-[.75rem] w-[.75rem]" />
			<Wifi class="h-[.75rem] w-[.75rem]" />
			<BatteryFull class="h-[.75rem] w-[.75rem] text-green-500" />
		</Div>
	</Header>
</Card>
