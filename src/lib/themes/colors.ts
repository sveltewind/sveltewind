/** Accent palettes, independent of component style presets. */
export const colors = ['violet', 'rose', 'sky', 'emerald', 'amber', 'slate'] as const;
export type ColorName = (typeof colors)[number];
