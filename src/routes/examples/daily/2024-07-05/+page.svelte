<script lang="ts">
	import { Button, Card, Div, H4, Icon, Img, P, Radio, Textarea } from '$lib/components/index.js';
	import { XMark } from '$lib/icons/index.js';
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';

	// props
	let rating = $state(3);
	let ratings = [
		'https://em-content.zobj.net/source/apple/391/worried-face_1f61f.png',
		'https://em-content.zobj.net/source/apple/391/slightly-frowning-face_1f641.png',
		'https://em-content.zobj.net/source/apple/391/neutral-face_1f610.png',
		'https://em-content.zobj.net/source/apple/391/slightly-smiling-face_1f642.png',
		'https://em-content.zobj.net/source/apple/391/smiling-face-with-heart-eyes_1f60d.png'
	].map((src, value) => ({ src, value }));

	onMount(() => {
		{
			code.set(`<script lang="ts">
	import { Button, Card, Div, H4, Icon, Img, P, Radio, Textarea } from 'sveltewind/components';
	import { XMark } from 'sveltewind/icons';
	import { twMerge } from 'tailwind-merge';

	// props
	let rating = $state(3);
	let ratings = [
		'https://em-content.zobj.net/source/apple/391/worried-face_1f61f.png',
		'https://em-content.zobj.net/source/apple/391/slightly-frowning-face_1f641.png',
		'https://em-content.zobj.net/source/apple/391/neutral-face_1f610.png',
		'https://em-content.zobj.net/source/apple/391/slightly-smiling-face_1f642.png',
		'https://em-content.zobj.net/source/apple/391/smiling-face-with-heart-eyes_1f60d.png'
	].map((src, value) => ({ src, value }));
<\/script>

<Card class="max-w-xl divide-y divide-slate-950/10 p-0 dark:divide-slate-50/10">
	<Div class="flex items-center justify-between space-x-4 px-8 py-6">
		<H4>Rate your experience<\/H4>
		<Button
			class="bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
		>
			<Icon src={XMark} />
		<\/Button>
	<\/Div>
	<Div class="flex flex-col space-y-8 px-8 py-6">
		<P>
			We value your insights. Can you tell us about your experience with the product's performance?
		<\/P>
		<Div class="flex justify-between space-x-1">
			{#each ratings as { src, value }}
				<Radio bind:group={rating} {value}>
					{#snippet handle()}
						<Div
							class={twMerge(
								'pg:p-4 aspect-square rounded-full bg-sky-500/10 p-2 transition duration-200',
								rating === value ? '' : 'grayscale hover:grayscale-[75%]'
							)}
						>
							<Img alt={src} class="w-16" {src} />
						<\/Div>
					{/snippet}
				<\/Radio>
			{/each}
		<\/Div>
		<Textarea class="min-h-[6rem] resize-none" placeholder="Tell us your story" />
	<\/Div>
	<Div class="flex justify-end space-x-1 px-8 py-6">
		<Button
			class="bg-transparent shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
		>
			Cancel
		<\/Button>
		<Button
			class="bg-slate-950 text-slate-50 shadow-none hover:bg-slate-700 focus:bg-slate-700 focus:ring-slate-950/30 dark:invert"
		>
			Submit feedback
		<\/Button>
	<\/Div>
<\/Card>`);
			inspiration.set({
				href: 'https://dribbble.com/shots/24464565-User-Feedback',
				src: 'https://cdn.dribbble.com/userupload/15430667/file/original-2e68b3016c057d5327f10844f2aec61a.png?resize=1024x768'
			});
		}
	});
</script>

<Card class="max-w-xl divide-y divide-slate-950/10 p-0 dark:divide-slate-50/10">
	<Div class="flex items-center justify-between space-x-4 px-8 py-6">
		<H4>Rate your experience</H4>
		<Button
			class="bg-transparent px-3 shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
		>
			<Icon src={XMark} />
		</Button>
	</Div>
	<Div class="flex flex-col space-y-8 px-8 py-6">
		<P>
			We value your insights. Can you tell us about your experience with the product's performance?
		</P>
		<Div class="flex justify-between space-x-1">
			{#each ratings as { src, value }}
				<Radio bind:group={rating} {value}>
					{#snippet handle()}
						<Div
							class={twMerge(
								'pg:p-4 aspect-square rounded-full bg-sky-500/10 p-2 transition duration-200',
								rating === value ? '' : 'grayscale hover:grayscale-[75%]'
							)}
						>
							<Img alt={src} class="w-16" {src} />
						</Div>
					{/snippet}
				</Radio>
			{/each}
		</Div>
		<Textarea class="min-h-[6rem] resize-none" placeholder="Tell us your story" />
	</Div>
	<Div class="flex justify-end space-x-1 px-8 py-6">
		<Button
			class="bg-transparent shadow-none hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
		>
			Cancel
		</Button>
		<Button
			class="bg-slate-950 text-slate-50 shadow-none hover:bg-slate-700 focus:bg-slate-700 focus:ring-slate-950/30 dark:invert"
		>
			Submit feedback
		</Button>
	</Div>
</Card>
