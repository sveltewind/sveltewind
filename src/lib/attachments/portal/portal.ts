import type { Attachment } from 'svelte/attachments';

type PortalTarget = HTMLElement | string;

export const portal = (target?: PortalTarget): Attachment => {
	return (element) => {
		const targetElement =
			typeof target === 'string'
				? document.querySelector<HTMLElement>(target)
				: (target ?? document.body);

		if (!targetElement) return;

		const host = document.createElement('div');

		targetElement.appendChild(host);
		host.appendChild(element);

		return () => {
			host.remove();
		};
	};
};
