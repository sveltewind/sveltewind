<script lang="ts">
	import {
		A,
		Avatar,
		AvatarGroup,
		Badge,
		Breadcrumbs,
		Button,
		Card,
		Carousel,
		Combobox,
		Div,
		Drawer,
		DropdownMenu,
		FileUpload,
		H3,
		MultiSelect,
		P,
		SearchField,
		Skeleton,
		Span,
		Stepper,
		Toast,
		Toaster,
		type ToastItem
	} from '$lib/components';
	// Types
	type Props = {
		name:
			| 'Avatar'
			| 'AvatarGroup'
			| 'Breadcrumbs'
			| 'Skeleton'
			| 'Drawer'
			| 'SearchField'
			| 'Stepper'
			| 'DropdownMenu'
			| 'Combobox'
			| 'MultiSelect'
			| 'Toast'
			| 'Toaster'
			| 'FileUpload'
			| 'Carousel';
	};
	// Constants
	const options = [
		{ label: 'Svelte', value: 'svelte' },
		{ label: 'TypeScript', value: 'typescript' },
		{ label: 'Tailwind CSS', value: 'tailwind' },
		{ disabled: true, label: 'Unavailable option', value: 'disabled' }
	];
	const uid = $props.id();
	// $props
	let { name }: Props = $props();
	// $state
	let drawerVisible = $state(false);
	let message = $state('');
	let selected = $state('');
	let selectedMany = $state(['svelte']);
	let sequence = $state(0);
	let step = $state(1);
	let toastVisible = $state(true);
	let toasts = $state<ToastItem[]>([]);
</script>

<Div class="w-full min-w-0">
	{#if name === 'Avatar'}<Div class="flex items-center justify-center gap-3"
			><Avatar name="Alex Morgan" /><Avatar name="Sam Rivera" variants={['lg']} /></Div
		>
	{:else if name === 'AvatarGroup'}<AvatarGroup
			avatars={[
				{ name: 'Alex Morgan' },
				{ name: 'Sam Rivera' },
				{ name: 'Casey Lee' },
				{ name: 'Taylor Gray' }
			]}
			max={3}
		/>
	{:else if name === 'Breadcrumbs'}<Breadcrumbs
			items={[
				{ href: '/', label: 'Home' },
				{ href: '/components', label: 'Components' },
				{ label: 'Preview' }
			]}
		/>
	{:else if name === 'Carousel'}<Carousel
			label="Example cards"
			slides={[
				{ content: firstSlide, id: 'first', label: 'First card' },
				{ content: secondSlide, id: 'second', label: 'Second card' },
				{ content: thirdSlide, id: 'third', label: 'Third card' }
			]}
		/>
	{:else if name === 'Combobox'}<Combobox {options} label="Favorite tool" bind:value={selected} /><P
			aria-live="polite"
			class="mt-3 text-xs"
			>{selected ? `Selected: ${selected}` : 'Type to search, or use the arrow keys.'}</P
		>
	{:else if name === 'Drawer'}<Button type="button" onclick={() => (drawerVisible = true)}
			>Open drawer</Button
		><Drawer title="Your workspace" bind:isVisible={drawerVisible}
			><P>Keep navigation and helpful actions close by.</P><A
				href="/getting-started/theming"
				class="mt-4 inline-block">Explore theming</A
			></Drawer
		>
	{:else if name === 'DropdownMenu'}<DropdownMenu
			label="Actions"
			items={[
				{ label: 'Edit', value: 'edit' },
				{ label: 'Duplicate', value: 'duplicate' },
				{ disabled: true, label: 'Delete', value: 'delete' }
			]}
			onSelect={(item) => (message = `${item.label} selected`)}
		/><P aria-live="polite" class="mt-3 text-xs">{message}</P>
	{:else if name === 'FileUpload'}<FileUpload
			label="Images or PDFs"
			multiple
			accept="image/*,.pdf"
			maxSize={5 * 1024 * 1024}
		/>
	{:else if name === 'MultiSelect'}<MultiSelect
			{options}
			label="Your tools"
			bind:value={selectedMany}
		/>
	{:else if name === 'SearchField'}<SearchField
			label="Search components"
			placeholder="Find a component..."
			onSearch={(value) => (message = value ? `Searching for ${value}` : 'Enter a search term.')}
		/><P aria-live="polite" class="mt-3 text-xs">{message}</P>
	{:else if name === 'Skeleton'}<Div class="flex items-center gap-4"
			><Skeleton variants={['circle']} /><Div class="grow space-y-3"
				><Skeleton variants={['text']} /><Skeleton variants={['text']} class="w-2/3" /></Div
			></Div
		>
	{:else if name === 'Stepper'}<Stepper
			steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Finish' }]}
			allowNavigation
			bind:current={step}
		/>
	{:else if name === 'Toast'}{#if toastVisible}<Toast
				title="Changes saved"
				message="You're ready to keep building."
				status="success"
				duration={0}
				bind:isVisible={toastVisible}
			/>{:else}<Button type="button" onclick={() => (toastVisible = true)}>Show toast</Button>{/if}
	{:else if name === 'Toaster'}<Button
			type="button"
			onclick={() => {
				sequence++;
				toasts = [
					...toasts,
					{
						id: `${uid}-${sequence}`,
						message: 'Your changes have been saved.',
						status: 'success',
						title: 'All done'
					}
				];
			}}>Show notification</Button
		><Toaster bind:toasts />
	{/if}
</Div>
{#snippet firstSlide()}<Card class="flex min-h-32 flex-col justify-center bg-primary-500/5"
		><Badge>One</Badge><H3 class="mt-3 text-lg">Start with a component.</H3></Card
	>{/snippet}
{#snippet secondSlide()}<Card class="flex min-h-32 flex-col justify-center bg-primary-500/10"
		><Badge>Two</Badge><H3 class="mt-3 text-lg">Make it your own.</H3></Card
	>{/snippet}
{#snippet thirdSlide()}<Card class="flex min-h-32 flex-col justify-center bg-primary-500/15"
		><Badge>Three</Badge><H3 class="mt-3 text-lg">Share your styles.</H3></Card
	>{/snippet}
