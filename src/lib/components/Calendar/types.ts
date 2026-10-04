/** Date-only values use YYYY-MM-DD, years 0001–9999. */
export type CalendarDay = {
	date: string;
	day: number;
	selected: boolean;
	today: boolean;
	disabled: boolean;
};
