import fs from 'fs/promises';
import { components } from './components.js';

const getComponentName = (tag) => tag[0].toUpperCase() + tag.slice(1);

const run = async () => {
	const template = await fs.readFile('scripts/initComponents/Template.svelte', 'utf8');

	for (const [tag, { attributesType, elementType, isSelfClosing }] of components) {
		const componentName = getComponentName(tag);
		const fileName = componentName + '.svelte';
		let content = template;

		if (isSelfClosing) {
			content = content.replace(
				/(\r\n|\r|\n)\t+>(\r\n|\r|\n)\t+\{#if children\}(\r\n|\r|\n)\t+\{@render children\(\)\}(\r\n|\r|\n)\t+\{\/if\}(\r\n|\r|\n)\t+<\/a>/g,
				'\r\t/>'
			);
		}
		content = content
			.replace(/HTMLAnchorAttributes/g, attributesType)
			.replace(/HTMLAnchorElement/g, elementType)
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
};

run();
