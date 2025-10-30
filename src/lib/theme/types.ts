export type Theme = Record<string, ThemeComponent>;
export type ThemeComponent = Record<string, ThemeComponentVariant> & { default: string };
export type ThemeComponentVariant = string;
