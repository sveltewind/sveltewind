<script lang="ts">
	import { Badge, Button, Card, Dialog, Div, H2, H3, P } from '$lib/components';
	let reading = $state(false);
</script>

<Div class="rounded-2xl border border-gray-200 p-6 sm:p-10 dark:border-gray-800"
	><Div
		class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-5 dark:border-gray-700"
		><P class="text-2xl font-bold tracking-tight">Small Hours</P><Badge
			>Issue 08 · The attention issue</Badge
		></Div
	><Div class="mt-7 grid gap-8 lg:grid-cols-[1.5fr_1fr]"
		><Div
			><P class="text-xs tracking-widest uppercase">An independent journal</P><H2
				class="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
				>The art of<br />paying attention.</H2
			><P class="mt-5 max-w-lg"
				>What changes when we slow down enough to notice? Stories about everyday places, thoughtful
				work, and the people in between.</P
			><Button type="button" variants={['outline']} class="mt-7" onclick={() => (reading = true)}
				>Read the cover story</Button
			></Div
		><Div class="space-y-4"
			><Div
				class="relative flex h-52 items-end overflow-hidden rounded-xl bg-primary-500/15 p-6"
				aria-hidden="true"
				><span
					class="absolute -top-10 right-6 size-44 rounded-full border-[24px] border-primary-500/30"
				></span><span class="absolute bottom-0 left-10 h-36 w-12 bg-primary-500/25"></span><P
					class="relative text-3xl font-semibold">Look a little closer.</P
				></Div
			><Card class="space-y-3"
				><H3 class="text-sm font-semibold">Inside this issue</H3
				>{#each ['A walk without a destination', 'The objects we keep', 'Making space for quiet'] as title, i}<Div
						class="flex gap-4 border-t border-primary-500/10 pt-3"
						><span class="text-xs text-primary-500">0{i + 1}</span><P class="text-sm">{title}</P
						></Div
					>{/each}</Card
			></Div
		></Div
	></Div
>
<Dialog bind:isVisible={reading} aria-label="The art of paying attention"
	><Div class="space-y-4"
		><H3 class="text-2xl font-semibold">The art of paying attention</H3><Badge
			>Cover story · 3 minute read</Badge
		><P
			>The same street can feel entirely new when we stop rushing through it. A painted doorway, the
			sound of an open workshop, a tree growing around an old fence: small details make a place
			particular.</P
		><P
			>This issue begins with a simple invitation. Take a familiar route, leave room in your
			schedule, and write down three things you have never noticed before.</P
		><Button type="button" onclick={() => (reading = false)}>Back to the issue</Button></Div
	></Dialog
>
