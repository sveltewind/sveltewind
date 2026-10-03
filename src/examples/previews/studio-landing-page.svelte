<script lang="ts">
	import {
		A,
		Alert,
		Badge,
		Button,
		Card,
		Div,
		Field,
		Form,
		H2,
		H3,
		Input,
		Label,
		P,
		Section,
		Textarea
	} from '$lib/components';
	const uid = $props.id();
	let name = $state('');
	let email = $state('');
	let brief = $state('');
	let sent = $state(false);
	const work = [
		{
			name: 'Fieldwork',
			type: 'Brand strategy & identity',
			color: 'bg-primary-500/15',
			mark: 'fw.'
		},
		{ name: 'Forma', type: 'Digital product & website', color: 'bg-primary-500/30', mark: 'FORMA' },
		{
			name: 'Good Company',
			type: 'Packaging & art direction',
			color: 'bg-primary-500/10',
			mark: 'Good\nCompany'
		}
	];
</script>

<Div
	class="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
>
	<Div
		class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-6 dark:border-gray-800"
		><P class="text-xl font-bold">Offset Studio<span class="text-primary-500">.</span></P><Div
			class="flex gap-4 text-sm"
			><A href={'#' + uid + '-work'}>Work</A><A href={'#' + uid + '-studio'}>Studio</A><A
				href={'#' + uid + '-contact'}>Let's talk</A
			></Div
		></Div
	>
	<Section class="px-6 py-12 sm:px-10 sm:py-16"
		><Badge>Independent design studio · Brooklyn</Badge><H2
			class="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl"
			>Distinct identities.<br />Thoughtful digital experiences.</H2
		><Div class="mt-8 grid gap-6 sm:grid-cols-2"
			><P
				>We help ambitious small businesses find their voice and show up with confidence. Strategy,
				identity, and websites made to work together.</P
			><Div class="flex items-end sm:justify-end"
				><A href={'#' + uid + '-work'} variants={['button.base']}>Explore selected work</A></Div
			></Div
		></Section
	>
	<Section id={uid + '-work'} class="space-y-6 px-6 pb-12 sm:px-10"
		><Div class="flex justify-between"
			><H3 class="text-xl font-semibold">Selected work</H3><P class="text-sm">2024–2026</P></Div
		><Div class="grid gap-5 md:grid-cols-3"
			>{#each work as project}<Div
					><Div class={`flex h-48 items-center justify-center rounded-xl p-5 ${project.color}`}
						><P class="text-center text-4xl font-bold tracking-tight whitespace-pre-line"
							>{project.mark}</P
						></Div
					><H3 class="mt-4 font-semibold">{project.name}</H3><P class="mt-1 text-xs"
						>{project.type}</P
					></Div
				>{/each}</Div
		></Section
	>
	<Section id={uid + '-studio'} class="grid gap-8 bg-primary-500/5 p-6 sm:p-10 md:grid-cols-2"
		><Div
			><P class="text-xs tracking-widest uppercase">A small team, a shared purpose</P><H3
				class="mt-4 text-3xl font-semibold">Good design starts<br />with a good conversation.</H3
			><P class="mt-4"
				>You work directly with the people making the work. We listen closely, ask useful questions,
				and keep the process clear.</P
			></Div
		><Div class="space-y-4"
			>{#each [['01', 'Understand', 'A discovery workshop, an honest brief, and a shared definition of success.'], ['02', 'Explore', 'A focused set of creative directions, tested against your goals.'], ['03', 'Build', 'A complete identity and website, with guidance for using both.']] as step}<Div
					class="flex gap-4 border-b border-primary-500/15 pb-4"
					><P class="text-primary-500">{step[0]}</P><Div
						><H3 class="font-semibold">{step[1]}</H3><P class="mt-1 text-sm">{step[2]}</P></Div
					></Div
				>{/each}</Div
		></Section
	>
	<Section id={uid + '-contact'} class="grid gap-8 p-6 sm:p-10 md:grid-cols-2"
		><Div
			><Badge>Taking projects for winter 2026</Badge><H3 class="mt-4 text-3xl font-semibold"
				>What are you making?</H3
			><P class="mt-4"
				>Tell us a little about your project. We'd love to hear where you want to go.</P
			><Card class="mt-6"><P class="text-sm">Brand identity · Websites · Art direction</P></Card
			></Div
		><Form
			class="space-y-4"
			onsubmit={(event) => {
				event.preventDefault();
				sent = true;
			}}
			><Field
				><Label for={uid + '-name'}>Your name</Label><Input
					id={uid + '-name'}
					required
					bind:value={name}
					class="w-full"
				/></Field
			><Field
				><Label for={uid + '-email'}>Email</Label><Input
					id={uid + '-email'}
					required
					type="email"
					bind:value={email}
					class="w-full"
				/></Field
			><Field
				><Label for={uid + '-brief'}>Project brief</Label><Textarea
					id={uid + '-brief'}
					required
					bind:value={brief}
					rows={3}
					placeholder="Your goals, timing, and what you need help with..."
					class="w-full"
				/></Field
			><Button type="submit">Send demo inquiry</Button>{#if sent}<Alert
					role="status"
					variants={['success']}
					>Thanks, {name}. Your inquiry is saved in this demo. No message was sent.</Alert
				>{/if}</Form
		></Section
	>
	<Div
		class="flex flex-wrap justify-between gap-3 border-t border-gray-200 p-6 text-xs dark:border-gray-800"
		><P>Offset Studio · Independent by design</P><A href={'#' + uid + '-contact'}
			>Start a conversation</A
		></Div
	>
</Div>
