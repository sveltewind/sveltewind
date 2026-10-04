<script lang="ts">
	import { Div, Carousel, Card, Badge, H3 } from '$lib/components';
	let {
		documentationExample = 'default'
	}: { documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content' } = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	{#snippet firstSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/5">
			<Badge>One</Badge>
			<H3 class="mt-3 text-lg">Start with a component.</H3>
		</Card>
	{/snippet}
	{#snippet secondSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/10">
			<Badge>Two</Badge>
			<H3 class="mt-3 text-lg">Make it your own.</H3>
		</Card>
	{/snippet}
	{#snippet thirdSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/15">
			<Badge>Three</Badge>
			<H3 class="mt-3 text-lg">Share your styles.</H3>
		</Card>
	{/snippet}

	<Div class="w-full min-w-0">
		<Carousel
			label="Example cards"
			slides={[
				{ content: firstSlide, id: 'first', label: 'First card' },
				{ content: secondSlide, id: 'second', label: 'Second card' },
				{ content: thirdSlide, id: 'third', label: 'Third card' }
			]}
		/>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Use the compact variant from the component theme."} -->
	{#snippet firstSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/5">
			<Badge>One</Badge>
			<H3 class="mt-3 text-lg">Start with a component.</H3>
		</Card>
	{/snippet}
	{#snippet secondSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/10">
			<Badge>Two</Badge>
			<H3 class="mt-3 text-lg">Make it your own.</H3>
		</Card>
	{/snippet}
	{#snippet thirdSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/15">
			<Badge>Three</Badge>
			<H3 class="mt-3 text-lg">Share your styles.</H3>
		</Card>
	{/snippet}

	<Div class="w-full min-w-0">
		<Carousel
			variants={['compact']}
			label="Example cards"
			slides={[
				{ content: firstSlide, id: 'first', label: 'First card' },
				{ content: secondSlide, id: 'second', label: 'Second card' },
				{ content: thirdSlide, id: 'third', label: 'Third card' }
			]}
		/>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	{#snippet firstSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/5">
			<Badge>One</Badge>
			<H3 class="mt-3 text-lg">Start with a component.</H3>
		</Card>
	{/snippet}
	{#snippet secondSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/10">
			<Badge>Two</Badge>
			<H3 class="mt-3 text-lg">Make it your own.</H3>
		</Card>
	{/snippet}
	{#snippet thirdSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/15">
			<Badge>Three</Badge>
			<H3 class="mt-3 text-lg">Share your styles.</H3>
		</Card>
	{/snippet}

	<Div class="w-full min-w-0">
		<Carousel
			class="rounded-xl border border-primary-500/40 p-4"
			label="Example cards"
			slides={[
				{ content: firstSlide, id: 'first', label: 'First card' },
				{ content: secondSlide, id: 'second', label: 'Second card' },
				{ content: thirdSlide, id: 'third', label: 'Third card' }
			]}
		/>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change showIndicators while retaining the default component styling."} -->
	{#snippet firstSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/5">
			<Badge>One</Badge>
			<H3 class="mt-3 text-lg">Start with a component.</H3>
		</Card>
	{/snippet}
	{#snippet secondSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/10">
			<Badge>Two</Badge>
			<H3 class="mt-3 text-lg">Make it your own.</H3>
		</Card>
	{/snippet}
	{#snippet thirdSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/15">
			<Badge>Three</Badge>
			<H3 class="mt-3 text-lg">Share your styles.</H3>
		</Card>
	{/snippet}

	<Div class="w-full min-w-0">
		<Carousel
			showIndicators={false}
			label="Example cards"
			slides={[
				{ content: firstSlide, id: 'first', label: 'First card' },
				{ content: secondSlide, id: 'second', label: 'Second card' },
				{ content: thirdSlide, id: 'third', label: 'Third card' }
			]}
		/>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	{#snippet firstSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/5">
			<Badge>A new project</Badge>
			<H3 class="mt-3 text-lg">Start with a component.</H3>
		</Card>
	{/snippet}
	{#snippet secondSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/10">
			<Badge>Two</Badge>
			<H3 class="mt-3 text-lg">Make it your own.</H3>
		</Card>
	{/snippet}
	{#snippet thirdSlide()}
		<Card class="flex min-h-32 flex-col justify-center bg-primary-500/15">
			<Badge>Three</Badge>
			<H3 class="mt-3 text-lg">Share your styles.</H3>
		</Card>
	{/snippet}

	<Div class="w-full min-w-0">
		<Carousel
			label="Example cards"
			slides={[
				{ content: firstSlide, id: 'first', label: 'First card' },
				{ content: secondSlide, id: 'second', label: 'Second card' },
				{ content: thirdSlide, id: 'third', label: 'Third card' }
			]}
		/>
	</Div>
{/if}
