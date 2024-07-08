<script lang="ts">
	import { A, Button, Card, Div, Fieldset, H1, H2, Icon, Input, P } from '$lib/components/index.js';
	import { ArrowDownTray, Eye } from '$lib/icons/index.js';
	import code from '../code.svelte.js';
	import inspiration from '../inspiration.svelte.js';

	// props
	let passwordType = $state('password');

	code.set(`<script lang="ts">
	import { A, Button, Card, Div, Fieldset, H1, H2, Icon, Input, P } from 'sveltewind/components';
	import { ArrowDownTray, Eye } from 'sveltewind/icons';

	// props
	let passwordType = $state('password');
<\/script>

<Card class="grid grid-cols-1 lg:grid-cols-2">
	<Div
		class="hidden flex-col items-center justify-between rounded-lg bg-gradient-to-tr from-cyan-400 via-blue-600 to-violet-500 p-4 pt-20 lg:flex"
	>
		<H2 class="text-base font-medium uppercase text-white">Daily Gradient<\/H2>
		<Button class="bg-white/25 px-3 hover:bg-white/35 focus:bg-white/35 focus:ring-white/55">
			<Icon src={ArrowDownTray} />
		<\/Button>
	<\/Div>
	<Div class="flex flex-col items-center space-y-24 p-4 px-4 pt-20 md:px-12 lg:px-20">
		<Div class="flex flex-col items-center space-y-8">
			<H1 class="uppercase">Virink<\/H1>
			<P>Lovely gradients every day.<\/P>
			<Div class="flex flex-col space-y-4">
				<Fieldset legend="Email">
					<Input
						class="hover:ring-offset-blue-500 focus:ring-blue-500/30 focus:ring-offset-blue-500 lg:w-80"
						type="email"
					/>
				<\/Fieldset>
				<Fieldset legend="Password">
					<Div class="relative">
						<Input
							class="hover:ring-offset-blue-500 focus:ring-blue-500/30 focus:ring-offset-blue-500 lg:w-80"
							bind:type={passwordType}
						/>
						<Button
							class="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent px-3 text-current hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
							onclick={() => (passwordType = passwordType === 'password' ? 'text' : 'password')}
						>
							<Icon src={Eye} />
						<\/Button>
					<\/Div>
					<A
						class="mt-2 self-end text-blue-500 shadow-none shadow-blue-500 hover:text-blue-500 focus:text-blue-500"
						href="#">Forgot password?<\/A
					>
				<\/Fieldset>
			<\/Div>
			<Button
				class="w-full rounded-full bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-500/30"
			>
				Sign In
			<\/Button>
			<Div class="flex items-center justify-center space-x-1">
				<P>No account?<\/P>
				<P>-<\/P>
				<A
					class="text-blue-500 shadow-none shadow-blue-500 hover:text-blue-500 focus:text-blue-500"
					href="#">Join now<\/A
				>
			<\/Div>
		<\/Div>
		<P class="text-center text-sm opacity-50">© 2023 Virink. All rights reserved<\/P>
	<\/Div>
<\/Card>`);
	inspiration.set({
		href: 'https://dribbble.com/shots/21831367-Daily-UI-001-Sign-Up',
		src: 'https://cdn.dribbble.com/userupload/8070737/file/original-b72e42fd6868b8836749039fc90e8b1f.png?resize=1024x768'
	});
</script>

<Card class="grid grid-cols-1 lg:grid-cols-2">
	<Div
		class="hidden flex-col items-center justify-between rounded-lg bg-gradient-to-tr from-cyan-400 via-blue-600 to-violet-500 p-4 pt-20 lg:flex"
	>
		<H2 class="text-base font-medium uppercase text-white">Daily Gradient</H2>
		<Button class="bg-white/25 px-3 hover:bg-white/35 focus:bg-white/35 focus:ring-white/55">
			<Icon src={ArrowDownTray} />
		</Button>
	</Div>
	<Div class="flex flex-col items-center space-y-24 p-4 px-4 pt-20 md:px-12 lg:px-20">
		<Div class="flex flex-col items-center space-y-8">
			<H1 class="uppercase">Virink</H1>
			<P>Lovely gradients every day.</P>
			<Div class="flex flex-col space-y-4">
				<Fieldset legend="Email">
					<Input
						class="hover:ring-offset-blue-500 focus:ring-blue-500/30 focus:ring-offset-blue-500 lg:w-80"
						type="email"
					/>
				</Fieldset>
				<Fieldset legend="Password">
					<Div class="relative">
						<Input
							class="hover:ring-offset-blue-500 focus:ring-blue-500/30 focus:ring-offset-blue-500 lg:w-80"
							bind:type={passwordType}
						/>
						<Button
							class="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent px-3 text-current hover:bg-slate-950/10 focus:bg-slate-950/10 focus:ring-slate-950/30 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/30"
							onclick={() => (passwordType = passwordType === 'password' ? 'text' : 'password')}
						>
							<Icon src={Eye} />
						</Button>
					</Div>
					<A
						class="mt-2 self-end text-blue-500 shadow-none shadow-blue-500 hover:text-blue-500 focus:text-blue-500"
						href="#">Forgot password?</A
					>
				</Fieldset>
			</Div>
			<Button
				class="w-full rounded-full bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-500/30"
			>
				Sign In
			</Button>
			<Div class="flex items-center justify-center space-x-1">
				<P>No account?</P>
				<P>-</P>
				<A
					class="text-blue-500 shadow-none shadow-blue-500 hover:text-blue-500 focus:text-blue-500"
					href="#">Join now</A
				>
			</Div>
		</Div>
		<P class="text-center text-sm opacity-50">© 2023 Virink. All rights reserved</P>
	</Div>
</Card>
