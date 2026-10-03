<script lang="ts">
	import { Button, Div, Input, Label, Li, P, Span, Ul, noopTransition } from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	// Types

	type Props = HTMLAttributes<HTMLDivElement> & {
		accept?: string;
		children?: Snippet;
		class?: string;
		disabled?: boolean;
		element?: HTMLDivElement | null;
		files?: File[];
		inTransition?: TransitionProps;
		isVisible?: boolean;
		label?: string;
		maxSize?: number;
		multiple?: boolean;
		name?: string | undefined;
		onError?: ((message: string) => void) | undefined;
		onFilesChange?: ((files: File[]) => void) | undefined;
		outTransition?: TransitionProps;
		required?: boolean;
		theme?: Theme;
		transition?: TransitionProps;
		variants?: string[];
	};

	// Constants
	const uid = $props.id();

	// $props
	let {
		accept = '',
		children,
		class: className = '',
		disabled = false,
		element = $bindable(null),
		files = $bindable([]),
		inTransition,
		isVisible = $bindable(true),
		label = 'Upload files',
		maxSize = Infinity,
		multiple = false,
		name,
		onError,
		onFilesChange,
		outTransition,
		required = false,
		theme = globalTheme,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// $state
	let dragging = $state(false);
	let error = $state('');
	let input = $state<HTMLInputElement | null>(null);

	// $derived
	const classes = $derived(theme.resolve('fileUpload', variants, className));

	// Helpers
	const accepts = (file: File) =>
		!accept ||
		accept.split(',').some((entry) => {
			const token = entry.trim().toLowerCase();
			if (token.startsWith('.')) return file.name.toLowerCase().endsWith(token);
			if (token.endsWith('/*')) return file.type.toLowerCase().startsWith(token.slice(0, -1));
			return file.type.toLowerCase() === token;
		});
	const drop = (event: DragEvent & { currentTarget: EventTarget & HTMLDivElement }) => {
		event.preventDefault();
		dragging = false;
		if (!disabled) select(Array.from(event.dataTransfer?.files ?? []));
	};
	const select = (candidates: File[]) => {
		if (disabled) return;
		const valid = candidates.filter((file) => accepts(file) && file.size <= maxSize);
		error =
			valid.length !== candidates.length
				? 'Some files did not match the allowed type or size.'
				: '';
		if (error) onError?.(error);
		files = multiple ? valid : valid.slice(0, 1);
		onFilesChange?.(files);
	};

	// $effect
	$effect(() => {
		if (!input || typeof DataTransfer === 'undefined') return;
		const transfer = new DataTransfer();
		files.forEach((file) => transfer.items.add(file));
		input.files = transfer.files;
	});
</script>

<Div
	{...restProps}
	bind:element
	bind:isVisible
	class={classes}
	{inTransition}
	{outTransition}
	{theme}
	{transition}
>
	<Div
		{theme}
		role="group"
		aria-label={label}
		class={theme.resolve('fileUploadDropzone', [
			dragging ? 'active' : '',
			disabled ? 'disabled' : ''
		])}
		ondragenter={(event) => {
			event.preventDefault();
			if (!disabled) dragging = true;
		}}
		ondragover={(event) => event.preventDefault()}
		ondragleave={(event) => {
			if (
				!(event.relatedTarget instanceof Node) ||
				!event.currentTarget.contains(event.relatedTarget)
			)
				dragging = false;
		}}
		ondrop={drop}
	>
		<Label {theme} for={`${uid}-files`}>{label}</Label><Input
			{theme}
			id={`${uid}-files`}
			bind:element={input}
			type="file"
			{accept}
			{multiple}
			{disabled}
			{name}
			{required}
			class="sr-only"
			onchange={(event) => select(Array.from(event.currentTarget.files ?? []))}
		/>
		{#if children}{@render children()}{:else}<P {theme} class={theme.resolve('fileUploadHint')}
				>Drag files here or choose them from your device.</P
			>{/if}
		<Button {theme} type="button" {disabled} variants={['outline']} onclick={() => input?.click()}
			>Choose {multiple ? 'files' : 'a file'}</Button
		></Div
	>
	{#if error}<P {theme} role="alert" class={theme.resolve('fileUploadError')}>{error}</P>{/if}
	<Ul {theme} variants={['plain']} class={theme.resolve('fileUploadList')}
		>{#each files as file, index (index)}<Li {theme} class={theme.resolve('fileUploadItem')}
				><Span {theme} class="min-w-0 truncate">{file.name}</Span><Button
					{theme}
					type="button"
					{disabled}
					variants={['ghost']}
					class={theme.resolve('fileUploadRemove')}
					aria-label={`Remove ${file.name}`}
					onclick={() => {
						files = files.filter((_, i) => i !== index);
						onFilesChange?.(files);
					}}><Span {theme} aria-hidden="true">&times;</Span></Button
				></Li
			>{/each}</Ul
	></Div
>
