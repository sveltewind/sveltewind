<script lang="ts">
	import { Alert, Badge, Button, Card, Div, H2, Label, P, Progress, Radio } from '$lib/components';
	const uid = $props.id();
	const questions = [
		{
			text: 'Which element is appropriate for an action?',
			options: ['A button', 'A styled paragraph', 'An empty span'],
			correct: 'A button',
			explanation:
				'A native button provides keyboard activation and communicates its purpose to assistive technology.'
		},
		{
			text: 'What should a form field have?',
			options: ['Only a placeholder', 'A descriptive label', 'A random identifier'],
			correct: 'A descriptive label',
			explanation:
				'A descriptive label remains available after typing and gives the control an accessible name.'
		},
		{
			text: 'How should you present an icon-only control?',
			options: ['Without text', 'With an accessible name', 'With a larger icon only'],
			correct: 'With an accessible name',
			explanation: 'Give an icon-only control an accessible name that describes its action.'
		}
	];
	let index = $state(0);
	let choice = $state('');
	let checked = $state(false);
	let finished = $state(false);
	let answers = $state<boolean[]>([]);
	const question = $derived(questions[index]);
	const score = $derived(answers.filter(Boolean).length);
	function check() {
		if (!choice) return;
		answers[index] = choice === question.correct;
		checked = true;
	}
	function next() {
		if (index === questions.length - 1) finished = true;
		else index++;
		choice = '';
		checked = false;
	}
	function restart() {
		index = 0;
		choice = '';
		checked = false;
		finished = false;
		answers = [];
	}
</script>

<Card class="mx-auto max-w-xl space-y-5">
	<Badge>Interface fundamentals</Badge>
	<H2 class="text-2xl font-semibold">A quick knowledge check</H2>
	{#if finished}
		<P class="text-5xl font-semibold">{score} / {questions.length}</P>
		<P>You’ve completed the quiz. Review your answers below.</P>
		{#each questions as item, i}
			<Div class="rounded-lg bg-primary-500/5 p-3">
				<P class="text-sm font-medium">{answers[i] ? '✓' : '○'} {item.text}</P>
				<P class="mt-1 text-xs">{item.correct}</P>
			</Div>
		{/each}
		<Button type="button" onclick={restart}>Try again</Button>
	{:else}
		<Div class="flex justify-between">
			<P class="text-xs">Question {index + 1} of {questions.length}</P>
			<P class="text-xs">{score} correct</P>
		</Div>
		<Progress
			aria-label="Quiz progress"
			value={index + Number(checked)}
			max={questions.length}
			class="w-full"
		/>
		<P class="text-xl font-medium">{question.text}</P>
		<Div class="space-y-3">
			{#each question.options as option}
				<Label
					class="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
				>
					<Radio name={uid + index} bind:group={choice} value={option} disabled={checked} />
					{option}
				</Label>
			{/each}
		</Div>
		{#if checked}
			<Alert role="status" variants={answers[index] ? ['success'] : ['info']}>
				<P class="font-semibold text-inherit">
					{answers[index] ? 'Correct.' : 'Let’s review this one.'}
				</P>
				<P class="mt-2 text-sm text-inherit">{question.explanation}</P>
			</Alert>
			<Button type="button" onclick={next}>
				{index === questions.length - 1 ? 'See results' : 'Next question'}
			</Button>
		{:else}
			<Button type="button" disabled={!choice} onclick={check}>Check answer</Button>
		{/if}
	{/if}
</Card>
