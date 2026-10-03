import * as Components from '$lib/components';
import { categories } from '../../examples/catalog';

export type NavItem = NavLink | NavSection;
export type NavLink = {
	href: string;
	title: string;
};
export type NavSection = {
	children: NavItem[];
	isOpen: boolean;
	title: string;
};
export const nav: NavItem[] = $state([
	{
		children: [
			{
				href: '/getting-started/what-is-sveltewind',
				title: 'What is Sveltewind?'
			},
			{
				href: '/getting-started/installation',
				title: 'Installation'
			},
			{
				href: '/getting-started/usage',
				title: 'Usage'
			},
			{
				href: '/getting-started/theming',
				title: 'Theming'
			}
		],
		isOpen: true,
		title: 'Getting Started'
	},
	{
		children: Object.keys(Components)
			.filter((key) => {
				if (key === 'default') return false;
				if (key === 'noopTransition') return false;
				return true;
			})
			.map((componentName) => ({
				href: `/components/${componentName.toLowerCase()}`,
				title: componentName
			})),
		isOpen: true,
		title: 'Components'
	},
	{
		children: [
			{ href: '/examples', title: 'All examples' },
			...categories.map((category) => ({
				href: `/examples?category=${category.id}`,
				title: category.title
			}))
		],
		isOpen: true,
		title: 'Examples'
	}
]);
