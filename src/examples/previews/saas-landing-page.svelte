<script lang="ts">
	import {
		A,
		Accordion,
		Alert,
		Badge,
		Button,
		Card,
		Div,
		Form,
		H2,
		H3,
		Input,
		P,
		Section,
		Span,
		Switch,
		Ul,
		Li
	} from '$lib/components';
	let annual = $state(false);
	let email = $state('');
	let joined = $state(false);
	let plan = $state('');
	const features = [
		{
			title: 'One place for your work',
			description:
				'Bring projects, conversations, and decisions together in a clear shared workspace.'
		},
		{
			title: 'A calmer way to collaborate',
			description:
				'Share context, assign responsibilities, and keep everyone moving in the same direction.'
		},
		{
			title: 'Progress you can see',
			description:
				'Turn ambitious goals into achievable milestones and celebrate every step forward.'
		}
	];
	const plans = ['Starter', 'Team', 'Business'];
</script>

<Div
	class="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
>
	<Div
		class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-6 dark:border-gray-800"
		><Span class="text-xl font-bold tracking-tight"
			>Northstar<span class="text-primary-500">.</span></Span
		><Div class="flex flex-wrap gap-4 text-sm"
			><A href="#northstar-features" variants={['ghost']}>Features</A><A
				href="#northstar-pricing"
				variants={['ghost']}>Pricing</A
			><A href="#northstar-start" variants={['button.base']} class="inline-flex items-center"
				>Get started</A
			></Div
		></Div
	>
	<Section
		id="northstar-start"
		class="relative space-y-6 bg-primary-500/5 px-6 py-16 text-center sm:px-10"
		><Badge>Built for teams with big ideas</Badge><H2
			class="mx-auto max-w-2xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl"
			>Less busywork.<br /><Span class="text-primary-500">More forward motion.</Span></H2
		><P class="mx-auto max-w-xl leading-relaxed"
			>A shared workspace for your team to plan, build, and deliver meaningful work. Clear
			priorities. Thoughtful tools. Room to grow.</P
		><Form
			class="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
			onsubmit={(event) => {
				event.preventDefault();
				joined = true;
			}}
			><Input
				type="email"
				aria-label="Work email"
				required
				bind:value={email}
				placeholder="you@company.com"
				class="min-w-0 grow bg-white dark:bg-gray-900"
			/><Button type="submit">Start your free trial</Button></Form
		><P class="text-xs">14 days free · No credit card required</P>{#if joined}<Alert
				variants={['success']}
				role="status"
				class="mx-auto max-w-lg">Trial requested for {email} in this demo. No email was sent.</Alert
			>{/if}<Div
			class="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-primary-500/15 pt-6"
			><Div><P class="text-2xl font-bold">2,400+</P><P class="text-xs">Teams</P></Div><Div
				><P class="text-2xl font-bold">98%</P><P class="text-xs">Satisfaction</P></Div
			><Div><P class="text-2xl font-bold">32</P><P class="text-xs">Countries</P></Div></Div
		></Section
	>
	<Section id="northstar-features" class="space-y-8 p-6 sm:p-10"
		><Div class="space-y-3 text-center"
			><P class="text-xs font-semibold tracking-widest text-primary-500 uppercase"
				>Everything your team needs</P
			><H2 class="text-3xl font-semibold">Good work starts with clarity.</H2></Div
		><Div class="grid gap-4 md:grid-cols-3"
			>{#each features as feature, i}<Card class="space-y-4"
					><Badge>0{i + 1}</Badge><H3 class="text-xl">{feature.title}</H3><P
						class="text-sm leading-relaxed">{feature.description}</P
					></Card
				>{/each}</Div
		><Card class="mx-auto max-w-2xl space-y-4 bg-primary-500/5 text-center"
			><P class="text-xl leading-relaxed"
				>“We finally have a place where the whole team can see what matters and move together.”</P
			><Div
				><P class="font-semibold">Alex Morgan</P><P class="text-sm"
					>Product lead at Lighthouse · Sample testimonial</P
				></Div
			></Card
		></Section
	>
	<Section id="northstar-pricing" class="space-y-6 bg-gray-50 p-6 sm:p-10 dark:bg-gray-900"
		><Div class="space-y-4 text-center"
			><H2 class="text-3xl font-semibold">A plan for every stage.</H2><Switch
				bind:checked={annual}
				class="inline-flex">Annual billing · save 20%</Switch
			></Div
		><Div class="grid gap-4 md:grid-cols-3"
			>{#each plans as item, i}<Card class="flex flex-col gap-4"
					><Badge>{i === 1 ? 'Most popular' : 'Flexible plan'}</Badge><H3 class="text-xl">{item}</H3
					><P class="text-4xl font-bold"
						>&#36;{((12 + i * 24) * (annual ? 0.8 : 1)).toFixed(2)}<Span
							class="text-sm font-normal"
						>
							/ month</Span
						></P
					><P class="text-xs">{annual ? 'Billed annually' : 'Billed monthly'}</P><Ul
						class="grow space-y-2 text-sm"
						><Li>{i === 0 ? '1 workspace' : i === 1 ? '5 workspaces' : 'Unlimited workspaces'}</Li
						><Li>{(i + 1) * 10} members</Li><Li
							>{i === 2 ? 'Priority support' : 'Community support'}</Li
						></Ul
					><Button type="button" variants={i === 1 ? [] : ['outline']} onclick={() => (plan = item)}
						>Choose {item}</Button
					></Card
				>{/each}</Div
		>{#if plan}<Alert variants={['success']} role="status"
				>{plan} selected with {annual ? 'annual' : 'monthly'} billing in this demo.</Alert
			>{/if}</Section
	>
	<Section class="mx-auto max-w-2xl space-y-4 p-6 sm:p-10"
		><H2 class="text-center text-3xl font-semibold">A few good questions.</H2><Accordion
			summary="Can I try Northstar before subscribing?"
			><P class="text-sm"
				>Yes. All plans include a 14-day trial so you can explore the workspace with your team.</P
			></Accordion
		><Accordion summary="Can I change plans later?"
			><P class="text-sm"
				>You can move to a different plan as your team grows. The billing page explains your options
				before you confirm.</P
			></Accordion
		><Accordion summary="How does my team get started?"
			><P class="text-sm"
				>Create a workspace, invite teammates, and start with a shared project. Clear onboarding
				steps guide you through setup.</P
			></Accordion
		></Section
	>
	<Div
		class="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 px-6 py-5 text-xs text-gray-500 dark:border-gray-800"
		><Span>Northstar · A fictional product demo</Span><A href="/examples">Built with Sveltewind</A
		></Div
	>
</Div>
