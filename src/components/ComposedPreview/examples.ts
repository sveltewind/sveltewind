import previewSource from './ComposedPreview.svelte?raw';

// Read the same markup used by the live demos so their documentation stays in sync.
const stateVariables: Record<string, string[]> = {
	Combobox: ['selected'],
	Datatable: ['datatableRows', 'datatableSequence'],
	Drawer: ['drawerVisible'],
	DropdownMenu: ['message'],
	MultiSelect: ['selectedMany'],
	SearchField: ['message'],
	Stepper: ['step'],
	Toast: ['toastVisible'],
	Toaster: ['uid', 'sequence', 'toasts']
};

export function composedExample(name: string): string {
	const branches = [...previewSource.matchAll(/\{(?:#if|:else if) name === '([^']+)'\}/g)];
	const index = branches.findIndex((branch) => branch[1] === name);
	if (index < 0) throw new Error(`Missing preview for ${name}`);
	const branch = branches[index];
	const end = branches[index + 1]?.index ?? previewSource.lastIndexOf('{/if}');
	let markup = previewSource.slice(branch.index! + branch[0].length, end).trim();
	if (name === 'Carousel') {
		markup += '\n' + previewSource.slice(previewSource.indexOf('{#snippet firstSlide()}')).trim();
	}
	const components = [
		...new Set(['Div', ...[...markup.matchAll(/<([A-Z]\w*)\b/g)].map((match) => match[1])])
	];
	if (name === 'Toaster') components.push('type ToastItem');
	const options = ['Combobox', 'MultiSelect'].includes(name)
		? previewSource.match(/const options = \[[\s\S]*?\];/)![0]
		: '';
	const script = [
		`import { ${components.join(', ')} } from 'sveltewind/components';`,
		options,
		...(stateVariables[name] ?? []).map((variable) => {
			const declaration = previewSource.match(
				new RegExp(`(?:let|const) ${variable} = [\\s\\S]*?;`)
			);
			if (!declaration) throw new Error(`Missing preview state: ${variable}`);
			return declaration[0];
		})
	]
		.filter(Boolean)
		.join('\n\n');
	return `<script lang="ts">\n${script}\n</script>\n\n<Div class="w-full min-w-0">\n${markup}\n</Div>`;
}
