<script lang="ts">
	import { A, Button, Card, Div, H4, H6, Icon, Img, Input, P } from '$lib/components/index.js';
	import {
		AdjustmentsHorizontal,
		Bell,
		Heart,
		Home,
		MagnifyingGlass,
		Star,
		Ticket,
		UserCircle
	} from '$lib/icons/index.js';
	import { twMerge } from 'tailwind-merge';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';

	// props
	const movieMap = new Map([
		[
			'avatar',
			{ posterSrc: 'https://m.media-amazon.com/images/I/61n-olilSdL._AC_UF894,1000_QL80_.jpg' }
		],
		[
			'barbie',
			{
				mainSrc: 'https://stockeycentre.com/wp-content/uploads/2024/02/download.jpg',
				posterSrc:
					'https://www.movieposters.com/cdn/shop/files/scan_16fe9619-4324-433b-a1ae-acc0651122d2_480x.progressive.jpg?v=1696526753'
			}
		],
		[
			'oppenheimer',
			{
				mainSrc:
					'https://i.ytimg.com/vi/uYPbbksJxIg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLACA9IK0xYW9AGiLGNH4sIRPbLeLA'
			}
		],
		[
			'poor things',
			{
				mainSrc:
					'https://womendobusiness.eu/wp-content/uploads/poor-things-18-2024-142-mins-1090x625-1.jpg'
			}
		],
		['dune: part two', { mainSrc: 'https://i.ytimg.com/vi/syusOjpEl0w/maxresdefault.jpg' }],
		[
			'joker',
			{
				mainSrc:
					'https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg',
				posterSrc:
					'https://artofthemovies.co.uk/cdn/shop/files/IMG_7872_d1fd5fc9-12ae-4fb9-9397-f8e64368a6b0.jpg?v=1709635515'
			}
		],
		[
			'avengers: endgame',
			{
				posterSrc:
					'https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_480x.progressive.jpg?v=1573616089'
			}
		],
		[
			'spider-man: into the spider-verse',
			{
				posterSrc:
					'https://www.movieposters.com/cdn/shop/products/spiderverse.2ndadv.ar_480x.progressive.jpg?v=1605896972'
			}
		]
	]);
	const featuredMovieMap = new Map(
		['barbie', 'oppenheimer', 'poor things', 'dune: part two'].map((label) => [
			label,
			movieMap.get(label)
		])
	);
	let featuredCurrentIndex = 1;
	const personalizedMovieMap = new Map(
		['joker', 'avatar', 'avengers: endgame', 'barbie'].map((label) => [label, movieMap.get(label)])
	);
	let personalizedCurrentIndex = 0;
	const navMap = new Map([
		['Home', Home],
		['Favorites', Heart],
		['Tickets', Ticket],
		['Profile', UserCircle]
	]);

	code.set(`<script lang="ts">
	import { A, Button, Card, Div, H4, H6, Icon, Img, Input, P } from 'sveltewind/components';
	import {
		AdjustmentsHorizontal,
		Bell,
		Heart,
		Home,
		MagnifyingGlass,
		Star,
		Ticket,
		UserCircle
	} from 'sveltewind/icons';
	import { twMerge } from 'tailwind-merge';

	// props
	const movieMap = new Map([
		[
			'avatar',
			{ posterSrc: 'https://m.media-amazon.com/images/I/61n-olilSdL._AC_UF894,1000_QL80_.jpg' }
		],
		[
			'barbie',
			{
				mainSrc: 'https://stockeycentre.com/wp-content/uploads/2024/02/download.jpg',
				posterSrc:
					'https://www.movieposters.com/cdn/shop/files/scan_16fe9619-4324-433b-a1ae-acc0651122d2_480x.progressive.jpg?v=1696526753'
			}
		],
		[
			'oppenheimer',
			{
				mainSrc:
					'https://i.ytimg.com/vi/uYPbbksJxIg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLACA9IK0xYW9AGiLGNH4sIRPbLeLA'
			}
		],
		[
			'poor things',
			{
				mainSrc:
					'https://womendobusiness.eu/wp-content/uploads/poor-things-18-2024-142-mins-1090x625-1.jpg'
			}
		],
		['dune: part two', { mainSrc: 'https://i.ytimg.com/vi/syusOjpEl0w/maxresdefault.jpg' }],
		[
			'joker',
			{
				mainSrc:
					'https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg',
				posterSrc:
					'https://artofthemovies.co.uk/cdn/shop/files/IMG_7872_d1fd5fc9-12ae-4fb9-9397-f8e64368a6b0.jpg?v=1709635515'
			}
		],
		[
			'avengers: endgame',
			{
				posterSrc:
					'https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_480x.progressive.jpg?v=1573616089'
			}
		],
		[
			'spider-man: into the spider-verse',
			{
				posterSrc:
					'https://www.movieposters.com/cdn/shop/products/spiderverse.2ndadv.ar_480x.progressive.jpg?v=1605896972'
			}
		]
	]);
	const featuredMovieMap = new Map(
		['barbie', 'oppenheimer', 'poor things', 'dune: part two'].map((label) => [
			label,
			movieMap.get(label)
		])
	);
	let featuredCurrentIndex = 1;
	const personalizedMovieMap = new Map(
		['joker', 'avatar', 'avengers: endgame', 'barbie'].map((label) => [label, movieMap.get(label)])
	);
	let personalizedCurrentIndex = 0;
	const navMap = new Map([
		['Home', Home],
		['Favorites', Heart],
		['Tickets', Ticket],
		['Profile', UserCircle]
	]);
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
				class="flex-grow bg-slate-950/5 px-10 text-xs ring-offset-0 hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:bg-slate-50/[.025] dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-slate-50/30"
				placeholder="Discover movies and showtimes..."
			/>
			<Icon class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" src={MagnifyingGlass} />
			<Button
				class="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
			>
				<Icon class="h-4 w-4" src={AdjustmentsHorizontal} />
			<\/Button>
		<\/Div>
		<Div class="flex flex-col items-center space-y-4">
			<Div class="relative -mx-4 flex h-[100px] w-[calc(100%_+_2rem)] overflow-visible">
				{#each [...featuredMovieMap] as [label, { mainSrc }], i}
					{@const translateX = \`calc(-50% + \${(i - featuredCurrentIndex) * 186}px)\`}
					{@const scale = featuredCurrentIndex === i ? '1' : '.85'}
					<Button
						class="absolute left-1/2 h-full w-[65%] overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
						onclick={() => (featuredCurrentIndex = i)}
						style="transform: translateX({translateX}) scale({scale});"
					>
						<Img alt={label} class="h-full w-full object-cover" src={mainSrc} />
					<\/Button>
				{/each}
			<\/Div>
			<Div class="flex space-x-1">
				{#each [...featuredMovieMap] as _, i}
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
				{#each [...personalizedMovieMap] as [label, { posterSrc }], i}
					{@const translateX = \`calc(1rem + \${(i - personalizedCurrentIndex) * 80}px)\`}
					<Button
						class="absolute left-0 aspect-[3/4] h-full overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
						style="transform: translateX({translateX})"
					>
						<Img alt={label} class="h-full w-full object-cover" src={posterSrc} />
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
					src={movieMap.get('spider-man: into the spider-verse').posterSrc}
				/>
				<Div class="flex max-h-full flex-col overflow-hidden p-4 text-[.625rem]">
					<Div>Spider-Man: Into the Spider-Verse<\/Div>
					<Div class="flex items-center space-x-1 text-yellow-500">
						{#each [...Array(5)] as _}
							<Icon class="h-[.625rem] w-[.625rem]" src={Star} theme="solid" />
						{/each}
						<Div>8.9<\/Div>
					<\/Div>
					<P class="flex-grow overflow-hidden text-[.5rem] opacity-70"
						>Teen Miles Morales becomes the Spider-Man of his universe and must join with five
						spider-powered individuals from other dimensions to stop a threat for all realities.<\/P
					>
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
				class="flex-grow bg-slate-950/5 px-10 text-xs ring-offset-0 hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:bg-slate-50/[.025] dark:hover:bg-slate-50/5 dark:focus:bg-slate-50/5 dark:focus:ring-slate-50/30"
				placeholder="Discover movies and showtimes..."
			/>
			<Icon class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" src={MagnifyingGlass} />
			<Button
				class="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
			>
				<Icon class="h-4 w-4" src={AdjustmentsHorizontal} />
			</Button>
		</Div>
		<Div class="flex flex-col items-center space-y-4">
			<Div class="relative -mx-4 flex h-[100px] w-[calc(100%_+_2rem)] overflow-visible">
				{#each [...featuredMovieMap] as [label, { mainSrc }], i}
					{@const translateX = `calc(-50% + ${(i - featuredCurrentIndex) * 186}px)`}
					{@const scale = featuredCurrentIndex === i ? '1' : '.85'}
					<Button
						class="absolute left-1/2 h-full w-[65%] overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
						onclick={() => (featuredCurrentIndex = i)}
						style="transform: translateX({translateX}) scale({scale});"
					>
						<Img alt={label} class="h-full w-full object-cover" src={mainSrc} />
					</Button>
				{/each}
			</Div>
			<Div class="flex space-x-1">
				{#each [...featuredMovieMap] as _, i}
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
				{#each [...personalizedMovieMap] as [label, { posterSrc }], i}
					{@const translateX = `calc(1rem + ${(i - personalizedCurrentIndex) * 80}px)`}
					<Button
						class="absolute left-0 aspect-[3/4] h-full overflow-hidden rounded-xl object-contain p-0 transition duration-200 hover:ring-[#FF4546] focus:ring-[#FF4546]"
						style="transform: translateX({translateX})"
					>
						<Img alt={label} class="h-full w-full object-cover" src={posterSrc} />
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
					src={movieMap.get('spider-man: into the spider-verse').posterSrc}
				/>
				<Div class="flex max-h-full flex-col overflow-hidden p-4 text-[.625rem]">
					<Div>Spider-Man: Into the Spider-Verse</Div>
					<Div class="flex items-center space-x-1 text-yellow-500">
						{#each [...Array(5)] as _}
							<Icon class="h-[.625rem] w-[.625rem]" src={Star} theme="solid" />
						{/each}
						<Div>8.9</Div>
					</Div>
					<P class="flex-grow overflow-hidden text-[.5rem] opacity-70"
						>Teen Miles Morales becomes the Spider-Man of his universe and must join with five
						spider-powered individuals from other dimensions to stop a threat for all realities.</P
					>
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
		class="absolute left-1/2 top-2 flex aspect-[4/1] h-6 -translate-x-1/2 justify-end rounded-full bg-black p-1"
	>
		<Div class="aspect-square h-full rounded-full bg-[#10132E]" />
	</Div>
</Card>
