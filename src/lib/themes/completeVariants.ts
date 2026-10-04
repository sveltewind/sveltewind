import type { ThemeObject } from '$lib/theme/types.js';

// Presets inherit these additions through Classic. Existing variants always take precedence.
export function completeVariants(theme: ThemeObject): void {
	const text =
		/^(abbr|address|blockquote|caption|cite|code|dd|dt|em|figcaption|h[1-6]|kbd|label|legend|li|mark|output|p|q|samp|small|span|strong|summary|time)$|Title$|Label$|Description$|Hint$|Error$/;
	const svg =
		/^(svg|circle|clipPath|defs|ellipse|foreignObject|g|line|linearGradient|marker|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|symbol|text|textPath|tspan|use)/;
	for (const [name, component] of Object.entries(theme)) {
		if (Object.keys(component.variants ?? {}).length >= 3) continue;
		let additions: Record<string, string>;
		if (['source', 'track', 'datalist'].includes(name)) {
			additions = { hidden: 'hidden', visible: 'block', unstyled: 'appearance-none' };
		} else if (name === 'br') {
			additions = { hidden: 'hidden', block: 'block', responsive: 'hidden sm:block' };
		} else if (svg.test(name)) {
			additions = { accent: 'text-primary-500', muted: 'opacity-50', vivid: 'text-rose-500' };
		} else if (/^(pre|shiki|codeBlock)$/.test(name)) {
			additions = {
				compact: 'text-xs',
				wrap: 'whitespace-pre-wrap break-words [&_pre]:whitespace-pre-wrap [&_code]:whitespace-pre-wrap',
				scrollable: 'max-w-full overflow-x-auto [&_pre]:overflow-x-auto'
			};
		} else if (text.test(name)) {
			additions = {
				accent: 'text-primary-600 dark:text-primary-400',
				muted: 'text-gray-500 dark:text-gray-400',
				strong: 'font-semibold'
			};
		} else if (/^(col|colgroup|td|th|tr|tbody|thead|tfoot)$/.test(name)) {
			additions = {
				compact: 'px-3 py-2 text-sm',
				soft: 'bg-gray-100 dark:bg-gray-900',
				accent: 'bg-primary-500/10'
			};
		} else if (/^(audio|video|canvas|iframe|picture|img)$|Image$/.test(name)) {
			additions = {
				rounded: 'rounded-xl',
				bordered: 'border-2 border-primary-500/40',
				full: 'w-full'
			};
		} else if (
			/^(checkbox|radio|switch|range|combobox|multiSelect|searchField|fileUpload)$|Input$|Control$/.test(
				name
			)
		) {
			additions = { compact: 'gap-1 text-sm', comfortable: 'gap-4 text-base', full: 'w-full' };
		} else {
			additions = {
				compact: 'gap-2 p-2 text-sm',
				spacious: 'gap-6 p-6',
				soft: 'bg-gray-100 dark:bg-gray-900'
			};
		}
		for (const [variant, classes] of Object.entries(additions)) {
			component.variants ??= {};
			component.variants[variant] ??= classes;
			if (Object.keys(component.variants).length >= 3) break;
		}
	}
}
