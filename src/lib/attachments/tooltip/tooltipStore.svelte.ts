import { type TooltipState } from './types';

class Tooltip {
	state = $state<TooltipState | null>(null);

	hide(): void {
		this.state = null;
	}

	show(state: TooltipState): void {
		this.state = state;
	}
}

export const tooltipStore = new Tooltip();
