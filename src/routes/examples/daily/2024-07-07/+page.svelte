<script lang="ts">
	import { Card, Div, H1, H6, Icon, Img, P } from '$lib/components/index.js';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';
	import { Check } from '$lib/icons/index.js';

	// props
	let avatars = $state([
		'https://cdn.dribbble.com/users/291108/avatars/normal/28d4c7aacc2951e84cfb8f539120b229.png?1589222309',
		'https://cdn.dribbble.com/users/1909942/avatars/normal/47671d42f5846b3b34dc8d6b8e150290.jpg?1548755876'
	]);

	code.set(`<script lang="ts">
	import { Card, Div, H1, H6, Icon, Img, P } from 'sveltewind/components';
	import { Check } from 'sveltewind/icons';

	// props
	let avatars = $state([
		'https://cdn.dribbble.com/users/291108/avatars/normal/28d4c7aacc2951e84cfb8f539120b229.png?1589222309',
		'https://cdn.dribbble.com/users/1909942/avatars/normal/47671d42f5846b3b34dc8d6b8e150290.jpg?1548755876'
	]);
<\/script>

<Card class="max-w-md items-center bg-slate-50 px-12 py-20 ring-0 dark:bg-slate-950">
	<H1 class="text-center leading-[1.25em]">Job Match-<br />Making<\/H1>
	<P class="mt-8 lg:text-lg">
		This is the thrid article of a three-part series. I'm illustrating the marketing challenges of
		PrescottWeddings.com, a small business. If you don't
	<\/P>
	<Card class="relative mt-24 bg-white px-12 py-8 ring-0 dark:bg-slate-900">
		<H6 class="text-center text-emerald-500 dark:text-emerald-500">You're a match!<\/H6>
		<Div class="mt-8 flex items-center justify-between space-x-4">
			<Img
				alt="Match From"
				class="aspect-square w-8 rounded-full object-cover lg:w-14"
				src={avatars[0]}
			/>
			<Div class="flex whitespace-nowrap font-bold leading-4 text-purple-500">
				- - - - - -<br />
				- - - - - -
			<\/Div>
			<Img
				alt="Match From"
				class="aspect-square w-8 rounded-full object-cover lg:w-14"
				src={avatars[1]}
			/>
		<\/Div>
		<Div
			class="absolute right-4 top-4 aspect-square -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-500 p-4 text-white"
		>
			<Icon class="h-8 w-8" src={Check} />
		<\/Div>
	<\/Card>
<\/Card>
`);
	inspiration.set({
		href: 'https://dribbble.com/shots/15551783-Switch',
		src: 'https://cdn.dribbble.com/users/291108/screenshots/15551783/media/01606bbc57b4f711105377884a2131fc.png?resize=1000x750&vertical=center'
	});
</script>

<Card class="max-w-md items-center bg-slate-50 px-12 py-20 ring-0 dark:bg-slate-950">
	<H1 class="text-center leading-[1.25em]">Job Match-<br />Making</H1>
	<P class="mt-8 lg:text-lg">
		This is the thrid article of a three-part series. I'm illustrating the marketing challenges of
		PrescottWeddings.com, a small business. If you don't
	</P>
	<Card class="relative mt-24 bg-white px-12 py-8 ring-0 dark:bg-slate-900">
		<H6 class="text-center text-emerald-500 dark:text-emerald-500">You're a match!</H6>
		<Div class="mt-8 flex items-center justify-between space-x-4">
			<Img
				alt="Match From"
				class="aspect-square w-8 rounded-full object-cover lg:w-14"
				src={avatars[0]}
			/>
			<Div class="flex whitespace-nowrap font-bold leading-4 text-purple-500">
				- - - - - -<br />
				- - - - - -
			</Div>
			<Img
				alt="Match From"
				class="aspect-square w-8 rounded-full object-cover lg:w-14"
				src={avatars[1]}
			/>
		</Div>
		<Div
			class="absolute right-4 top-4 aspect-square -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-500 p-4 text-white"
		>
			<Icon class="h-8 w-8" src={Check} />
		</Div>
	</Card>
</Card>
