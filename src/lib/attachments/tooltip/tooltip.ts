import { tooltipStore } from './tooltipStore.svelte';
import type { TooltipState } from './types';

type TooltipOptions = Pick<TooltipState, 'content'> & Partial<Pick<TooltipState, 'placement'>>;

export const tooltip = (options: TooltipOptions) => {
	return (parentElement: TooltipState['parentElement']) => {
		const hide = () => {
			tooltipStore.hide();
		};
		const show = () => {
			tooltipStore.show({
				content: options.content,
				placement: options.placement ?? 'top',
				parentElement
			});
		};

		parentElement.addEventListener('blur', hide);
		parentElement.addEventListener('focus', show);
		parentElement.addEventListener('mouseenter', show);
		parentElement.addEventListener('mouseleave', hide);

		return () => {
			parentElement.removeEventListener('blur', hide);
			parentElement.removeEventListener('focus', show);
			parentElement.removeEventListener('mouseenter', show);
			parentElement.removeEventListener('mouseleave', hide);
		};
	};
};
