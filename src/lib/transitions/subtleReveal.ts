import { cubicInOut } from 'svelte/easing';

export const subtleReveal = (_: Element, { duration = 200 }: { duration?: number } = {}) => {
	return {
		duration: duration ?? 200,
		css: (t: number) => {
			const eased = cubicInOut(t);

			return `
                opacity: ${eased};
                transform: scale(${0.95 + eased * 0.05});
            `;
		}
	};
};
