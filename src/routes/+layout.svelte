<script lang="ts">
	import { EllipsisVertical, X } from '@lucide/svelte';
	import { A, Button, Div, Drawer, Header, Img, Main, Nav } from '$lib/components';
	import { theme } from '$lib/theme';
	import * as themes from '$lib/themes';
	import '../app.css';
	import { twMerge } from 'tailwind-merge';

	// $props
	let { children } = $props();

	// $state
	let nav = $state({
		isOpen: false,
		items: [{ href: '/components', label: 'Components' }]
	});

	// $effects
	$effect(() => {
		theme.update(themes.default);
	});
</script>

<Div class="relative flex flex-col">
	<Header
		class={twMerge(
			theme.getComponentVariant('Card', 'default'),
			'sticky top-0 flex min-h-14 items-center justify-between space-x-4 rounded-none bg-gray-50 px-4 py-1 sm:px-6 dark:bg-gray-950'
		)}
	>
		<Div>
			<A href="/">
				<Img class="hidden h-5 dark:block" src="/images/logo-dark.svg" />
				<Img class="block h-5 dark:hidden" src="/images/logo-light.svg" />
			</A>
		</Div>
		<Div class="sm:hidden">
			<Button class="-mr-6" onclick={() => (nav.isOpen = true)} variants={['icon', 'transparent']}>
				<EllipsisVertical size={16} />
			</Button>
			<Drawer bind:isVisible={nav.isOpen} class="p-0" position="right">
				<Nav class="relative pt-14">
					{#each nav.items as { href, label }}
						<A class="px-6 py-3" {href}>{label}</A>
					{/each}
					<Button
						class="absolute top-1 right-1"
						onclick={() => (nav.isOpen = false)}
						variants={['icon', 'transparent']}
					>
						<X size={16} />
					</Button>
				</Nav>
			</Drawer>
		</Div>
		<Nav class="hidden sm:flex">
			{#each nav.items as { href, label }}
				<A class="text-sm/6" {href} variants={['no-underline']}>{label}</A>
			{/each}
		</Nav>
	</Header>
	<Main class="flex flex-col">
		{@render children()}
	</Main>
</Div>
