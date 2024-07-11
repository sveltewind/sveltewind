<script lang="ts">
	import { A, Button, Card, Div, H4, H6, Icon, Img, Input, P } from '$lib/components/index.js';
	import {
		AdjustmentsHorizontal,
		Bell,
		ChevronLeft,
		Heart,
		Home,
		MagnifyingGlass,
		Star,
		Ticket,
		UserCircle
	} from '$lib/icons/index.js';
	import { DateTime } from 'luxon';
	import { twMerge } from 'tailwind-merge';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	// props
	let { data } = $props();
	let { movies }: { movies: any } = data;
	let featuredCurrentIndex = $state(0);
	const personalizedMovieMap = new Map(
		['Joker', 'Avatar: The Way of Water', 'Avengers: Infinity War', 'Barbie'].map((label) => [
			label,
			movies[label]
		])
	);
	let personalizedCurrentIndex = $state(0);
	const navMap = new Map([
		['Home', Home],
		['Favorites', Heart],
		['Tickets', Ticket],
		['Profile', UserCircle]
	]);
	let movieInfoIsVisible = $state(false);
	let movieInfo: { [key: string]: any } = $state({});
	let screenshotCurrentIndex = $state(0);

	// effects
	$effect(() => {
		console.log(movieInfo);
	});

	code.set(`<script lang="ts">
	import { DateTime } from 'luxon';
	import { A, Button, Card, Div, H4, H6, Icon, Img, Input, P } from 'sveltewind/components';
	import {
		AdjustmentsHorizontal,
		Bell,
		ChevronLeft,
		Heart,
		Home,
		MagnifyingGlass,
		Star,
		Ticket,
		UserCircle
	} from 'sveltewind/icons';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	// props
	let { data } = $props();
	let { movies }: { movies: any } = data;
	let featuredCurrentIndex = $state(0);
	const personalizedMovieMap = new Map(
		['Joker', 'Avatar: The Way of Water', 'Avengers: Infinity War', 'Barbie'].map((label) => [
			label,
			movies[label]
		])
	);
	let personalizedCurrentIndex = $state(0);
	const navMap = new Map([
		['Home', Home],
		['Favorites', Heart],
		['Tickets', Ticket],
		['Profile', UserCircle]
	]);
	let movieInfoIsVisible = $state(false);
	let movieInfo: { [key: string]: any } = $state({});
	let screenshotCurrentIndex = $state(0);
<\/script>

<Card
	class="relative aspect-[9/19.5] h-[600px] overflow-hidden rounded-[2.5rem] bg-slate-50 p-0 text-slate-950 ring-[2px] ring-white ring-offset-[.5rem] ring-offset-black selection:bg-[#FF4546] selection:text-white dark:bg-[#1E1F24] dark:text-slate-50"
>
	<Div class="absolute left-0 top-0 flex h-full w-full flex-col space-y-6 px-4 py-8">
		<Div class="flex items-center justify-between">
			<H4>Fandango<\/H4>
			<Button
				class="-mr-3 bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
			>
				<Icon src={Bell} />
			<\/Button>
		<\/Div>
		<Div class="relative flex">
			<Input
				class="flex-grow bg-slate-950/5 px-10 text-xs ring-offset-0 hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-[#FF4546] dark:bg-slate-50/[.025] dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-[#FF4546]"
				placeholder="Discover movies and showtimes..."
			/>
			<Icon class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" src={MagnifyingGlass} />
			<Button
				class="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-[#FF4546] dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-[#FF4546]"
			>
				<Icon class="h-4 w-4" src={AdjustmentsHorizontal} />
			<\/Button>
		<\/Div>
		<Div class="flex flex-col items-center space-y-4">
			<Div class="relative -mx-4 flex h-[100px] w-[calc(100%_+_2rem)] overflow-visible">
				{#each Object.keys(movies).filter((_, i) => i < 4) as movieKey, i}
					{@const translateX = \`calc(-50% + \${(i - featuredCurrentIndex) * 186}px)\`}
					{@const scale = featuredCurrentIndex === i ? '1' : '.85'}
					<Button
						class="absolute left-1/2 h-full w-[65%] overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
						onclick={() => {
							if (featuredCurrentIndex === i) {
								movieInfoIsVisible = true;
								movieInfo = movies[movieKey];
								return;
							}
							featuredCurrentIndex = i;
						}}
						style="transform: translateX({translateX}) scale({scale});"
					>
						<Img
							alt={movieKey}
							class="h-full w-full object-cover"
							src="http://image.tmdb.org/t/p/w500/{movies[movieKey].poster_path}"
						/>
					<\/Button>
				{/each}
			<\/Div>
			<Div class="flex space-x-1">
				{#each Object.keys(movies).filter((_, i) => i < 4) as _, i}
					<Button
						class={twMerge(
							'h-1 rounded-full px-0 py-0 ring-0',
							i === featuredCurrentIndex
								? 'w-4 bg-[#FF4546] hover:bg-[#FF4546] focus:bg-[#FF4546]'
								: 'w-2 bg-slate-950 hover:bg-slate-800 focus:bg-slate-800 dark:bg-slate-50 dark:hover:bg-slate-200 dark:focus:bg-slate-200'
						)}
						onclick={() => (featuredCurrentIndex = i)}
						tabindex="-1"
					/>
				{/each}
			<\/Div>
		<\/Div>
		<Div class="flex flex-col space-y-4">
			<Div class="flex items-center justify-between">
				<H6 class="font-medium">Personalized for you<\/H6>
				<A class="text-xs text-[#FF4546] shadow-[#FF4546] hover:text-[#FF4546]" href="#">View all<\/A
				>
			<\/Div>
			<Div class="relative -mx-4 flex h-[90px] w-[calc(100%_+_2rem)] overflow-visible">
				{#each Object.keys(movies).filter((_, i) => i < 8 && i > 3) as movieKey, i}
					{@const translateX = \`calc(1rem + \${(i - personalizedCurrentIndex) * 80}px)\`}
					<Button
						class="absolute left-0 aspect-[3/4] h-full overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
						onclick={() => {
							movieInfo = movies[movieKey];
							movieInfoIsVisible = true;
						}}
						style="transform: translateX({translateX})"
					>
						<Img
							alt={movieKey}
							class="h-full w-full object-cover"
							src="http://image.tmdb.org/t/p/w500/{movies[movieKey].poster_path}"
						/>
					<\/Button>
				{/each}
			<\/Div>
		<\/Div>
		<Div class="flex flex-col space-y-4">
			<H6 class="font-medium">Now streaming<\/H6>
			<Card
				class="max-h-[86px] flex-row overflow-hidden rounded-xl bg-slate-950/5 p-0 shadow-none ring-0 dark:bg-slate-50/[.025] dark:shadow-none"
			>
				<Img
					alt="Spider-Man"
					class="h-[86px]"
					src="http://image.tmdb.org/t/p/w500/{movies[Object.keys(movies)[8]].poster_path}"
				/>
				<Div class="flex max-h-full flex-col overflow-hidden p-4 text-[.625rem]">
					<Div>{movies[Object.keys(movies)[8]].original_title}<\/Div>
					<Div class="flex items-center space-x-1 text-yellow-500">
						{@const solidStarLength = Math.round(movies[Object.keys(movies)[8]].vote_average / 2)}
						{@const outlineStarLength = 5 - solidStarLength}
						{#each [...Array(solidStarLength)] as _}
							<Icon class="h-[.625rem] w-[.625rem]" src={Star} theme="solid" />
						{/each}
						{#each [...Array(outlineStarLength)] as _}
							<Icon class="h-[.625rem] w-[.625rem]" src={Star} />
						{/each}
						<Div
							>{new Intl.NumberFormat('en-us', { maximumFractionDigits: 1 }).format(
								movies[Object.keys(movies)[8]].vote_average
							)}<\/Div
						>
					<\/Div>
					<P class="flex-grow overflow-hidden text-[.5rem] opacity-70">
						{movies[Object.keys(movies)[8]].overview}
					<\/P>
				<\/Div>
			<\/Card>
		<\/Div>
		<Div class="absolute bottom-0 left-0 grid w-full grid-cols-4">
			{#each [...navMap] as [label, src], i}
				<Button
					class={twMerge(
						'flex flex-col items-center justify-center space-y-1 rounded-none bg-transparent px-0 py-3 text-[.625rem] font-medium shadow-none ring-0 hover:bg-transparent focus:bg-transparent',
						i === 0 ? 'text-[#FF4546]' : 'text-slate-950/70 dark:text-slate-50/70'
					)}
				>
					<Icon {src} theme="solid" />
					<Div>{label}<\/Div>
				<\/Button>
			{/each}
		<\/Div>
	<\/Div>
	<Div
		bind:isVisible={movieInfoIsVisible}
		class="absolute left-0 top-0 flex h-full w-full flex-col bg-slate-50 dark:bg-[#1E1F24]"
		transition={[fly, { duration: 1000, x: '100%' }]}
	>
		<Div class="flex flex-grow flex-col">
			<Img
				alt={movieInfo.original_title}
				class="h-[10rem] w-full object-cover"
				src="http://image.tmdb.org/t/p/w500/{movieInfo.backdrop_path}"
			/>
			<Div class="flex flex-grow flex-col space-y-6 p-4 pb-8">
				<Div class="flex space-x-4">
					<Img
						alt="Poster"
						class="-mt-16 aspect-[2/3] w-24 rounded-xl"
						src="http://image.tmdb.org/t/p/w500/{movieInfo.poster_path}"
					/>
					<Div class="flex flex-grow flex-col space-y-1 text-[.5rem]">
						<Div class="flex items-start justify-between">
							<H6 class="text-xs">{movieInfo.original_title}<\/H6>
							<Button
								class="rounded-full bg-slate-950/5 p-1 text-current hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-[#FF4546] dark:bg-slate-50/5 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10"
							>
								<Icon class="h-4 w-4" src={Heart} />
							<\/Button>
						<\/Div>
						<Div class="flex items-center space-x-2 text-yellow-500">
							<Icon class="h-[.625rem] w-[.625rem]" theme="solid" src={Star} />
							<Div>
								{new Intl.NumberFormat('en-us', { maximumFractionDigits: 1 }).format(
									movieInfo.vote_average
								)}
							<\/Div>
						<\/Div>
						<Div class="flex space-x-2">
							<Div>{DateTime.fromFormat(movieInfo.release_date, 'yyyy-MM-dd').toFormat('yyyy')}<\/Div
							>
						<\/Div>
					<\/Div>
				<\/Div>
				<Div class="flex flex-col space-y-2">
					<H6>Description<\/H6>
					<P class="max-h-[3.75em] overflow-hidden text-xs leading-[1.25em] opacity-70"
						>{movieInfo.overview}<\/P
					>
				<\/Div>
				<Div class="flex flex-col space-y-2">
					<H6>Screenshots<\/H6>
					<Div class="relative -mx-4 flex h-[60px] w-[calc(100%_+_2rem)] overflow-visible">
						{#each movieInfo.images.backdrops.filter((_: any, i: number) => i < 8 && i > 0) as backdrop, i}
							{@const translateX = \`calc(1rem + \${(i - screenshotCurrentIndex) * 125}px)\`}
							<Button
								class="absolute left-0 aspect-[3.5/2] h-full overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
								style="transform: translateX({translateX})"
							>
								<Img
									alt="Screenshot {i + 1}"
									class="h-full w-full object-cover"
									src="http://image.tmdb.org/t/p/w500/{backdrop.file_path}"
								/>
							<\/Button>
						{/each}
					<\/Div>
				<\/Div>
				<Div class="flex flex-col space-y-2">
					<H6>Cast<\/H6>
					<Div class="relative -mx-4 flex h-[60px] w-[calc(100%_+_2rem)] overflow-visible">
						{#each movieInfo.credits.cast as cast, i}
							{@const translateX = \`calc(1rem + \${i * 65}px)\`}
							<Button
								class="absolute left-0 flex max-w-[50px] flex-col items-center space-y-1 overflow-hidden bg-transparent p-0 font-medium text-current transition duration-200 hover:bg-transparent hover:ring-[#FF4546] focus:bg-transparent focus:ring-[#FF4546]"
								style="transform: translateX({translateX})"
							>
								<Img
									alt={cast.name}
									class="aspect-square h-full w-full rounded object-cover"
									src="http://image.tmdb.org/t/p/w500/{cast.profile_path}"
								/>
								<Div class="text-[.5rem] leading-[1em] opacity-70">{cast.name}<\/Div>
							<\/Button>
						{/each}
					<\/Div>
				<\/Div>
				<Button class="bg-[#FF4546] hover:bg-[#FF4546] focus:bg-[#FF4546] focus:ring-[#FF4546]">
					Book Your Seat
				<\/Button>
			<\/Div>
		<\/Div>
		<Button
			class="absolute left-4 top-8 rounded-full bg-slate-50 p-1 text-current hover:bg-slate-200 focus:bg-slate-200 focus:ring-[#FF4546] dark:bg-[#1E1F24] dark:hover:bg-slate-800 dark:focus:bg-slate-800"
			onclick={() => (movieInfoIsVisible = false)}
		>
			<Icon class="h-4 w-4" src={ChevronLeft} />
		<\/Button>
	<\/Div>
	<Div
		class="absolute left-1/2 top-2 flex aspect-[4/1] h-6 -translate-x-1/2 justify-end rounded-full bg-black p-1"
	>
		<Div class="aspect-square h-full rounded-full bg-[#10132E]" />
	<\/Div>
<\/Card>`);
	inspiration.set({
		href: 'https://dribbble.com/shots/21873803-Fandango-Ticketing-app-for-movie-theater',
		src: 'https://cdn.dribbble.com/userupload/8198763/file/original-b523c9efeccdff0d3cac3cb92c483202.jpg?resize=1024x768'
	});
