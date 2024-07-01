import { SyntaxHighlighter } from '$lib/components/index.js';
import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki';
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
declare const SyntaxHighlighter: $$__sveltets_2_IsomorphicComponent<{
    code: string;
    options?: CodeToHastOptions<BundledLanguage, BundledTheme>;
    this?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "this" | "code" | "options">;
type SyntaxHighlighter = InstanceType<typeof SyntaxHighlighter>;
export default SyntaxHighlighter;
