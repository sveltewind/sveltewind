import { page, userEvent } from '@vitest/browser/context';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Theme } from '$lib/theme';
import { classic } from '$lib/themes';
import MultiSelect from './MultiSelect.svelte';
import Combobox from '../Combobox/Combobox.svelte';
import '../../../app.css';

const options = [
	{ label: 'Svelte', value: 'svelte' },
	{ label: 'TypeScript', value: 'typescript' },
	{ label: 'Tailwind CSS', value: 'tailwind' },
	{ label: 'A very long option label that must stay on one line', value: 'long' },
	{ label: 'Unavailable', value: 'disabled', disabled: true }
];

describe('MultiSelect selection placement', () => {
	it('supports mouse dragging without removing chips and fades only overflowing edges', async () => {
		const onValueChange = vi.fn();
		render(MultiSelect, {
			options,
			value: ['svelte', 'typescript', 'tailwind', 'long'],
			selectionPlacement: 'inline',
			style: 'width: 360px',
			onValueChange,
			theme: new Theme(classic)
		});
		const chips = page.getByRole('group', { name: 'Selected options' });
		await expect
			.poll(() => getComputedStyle(chips.element()).maskImage)
			.toContain('linear-gradient');
		const startMask = getComputedStyle(chips.element()).maskImage;
		await userEvent.dragAndDrop(chips, chips, {
			sourcePosition: { x: 100, y: 24 },
			targetPosition: { x: 15, y: 24 }
		});
		expect(chips.element().scrollLeft).toBeGreaterThan(0);
		expect(onValueChange).not.toHaveBeenCalled();
		await expect.poll(() => getComputedStyle(chips.element()).maskImage).not.toBe(startMask);
	});

	it('keeps inline selections scrollable at a fixed height and submits each value', async () => {
		const onValueChange = vi.fn();
		const view = render(MultiSelect, {
			options,
			label: 'Tools',
			name: 'tools',
			selectionPlacement: 'inline',
			style: 'width: 320px',
			theme: new Theme(classic),
			onValueChange
		});
		const input = page.getByRole('combobox', { name: 'Tools' });
		const control = input.element().parentElement!;
		const height = control.getBoundingClientRect().height;
		for (const option of options.filter((option) => !option.disabled)) {
			await input.fill(option.label);
			await page.getByRole('option', { name: option.label, exact: true }).click();
		}
		const chips = page.getByRole('group', { name: 'Selected options' }).element();
		expect(control.contains(chips)).toBe(true);
		expect(control.getBoundingClientRect().height).toBe(height);
		expect(chips.scrollWidth).toBeGreaterThan(chips.clientWidth);
		chips.scrollLeft = chips.scrollWidth;
		expect(chips.scrollLeft).toBeGreaterThan(0);
		expect(input.element().getBoundingClientRect().width).toBeGreaterThanOrEqual(160);
		expect(getComputedStyle(chips).scrollbarWidth).toBe('none');
		await expect.poll(() => getComputedStyle(chips).maskImage).toContain('linear-gradient');
		expect(control.getBoundingClientRect().width).toBeLessThanOrEqual(320);
		const hiddenInputs = view.container.querySelectorAll<HTMLInputElement>('input[type="hidden"]');
		expect(Array.from(hiddenInputs, (entry) => [entry.name, entry.value])).toEqual([
			['tools', 'svelte'],
			['tools', 'typescript'],
			['tools', 'tailwind'],
			['tools', 'long']
		]);
		await page.getByRole('button', { name: 'Remove TypeScript', exact: true }).click();
		await expect.element(input).toHaveFocus();
		expect(onValueChange).toHaveBeenLastCalledWith(['svelte', 'tailwind', 'long']);
		expect(control.getBoundingClientRect().height).toBe(height);
		await input.click();
		await userEvent.keyboard('{ArrowDown}{Enter}');
		expect(onValueChange).toHaveBeenLastCalledWith(['svelte', 'tailwind', 'long', 'typescript']);
	});

	for (const selectionPlacement of ['inline', 'below'] as const) {
		it(`keeps ${selectionPlacement} options open for consecutive selections and clears the search`, async () => {
			const onValueChange = vi.fn();
			render(MultiSelect, {
				options,
				selectionPlacement,
				onValueChange,
				theme: new Theme(classic)
			});
			const input = page.getByRole('combobox');
			await input.fill('Svelte');
			await page.getByRole('option', { name: 'Svelte', exact: true }).click();
			await expect.element(input).toHaveAttribute('aria-expanded', 'true');
			await expect.element(input).toHaveValue('');
			await page.getByRole('option', { name: 'TypeScript', exact: true }).click();
			expect(onValueChange).toHaveBeenLastCalledWith(['svelte', 'typescript']);
			await expect.element(input).toHaveAttribute('aria-expanded', 'true');
			await userEvent.keyboard('{Escape}');
			await expect.element(input).toHaveAttribute('aria-expanded', 'false');
		});
	}

	it('preserves close-on-select for the single-select Combobox', async () => {
		render(Combobox, { options, theme: new Theme(classic) });
		const input = page.getByRole('combobox');
		await input.click();
		await page.getByRole('option', { name: 'Svelte', exact: true }).click();
		await expect.element(input).toHaveAttribute('aria-expanded', 'false');
		await expect.element(input).toHaveValue('Svelte');
	});

	it('preserves the default below-input placement', async () => {
		render(MultiSelect, { options, value: ['svelte'], theme: new Theme(classic) });
		const input = page.getByRole('combobox');
		const chips = page.getByRole('group', { name: 'Selected options' });
		await expect.element(chips).toBeVisible();
		expect(chips.element().contains(input.element())).toBe(false);
		expect(chips.element().getBoundingClientRect().top).toBeGreaterThanOrEqual(
			input.element().getBoundingClientRect().bottom
		);
	});

	it('disables searching, removal, and submitted values in inline mode', async () => {
		const view = render(MultiSelect, {
			options,
			name: 'tools',
			value: ['svelte'],
			disabled: true,
			selectionPlacement: 'inline',
			theme: new Theme(classic)
		});
		await expect.element(page.getByRole('combobox')).toBeDisabled();
		await expect.element(page.getByRole('button', { name: 'Remove Svelte' })).toBeDisabled();
		expect(view.container.querySelector<HTMLInputElement>('input[type="hidden"]')?.disabled).toBe(
			true
		);
	});
});