</script>

<Card
	class="relative aspect-[9/19.5] h-[600px] overflow-hidden rounded-[2.5rem] bg-slate-50 p-0 text-slate-950 ring-[2px] ring-white ring-offset-[.5rem] ring-offset-black selection:bg-[#FF4546] selection:text-white dark:bg-[#1E1F24] dark:text-slate-50"
>
	<Div class="absolute left-0 top-0 flex h-full w-full flex-col space-y-6 px-4 py-8">
		<Div class="flex items-center justify-between">
			<H4>Fandango</H4>
			<Button
				class="-mr-3 bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
			>
				<Icon src={Bell} />
			</Button>
		</Div>
		<Div class="relative flex">
			<Input
				class="flex-grow bg-slate-950/5 px-10 text-xs ring-offset-0 hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-[#FF4546] dark:bg-slate-50/[.025] dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-[#FF4546]"
				placeholder="Discover movies and showtimes..."
			/>
			<Icon class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" src={MagnifyingGlass} />
			<Button
				class="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-[#FF4546] dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-[#FF4546]"
			>
				<Icon class="h-4 w-4" src={AdjustmentsHorizontal} />
			</Button>
		</Div>
		<Div class="flex flex-col items-center space-y-4">
			<Div class="relative -mx-4 flex h-[100px] w-[calc(100%_+_2rem)] overflow-visible">
				{#each Object.keys(movies).filter((_, i) => i < 4) as movieKey, i}
					{@const translateX = `calc(-50% + ${(i - featuredCurrentIndex) * 186}px)`}
					{@const scale = featuredCurrentIndex === i ? '1' : '.85'}
					<Button
						class="absolute left-1/2 h-full w-[65%] overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
						onclick={() => {
							if (featuredCurrentIndex === i) {
								movieInfoIsVisible = true;
								movieInfo = movies[movieKey];
								return;
							}
							featuredCurrentIndex = i;
						}}
						style="transform: translateX({translateX}) scale({scale});"
					>
						<Img
							alt={movieKey}
							class="h-full w-full object-cover"
							src="http://image.tmdb.org/t/p/w500/{movies[movieKey].poster_path}"
						/>
					</Button>
				{/each}
			</Div>
			<Div class="flex space-x-1">
				{#each Object.keys(movies).filter((_, i) => i < 4) as _, i}
					<Button
						class={twMerge(
							'h-1 rounded-full px-0 py-0 ring-0',
							i === featuredCurrentIndex
								? 'w-4 bg-[#FF4546] hover:bg-[#FF4546] focus:bg-[#FF4546]'
								: 'w-2 bg-slate-950 hover:bg-slate-800 focus:bg-slate-800 dark:bg-slate-50 dark:hover:bg-slate-200 dark:focus:bg-slate-200'
						)}
						onclick={() => (featuredCurrentIndex = i)}
						tabindex="-1"
					/>
				{/each}
			</Div>
		</Div>
		<Div class="flex flex-col space-y-4">
			<Div class="flex items-center justify-between">
				<H6 class="font-medium">Personalized for you</H6>
				<A class="text-xs text-[#FF4546] shadow-[#FF4546] hover:text-[#FF4546]" href="#">View all</A
				>
			</Div>
			<Div class="relative -mx-4 flex h-[90px] w-[calc(100%_+_2rem)] overflow-visible">
				{#each Object.keys(movies).filter((_, i) => i < 8 && i > 3) as movieKey, i}
					{@const translateX = `calc(1rem + ${(i - personalizedCurrentIndex) * 80}px)`}
					<Button
						class="absolute left-0 aspect-[3/4] h-full overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
						onclick={() => {
							movieInfo = movies[movieKey];
							movieInfoIsVisible = true;
						}}
						style="transform: translateX({translateX})"
					>
						<Img
							alt={movieKey}
							class="h-full w-full object-cover"
							src="http://image.tmdb.org/t/p/w500/{movies[movieKey].poster_path}"
						/>
					</Button>
				{/each}
			</Div>
		</Div>
		<Div class="flex flex-col space-y-4">
			<H6 class="font-medium">Now streaming</H6>
			<Card
				class="max-h-[86px] flex-row overflow-hidden rounded-xl bg-slate-950/5 p-0 shadow-none ring-0 dark:bg-slate-50/[.025] dark:shadow-none"
			>
				<Img
					alt="Spider-Man"
					class="h-[86px]"
					src="http://image.tmdb.org/t/p/w500/{movies[Object.keys(movies)[8]].poster_path}"
				/>
				<Div class="flex max-h-full flex-col overflow-hidden p-4 text-[.625rem]">
					<Div>{movies[Object.keys(movies)[8]].original_title}</Div>
					<Div class="flex items-center space-x-1 text-yellow-500">
						{@const solidStarLength = Math.round(movies[Object.keys(movies)[8]].vote_average / 2)}
						{@const outlineStarLength = 5 - solidStarLength}
						{#each [...Array(solidStarLength)] as _}
							<Icon class="h-[.625rem] w-[.625rem]" src={Star} theme="solid" />
						{/each}
						{#each [...Array(outlineStarLength)] as _}
							<Icon class="h-[.625rem] w-[.625rem]" src={Star} />
						{/each}
						<Div
							>{new Intl.NumberFormat('en-us', { maximumFractionDigits: 1 }).format(
								movies[Object.keys(movies)[8]].vote_average
							)}</Div
						>
					</Div>
					<P class="flex-grow overflow-hidden text-[.5rem] opacity-70">
						{movies[Object.keys(movies)[8]].overview}
					</P>
				</Div>
			</Card>
		</Div>
		<Div class="absolute bottom-0 left-0 grid w-full grid-cols-4">
			{#each [...navMap] as [label, src], i}
				<Button
					class={twMerge(
						'flex flex-col items-center justify-center space-y-1 rounded-none bg-transparent px-0 py-3 text-[.625rem] font-medium shadow-none ring-0 hover:bg-transparent focus:bg-transparent',
						i === 0 ? 'text-[#FF4546]' : 'text-slate-950/70 dark:text-slate-50/70'
					)}
				>
					<Icon {src} theme="solid" />
					<Div>{label}</Div>
				</Button>
			{/each}
		</Div>
	</Div>
	<Div
		bind:isVisible={movieInfoIsVisible}
		class="absolute left-0 top-0 flex h-full w-full flex-col bg-slate-50 dark:bg-[#1E1F24]"
		transition={[fly, { duration: 700, easing: cubicInOut, x: '100%' }]}
	>
		<Div class="flex flex-grow flex-col">
			<Img
				alt={movieInfo.original_title}
				class="h-[10rem] w-full object-cover"
				src="http://image.tmdb.org/t/p/w500/{movieInfo.backdrop_path}"
			/>
			<Div class="flex flex-grow flex-col space-y-6 p-4 pb-8">
				<Div class="flex space-x-4">
					<Img
						alt="Poster"
						class="-mt-16 aspect-[2/3] w-24 rounded-xl"
						src="http://image.tmdb.org/t/p/w500/{movieInfo.poster_path}"
					/>
					<Div class="flex flex-grow flex-col space-y-1 text-[.5rem]">
						<Div class="flex items-start justify-between">
							<H6 class="text-xs">{movieInfo.original_title}</H6>
							<Button
								class="rounded-full bg-slate-950/5 p-1 text-current hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-[#FF4546] dark:bg-slate-50/5 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10"
							>
								<Icon class="h-4 w-4" src={Heart} />
							</Button>
						</Div>
						<Div class="flex items-center space-x-2 text-yellow-500">
							<Icon class="h-[.625rem] w-[.625rem]" theme="solid" src={Star} />
							<Div>
								{new Intl.NumberFormat('en-us', { maximumFractionDigits: 1 }).format(
									movieInfo.vote_average
								)}
							</Div>
						</Div>
						<Div class="flex space-x-2">
							<Div>{DateTime.fromFormat(movieInfo.release_date, 'yyyy-MM-dd').toFormat('yyyy')}</Div
							>
						</Div>
					</Div>
				</Div>
				<Div class="flex flex-col space-y-2">
					<H6>Description</H6>
					<P class="max-h-[3.75em] overflow-hidden text-xs leading-[1.25em] opacity-70"
						>{movieInfo.overview}</P
					>
				</Div>
				<Div class="flex flex-col space-y-2">
					<H6>Screenshots</H6>
					<Div class="relative -mx-4 flex h-[60px] w-[calc(100%_+_2rem)] overflow-visible">
						{#each movieInfo.images.backdrops.filter((_: any, i: number) => i < 8 && i > 0) as backdrop, i}
							{@const translateX = `calc(1rem + ${(i - screenshotCurrentIndex) * 125}px)`}
							<Button
								class="absolute left-0 aspect-[3.5/2] h-full overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
								style="transform: translateX({translateX})"
							>
								<Img
									alt="Screenshot {i + 1}"
									class="h-full w-full object-cover"
									src="http://image.tmdb.org/t/p/w500/{backdrop.file_path}"
								/>
							</Button>
						{/each}
					</Div>
				</Div>
				<Div class="flex flex-col space-y-2">
					<H6>Cast</H6>
					<Div class="relative -mx-4 flex h-[60px] w-[calc(100%_+_2rem)] overflow-visible">
						{#each movieInfo.credits.cast as cast, i}
							{@const translateX = `calc(1rem + ${i * 65}px)`}
							<Button
								class="absolute left-0 flex max-w-[50px] flex-col items-center space-y-1 overflow-hidden bg-transparent p-0 font-medium text-current transition duration-200 hover:bg-transparent hover:ring-[#FF4546] focus:bg-transparent focus:ring-[#FF4546]"
								style="transform: translateX({translateX})"
							>
								<Img
									alt={cast.name}
									class="aspect-square h-full w-full rounded object-cover"
									src="http://image.tmdb.org/t/p/w500/{cast.profile_path}"
								/>
								<Div class="text-[.5rem] leading-[1em] opacity-70">{cast.name}</Div>
							</Button>
						{/each}
					</Div>
				</Div>
				<Button class="bg-[#FF4546] hover:bg-[#FF4546] focus:bg-[#FF4546] focus:ring-[#FF4546]">
					Book Your Seat
				</Button>
			</Div>
		</Div>
		<Button
			class="absolute left-4 top-8 rounded-full bg-slate-50 p-1 text-current hover:bg-slate-200 focus:bg-slate-200 focus:ring-[#FF4546] dark:bg-[#1E1F24] dark:hover:bg-slate-800 dark:focus:bg-slate-800"
			onclick={() => (movieInfoIsVisible = false)}
		>
			<Icon class="h-4 w-4" src={ChevronLeft} />
		</Button>
	</Div>
	<Div
		class="absolute left-1/2 top-2 flex aspect-[4/1] h-6 -translate-x-1/2 justify-end rounded-full bg-black p-1"
	>
		<Div class="aspect-square h-full rounded-full bg-[#10132E]" />
	</Div>
</Card>
