<script lang="ts">
	import { Code, P } from '$components';
	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Calendar.svelte';
	import examples from '$components/ComponentDoc/previews/Calendar.svelte?component-examples&raw';
	const props = [
		{
			name: 'value',
			type: 'string',
			defaultValue: "$bindable('')",
			description: 'Selected YYYY-MM-DD date. Empty means no selection.'
		},
		{
			name: 'month',
			type: 'string | undefined',
			defaultValue: '$bindable(undefined)',
			description:
				'Visible month as YYYY-MM-DD. Defaults to the selected date or local today. Navigation writes the first day of the month.'
		},
		{
			name: 'min / max',
			type: 'string',
			defaultValue: 'undefined',
			description: 'Inclusive selectable YYYY-MM-DD bounds.'
		},
		{
			name: 'isDateDisabled',
			type: '(date: string) => boolean',
			defaultValue: 'undefined',
			description: 'Return true to prevent selection of a date.'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: 'false',
			description: 'Disable selection, navigation, and keyboard focus.'
		},
		{
			name: 'locale',
			type: 'string',
			defaultValue: "'en-US'",
			description:
				'Intl locale for month, weekday, and full date labels. Uses the Gregorian calendar.'
		},
		{
			name: 'weekStartsOn',
			type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
			defaultValue: '0',
			description: 'First weekday, from Sunday (0) through Saturday (6).'
		},
		{
			name: 'label',
			type: 'string',
			defaultValue: "'Choose a date'",
			description: 'Accessible group label; aria-label takes precedence.'
		},
		{
			name: 'previousLabel / nextLabel',
			type: 'string',
			defaultValue: "'Previous month' / 'Next month'",
			description: 'Accessible navigation labels; supply translations with locale.'
		},
		{
			name: 'onValueChange',
			type: '(value: string) => void',
			defaultValue: 'undefined',
			description: 'Called when the user selects an available date.'
		},
		{
			name: 'onMonthChange',
			type: '(month: string) => void',
			defaultValue: 'undefined',
			description: 'Called when the user navigates to another month.'
		},
		{
			name: 'day',
			type: 'Snippet<[CalendarDay]>',
			defaultValue: 'undefined',
			description: 'Custom non-interactive day content: date, day, selected, today, disabled.'
		},
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Optional content after the month grid.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind utilities merged after theme styles and variants.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Ordered variants: compact, bordered, soft; supports theme references.'
		},
		{
			name: 'theme',
			type: 'Theme',
			defaultValue: 'globalTheme',
			description: 'Local theme override, passed to all component parts.'
		},
		{
			name: 'element',
			type: 'HTMLDivElement | null',
			defaultValue: '$bindable(null)',
			description: 'Bindable root element.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: '$bindable(true)',
			description: 'Bindable root visibility.'
		},
		{
			name: 'transition',
			type: 'TransitionProps',
			defaultValue: '[noopTransition, {}]',
			description: 'Root transition function and options.'
		},
		{
			name: 'inTransition / outTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Root enter and exit transition overrides.'
		}
	];
	const parts = [
		'calendar',
		'calendarHeader',
		'calendarTitle',
		'calendarNavigation',
		'calendarGrid',
		'calendarHead',
		'calendarRow',
		'calendarWeekday',
		'calendarCell',
		'calendarDay'
	];
</script>

<ComponentDoc name="Calendar" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>
			A month-view date selector with keyboard navigation, localized labels, and themeable day
			content.
		</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and events are forwarded to the root Div. Import Calendar from
			sveltewind/components; CalendarDay is also exported as a type.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>
			Values are date-only strings, not timestamps. Use YYYY-MM-DD for years 0001–9999; do not
			convert values through toISOString. Invalid values or months fall back to the selected date or
			local today; invalid bounds are ignored. Navigation never changes the selection. After
			navigating, the month stays independent of value; bind month to control the visible month
			externally.
		</P>
		<P>
			Arrow keys move one day or week. Home and End move to the start or end of a week. Page Up and
			Page Down move one month; hold Shift to move one year. Enter or Space selects. Tab enters the
			grid at one day and then leaves it. Unavailable dates remain focusable and announce
			aria-disabled, but cannot be selected. A fully disabled calendar removes all controls from the
			tab order.
		</P>
		<P>
			The visible month is clamped to the bound months. Bounds prevent navigation beyond their
			months. Disabled-date callbacks do not block browsing. Existing selections are retained if
			constraints change. Use a hidden input bound to value when submitting a native form. Keep
			custom day content non-interactive and provide any additional accessible day description in
			your snippet.
		</P>
	{/snippet}
	{#snippet notes()}
		<P>
			All bundled themes, including the legacy default alias, support compact, bordered, and soft.
			Compact reduces width and day height; bordered adds an outline; soft changes the surface.
			Variants can be combined.
		</P>
		<P>
			Theme entries: {#each parts as part, index (part)}{#if index > 0},
				{/if}<Code>{part}</Code>{/each}. The calendarDay entry uses today, selected, and disabled
			state variants.
		</P>
	{/snippet}
</ComponentDoc>
