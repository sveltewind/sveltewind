<script lang="ts">
	import { A, BlockLink, Card, Div, DocsSection, H1, H2, P } from '$components';
	import * as Components from '$lib/components';
	import { tooltip } from '$lib/attachments';
	import type { Component, ComponentProps, Snippet } from 'svelte';
	import { SwatchBook } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	// Types
	type ComponentName = Exclude<keyof typeof Components, 'noopTransition'>;
	type Preview = {
		children?: string | Snippet;
		preview?: Snippet;
		props?: Record<string, unknown>;
	};

	// Constants
	const componentNames = Object.keys(Components)
		.filter((name): name is ComponentName => /^[A-Z]/.test(name))
		.sort((a, b) => a.localeCompare(b));
	const image = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="240" height="120" viewBox="0 0 240 120"><rect width="240" height="120" rx="8" fill="#e0e7ff"/><circle cx="180" cy="30" r="16" fill="#818cf8"/><path d="M0 120 70 40 130 100 165 65 240 120" fill="#6366f1"/></svg>')}`;

	// $state
	let dialogVisible = $state(false);

	// Previews
	const previews: Partial<Record<ComponentName, Preview>> = {
		A: { children: 'Explore Sveltewind', props: { href: '/getting-started/usage' } },
		Accordion: {
			children: 'Use native keyboard controls to expand this section.',
			props: { summary: 'Learn more' }
		},
		Alert: { children: 'Your changes have been saved.', props: { variants: ['success'] } },
		Badge: { children: 'New', props: { variants: ['info'] } },
		Button: { children: 'Button' },
		Checkbox: { children: 'Remember me' },
		Circle: { preview: circlePreview },
		Code: { children: "const hello = 'world';" },
		CodeBlock: {
			props: {
				code: "const hello = 'world';",
				options: { theme: 'github-light' },
				title: 'hello.ts'
			}
		},
		Details: { preview: detailsPreview },
		Dialog: { preview: dialogPreview },
		Field: { children: fieldChildren },
		Fieldset: { children: fieldsetChildren },
		Form: {
			children: formChildren,
			props: { onsubmit: (event: SubmitEvent) => event.preventDefault() }
		},
		Img: {
			props: { alt: 'Illustrated mountain landscape', height: '120', src: image, width: '240' }
		},
		Input: { props: { 'aria-label': 'Example input', placeholder: 'Type something…' } },
		Label: { children: labelChildren, props: { for: 'preview-label' } },
		Legend: { preview: legendPreview },
		Li: { preview: liPreview },
		Nav: { children: navChildren, props: { class: 'flex gap-4' } },
		Ol: { children: listChildren },
		Option: { preview: optionPreview },
		P: { children: 'Build something beautiful with Sveltewind.' },
		Pile: { children: pileChildren },
		Popover: {
			children: 'Hello from Popover.',
			props: {
				'aria-label': 'Example popover',
				popover: 'manual',
				role: 'dialog',
				transition: [fade, { duration: 200 }],
				trigger: popoverTrigger
			}
		},
		Pre: { children: "const hello = 'world';" },
		Radio: { preview: radioPreview },
		Range: { props: { 'aria-label': 'Example range' } },
		Select: { children: selectChildren, props: { 'aria-label': 'Example select' } },
		Shiki: { props: { code: "const hello = 'world';", options: { theme: 'github-light' } } },
		Source: { preview: sourcePreview },
		Spinner: { props: { 'aria-label': 'Loading', role: 'img' } },
		Summary: { preview: detailsPreview },
		Svg: { preview: circlePreview },
		Switch: { children: 'Notifications' },
		Table: { preview: tablePreview },
		Tabs: {
			props: {
				tabs: [
					{ title: 'One', value: 'one' },
					{ title: 'Two', value: 'two' }
				],
				value: 'one'
			}
		},
		Tbody: { preview: tablePreview },
		Td: { preview: tablePreview },
		Textarea: {
			props: { 'aria-label': 'Example textarea', placeholder: 'Write a message…', rows: 2 }
		},
		Th: { preview: tablePreview },
		Thead: { preview: tablePreview },
		Tooltip: { preview: tooltipPreview },
		Tr: { preview: tablePreview },
		Ul: { children: listChildren },
		Video: {
			props: {
				'aria-label': 'Example video player',
				controls: true,
				height: '120',
				poster: image,
				width: '240'
			}
		}
	};
</script>

<DocsSection>
	<H1>Components</H1>
	<P>
		Sveltewind provides primitives and higher-level components for Svelte 5. Browse the components
		below to find the building blocks for your interface.
	</P>
	<P>
		Customize components with classes, theme overrides, and variants. Learn more in the
		<A href="/getting-started/usage">usage guide</A> and
		<A href="/getting-started/theming">theming guide</A>.
	</P>
</DocsSection>

