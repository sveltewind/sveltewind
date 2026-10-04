import { parse } from 'svelte/compiler';
import type { ComponentExamples, ExampleKind } from './types';

function position(node: unknown): { start: number; end: number } {
	const value = node as { start: number; end: number };
	return { start: value.start, end: value.end };
}

// Extract the exact branch rendered by each demo; Vite formats these at build time.
export function readComponentExamples(
	source: string,
	variantNames: string[] = []
): ComponentExamples {
	const ast = parse(source, { modern: true });
	if (!ast.instance) throw new Error('Component demo needs a script');
	let script = source.slice(ast.instance.start, ast.instance.end);
	const edits: { start: number; end: number }[] = [];
	for (const statement of ast.instance.content.body) {
		const range = position(statement);
		if (
			statement.type === 'VariableDeclaration' &&
			statement.declarations.some(
				(declaration) =>
					declaration.id.type === 'ObjectPattern' &&
					declaration.id.properties.some(
						(property) =>
							property.type === 'Property' &&
							property.key.type === 'Identifier' &&
							['documentationExample', 'documentationVariant'].includes(property.key.name)
					)
			)
		) {
			edits.push({ start: range.start - ast.instance.start, end: range.end - ast.instance.start });
		}
	}
	for (const edit of edits.sort((a, b) => b.start - a.start))
		script = script.slice(0, edit.start) + script.slice(edit.end);
	script = script
		.replaceAll("from '$lib/components'", "from 'sveltewind/components'")
		.replaceAll("from '$lib/theme'", "from 'sveltewind/theme'")
		.replaceAll("from '$lib/themes'", "from 'sveltewind/themes'")
		.replaceAll("from '$lib/attachments'", "from 'sveltewind/attachments'")
		.replaceAll("from '$lib/icons'", "from 'sveltewind/icons'");
	const result = {} as ComponentExamples;
	let branch = ast.fragment.nodes.find((node) => node.type === 'IfBlock');
	while (branch?.type === 'IfBlock') {
		const test = branch.test;
		if (test.type !== 'BinaryExpression' || test.right.type !== 'Literal')
			throw new Error('Unexpected component example branch');
		const kind = String(test.right.value) as ExampleKind;
		const nodes = branch.consequent.nodes;
		const metadata = nodes.find(
			(node) => node.type === 'Comment' && node.data.trim().startsWith('@example ')
		);
		if (!metadata || metadata.type !== 'Comment')
			throw new Error(`Missing example description: ${kind}`);
		const info = JSON.parse(metadata.data.trim().slice('@example '.length));
		const markup = source.slice(metadata.end, nodes.at(-1)!.end).trim();
		let exampleScript = script;
		// Keep the simplest usage free of helpers used only by the variation demos.
		const scriptAst = parse(exampleScript, { modern: true }).instance!;
		const removals: { start: number; end: number }[] = [];
		for (const statement of scriptAst.content.body) {
			const range = position(statement);
			if (
				statement.type === 'VariableDeclaration' &&
				statement.declarations.some(
					(declaration) =>
						declaration.id.type === 'Identifier' &&
						((kind !== 'variant' && declaration.id.name === 'documentationTheme') ||
							(kind !== 'props' && declaration.id.name === 'exampleVisible'))
				)
			)
				removals.push(range);
			if (
				kind !== 'variant' &&
				statement.type === 'ExpressionStatement' &&
				exampleScript.slice(range.start, range.end).startsWith('documentationTheme.')
			)
				removals.push(range);
			if (
				kind !== 'variant' &&
				statement.type === 'ImportDeclaration' &&
				statement.specifiers.some(
					(specifier) =>
						specifier.local.name === 'DocumentationTheme' ||
						specifier.local.name === 'documentationPreset'
				)
			)
				removals.push(range);
			if (
				kind !== 'props' &&
				statement.type === 'ImportDeclaration' &&
				statement.specifiers.some((specifier) => specifier.local.name === 'VisibilityButton')
			)
				removals.push(range);
		}
		for (const edit of removals.sort((a, b) => b.start - a.start))
			exampleScript = exampleScript.slice(0, edit.start) + exampleScript.slice(edit.end);
		let code = exampleScript + '\n\n' + markup;
		// A branch can have its own data without adding unused state to the other examples.
		let removed = true;
		while (removed) {
			removed = false;
			const instance = parse(code, { modern: true }).instance!;
			for (const statement of instance.content.body) {
				if (statement.type !== 'VariableDeclaration' || statement.declarations.length !== 1)
					continue;
				const declaration = statement.declarations[0];
				if (declaration.id.type !== 'Identifier') continue;
				const range = position(statement);
				const remainder = code.slice(0, range.start) + code.slice(range.end);
				if (!new RegExp(`\\b${declaration.id.name}\\b`).test(remainder)) {
					code = remainder;
					removed = true;
					break;
				}
			}
		}
		result[kind] = { ...info, code };
		branch = branch.alternate?.nodes.find((node) => node.type === 'IfBlock');
	}
	for (const kind of ['default', 'variant', 'class', 'props', 'content'] as const)
		if (!result[kind]) throw new Error(`Missing ${kind} component example`);
	result.variants = Object.fromEntries(
		variantNames.map((name) => [
			name,
			{
				title: name,
				description: `Apply the ${name} variant.`,
				code: result.variant.code.replaceAll(
					'variants={[documentationVariant]}',
					`variants={${JSON.stringify([name])}}`
				)
			}
		])
	);
	return result;
}
