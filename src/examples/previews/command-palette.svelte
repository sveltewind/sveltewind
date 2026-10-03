<script lang="ts">
	import { Alert, Badge, Button, Card, Dialog, Div, Form, H2, H3, Input, P } from '$lib/components';
	import { tick } from 'svelte';
	const uid = $props.id();
	const commands = [
		{ label: 'Open projects', group: 'Navigate', action: 'projects' },
		{ label: 'Create a project', group: 'Create', action: 'create' },
		{ label: 'Toggle compact layout', group: 'Preferences', action: 'compact' }
	];
	let open = $state(false);
	let query = $state('');
	let active = $state(0);
	let input = $state<HTMLInputElement | null>(null);
	let compact = $state(false);
	let screen = $state('projects');
	let projects = $state(['Website refresh', 'Design system']);
	let name = $state('');
	let message = $state('');
	const filtered = $derived(
		commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()))
	);
	$effect(() => {
		query;
		active = 0;
	});
	$effect(() => {
		if (open) void tick().then(() => input?.focus());
	});
	function run(index: number) {
		const command = filtered[index];
		if (!command) return;
		if (command.action === 'compact') compact = !compact;
		else screen = command.action;
		message =
			command.action === 'compact'
				? `Compact layout ${compact ? 'enabled' : 'disabled'}.`
				: command.label;
		open = false;
	}
	function keyboard(event: KeyboardEvent) {
		if (!filtered.length) return;
		if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			event.preventDefault();
			active = (active + (event.key === 'ArrowDown' ? 1 : filtered.length - 1)) % filtered.length;
		} else if (event.key === 'Enter') {
			event.preventDefault();
			run(active);
		}
	}
</script>

<Card class={`mx-auto max-w-2xl space-y-5 ${compact ? 'p-3' : 'p-6'}`}
	><Div class="flex flex-wrap items-center justify-between gap-3"
		><H2 class="text-2xl font-semibold">Workspace commands</H2><Button
			type="button"
			aria-haspopup="dialog"
			aria-expanded={open}
			onclick={() => {
				query = '';
				open = true;
			}}>Open palette</Button
		></Div
	><P class="text-sm"
		>Search for an action, use ↑ and ↓ to choose it, and press Enter. Escape closes the dialog.</P
	>{#if screen === 'projects'}<Div class={compact ? 'space-y-1' : 'space-y-3'}
			>{#each projects as project}<Div
					class={`rounded-lg border border-gray-200 dark:border-gray-700 ${compact ? 'p-2' : 'p-4'}`}
					><P class="font-medium">{project}</P><Badge>Active project</Badge></Div
				>{/each}</Div
		>{:else}<Form
			class="flex flex-col gap-3 sm:flex-row"
			onsubmit={(event) => {
				event.preventDefault();
				if (name.trim()) projects.push(name.trim());
				name = '';
				screen = 'projects';
			}}
			><Input
				class="min-w-0 grow"
				aria-label="Project name"
				bind:value={name}
				placeholder="Name your project"
				required
			/><Button type="submit">Create project</Button></Form
		>{/if}{#if message}<Alert role="status" variants={['info']}>{message}</Alert>{/if}<Dialog
		bind:isVisible={open}
		aria-labelledby={uid + '-title'}
		class="w-[calc(100vw-2rem)] max-w-lg space-y-4"
		><H3 id={uid + '-title'} class="text-lg font-semibold">Command palette</H3><Input
			bind:element={input}
			bind:value={query}
			class="w-full"
			aria-label="Search commands"
			placeholder="What would you like to do?"
			role="combobox"
			aria-expanded={open}
			aria-controls={uid + '-results'}
			aria-activedescendant={filtered.length ? uid + '-command-' + active : undefined}
			onkeydown={keyboard}
		/><Div id={uid + '-results'} role="listbox" aria-label="Commands" class="space-y-1"
			>{#each filtered as command, i}<Button
					id={uid + '-command-' + i}
					type="button"
					role="option"
					aria-selected={active === i}
					variants={active === i ? ['soft'] : ['ghost']}
					class="flex w-full items-center justify-between gap-3 text-left"
					onclick={() => run(i)}><span>{command.label}</span><Badge>{command.group}</Badge></Button
				>{/each}{#if !filtered.length}<P role="status" class="p-3 text-sm">No matching commands.</P
				>{/if}</Div
		></Dialog
	></Card
>