<DocsSection>
	<H2>All components</H2>
	<Div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each componentNames as name (name)}
			<Card class="flex min-w-0 flex-col p-0">
				<Div class="flex min-h-48 min-w-0 grow items-center justify-center overflow-hidden p-6">
					{@const config: Preview = previews[name] ?? { children: name }}
					{#if config.preview}
						{@render config.preview()}
					{:else}
						{@const PreviewComponent = Components[name] as Component<
							Record<string, unknown> & { children?: Snippet }
						>}
						{#if config.children !== undefined}
							<PreviewComponent {...config.props}>
								{#if typeof config.children === 'string'}
									{config.children}
								{:else}
									{@render config.children()}
								{/if}
							</PreviewComponent>
						{:else}
							<PreviewComponent {...config.props} />
						{/if}
					{/if}
				</Div>
				<A
					class="block rounded-b-md border-t border-gray-200 px-4 py-3 text-center font-medium dark:border-gray-700"
					href={`/components/${name.toLowerCase()}`}
					variants={['ghost']}>{name}</A
				>
			</Card>
		{/each}
	</Div>
</DocsSection>

<DocsSection>
	<BlockLink
		class="items-start text-left"
		description="Getting started is simple — install the package and you’re ready to go."
		href="/getting-started/theming"
		Icon={SwatchBook}
		title="Theming"
	/>
	<Div />
</DocsSection>

{#snippet circlePreview()}
	<Components.Svg aria-label="Circle" height="64" role="img" viewBox="0 0 64 64" width="64">
		<Components.Circle cx="32" cy="32" fill="currentColor" r="24" />
	</Components.Svg>
{/snippet}

{#snippet dialogPreview()}
	<Components.Button onclick={() => (dialogVisible = true)}>Open dialog</Components.Button>
	<Components.Dialog aria-label="Example dialog" bind:isVisible={dialogVisible}>
		<Components.P>Hello from Dialog.</Components.P>
		<Components.Button onclick={() => (dialogVisible = false)}>Close</Components.Button>
	</Components.Dialog>
{/snippet}

{#snippet fieldChildren()}
	<Components.Label for="preview-field">Email</Components.Label>
	<Components.Input id="preview-field" placeholder="you@example.com" type="email" />
{/snippet}

{#snippet fieldsetChildren()}
	<Components.Legend>Preferences</Components.Legend>
	<Components.Checkbox>Notifications</Components.Checkbox>
{/snippet}

{#snippet formChildren()}
	<Components.Field>
		<Components.Label for="preview-form">Your name</Components.Label>
		<Components.Input id="preview-form" placeholder="Ada" />
	</Components.Field>
	<Components.Button>Submit</Components.Button>
{/snippet}

{#snippet labelChildren()}
	<Components.Label for="preview-form">Your name</Components.Label>
{/snippet}

{#snippet legendPreview()}
	<Components.Fieldset>
		<Components.Legend>Account details</Components.Legend>
		<Components.P>Your preferences go here.</Components.P>
	</Components.Fieldset>
{/snippet}

{#snippet liPreview()}
	<Components.Ul>{@render listChildren()}</Components.Ul>
{/snippet}

{#snippet listChildren()}
	<Components.Li>First item</Components.Li>
	<Components.Li>Second item</Components.Li>
{/snippet}

{#snippet navChildren()}
	<Components.A href="/components">Components</Components.A>
	<Components.A href="/getting-started/usage">Usage</Components.A>
{/snippet}

{#snippet optionPreview()}
	<Components.Select aria-label="Example select">{@render selectChildren()}</Components.Select>
{/snippet}

{#snippet pileChildren()}
	<Components.Card class="rotate-6 bg-gray-100 dark:bg-gray-900">Behind</Components.Card>
	<Components.Card class="bg-gray-50 dark:bg-gray-950">On top</Components.Card>
{/snippet}

{#snippet popoverTrigger(props: ComponentProps<typeof Components.Button>)}
	<Components.Button {...props}>Open popover</Components.Button>
{/snippet}

{#snippet radioPreview()}
	<Components.Label class="flex items-center gap-2"
		><Components.Radio aria-label="Example radio" value="example" /> Choose me</Components.Label
	>
{/snippet}

{#snippet selectChildren()}
	<Components.Option>Choose an option</Components.Option>
	<Components.Option>First option</Components.Option>
	<Components.Option>Second option</Components.Option>
{/snippet}

{#snippet sourcePreview()}
	<picture>
		<Components.Source srcset={image} type="image/svg+xml" />
		<Components.Img alt="Landscape provided by Source" height="120" src={image} width="240" />
	</picture>
{/snippet}

{#snippet tablePreview()}
	<Components.Table>
		<Components.Thead
			><Components.Tr
				><Components.Th>Name</Components.Th><Components.Th>Role</Components.Th></Components.Tr
			></Components.Thead
		>
		<Components.Tbody
			><Components.Tr
				><Components.Td>Ada</Components.Td><Components.Td>Developer</Components.Td></Components.Tr
			></Components.Tbody
		>
	</Components.Table>
{/snippet}

{#snippet tooltipPreview()}
	<Components.Button {@attach tooltip({ content: 'Hello from Tooltip.' })}
		>Hover or focus</Components.Button
	>
	<Components.Tooltip />
{/snippet}

{#snippet detailsPreview()}
	<Components.Details>
		<Components.Summary>Learn more</Components.Summary>
		<Components.P>Native disclosure content.</Components.P>
	</Components.Details>
{/snippet}
