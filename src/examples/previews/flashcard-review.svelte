<script lang="ts">
	import { Badge, Button, Card, Div, H2, P, Progress } from '$lib/components';
	const cards = [
		{
			question: 'What does a label provide?',
			answer: 'An accessible name and a persistent description of a form control.'
		},
		{
			question: 'When should you use a link?',
			answer: 'When the interaction navigates to a destination.'
		},
		{
			question: 'What does aria-expanded communicate?',
			answer: 'Whether the associated expandable content is currently open.'
		},
		{
			question: 'Why honor reduced motion?',
			answer: 'It lets people use their device preference to limit unnecessary animation.'
		}
	];
	let queue = $state(cards.map((_, i) => i));
	let index = $state(0);
	let revealed = $state(false);
	let finished = $state(false);
	let status = $state(['', '', '', '']);
	const card = $derived(cards[queue[index]]);
	const remembered = $derived(status.filter((value) => value === 'known').length);
	const again = $derived(status.filter((value) => value === 'again').length);
	function grade(value: string) {
		status[queue[index]] = value;
		if (index === queue.length - 1) finished = true;
		else index++;
		revealed = false;
	}
	function review(all: boolean) {
		queue = cards.map((_, i) => i).filter((i) => all || status[i] === 'again');
		if (all) status = ['', '', '', ''];
		index = 0;
		revealed = false;
		finished = false;
	}
</script>

<Div class="mx-auto w-full max-w-xl space-y-5"
	><Div class="flex items-center justify-between"
		><H2 class="text-2xl font-semibold">Study deck</H2><Badge>{remembered} remembered</Badge></Div
	>{#if finished}<Card class="space-y-5 py-10 text-center"
			><P class="text-4xl font-semibold">Session complete</P><P
				>{remembered} of {cards.length} cards remembered. {again} need more practice.</P
			><Div class="flex flex-wrap justify-center gap-3"
				>{#if again}<Button type="button" onclick={() => review(false)}>Review missed cards</Button
					>{/if}<Button type="button" variants={['outline']} onclick={() => review(true)}
					>Start a new session</Button
				></Div
			></Card
		>{:else}<Progress
			aria-label="Study session progress"
			value={index}
			max={queue.length}
			class="w-full"
		/><Card
			class="flex min-h-64 flex-col items-center justify-center gap-6 bg-primary-500/5 p-8 text-center"
			><Badge>{revealed ? 'Answer' : 'Question'} · {index + 1} / {queue.length}</Badge><P
				class="text-2xl leading-relaxed font-medium">{revealed ? card.answer : card.question}</P
			><Button
				type="button"
				variants={['outline']}
				aria-pressed={revealed}
				onclick={() => (revealed = !revealed)}
				>{revealed ? 'Show question' : 'Reveal answer'}</Button
			></Card
		><Div class="grid grid-cols-2 gap-3"
			><Button
				type="button"
				variants={['outline']}
				disabled={!revealed}
				onclick={() => grade('again')}>Need more practice</Button
			><Button type="button" disabled={!revealed} onclick={() => grade('known')}>Remembered</Button
			></Div
		>{/if}</Div
>
