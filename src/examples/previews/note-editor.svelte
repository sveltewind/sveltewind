<script lang="ts">
	import {
		Card,
		H2,
		Field,
		Label,
		Input,
		Textarea,
		P,
		Div,
		Button,
		Alert,
		Badge,
		H3
	} from '$lib/components';
	let title = $state('');
	let content = $state('');
	let saved = $state(false);
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">Note editor</H2>
	<Field>
		<Label for="editor-title">Note title</Label>
		<Input
			id="editor-title"
			bind:value={title}
			oninput={() => (saved = false)}
			placeholder="Note title"
		/>
	</Field>
	<Field>
		<Label for="editor-content">Content</Label>
		<Textarea
			id="editor-content"
			rows={5}
			bind:value={content}
			oninput={() => (saved = false)}
			placeholder="Write a useful note for your future self..."
		/>
	</Field>
	<P class="text-xs" aria-live="polite">
		{content.length} characters · {content.trim() ? content.trim().split(/\s+/).length : 0} words
	</P>
	<Div class="flex flex-wrap gap-3">
		<Button
			type="button"
			disabled={!title.trim() || !content.trim()}
			onclick={() => (saved = true)}
		>
			Save note
		</Button>
		<Button
			type="button"
			variants={['outline']}
			onclick={() => {
				title = '';
				content = '';
				saved = false;
			}}
		>
			Reset
		</Button>
	</Div>
	{#if saved}
		<Alert variants={['success']} role="status">Saved in this demo session.</Alert>
	{/if}
	<Card class="space-y-3 bg-primary-500/5">
		<Badge>Live preview</Badge>
		<H3 class="text-xl break-words">{title || 'Untitled'}</H3>
		<P class="break-words whitespace-pre-wrap">
			{content || 'Your content will appear here as you type.'}
		</P>
	</Card>
</Card>
