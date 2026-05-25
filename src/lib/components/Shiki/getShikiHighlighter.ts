import { createHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

export const getShikiHighlighter = () => {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ['github-dark', 'github-light'],
			langs: ['svelte', 'ts', 'js', 'tsx', 'jsx', 'html', 'css', 'json', 'bash', 'md']
		});
	}

	return highlighterPromise;
};
