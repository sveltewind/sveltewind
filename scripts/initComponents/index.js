import fs from 'fs/promises';
import { components } from './components.js';

const getComponentName = (tag) => tag[0].toUpperCase() + tag.slice(1);

const run = async () => {
	const template = await fs.readFile('scripts/initComponents/Template.svelte', 'utf8');

	for (const [tag, { isSelfClosing, type }] of components) {
		const componentName = getComponentName(tag);
		const fileName = componentName + '.svelte';
		let content = template;

		if (isSelfClosing) {
			content = content.replace(
				/Transition(\r\n|\r|\n)\t>(\r\n|\r|\n)\t\t\{#if children\}(\r\n|\r|\n)\t\t\t\{@render children\(\)\}(\r\n|\r|\n)\t\t\{\/if\}(\r\n|\r|\n)\t<\/a>/g,
				'Transition/>'
			);
		}
		content = content
			.replace(/HTMLAnchorElement/g, type)
			.replace(/ComponentName/g, componentName)
			.replace(/<a/g, `<${tag}`)
			.replace(/a>/g, `${tag}>`);
		try {
			await fs.mkdir(`src/lib/components/${componentName}`);
		} catch (error) {}
		await fs.writeFile(`src/lib/components/${componentName}/${fileName}`, content);
	}

	const indexContent = components
		.map(([tag]) => {
			const componentName = getComponentName(tag);
			return `export { default as ${componentName} } from './${componentName}/${componentName}.svelte';`;
		})
		.join('\r\n');

	await fs.writeFile('src/lib/components/index.ts', indexContent);
	await fs.writeFile('src/lib/components/index.d.ts', indexContent);
};

run();
