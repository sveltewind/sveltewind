<script lang="ts">
	import { Avatar, Badge, Button, Card, Div, H2, P, Tabs } from '$lib/components';
	let filter = $state('all');
	let notifications = $state([
		{
			id: 1,
			person: 'Alex Morgan',
			title: 'Mentioned you in the design review',
			time: '5 minutes ago',
			read: false
		},
		{
			id: 2,
			person: 'Sam Rivera',
			title: 'Completed the account screen',
			time: '1 hour ago',
			read: false
		},
		{
			id: 3,
			person: 'Casey Lee',
			title: 'Shared the release checklist',
			time: 'Yesterday',
			read: true
		}
	]);
	const unread = $derived(notifications.filter((notification) => !notification.read).length);
	const visible = $derived(
		notifications.filter((notification) => filter === 'all' || !notification.read)
	);
</script>

<Card class="mx-auto max-w-2xl space-y-5"
	><Div class="flex flex-wrap items-center justify-between gap-3"
		><H2 class="text-2xl font-semibold">Your inbox</H2><Badge
			variants={unread ? ['info'] : ['success']}>{unread} unread</Badge
		></Div
	><Div class="flex flex-wrap items-center justify-between gap-3"
		><Tabs
			bind:value={filter}
			tabs={[
				{ title: 'All messages', value: 'all' },
				{ title: 'Unread', value: 'unread' }
			]}
		/><Button
			type="button"
			variants={['ghost']}
			disabled={!unread}
			onclick={() => notifications.forEach((notification) => (notification.read = true))}
			>Mark all read</Button
		></Div
	>{#each visible as notification}<Div
			class={`flex items-start gap-3 rounded-xl border p-4 ${notification.read ? 'border-gray-200 dark:border-gray-700' : 'border-primary-500/30 bg-primary-500/5'}`}
			><Avatar name={notification.person} /><Div class="min-w-0 grow"
				><P class="font-medium">{notification.title}</P><P class="mt-1 text-xs"
					>{notification.person} · {notification.time}</P
				><Button
					type="button"
					variants={['ghost']}
					class="mt-2 px-0 py-1 text-xs"
					onclick={() => (notification.read = !notification.read)}
					>{notification.read ? 'Mark unread' : 'Mark read'}</Button
				></Div
			>{#if !notification.read}<span
					class="mt-2 size-2 shrink-0 rounded-full bg-primary-500"
					aria-label="Unread"
				></span>{/if}</Div
		>{/each}{#if !visible.length}<Div class="py-8 text-center"
			><P class="text-lg font-semibold">You’re all caught up</P><P class="mt-2 text-sm"
				>No unread notifications remain.</P
			></Div
		>{/if}</Card
>
