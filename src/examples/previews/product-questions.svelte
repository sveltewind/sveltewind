<script lang="ts">
	import { Card, H2, Input, Accordion, P } from '$lib/components';
	const questions = ['How do I get started?', 'Can I change my plan?', 'Where can I find help?'];
	let query = $state('');
	const answers = [
		'Create a workspace, choose a project template, and invite your team.',
		'You can change plans from Billing. Review the new price before confirming.',
		'Open Help from your workspace to find guides and contact support.'
	];
	const filtered = $derived(
		questions
			.map((question, i) => ({ question, answer: answers[i] }))
			.filter((item) => item.question.toLowerCase().includes(query.toLowerCase()))
	);
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5"
	><H2 class="text-2xl font-semibold">Product questions</H2><Input
		aria-label="Search questions"
		placeholder="Search questions..."
		bind:value={query}
		class="w-full"
	/>
	{#each filtered as item}<Accordion summary={item.question}
			><P class="text-sm leading-relaxed">{item.answer}</P></Accordion
		>{/each}{#if !filtered.length}<P role="status">No questions match your search.</P>{/if}</Card
>
