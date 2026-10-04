<script lang="ts">
	import { Avatar, Badge, Button, Card, Div, Form, H2, Input, P } from '$lib/components';
	let conversations = $state([
		{
			id: 1,
			name: 'Alex Morgan',
			role: 'Product designer',
			unread: 0,
			messages: [
				{ id: 1, mine: false, text: 'Can you review the onboarding flow today?' },
				{ id: 2, mine: true, text: 'Yes, I’ll leave feedback after lunch.' }
			]
		},
		{
			id: 2,
			name: 'Sam Rivera',
			role: 'Frontend developer',
			unread: 2,
			messages: [
				{ id: 1, mine: false, text: 'The new components are ready to try.' },
				{ id: 2, mine: false, text: 'Let me know if you spot any keyboard issues.' }
			]
		},
		{
			id: 3,
			name: 'Casey Lee',
			role: 'Content editor',
			unread: 1,
			messages: [{ id: 1, mine: false, text: 'I’ve updated the launch announcement.' }]
		}
	]);
	let selected = $state(1);
	let query = $state('');
	let draft = $state('');
	const current = $derived(conversations.find((conversation) => conversation.id === selected)!);
	const visible = $derived(
		conversations.filter((conversation) =>
			conversation.name.toLowerCase().includes(query.toLowerCase())
		)
	);
	function send(event: SubmitEvent) {
		event.preventDefault();
		if (draft.trim())
			current.messages.push({ id: current.messages.length + 1, mine: true, text: draft.trim() });
		draft = '';
	}
</script>

<Card class="w-full overflow-hidden p-0">
	<Div class="grid md:grid-cols-[14rem_1fr]">
		<Div
			class="space-y-3 border-b border-gray-200 p-4 md:border-r md:border-b-0 dark:border-gray-700"
		>
			<H2 class="text-xl font-semibold">Messages</H2>
			<Input
				class="w-full"
				aria-label="Search conversations"
				bind:value={query}
				placeholder="Find a person..."
			/>
			{#each visible as conversation}
				<Button
					type="button"
					variants={selected === conversation.id ? ['soft'] : ['ghost']}
					class="flex w-full items-center gap-3 p-3 text-left"
					aria-pressed={selected === conversation.id}
					onclick={() => {
						selected = conversation.id;
						conversation.unread = 0;
						draft = '';
					}}
				>
					<Avatar name={conversation.name} class="size-8" />
					<Div class="min-w-0 grow">
						<P class="truncate text-xs font-semibold">{conversation.name}</P>
						<P class="truncate text-[10px]">{conversation.messages.at(-1)?.text}</P>
					</Div>
					{#if conversation.unread}
						<Badge>{conversation.unread}</Badge>
					{/if}
				</Button>
			{/each}
			{#if !visible.length}
				<P class="text-sm">No conversations found.</P>
			{/if}
		</Div>
		<Div class="flex min-h-96 flex-col">
			<Div class="flex items-center gap-3 border-b border-gray-200 p-4 dark:border-gray-700">
				<Avatar name={current.name} />
				<Div>
					<P class="font-semibold">{current.name}</P>
					<P class="text-xs">{current.role}</P>
				</Div>
			</Div>
			<Div class="flex grow flex-col gap-4 p-5" aria-live="polite">
				{#each current.messages as message}
					<P
						class={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${message.mine ? 'ml-auto bg-primary-500 text-primary-contrast-500' : 'mr-auto bg-gray-100 dark:bg-gray-800'}`}
					>
						{message.text}
					</P>
				{/each}
			</Div>
			<Form class="flex gap-2 border-t border-gray-200 p-4 dark:border-gray-700" onsubmit={send}>
				<Input
					aria-label={'Message ' + current.name}
					placeholder="Write a message..."
					bind:value={draft}
					class="min-w-0 grow"
					required
				/>
				<Button type="submit" disabled={!draft.trim()}>Send</Button>
			</Form>
		</Div>
	</Div>
</Card>
