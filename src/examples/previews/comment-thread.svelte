<script lang="ts">
	import { Avatar, Badge, Button, Card, Div, Form, H2, P, Textarea } from '$lib/components';
	type Comment = {
		id: number;
		author: string;
		text: string;
		liked: boolean;
		likes: number;
		replies: { author: string; text: string }[];
	};
	let comments = $state<Comment[]>([
		{
			id: 1,
			author: 'Alex Morgan',
			text: 'The new empty state makes the next step much clearer. Could we use the same approach in the file library?',
			liked: false,
			likes: 3,
			replies: [{ author: 'Sam Rivera', text: 'Good idea. I’ll add it to the next sprint.' }]
		},
		{
			id: 2,
			author: 'Casey Lee',
			text: 'The keyboard focus treatment looks great in the latest prototype.',
			liked: false,
			likes: 1,
			replies: []
		}
	]);
	let draft = $state('');
	let replying = $state<number | null>(null);
	let reply = $state('');
	let sequence = $state(2);
	function post(event: SubmitEvent) {
		event.preventDefault();
		if (draft.trim())
			comments.push({
				id: ++sequence,
				author: 'You',
				text: draft.trim(),
				liked: false,
				likes: 0,
				replies: []
			});
		draft = '';
	}
	function respond(event: SubmitEvent, comment: Comment) {
		event.preventDefault();
		if (reply.trim()) comment.replies.push({ author: 'You', text: reply.trim() });
		reply = '';
		replying = null;
	}
</script>

<Card class="mx-auto max-w-2xl space-y-6"
	><Div class="flex items-center justify-between"
		><H2 class="text-2xl font-semibold">Design discussion</H2><Badge
			>{comments.length} comments</Badge
		></Div
	>{#each comments as comment (comment.id)}<Div
			class="space-y-3 border-b border-gray-200 pb-5 dark:border-gray-700"
			><Div class="flex gap-3"
				><Avatar name={comment.author} /><Div class="min-w-0 grow"
					><P class="text-sm font-semibold">{comment.author}</P><P
						class="mt-2 text-sm leading-relaxed whitespace-pre-wrap">{comment.text}</P
					><Div class="mt-2 flex gap-4"
						><Button
							type="button"
							variants={['ghost']}
							class="px-0 py-1 text-xs"
							aria-pressed={comment.liked}
							onclick={() => (comment.liked = !comment.liked)}
							>{comment.liked ? 'Liked' : 'Like'} · {comment.likes + Number(comment.liked)}</Button
						><Button
							type="button"
							variants={['ghost']}
							class="px-0 py-1 text-xs"
							onclick={() => {
								replying = replying === comment.id ? null : comment.id;
								reply = '';
							}}>Reply</Button
						></Div
					></Div
				></Div
			>{#each comment.replies as response}<Div
					class="ml-8 flex gap-3 rounded-lg bg-primary-500/5 p-3"
					><Avatar name={response.author} class="size-7" /><Div
						><P class="text-xs font-semibold">{response.author}</P><P
							class="mt-1 text-sm whitespace-pre-wrap">{response.text}</P
						></Div
					></Div
				>{/each}{#if replying === comment.id}<Form
					class="ml-8 space-y-2"
					onsubmit={(event) => respond(event, comment)}
					><Textarea
						aria-label={'Reply to ' + comment.author}
						rows={2}
						bind:value={reply}
						required
						placeholder="Write a reply..."
						class="w-full"
					/><Button type="submit" disabled={!reply.trim()}>Post reply</Button></Form
				>{/if}</Div
		>{/each}<Form class="space-y-3" onsubmit={post}
		><Textarea
			aria-label="New comment"
			rows={3}
			bind:value={draft}
			required
			placeholder="Add to the discussion..."
			class="w-full"
		/><Button type="submit" disabled={!draft.trim()}>Post comment</Button></Form
	></Card
>
