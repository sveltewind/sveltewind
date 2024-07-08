<script lang="ts">
	import { Button, Card, Div, H1, H2, H6, Header, Img, P } from '$lib/components/index.js';
	import { twMerge } from 'tailwind-merge';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';

	// props
	let avatarSrc =
		'https://cdn.dribbble.com/users/1909942/avatars/normal/47671d42f5846b3b34dc8d6b8e150290.jpg?1548755876';
	let excercises = [
		{ title: 'Front Squat', type: 'Strength', intensity: 'Medium' },
		{ title: 'Hip Abduction', type: 'Strength', intensity: 'Low' },
		{ title: 'Front Squat', type: 'Strength', intensity: 'High' },
		{ title: 'Elliptical Crosstrainer', type: 'Cardio', intensity: 'High' },
		{ title: 'Goblet squats', type: 'Flexibility', intensity: 'Medium' }
	];
	const intensities = new Map([
		['Medium', 'bg-orange-500/15'],
		['Low', 'bg-emerald-500/15'],
		['High', 'bg-red-500/15']
	]);
	let tab = "Today's workout";
	let tabs = ["Today's workout", 'Week', 'Month'];
	const types = new Map([
		['Strength', 'bg-orange-500/15'],
		['Cardio', 'bg-blue-500/15'],
		['Flexibility', 'bg-amber-500/15']
	]);

	code.set(`<script lang="ts">
	import { Button, Card, Div, H1, H2, H6, Header, Img, P } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';

	// props
	let avatarSrc =
		'https://cdn.dribbble.com/users/1909942/avatars/normal/47671d42f5846b3b34dc8d6b8e150290.jpg?1548755876';
	let excercises = [
		{ title: 'Front Squat', type: 'Strength', intensity: 'Medium' },
		{ title: 'Hip Abduction', type: 'Strength', intensity: 'Low' },
		{ title: 'Front Squat', type: 'Strength', intensity: 'High' },
		{ title: 'Elliptical Crosstrainer', type: 'Cardio', intensity: 'High' },
		{ title: 'Goblet squats', type: 'Flexibility', intensity: 'Medium' }
	];
	const intensities = new Map([
		['Medium', 'bg-orange-500/15'],
		['Low', 'bg-emerald-500/15'],
		['High', 'bg-red-500/15']
	]);
	let tab = "Today's workout";
	let tabs = ["Today's workout", 'Week', 'Month'];
	const types = new Map([
		['Strength', 'bg-orange-500/15'],
		['Cardio', 'bg-blue-500/15'],
		['Flexibility', 'bg-amber-500/15']
	]);
<\/script>

<Card class="space-y-8">
	<Header class="items-center justify-between ring-0">
		<H1 class="text-lg">Good morning!<\/H1>
		<Img alt="Avatar" class="aspect-square w-10 rounded-full object-cover" src={avatarSrc} />
	<\/Header>
	<Div class="flex flex-col">
		<Div class="flex space-x-8">
			{#each tabs as tabLabel}
				<Button
					class={twMerge(
						'rounded-none bg-transparent px-0 py-2 text-current hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus:text-violet-500 dark:shadow-none',
						tab === tabLabel ? 'border-b-2 border-violet-500 text-violet-500' : undefined
					)}
				>
					{tabLabel}
				<\/Button>
			{/each}
		<\/Div>
	<\/Div>
	<Div class="flex flex-col space-y-4">
		<H6>8 excercises<\/H6>
		<Div class="grid grid-cols-[fit-content(0px)_1fr] gap-x-8 gap-y-12">
			{#each excercises as { title, type, intensity }, i}
				<P
					class="flex items-center justify-center rounded-lg bg-orange-500/15 px-4 text-orange-500"
				>
					{i + 1}
				<\/P>
				<Div class="grid grid-cols-1 gap-y-2">
					<H2 class="text-md">{title}<\/H2>
					<Div class="flex text-sm">
						<Div class="relative min-w-24 whitespace-nowrap">
							{type}
							<Div
								class={twMerge(
									'absolute left-0 top-1/2 aspect-[5/8] w-3 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full',
									types.get(type)
								)}
							><\/Div>
						<\/Div>
						<Div class="relative whitespace-nowrap">
							{intensity} Intensity
							<Div
								class={twMerge(
									'absolute left-0 top-1/2 aspect-[5/8] w-3 -translate-x-1/2 -translate-y-1/2 rounded-full',
									intensities.get(intensity)
								)}
							><\/Div>
						<\/Div>
					<\/Div>
				<\/Div>
			{/each}
		<\/Div>
	<\/Div>
<\/Card>
`);
	inspiration.set({
		href: 'https://dribbble.com/shots/5961927-Daily-UI-41-Workout-Tracker',
		src: 'https://cdn.dribbble.com/users/1909942/screenshots/5961927/daily_ui_41____workout_4x.png?resize=1000x750&vertical=center'
	});
</script>

<Card class="space-y-8">
	<Header class="items-center justify-between ring-0">
		<H1 class="text-lg">Good morning!</H1>
		<Img alt="Avatar" class="aspect-square w-10 rounded-full object-cover" src={avatarSrc} />
	</Header>
	<Div class="flex flex-col">
		<Div class="flex space-x-8">
			{#each tabs as tabLabel}
				<Button
					class={twMerge(
						'rounded-none bg-transparent px-0 py-2 text-current hover:bg-transparent hover:text-violet-500 focus:bg-transparent focus:text-violet-500 dark:shadow-none',
						tab === tabLabel ? 'border-b-2 border-violet-500 text-violet-500' : undefined
					)}
				>
					{tabLabel}
				</Button>
			{/each}
		</Div>
	</Div>
	<Div class="flex flex-col space-y-4">
		<H6>8 excercises</H6>
		<Div class="grid grid-cols-[fit-content(0px)_1fr] gap-x-8 gap-y-12">
			{#each excercises as { title, type, intensity }, i}
				<P
					class="flex items-center justify-center rounded-lg bg-orange-500/15 px-4 text-orange-500"
				>
					{i + 1}
				</P>
				<Div class="grid grid-cols-1 gap-y-2">
					<H2 class="text-md">{title}</H2>
					<Div class="flex text-sm">
						<Div class="relative min-w-24 whitespace-nowrap">
							{type}
							<Div
								class={twMerge(
									'absolute left-0 top-1/2 aspect-[5/8] w-3 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full',
									types.get(type)
								)}
							></Div>
						</Div>
						<Div class="relative whitespace-nowrap">
							{intensity} Intensity
							<Div
								class={twMerge(
									'absolute left-0 top-1/2 aspect-[5/8] w-3 -translate-x-1/2 -translate-y-1/2 rounded-full',
									intensities.get(intensity)
								)}
							></Div>
						</Div>
					</Div>
				</Div>
			{/each}
		</Div>
	</Div>
</Card>
