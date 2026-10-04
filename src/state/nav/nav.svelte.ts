import { componentCatalog, componentCategories } from '$components/catalog';
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
		children: [
			{ href: '/components', title: 'All components' },
			...componentCategories.map((category) => ({
				title: category.title,
				isOpen: false,
				children: [
					{
						href: `/components?category=${category.id}`,
						title: `Browse ${category.title.toLowerCase()}`
					},
					...componentCatalog
						.filter((component) => component.category === category.id)
						.map((component) => ({
							href: `/components/${component.name.toLowerCase()}`,
							title: component.name
						}))
				]
			}))
		],
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
