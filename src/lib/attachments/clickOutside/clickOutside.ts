type ClickOutsideOptions = {
	enabled?: boolean;
	event?: 'pointerdown' | 'click' | 'mousedown';
};

export const clickOutside =
	(onOutside: () => void, options: ClickOutsideOptions = {}) =>
	(node: HTMLElement) => {
		const { enabled = true, event = 'pointerdown' } = options;

		if (!enabled) return;

		const handler = (e: Event) => {
			const target = e.target as Node | null;
			if (target && !node.contains(target)) {
				onOutside();
			}
		};

		document.addEventListener(event, handler, true);

		return () => {
			document.removeEventListener(event, handler, true);
		};
	};
