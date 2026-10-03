<script lang="ts">
	import { Badge, Button, Card, Div, H2, P, Tabs } from '$lib/components';
	let manager = $state('npm');
	let copied = $state(false);
	let error = $state('');
	$effect(() => {
		manager;
		copied = false;
	});
	const command = $derived(
		manager === 'npm'
			? 'npm install @example/relay'
			: manager === 'pnpm'
				? 'pnpm add @example/relay'
				: 'bun add @example/relay'
	);
	async function copy() {
		try {
			await navigator.clipboard.writeText(command);
			copied = true;
			error = '';
		} catch {
			error = 'Copy is unavailable. Select the command to copy it.';
		}
	}
</script>

<Div class="rounded-2xl bg-gray-950 p-6 text-gray-100 sm:p-10"
	><Div class="grid items-center gap-8 lg:grid-cols-2"
		><Div
			><Badge>Fictional developer tool</Badge><H2
				class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl"
				>Ship the feature.<br /><span class="text-primary-400">Skip the plumbing.</span></H2
			><P class="mt-5 text-gray-300"
				>A typed event pipeline for your next application. Explore an installation hero that puts
				the first command front and center.</P
			><Div class="mt-6 flex flex-wrap gap-2"
				><Badge>TypeScript first</Badge><Badge>Small API</Badge><Badge>Open source</Badge></Div
			></Div
		><Card class="overflow-hidden border border-gray-700 bg-gray-900 p-0"
			><Div class="flex gap-2 border-b border-gray-700 p-4" aria-hidden="true"
				><span class="size-2 rounded-full bg-red-400"></span><span
					class="size-2 rounded-full bg-amber-400"
				></span><span class="size-2 rounded-full bg-green-400"></span></Div
			><Div class="space-y-5 p-5"
				><Tabs
					tabs={['npm', 'pnpm', 'bun'].map((value) => ({ title: value, value }))}
					bind:value={manager}
					class="[&_button]:text-gray-100"
				/>
				<pre class="overflow-x-auto text-sm text-green-300"><code>$ {command}</code></pre>
				<Button type="button" variants={['outline']} onclick={copy}
					>{copied ? 'Copied' : 'Copy install command'}</Button
				>{#if error}<P role="status" class="text-xs text-gray-300">{error}</P>{/if}<P
					class="border-t border-gray-700 pt-4 font-mono text-xs text-gray-400"
					>// Sample package name for layout demonstration.</P
				></Div
			></Card
		></Div
	></Div
>
