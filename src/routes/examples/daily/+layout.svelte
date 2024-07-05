<script lang="ts">
	import { A, Button, Code } from '$components/index.js';
	import { Card, Div } from '$lib/components/index.js';
	import { twMerge } from 'tailwind-merge';
	import code from './code.svelte.js';
	import inspiration from './inspiration.svelte.js';

	// props
	let { children } = $props();
	let tab = $state('result');
</script>

<Div class="flex flex-grow overflow-auto p-4">
	<Card class="max-w-full flex-grow overflow-visible p-0">
		<div class="flex justify-start space-x-[1px]">
			<Button
				class={twMerge(
					'rounded-b-none',
					tab === 'code'
						? undefined
						: 'bg-slate-100 text-current hover:bg-slate-300 focus:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700 dark:focus:bg-slate-700'
				)}
				onclick={() => (tab = 'code')}>Code</Button
			>
			<Button
				class={twMerge(
					'rounded-b-none',
					tab === 'inspiration'
						? undefined
						: 'bg-slate-100 text-current hover:bg-slate-300 focus:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700 dark:focus:bg-slate-700'
				)}
				onclick={() => (tab = 'inspiration')}>Inspiration</Button
			>
			<Button
				class={twMerge(
					'rounded-b-none',
					tab === 'result'
						? undefined
						: 'bg-slate-100 text-current hover:bg-slate-300 focus:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700 dark:focus:bg-slate-700'
				)}
				onclick={() => (tab = 'result')}>Result</Button
			>
		</div>
		<Card class="max-w-full flex-grow overflow-auto">
			{#if tab === 'code'}
				<Code
					class="overflow-auto"
					code={code.get()}
					filename="+page.svelte"
					isVisible={true}
					options={{ lang: 'svelte' }}
				/>
			{:else if tab === 'inspiration'}
				<A
					class="flex flex-grow overflow-auto shadow-none hover:shadow-none"
					href={inspiration.href()}
					target="_blank"
				>
					<img
						alt={inspiration.href()}
						class="mx-auto object-contain object-center"
						src={inspiration.src()}
					/>
				</A>
			{:else if tab === 'result'}
				<Div class="flex flex-grow items-center justify-center overflow-visible">
					{#if children}
						{@render children()}
					{/if}
				</Div>
			{/if}
		</Card>
	</Card>
</Div>
