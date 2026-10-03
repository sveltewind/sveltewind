<script lang="ts">
	import { Alert, Avatar, Badge, Button, Div, H2, Label, P, Select, Option } from '$lib/components';
	const uid = $props.id();
	let ticket = $state('In person');
	let reserved = $state(false);
</script>

<Div class="overflow-hidden rounded-2xl border border-primary-500/20"
	><Div class="grid lg:grid-cols-[1.4fr_1fr]"
		><Div class="p-6 sm:p-10"
			><Badge>October 22–23, 2026 · Portland</Badge><H2
				class="mt-6 text-5xl font-bold tracking-tight sm:text-7xl"
				>Make what<br /><span class="text-primary-500">comes next.</span></H2
			><P class="mt-5 max-w-md"
				>Two days of practical talks, hands-on workshops, and conversations with people building a
				better web.</P
			><Div class="mt-8 flex flex-wrap gap-5"
				>{#each ['Riley Chen', 'Sam Rivera', 'Quinn Davis'] as speaker}<Div
						class="flex items-center gap-2"
						><Avatar name={speaker} /><P class="text-xs">{speaker}</P></Div
					>{/each}</Div
			></Div
		><Div class="flex flex-col justify-between bg-primary-500/10 p-6 sm:p-10"
			><Div
				><P class="text-xs font-semibold tracking-widest uppercase">Fieldnotes conference</P><P
					class="mt-6 text-6xl font-bold text-primary-500">02</P
				><P class="mt-2">Days to learn, build, and connect.</P><Div
					class="mt-6 space-y-2 border-t border-primary-500/20 pt-5"
					><P class="text-sm">12 sessions · 4 workshops</P><P class="text-sm"
						>Captions and recordings included</P
					></Div
				></Div
			><Div class="mt-8 space-y-3"
				><Label for={uid}>Choose your pass</Label><Select
					id={uid}
					bind:value={ticket}
					onchange={() => (reserved = false)}
					class="w-full"
					><Option value="In person">In person — $249</Option><Option value="Livestream"
						>Livestream — $49</Option
					></Select
				><Button type="button" class="w-full" onclick={() => (reserved = true)}
					>Reserve a demo pass</Button
				>{#if reserved}<Alert role="status" variants={['success']}
						>{ticket} pass selected. This demo does not reserve a real ticket or take payment.</Alert
					>{/if}</Div
			></Div
		></Div
	></Div
>
