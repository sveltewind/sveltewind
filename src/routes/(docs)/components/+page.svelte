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
		ClipPath: { preview: clipPathPreview },
		Code: { children: "const hello = 'world';" },
		CodeBlock: {
			props: {
				code: "const hello = 'world';",
				options: { theme: 'github-light' },
				title: 'hello.ts'
			}
		},
		Defs: { preview: defsPreview },
		Details: { preview: detailsPreview },
		Dialog: { preview: dialogPreview },
		Ellipse: { preview: ellipsePreview },
		Field: { children: fieldChildren },
		Fieldset: { children: fieldsetChildren },
		ForeignObject: { preview: foreignObjectPreview },
		Form: {
			children: formChildren,
			props: { onsubmit: (event: SubmitEvent) => event.preventDefault() }
		},
		G: { preview: gPreview },
		Img: {
			props: { alt: 'Illustrated mountain landscape', height: '120', src: image, width: '240' }
		},
		Input: { props: { 'aria-label': 'Example input', placeholder: 'Type something…' } },
		Label: { children: labelChildren, props: { for: 'preview-label' } },
		Legend: { preview: legendPreview },
		Li: { preview: liPreview },
		Line: { preview: linePreview },
		LinearGradient: { preview: linearGradientPreview },
		Marker: { preview: markerPreview },
		Mask: { preview: maskPreview },
		Nav: { children: navChildren, props: { class: 'flex gap-4' } },
		Ol: { children: listChildren },
		Option: { preview: optionPreview },
		P: { children: 'Build something beautiful with Sveltewind.' },
		Path: { preview: pathPreview },
		Pattern: { preview: patternPreview },
		Pile: { children: pileChildren },
		Polygon: { preview: polygonPreview },
		Polyline: { preview: polylinePreview },
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
		RadialGradient: { preview: radialGradientPreview },
		Radio: { preview: radioPreview },
		Range: {
			props: { 'aria-label': 'Example range', class: 'w-full max-w-48', value: 40 }
		},
		Rect: { preview: rectPreview },
		Select: { children: selectChildren, props: { 'aria-label': 'Example select' } },
		Shiki: { props: { code: "const hello = 'world';", options: { theme: 'github-light' } } },
		Source: { preview: sourcePreview },
		Spinner: { props: { 'aria-label': 'Loading', role: 'img' } },
		Stop: { preview: stopPreview },
		Summary: { preview: detailsPreview },
		Svg: { preview: circlePreview },
		SvgDesc: { preview: svgDescPreview },
		SvgImage: { preview: svgImagePreview },
		SvgTitle: { preview: svgTitlePreview },
		Switch: { children: 'Notifications' },
		Symbol: { preview: symbolPreview },
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
		Text: { preview: textPreview },
		TextPath: { preview: textPathPreview },
		Textarea: {
			props: { 'aria-label': 'Example textarea', placeholder: 'Write a message…', rows: 2 }
		},
		Th: { preview: tablePreview },
		Thead: { preview: tablePreview },
		Tooltip: { preview: tooltipPreview },
		Tr: { preview: tablePreview },
		Tspan: { preview: tspanPreview },
		Ul: { children: listChildren },
		Use: { preview: usePreview },
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
		<Components.Circle cx="32" cy="32" r="24" variants={['fill', 'primary']} />
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

