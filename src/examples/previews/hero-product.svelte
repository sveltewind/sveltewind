<script lang="ts">
	import { Badge, Button, Card, Div, H2, H3, Label, P, Select, Option } from '$lib/components';
	const uid = $props.id();
	let workflow = $state('Launch');
	let started = $state(false);
	const tasks: Record<string, string[]> = {
		Launch: ['Approve the launch brief', 'Review the landing page', 'Schedule the announcement'],
		Research: ['Recruit five participants', 'Run discovery interviews', 'Share research findings'],
		Design: ['Sketch the core journey', 'Build an interactive prototype', 'Review accessibility']
	};
</script>

<Div class="grid items-center gap-8 rounded-2xl bg-primary-500/5 p-6 lg:grid-cols-2 lg:p-10">
	<Div
		><Badge>For teams that ship</Badge><H2
			class="mt-5 text-4xl font-bold tracking-tight sm:text-5xl"
			>From first idea<br />to <span class="text-primary-500">finished work.</span></H2
		><P class="mt-5 max-w-md"
			>Turn ambitious plans into a clear next step. Orbit keeps projects moving without another
			status meeting.</P
		><Button type="button" class="mt-7" onclick={() => (started = !started)}
			>{started ? 'Close starter plan' : 'Build a starter plan'}</Button
		>{#if started}<P role="status" class="mt-3 text-sm"
				>Your {workflow.toLowerCase()} starter plan is ready in the preview.</P
			>{/if}</Div
	>
	<Card class="rotate-0 space-y-5 border border-primary-500/20 shadow-xl lg:rotate-2"
		><Div class="flex items-center justify-between gap-3"
			><H3 class="text-xl font-semibold">Team workspace</H3><Badge variants={['success']}
				>On track</Badge
			></Div
		><Div
			><Label for={uid}>Try a workflow</Label><Select
				id={uid}
				bind:value={workflow}
				class="mt-2 w-full"
				>{#each Object.keys(tasks) as name}<Option value={name}>{name}</Option>{/each}</Select
			></Div
		><Div class="grid grid-cols-3 gap-2"
			><Div class="rounded-lg bg-primary-500/10 p-3"
				><P class="text-2xl font-semibold">3</P><P class="text-xs">Next steps</P></Div
			><Div class="rounded-lg bg-primary-500/10 p-3"
				><P class="text-2xl font-semibold">4</P><P class="text-xs">Teammates</P></Div
			><Div class="rounded-lg bg-primary-500/10 p-3"
				><P class="text-2xl font-semibold">1</P><P class="text-xs">Shared goal</P></Div
			></Div
		>{#each tasks[workflow] as task, i}<Div
				class={`flex items-center gap-3 rounded-lg border border-primary-500/10 p-3 ${started ? 'bg-primary-500/10' : ''}`}
				><span class="text-primary-500">0{i + 1}</span><P class="text-sm">{task}</P></Div
			>{/each}</Card
	>
</Div>
