import { Button } from '$lib/components/index.js';
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
declare const Button: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    children?: any;
    this?: any;
    transition?: any[];
    use?: any[];
    variants?: string[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "this" | "transition" | "variants">;
type Button = InstanceType<typeof Button>;
export default Button;
