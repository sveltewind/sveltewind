<script lang="ts">
	import {
		Avatar,
		Badge,
		Button,
		Card,
		Div,
		Form,
		H2,
		H3,
		Input,
		P,
		Select
	} from '$lib/components';
	const columns = ['Backlog', 'In progress', 'Done'];
	let tasks = $state([
		{
			id: 1,
			title: 'Audit keyboard navigation',
			stage: 'Backlog',
			owner: 'Alex Morgan',
			priority: 'High'
		},
		{
			id: 2,
			title: 'Build the account screen',
			stage: 'In progress',
			owner: 'Sam Rivera',
			priority: 'Normal'
		},
		{
			id: 3,
			title: 'Review empty states',
			stage: 'In progress',
			owner: 'Alex Morgan',
			priority: 'Normal'
		},
		{ id: 4, title: 'Publish design tokens', stage: 'Done', owner: 'Sam Rivera', priority: 'High' }
	]);
	let owner = $state('all');
	let draft = $state('');
	let sequence = $state(4);
	const visible = $derived(tasks.filter((task) => owner === 'all' || task.owner === owner));
	function add(event: SubmitEvent) {
		event.preventDefault();
		if (!draft.trim()) return;
		tasks.push({
			id: ++sequence,
			title: draft.trim(),
			stage: 'Backlog',
			owner: 'Alex Morgan',
			priority: 'Normal'
		});
		draft = '';
	}
</script>

<Div class="w-full space-y-5">
	<Div class="flex flex-wrap items-center justify-between gap-3"
		><Div><Badge>Sprint 12</Badge><H2 class="mt-2 text-2xl font-semibold">Website launch</H2></Div
		><Select
			aria-label="Filter by assignee"
			bind:value={owner}
			options={[
				{ label: 'Everyone', value: 'all' },
				{ label: 'Alex Morgan', value: 'Alex Morgan' },
				{ label: 'Sam Rivera', value: 'Sam Rivera' }
			]}
		/></Div
	>
	<Div class="grid gap-4 lg:grid-cols-3"
		>{#each columns as column}<Div class="space-y-3 rounded-xl bg-primary-500/5 p-3"
				><Div class="flex items-center justify-between"
					><H3 class="text-sm font-semibold">{column}</H3><Badge
						>{visible.filter((task) => task.stage === column).length}</Badge
					></Div
				>{#each visible.filter((task) => task.stage === column) as task (task.id)}<Card
						class="space-y-4 p-4"
						><Badge variants={task.priority === 'High' ? ['warning'] : []}>{task.priority}</Badge><P
							class="font-medium">{task.title}</P
						><Div class="flex items-center gap-2"
							><Avatar name={task.owner} class="size-7" /><P class="text-xs">{task.owner}</P></Div
						><Select
							class="w-full text-xs"
							aria-label={'Move ' + task.title}
							bind:value={task.stage}
							options={columns.map((value) => ({ label: value, value }))}
						/></Card
					>{/each}</Div
			>{/each}</Div
	>
	<Form class="flex flex-col gap-3 sm:flex-row" onsubmit={add}
		><Input
			class="min-w-0 grow"
			aria-label="New task"
			placeholder="Add a task to the backlog..."
			bind:value={draft}
			required
		/><Button type="submit">Add task</Button></Form
	>
	<P class="text-xs"
		>Use each task’s status menu to move it between columns. All controls support the keyboard.</P
	>
</Div>
