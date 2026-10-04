// Public values are date-only strings; UTC arithmetic avoids DST and timezone shifts.
export function parseDate(value: string | undefined): Date | undefined {
	if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return;
	const [year, month, day] = value.split('-').map(Number);
	if (year < 1) return;
	const date = new Date(0);
	date.setUTCFullYear(year, month - 1, day);
	date.setUTCHours(12, 0, 0, 0);
	if (
		date.getUTCFullYear() !== year ||
		date.getUTCMonth() !== month - 1 ||
		date.getUTCDate() !== day
	)
		return;
	return date;
}
export function dateKey(date: Date): string {
	return (
		String(date.getUTCFullYear()).padStart(4, '0') +
		'-' +
		String(date.getUTCMonth() + 1).padStart(2, '0') +
		'-' +
		String(date.getUTCDate()).padStart(2, '0')
	);
}
export function localToday(): string {
	const date = new Date();
	return (
		String(date.getFullYear()).padStart(4, '0') +
		'-' +
		String(date.getMonth() + 1).padStart(2, '0') +
		'-' +
		String(date.getDate()).padStart(2, '0')
	);
}
export function addDays(date: Date, days: number): Date {
	const result = new Date(date);
	result.setUTCDate(result.getUTCDate() + days);
	return result;
}
export function startOfMonth(date: Date): Date {
	const result = new Date(date);
	result.setUTCDate(1);
	return result;
}
export function addMonths(date: Date, months: number): Date {
	const result = startOfMonth(date);
	result.setUTCMonth(result.getUTCMonth() + months);
	const last = new Date(result);
	last.setUTCMonth(last.getUTCMonth() + 1, 0);
	result.setUTCDate(Math.min(date.getUTCDate(), last.getUTCDate()));
	return result;
}
