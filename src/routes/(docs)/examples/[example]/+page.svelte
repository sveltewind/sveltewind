<script lang="ts">
	import {
		A,
		Badge,
		Button,
		Card,
		Div,
		DocsSection,
		H1,
		H2,
		H3,
		P,
		Shiki,
		Span
	} from '$components';
	import { ArrowLeft, ArrowRight, Check, Copy } from '$lib/icons';
	import ExampleThumbnail from '$components/ExampleThumbnail/ExampleThumbnail.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	let revision = $state(0);
	let copied = $state(false);
	let copyError = $state('');
	let narrow = $state(false);
	$effect(() => {
		data.example.id;
		revision = 0;
		copied = false;
		copyError = '';
	});
	async function copy() {
		try {
			await navigator.clipboard.writeText(data.source);
			copied = true;
			copyError = '';
		} catch {
			copyError = 'Copy is unavailable. Select the code below to copy it.';
		}
	}
</script>

<svelte:head
	><meta
		name="description"
		content={`${data.example.title}: ${data.example.description} Try the interactive preview and copy its Svelte 5 source.`}
	/></svelte:head
>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<A
		href={`/examples?category=${data.example.kind}`}
		variants={['ghost']}
		class="inline-flex items-center gap-2 text-sm"
		><ArrowLeft class="size-4" aria-hidden="true" />{data.example.category}</A
	>
	<Div class="flex flex-wrap gap-2"
		>{#each data.example.components as component}<Badge>{component}</Badge>{/each}</Div
	>
	<H1>{data.example.title}</H1><P>{data.example.description}</P><P class="text-sm"
		>Try the controls below. This is a standalone browser demo; submissions and account actions show
		local feedback.</P
	>
</DocsSection>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<Div class="flex flex-wrap items-center justify-between gap-3"
		><H2>Live preview</H2><Div class="flex flex-wrap gap-2"
			><Button
				type="button"
				variants={['ghost']}
				aria-pressed={narrow}
				onclick={() => (narrow = !narrow)}>{narrow ? 'Full width' : 'Narrow preview'}</Button
			><Button type="button" variants={['outline']} onclick={() => revision++}>Reset preview</Button
			></Div
		></Div
	>
	<Card class="min-w-0 overflow-hidden bg-gray-100/50 p-4 sm:p-8 dark:bg-gray-900/50"
		><Div
			data-example-preview
			class={`mx-auto w-full transition-[max-width] ${narrow ? 'max-w-sm' : 'max-w-full'}`}
			>{#key data.example.id + ':' + revision}<data.Preview />{/key}</Div
		></Card
	>
</DocsSection>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<Div class="flex flex-wrap items-center justify-between gap-3"
		><H2>Svelte source</H2><Button
			type="button"
			variants={['outline']}
			class="inline-flex items-center gap-2"
			onclick={copy}
			>{#if copied}<Check class="size-4" aria-hidden="true" />Copied{:else}<Copy
					class="size-4"
					aria-hidden="true"
				/>Copy code{/if}</Button
		></Div
	>
	<P class="text-sm"
		>Install Sveltewind and its palette stylesheet using the <A href="/getting-started/installation"
			>installation guide</A
		>, then paste this into a Svelte 5 component. The source below renders the preview above.</P
	>
	{#if copyError}<P role="status" class="text-sm">{copyError}</P>{/if}
	<Card class="min-w-0 overflow-hidden p-0"
		><Shiki
			code={data.source}
			options={{ lang: 'svelte' }}
			class="max-h-[44rem] overflow-auto p-4 text-xs sm:p-6 [&_code]:bg-transparent [&_code]:p-0"
		/></Card
	>
</DocsSection>

<DocsSection class="last-of-type:flex md:last-of-type:flex">
	<H2>More in {data.example.category}</H2><Div class="grid gap-4 sm:grid-cols-2"
		>{#each data.related as example}<Card
				class="relative h-full overflow-hidden p-0 focus-within:inset-ring-primary-500/50 hover:shadow-lg"
				><ExampleThumbnail id={example.id} /><Div
					class="flex items-center justify-between gap-3 p-4"
					><H3 class="text-sm font-semibold"
						><A
							href={`/examples/${example.id}`}
							variants={['ghost']}
							class="text-inherit no-underline after:absolute after:inset-0 after:z-10 hover:text-inherit focus-visible:after:inset-ring-2 focus-visible:after:inset-ring-primary-500"
							>{example.title}</A
						></H3
					><ArrowRight class="size-4 shrink-0" aria-hidden="true" /></Div
				></Card
			>{/each}</Div
	><A href="/examples" class="inline-flex items-center gap-2"
		>Browse all examples <ArrowRight class="size-4" /></A
	>
</DocsSection>