{#snippet clipPathPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="ClipPath example"
		><Components.Defs
			><Components.ClipPath id="gallery-clippath-clip"
				><Components.Circle cx={50} cy={50} r={35} /></Components.ClipPath
			></Components.Defs
		><Components.Rect
			width={100}
			height={100}
			clip-path="url(#gallery-clippath-clip)"
			variants={['fill', 'primary']}
		/></Components.Svg
	>
{/snippet}

{#snippet defsPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Defs example"
		><Components.Defs
			><Components.LinearGradient id="gallery-defs-fill"
				><Components.Stop offset="0%" stop-color="currentColor" /><Components.Stop
					offset="100%"
					stop-color="currentColor"
					stop-opacity={0.2}
				/></Components.LinearGradient
			></Components.Defs
		><Components.Rect
			width={100}
			height={100}
			fill="url(#gallery-defs-fill)"
			class="text-primary-500"
		/></Components.Svg
	>
{/snippet}

{#snippet ellipsePreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Ellipse example"
		><Components.Ellipse
			cx={50}
			cy={50}
			rx={40}
			ry={25}
			variants={['fill', 'primary']}
		/></Components.Svg
	>
{/snippet}

{#snippet foreignObjectPreview()}
	<Components.Svg
		viewBox="0 0 100 100"
		class="size-24"
		role="img"
		aria-label="ForeignObject example"
		><Components.ForeignObject x={5} y={5} width={90} height={90}
			><Components.Div class="p-2 text-xs">HTML content inside SVG.</Components.Div
			></Components.ForeignObject
		></Components.Svg
	>
{/snippet}

{#snippet gPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="G example"
		><Components.G transform="translate(10 10)" variants={['fill', 'primary']}
			><Components.Rect width={30} height={30} /><Components.Circle
				cx={60}
				cy={60}
				r={20}
			/></Components.G
		></Components.Svg
	>
{/snippet}

{#snippet linePreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Line example"
		><Components.Line
			x1={10}
			y1={20}
			x2={90}
			y2={80}
			stroke-width={4}
			variants={['outline', 'primary', 'rounded']}
		/></Components.Svg
	>
{/snippet}

{#snippet linearGradientPreview()}
	<Components.Svg
		viewBox="0 0 100 100"
		class="size-24"
		role="img"
		aria-label="LinearGradient example"
		><Components.Defs
			><Components.LinearGradient id="gallery-lineargradient-linear"
				><Components.Stop offset="0%" stop-color="currentColor" /><Components.Stop
					offset="100%"
					stop-color="currentColor"
					stop-opacity={0.2}
				/></Components.LinearGradient
			></Components.Defs
		><Components.Rect
			width={100}
			height={100}
			fill="url(#gallery-lineargradient-linear)"
			class="text-primary-500"
		/></Components.Svg
	>
{/snippet}

{#snippet markerPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Marker example"
		><Components.Defs
			><Components.Marker
				id="gallery-marker-arrow"
				viewBox="0 0 10 10"
				refX={9}
				refY={5}
				markerWidth={6}
				markerHeight={6}
				orient="auto-start-reverse"
				><Components.Path d="M0 0 L10 5 L0 10 Z" fill="context-stroke" /></Components.Marker
			></Components.Defs
		><Components.Line
			x1={10}
			y1={50}
			x2={80}
			y2={50}
			stroke-width={3}
			marker-end="url(#gallery-marker-arrow)"
			variants={['outline', 'primary']}
		/></Components.Svg
	>
{/snippet}

{#snippet maskPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Mask example"
		><Components.Defs
			><Components.Mask id="gallery-mask-mask"
				><Components.Rect width={100} height={100} fill="white" /><Components.Circle
					cx={50}
					cy={50}
					r={20}
					fill="black"
				/></Components.Mask
			></Components.Defs
		><Components.Rect
			width={100}
			height={100}
			mask="url(#gallery-mask-mask)"
			variants={['fill', 'primary']}
		/></Components.Svg
	>
{/snippet}

{#snippet pathPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Path example"
		><Components.Path
			d="M10 50 L40 80 L90 20"
			stroke-width={5}
			variants={['outline', 'primary', 'rounded']}
		/></Components.Svg
	>
{/snippet}

{#snippet patternPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Pattern example"
		><Components.Defs
			><Components.Pattern
				id="gallery-pattern-pattern"
				width={20}
				height={20}
				patternUnits="userSpaceOnUse"
				><Components.Circle
					cx={10}
					cy={10}
					r={4}
					variants={['fill', 'primary']}
				/></Components.Pattern
			></Components.Defs
		><Components.Rect
			width={100}
			height={100}
			fill="url(#gallery-pattern-pattern)"
		/></Components.Svg
	>
{/snippet}

{#snippet polygonPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Polygon example"
		><Components.Polygon
			points="50,10 90,85 10,85"
			variants={['fill', 'primary']}
		/></Components.Svg
	>
{/snippet}

{#snippet polylinePreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Polyline example"
		><Components.Polyline
			points="10,70 30,30 50,60 70,20 90,50"
			stroke-width={4}
			variants={['outline', 'primary', 'rounded']}
		/></Components.Svg
	>
{/snippet}

{#snippet radialGradientPreview()}
	<Components.Svg
		viewBox="0 0 100 100"
		class="size-24"
		role="img"
		aria-label="RadialGradient example"
		><Components.Defs
			><Components.RadialGradient id="gallery-radialgradient-radial"
				><Components.Stop offset="0%" stop-color="currentColor" /><Components.Stop
					offset="100%"
					stop-color="currentColor"
					stop-opacity={0.1}
				/></Components.RadialGradient
			></Components.Defs
		><Components.Circle
			cx={50}
			cy={50}
			r={45}
			fill="url(#gallery-radialgradient-radial)"
			class="text-primary-500"
		/></Components.Svg
	>
{/snippet}

{#snippet rectPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Rect example"
		><Components.Rect
			x={10}
			y={20}
			width={80}
			height={60}
			rx={8}
			variants={['fill', 'primary']}
		/></Components.Svg
	>
{/snippet}

{#snippet stopPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Stop example"
		><Components.Defs
			><Components.LinearGradient id="gallery-stop-stop"
				><Components.Stop offset="0%" variants={['primary']} /><Components.Stop
					offset="100%"
					variants={['primary', 'transparent']}
				/></Components.LinearGradient
			></Components.Defs
		><Components.Rect width={100} height={100} fill="url(#gallery-stop-stop)" /></Components.Svg
	>
{/snippet}

{#snippet svgDescPreview()}
	<Components.Svg
		viewBox="0 0 100 100"
		class="size-24"
		role="img"
		aria-label="SvgDesc example"
		aria-describedby="gallery-svgdesc-description"
		><Components.SvgDesc id="gallery-svgdesc-description"
			>A violet rectangle with rounded corners.</Components.SvgDesc
		><Components.Rect
			x={10}
			y={20}
			width={80}
			height={60}
			rx={8}
			variants={['fill', 'primary']}
		/></Components.Svg
	>
{/snippet}

{#snippet svgImagePreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="SvgImage example"
		><Components.SvgImage
			href="/images/logo-light.svg"
			x={5}
			y={35}
			width={90}
			height={30}
			preserveAspectRatio="xMidYMid meet"
		/></Components.Svg
	>
{/snippet}

{#snippet svgTitlePreview()}
	<Components.Svg
		viewBox="0 0 100 100"
		class="size-24"
		role="img"
		aria-labelledby="gallery-svgtitle-title"
		><Components.SvgTitle id="gallery-svgtitle-title">A violet rectangle</Components.SvgTitle
		><Components.Rect
			x={10}
			y={20}
			width={80}
			height={60}
			rx={8}
			variants={['fill', 'primary']}
		/></Components.Svg
	>
{/snippet}

{#snippet symbolPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Symbol example"
		><Components.Defs
			><Components.Symbol id="gallery-symbol-symbol" viewBox="0 0 100 100"
				><Components.Path
					d="M10 50 L40 80 L90 20"
					fill="none"
					stroke="currentColor"
					stroke-width={8}
				/></Components.Symbol
			></Components.Defs
		><Components.Use
			href="#gallery-symbol-symbol"
			width={100}
			height={100}
			class="text-primary-500"
		/></Components.Svg
	>
{/snippet}

{#snippet textPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Text example"
		><Components.Text x={50} y={55} text-anchor="middle" font-size={18} variants={['primary']}
			>Hello SVG</Components.Text
		></Components.Svg
	>
{/snippet}

{#snippet textPathPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="TextPath example"
		><Components.Defs
			><Components.Path id="gallery-textpath-text-path" d="M10 70 Q50 10 90 70" /></Components.Defs
		><Components.Text font-size={12}
			><Components.TextPath
				href="#gallery-textpath-text-path"
				startOffset="50%"
				text-anchor="middle"
				variants={['primary']}>Along a curve</Components.TextPath
			></Components.Text
		></Components.Svg
	>
{/snippet}

{#snippet tspanPreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Tspan example"
		><Components.Text x={10} y={45} font-size={14}
			><Components.Tspan>First line</Components.Tspan><Components.Tspan
				x={10}
				dy={20}
				variants={['primary']}>Second line</Components.Tspan
			></Components.Text
		></Components.Svg
	>
{/snippet}

{#snippet usePreview()}
	<Components.Svg viewBox="0 0 100 100" class="size-24" role="img" aria-label="Use example"
		><Components.Defs
			><Components.Path id="gallery-use-shape" d="M10 10 H40 V40 H10 Z" /></Components.Defs
		><Components.Use href="#gallery-use-shape" variants={['fill', 'primary']} /><Components.Use
			href="#gallery-use-shape"
			x={45}
			y={45}
			variants={['fill', 'primary']}
		/></Components.Svg
	>
{/snippet}
