import { type TransitionConfig } from 'svelte/transition';

export type TransitionFunction<P = any> = (node: Element, params?: P) => TransitionConfig;
export type TransitionProps<P = any> = [TransitionFunction<P>, P?];
