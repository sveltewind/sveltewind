export type ExampleKind = 'default' | 'variant' | 'class' | 'props' | 'content';
export type ComponentExamples = Record<
	ExampleKind,
	{ title: string; description: string; code: string }
> & { variants: Record<string, { title: string; description: string; code: string }> };
