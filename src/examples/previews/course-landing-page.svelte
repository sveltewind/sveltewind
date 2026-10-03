<script lang="ts">
	import {
		A,
		Accordion,
		Alert,
		Avatar,
		Badge,
		Button,
		Card,
		Div,
		H2,
		H3,
		P,
		Progress,
		Section
	} from '$lib/components';
	const uid = $props.id();
	let lesson = $state(0);
	let enrolled = $state(false);
	let completed = $state<boolean[]>([false, false, false]);
	const lessons = [
		{
			title: 'Start with the user',
			length: '12 min',
			body: 'Before drawing a screen, describe the task someone wants to complete. List the information they need and the decisions they must make. A clear task is a stronger starting point than a collection of visual references.'
		},
		{
			title: 'Build a visual hierarchy',
			length: '18 min',
			body: 'Choose the most important information on the screen. Make it easy to find through size, spacing, and placement. Use supporting text to provide context without competing with the main action.'
		},
		{
			title: 'Design for real conditions',
			length: '16 min',
			body: 'Try long names, empty data, keyboard navigation, and a narrow screen. Include loading and error states. A useful interface keeps working when the content and environment change.'
		}
	];
	const done = $derived(completed.filter(Boolean).length);
</script>

<Div
	class="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
>
	<Div
		class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-6 dark:border-gray-800"
	>
		<P class="text-xl font-bold">Practice School</P>
		<Div class="flex gap-4 text-sm">
			<A href={'#' + uid + '-curriculum'}>Curriculum</A>
			<A href={'#' + uid + '-instructor'}>Instructor</A>
			<A href={'#' + uid + '-enroll'}>Enroll</A>
		</Div>
	</Div>

	<Section class="grid items-center gap-8 bg-primary-500/5 p-6 sm:p-10 md:grid-cols-[1.4fr_1fr]">
		<Div>
			<Badge>Self-paced · Beginner friendly</Badge>
			<H2 class="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
				Make interfaces
				<br />
				people can use.
			</H2>
			<P class="mt-5 max-w-lg">
				Learn a practical approach to product design, from understanding a task to building a clear,
				accessible screen.
			</P>
			<A href={'#' + uid + '-curriculum'} variants={['button.base']} class="mt-6 inline-flex">
				Try a free lesson
			</A>
			<P class="mt-4 text-xs">Three sample lessons · Exercises included</P>
		</Div>
		<Card class="space-y-5">
			<P class="text-xs tracking-widest uppercase">Your learning path</P>
			{#each ['Understand the task', 'Create a clear hierarchy', 'Test the real experience'] as title, i}
				<Div class="flex items-center gap-4">
					<span
						class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-500"
					>
						{i + 1}
					</span>
					<P class="font-medium">{title}</P>
				</Div>
			{/each}
		</Card>
	</Section>

	<Section id={uid + '-curriculum'} class="p-6 sm:p-10">
		<Div class="flex flex-wrap items-center justify-between gap-4">
			<H3 class="text-3xl font-semibold">Learn by doing.</H3>
			<Badge>{done} / {lessons.length} lessons complete</Badge>
		</Div>
		<Progress aria-label="Course progress" value={done} max={lessons.length} class="mt-5 w-full" />
		<Div class="mt-6 grid gap-6 md:grid-cols-[1fr_1.5fr]">
			<Div class="space-y-3">
				{#each lessons as item, i}
					<Button
						type="button"
						variants={lesson === i ? ['soft'] : ['outline']}
						class="flex w-full items-center justify-between gap-3 text-left"
						aria-pressed={lesson === i}
						onclick={() => (lesson = i)}
					>
						<span>{completed[i] ? '✓' : i + 1}. {item.title}</span>
						<span class="shrink-0 text-xs">{item.length}</span>
					</Button>
				{/each}
			</Div>
			<Card class="space-y-4">
				<Badge>Free lesson preview</Badge>
				<H3 class="text-xl font-semibold">{lessons[lesson].title}</H3>
				<P>{lessons[lesson].body}</P>
				<Div class="rounded-lg bg-primary-500/5 p-4">
					<P class="text-sm font-semibold">Try it yourself</P>
					<P class="mt-2 text-sm">
						Choose a screen you use every day. Write down one change you would make using the idea
						from this lesson.
					</P>
				</Div>
				<Button
					type="button"
					variants={['outline']}
					onclick={() => (completed[lesson] = !completed[lesson])}
				>
					{completed[lesson] ? 'Mark as incomplete' : 'Mark lesson complete'}
				</Button>
			</Card>
		</Div>
	</Section>

	<Section id={uid + '-instructor'} class="grid gap-6 bg-primary-500/5 p-6 sm:p-10 md:grid-cols-2">
		<Div class="flex items-start gap-4">
			<Avatar name="Riley Chen" variants={['lg']} />
			<Div>
				<H3 class="text-2xl font-semibold">Meet Riley Chen</H3>
				<P class="mt-2 text-sm">Product designer and your course guide.</P>
				<P class="mt-4">
					Riley teaches with small, concrete exercises that turn abstract principles into better
					decisions on real screens.
				</P>
			</Div>
		</Div>
		<Div>
			<H3 class="text-xl font-semibold">What you'll leave with</H3>
			<Div class="mt-4 space-y-3">
				{#each ['A repeatable design process', 'A checklist for reviewing interfaces', 'A small project to keep practicing'] as benefit}
					<P class="border-b border-primary-500/15 pb-3">{benefit}</P>
				{/each}
			</Div>
		</Div>
	</Section>

	<Section class="grid gap-8 p-6 sm:p-10 md:grid-cols-2">
		<Div>
			<H3 class="text-2xl font-semibold">Before you begin</H3>
			<Div class="mt-5 space-y-3">
				{#each [{ question: 'Do I need design experience?', answer: 'No. The sample lessons begin with everyday tasks and build from there.' }, { question: 'Do I need special software?', answer: 'A notebook or any drawing tool is enough for the exercises.' }, { question: 'Can I learn at my own pace?', answer: 'Yes. Open any lesson and mark it complete when you are ready.' }] as faq}
					<Accordion summary={faq.question}>
						<P class="text-sm">{faq.answer}</P>
					</Accordion>
				{/each}
			</Div>
		</Div>
		<Card id={uid + '-enroll'} class="space-y-4">
			<Badge>Start with the foundations</Badge>
			<H3 class="text-3xl font-semibold">Small steps. Better screens.</H3>
			<P>Explore all three lessons and track your progress right here.</P>
			<Button type="button" class="w-full" onclick={() => (enrolled = true)}>
				{enrolled ? 'Demo course joined' : 'Join the demo course'}
			</Button>
			{#if enrolled}
				<Alert role="status" variants={['success']}>
					You're enrolled in this local demo. Your progress lasts until the preview resets. No
					account or payment was created.
				</Alert>
			{/if}
		</Card>
	</Section>
	<Div
		class="flex flex-wrap justify-between gap-3 border-t border-gray-200 p-6 text-xs dark:border-gray-800"
	>
		<P>Practice School · Make something useful</P>
		<A href={'#' + uid + '-curriculum'}>Return to lessons</A>
	</Div>
</Div>
