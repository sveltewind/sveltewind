import examples from 'virtual:composed-example-code';

// Formatted at build time from the same source used by the live demos.
export function composedExample(name: string): string {
	const code = examples[name];
	if (!code) throw new Error(`Missing preview for ${name}`);
	return code;
}
