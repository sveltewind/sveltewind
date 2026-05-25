import { on } from 'svelte/events';

export const trapFocus = <T extends HTMLElement>(node: T) => {
	const previous = document.activeElement as HTMLElement | null;

	const focusable = (): HTMLElement[] =>
		Array.from(
			node.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		);

	const handleKeydown = (event: KeyboardEvent): void => {
		if (event.key !== 'Tab') return;

		const current = document.activeElement as HTMLElement | null;

		const elements = focusable();
		const first = elements.at(0);
		const last = elements.at(-1);

		if (event.shiftKey && current === first && last) {
			last.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current === last && first) {
			first.focus();
			event.preventDefault();
		}
	};

	focusable()[0]?.focus();
	const off = on(node, 'keydown', handleKeydown);

	return {
		destroy: () => {
			off();
			previous?.focus();
		}
	};
};
