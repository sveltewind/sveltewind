import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { format, resolveConfig } from 'prettier';
import { parse } from 'svelte/compiler';
import type { Plugin } from 'vite';
import { composeExampleSource } from './src/components/ComposedPreview/composeExampleSource';
import { readComponentExamples } from './src/components/ComponentDoc/readExamples';

// Give compact markup line breaks before Prettier lays out its tags and blocks.
// Work on markup nodes only: script strings and preformatted text stay intact.
export function separateMarkup(source: string): string {
	const ast = parse(source, { modern: true });
	const breaks = new Set<number>();
	function visit(node: unknown) {
		if (!node || typeof node !== 'object') return;
		const value = node as Record<string, unknown>;
		const type = value.type as string;
		if (
			[
				'Component',
				'RegularElement',
				'IfBlock',
				'EachBlock',
				'AwaitBlock',
				'KeyBlock',
				'SnippetBlock'
			].includes(type)
		) {
			breaks.add(value.start as number);
			breaks.add(value.end as number);
		}
		if (type === 'RegularElement' && ['pre', 'code', 'textarea'].includes(value.name as string))
			return;
		for (const [key, child] of Object.entries(value)) {
			if (['attributes', 'expression', 'test', 'context', 'metadata'].includes(key)) continue;
			if (Array.isArray(child)) child.forEach(visit);
			else if (child && typeof child === 'object') visit(child);
		}
	}
	visit(ast.fragment);
	for (const position of [...breaks].sort((a, b) => b - a)) {
		if (!/\n[\t ]*$/.test(source.slice(0, position)) && !/^[\t ]*\n/.test(source.slice(position))) {
			source = source.slice(0, position) + '\n' + source.slice(position);
		}
	}
	return source;
}

export async function formatExampleCode(code: string, parser = 'svelte'): Promise<string> {
	const config = await resolveConfig('.prettierrc');
	return format(parser === 'svelte' ? separateMarkup(code) : code, {
		...config,
		parser,
		htmlWhitespaceSensitivity: 'ignore'
	});
}

export function exampleCodePlugin(): Plugin {
	const id = 'virtual:composed-example-code';
	const resolvedId = '\0' + id;
	const sourceFile = new URL(
		'./src/components/ComposedPreview/ComposedPreview.svelte',
		import.meta.url
	);
	return {
		name: 'formatted-example-code',
		enforce: 'pre',
		resolveId(source) {
			if (source === id) return resolvedId;
		},
		handleHotUpdate(context) {
			if (context.file !== fileURLToPath(sourceFile)) return;
			const module = context.server.moduleGraph.getModuleById(resolvedId);
			if (!module) return;
			context.server.moduleGraph.invalidateModule(module);
			return [...context.modules, module];
		},
		async load(source) {
			const [filename, query = ''] = source.split('?');
			if (new URLSearchParams(query).has('component-examples')) {
				this.addWatchFile(filename);
				const examples = readComponentExamples(await readFile(filename, 'utf8'));
				for (const example of Object.values(examples))
					example.code = await formatExampleCode(example.code);
				return `export default ${JSON.stringify(examples)};`;
			}
			if (new URLSearchParams(query).has('example-code')) {
				this.addWatchFile(filename);
				const code = (await readFile(filename, 'utf8')).replace(
					"from '$lib/components'",
					"from 'sveltewind/components'"
				);
				return `export default ${JSON.stringify(await formatExampleCode(code))};`;
			}
			if (source !== resolvedId) return;
			this.addWatchFile(fileURLToPath(sourceFile));
			const preview = await readFile(sourceFile, 'utf8');
			const names = [...preview.matchAll(/\{(?:#if|:else if) name === '([^']+)'\}/g)].map(
				(match) => match[1]
			);
			const examples = Object.fromEntries(
				await Promise.all(
					names.map(async (name) => [
						name,
						await formatExampleCode(composeExampleSource(preview, name))
					])
				)
			);
			return `export default ${JSON.stringify(examples)};`;
		}
	};
}
