<script lang="ts">
	import {
		Button,
		Div,
		Span,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr,
		noopTransition
	} from '$lib/components';
	import type { TransitionProps } from '$lib/components/types';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import { tick, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CalendarDay } from './types.js';
	import { addDays, addMonths, dateKey, localToday, parseDate, startOfMonth } from './dates.js';

	// Types
	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		day?: Snippet<[CalendarDay]>;
		class?: string;
		disabled?: boolean;
		element?: HTMLDivElement | null;
		inTransition?: TransitionProps;
		isVisible?: boolean;
		isDateDisabled?: (date: string) => boolean;
		label?: string;
		locale?: string;
		min?: string;
		max?: string;
		month?: string;
		nextLabel?: string;
		previousLabel?: string;
		onValueChange?: (value: string) => void;
		onMonthChange?: (month: string) => void;
		outTransition?: TransitionProps;
		theme?: Theme;
		transition?: TransitionProps;
		value?: string;
		variants?: string[];
		weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	};
	// Constants
	const uid = $props.id();
	const today = localToday();

	// $props
	let {
		children,
		day,
		class: className = '',
		disabled = false,
		element = $bindable(null),
		inTransition,
		isVisible = $bindable(true),
		isDateDisabled,
		label = 'Choose a date',
		locale = 'en-US',
		min,
		max,
		month = $bindable(),
		nextLabel = 'Next month',
		previousLabel = 'Previous month',
		onValueChange,
		onMonthChange,
		outTransition,
		theme = globalTheme,
		transition = [noopTransition, {}],
		value = $bindable(''),
		variants = [],
		weekStartsOn = 0,
		...restProps
	}: Props = $props();
	// $state
	let focused = $state('');

	// $derived
	const lower = $derived(parseDate(min) ? min! : '0001-01-01');
	const upper = $derived(parseDate(max) ? max! : '9999-12-31');
	const currentMonth = $derived.by(() => {
		const candidate = startOfMonth(parseDate(month) ?? parseDate(value) ?? parseDate(today)!);
		if (lower > upper) return candidate;
		const first = startOfMonth(parseDate(lower)!);
		const last = startOfMonth(parseDate(upper)!);
		return new Date(Math.max(first.getTime(), Math.min(last.getTime(), candidate.getTime())));
	});
	const monthKey = $derived(dateKey(currentMonth));
	const weekStart = $derived(
		Number.isInteger(weekStartsOn) && weekStartsOn >= 0 && weekStartsOn <= 6 ? weekStartsOn : 0
	);
	const formatter = $derived(
		new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeZone: 'UTC', calendar: 'gregory' })
	);
	const heading = $derived(
		new Intl.DateTimeFormat(locale, {
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC',
			calendar: 'gregory'
		}).format(currentMonth)
	);
	const weekdays = $derived(
		Array.from({ length: 7 }, (_, index) => {
			const date = addDays(parseDate('2023-01-01')!, (weekStart + index) % 7);
			return {
				short: new Intl.DateTimeFormat(locale, {
					weekday: 'short',
					timeZone: 'UTC',
					calendar: 'gregory'
				}).format(date),
				long: new Intl.DateTimeFormat(locale, {
					weekday: 'long',
					timeZone: 'UTC',
					calendar: 'gregory'
				}).format(date)
			};
		})
	);
	const weeks = $derived.by(() => {
		const count = addDays(addMonths(currentMonth, 1), -1).getUTCDate();
		const offset = (currentMonth.getUTCDay() - weekStart + 7) % 7;
		return Array.from({ length: Math.ceil((offset + count) / 7) }, (_, row) =>
			Array.from({ length: 7 }, (_, column) => {
				const number = row * 7 + column - offset + 1;
				return number < 1 || number > count ? null : addDays(currentMonth, number - 1);
			})
		);
	});
	const tabDate = $derived(
		[focused, value, today].find(
			(date) => parseDate(date) && date.slice(0, 7) === monthKey.slice(0, 7)
		) ?? monthKey
	);
	const classes = $derived(theme.resolve('calendar', variants, className));

	// Helpers
	function unavailable(date: string) {
		return disabled || date < lower || date > upper || !!isDateDisabled?.(date);
	}
	function canNavigate(offset: number) {
		const target = addMonths(currentMonth, offset);
		const end = addDays(addMonths(target, 1), -1);
		return (
			!disabled &&
			target.getUTCFullYear() >= 1 &&
			target.getUTCFullYear() <= 9999 &&
			dateKey(end) >= lower &&
			dateKey(target) <= upper
		);
	}
	function showMonth(date: Date) {
		const next = dateKey(startOfMonth(date));
		if (next !== monthKey) {
			month = next;
			onMonthChange?.(next);
		}
	}
	function navigate(offset: number) {
		if (!canNavigate(offset)) return;
		const target = addMonths(parseDate(tabDate)!, offset);
		focused = dateKey(target);
		showMonth(target);
	}
	function select(date: string) {
		if (unavailable(date)) return;
		value = date;
		focused = date;
		onValueChange?.(date);
	}
	async function keydown(event: KeyboardEvent, date: Date) {
		if (disabled || event.altKey || event.ctrlKey || event.metaKey) return;
		let target: Date;
		const weekday = (date.getUTCDay() - weekStart + 7) % 7;
		switch (event.key) {
			case 'ArrowLeft':
				target = addDays(date, -1);
				break;
			case 'ArrowRight':
				target = addDays(date, 1);
				break;
			case 'ArrowUp':
				target = addDays(date, -7);
				break;
			case 'ArrowDown':
				target = addDays(date, 7);
				break;
			case 'Home':
				target = addDays(date, -weekday);
				break;
			case 'End':
				target = addDays(date, 6 - weekday);
				break;
			case 'PageUp':
				target = addMonths(date, event.shiftKey ? -12 : -1);
				break;
			case 'PageDown':
				target = addMonths(date, event.shiftKey ? 12 : 1);
				break;
			default:
				return;
		}
		event.preventDefault();
		if (target.getUTCFullYear() < 1 || target.getUTCFullYear() > 9999) return;
		// Unavailable days remain focusable so assistive technology can explain them.
		if (
			dateKey(startOfMonth(target)) !== monthKey &&
			(dateKey(addDays(addMonths(startOfMonth(target), 1), -1)) < lower ||
				dateKey(startOfMonth(target)) > upper)
		)
			return;
		focused = dateKey(target);
		showMonth(target);
		await tick();
		element?.querySelector<HTMLButtonElement>('[data-calendar-date="' + focused + '"]')?.focus();
	}
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
	role="group"
	aria-label={restProps['aria-label'] ?? label}
	aria-disabled={disabled}
