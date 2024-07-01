import type { Snippet } from 'svelte';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports;
    z_$$bindings?: Bindings;
}
declare const CopyButton: $$__sveltets_2_IsomorphicComponent<{
    close?: () => void;
    duration?: number;
    icon?: Snippet;
    isOpen?: boolean;
    open?: () => void;
    text: string;
    this?: any;
    toggle?: () => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "close" | "toggle" | "this" | "isOpen" | "open" | "duration" | "text">;
type CopyButton = InstanceType<typeof CopyButton>;
export default CopyButton;