>
	<Div {theme} class={theme.resolve('calendarHeader')}>
		<Button
			{theme}
			type="button"
			class={theme.resolve('calendarNavigation')}
			aria-label={previousLabel}
			disabled={!canNavigate(-1)}
			onclick={() => navigate(-1)}
		>
			<Span {theme} aria-hidden="true">&#8249;</Span>
		</Button>
		<Span
			{theme}
			id={uid + '-heading'}
			class={theme.resolve('calendarTitle')}
			aria-live="polite"
			aria-atomic="true"
		>
			{heading}
		</Span>
		<Button
			{theme}
			type="button"
			class={theme.resolve('calendarNavigation')}
			aria-label={nextLabel}
			disabled={!canNavigate(1)}
			onclick={() => navigate(1)}
		>
			<Span {theme} aria-hidden="true">&#8250;</Span>
		</Button>
	</Div>
	<Table
		{theme}
		role="grid"
		aria-labelledby={uid + '-heading'}
		class={theme.resolve('calendarGrid')}
	>
		<Thead {theme} class={theme.resolve('calendarHead')}>
			<Tr {theme} class={theme.resolve('calendarRow')}>
				{#each weekdays as weekday, index (index)}
					<Th
						{theme}
						scope="col"
						aria-label={weekday.long}
						class={theme.resolve('calendarWeekday')}
					>
						{weekday.short}
					</Th>
				{/each}
			</Tr>
		</Thead>
		<Tbody {theme}>
			{#each weeks as week, row (row)}
				<Tr {theme} class={theme.resolve('calendarRow')}>
					{#each week as date, column (column)}
						{@const key = date ? dateKey(date) : ''}
						<Td
							{theme}
							aria-selected={date ? key === value : undefined}
							class={theme.resolve('calendarCell')}
						>
							{#if date}
								{@const blocked = unavailable(key)}
								<Button
									{theme}
									type="button"
									data-calendar-date={key}
									class={theme.resolve('calendarDay', [
										key === today ? 'today' : '',
										key === value ? 'selected' : '',
										blocked ? 'disabled' : ''
									])}
									{disabled}
									aria-disabled={blocked}
									aria-current={key === today ? 'date' : undefined}
									aria-label={formatter.format(date)}
									tabindex={key === tabDate ? 0 : -1}
									onfocus={() => (focused = key)}
									onclick={() => select(key)}
									onkeydown={(event) => keydown(event, date)}
								>
									{#if day}
										{@render day({
											date: key,
											day: date.getUTCDate(),
											selected: key === value,
											today: key === today,
											disabled: blocked
										})}
									{:else}
										{date.getUTCDate()}
									{/if}
								</Button>
							{/if}
						</Td>
					{/each}
				</Tr>
			{/each}
		</Tbody>
	</Table>
	{#if children}
		{@render children()}
	{/if}
</Div>
