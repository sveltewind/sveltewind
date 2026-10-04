import type * as Components from '$lib/components';

export type ComponentName = Exclude<keyof typeof Components, 'noopTransition'>;
type Category = {
	id: string;
	title: string;
	description: string;
	components: readonly ComponentName[];
};

export const componentCategories: Category[] = [
	{
		id: 'forms',
		title: 'Forms',
		description: 'Inputs, selections, uploads, and form structure.',
		components: [
			'Button',
			'Checkbox',
			'Combobox',
			'Datalist',
			'Field',
			'Fieldset',
			'FileUpload',
			'Form',
			'Input',
			'Label',
			'Legend',
			'MultiSelect',
			'Optgroup',
			'Option',
			'Output',
			'Radio',
			'Range',
			'SearchField',
			'Select',
			'Switch',
			'Textarea'
		]
	},
	{
		id: 'layout',
		title: 'Layout',
		description: 'Containers, surfaces, and semantic page structure.',
		components: [
			'Article',
			'Aside',
			'Card',
			'Container',
			'Div',
			'Footer',
			'Header',
			'Main',
			'Pile',
			'Section'
		]
	},
	{
		id: 'navigation',
		title: 'Navigation',
		description: 'Links, menus, tabs, and steps through an interface.',
		components: ['A', 'Breadcrumbs', 'DropdownMenu', 'Nav', 'Stepper', 'Tabs']
	},
	{
		id: 'data',
		title: 'Data',
		description: 'Tables, lists, and structured information.',
		components: [
			'Caption',
			'Col',
			'Colgroup',
			'Datatable',
			'Dd',
			'Dl',
			'Dt',
			'Li',
			'Ol',
			'Table',
			'Tbody',
			'Td',
			'Tfoot',
			'Th',
			'Thead',
			'Tr',
			'Ul'
		]
	},
	{
		id: 'feedback',
		title: 'Feedback',
		description: 'Status, loading, disclosures, and overlays.',
		components: [
			'Accordion',
			'Alert',
			'Badge',
			'Details',
			'Dialog',
			'Drawer',
			'Meter',
			'Popover',
			'Progress',
			'Skeleton',
			'Spinner',
			'Summary',
			'Toast',
			'Toaster',
			'Tooltip'
		]
	},
	{
		id: 'typography',
		title: 'Typography',
		description: 'Headings, text, quotations, and code.',
		components: [
			'Abbr',
			'Address',
			'Blockquote',
			'Br',
			'Cite',
			'Code',
			'CodeBlock',
			'Em',
			'H1',
			'H2',
			'H3',
			'H4',
			'H5',
			'H6',
			'Hr',
			'Kbd',
			'Mark',
			'P',
			'Pre',
			'Q',
			'Samp',
			'Shiki',
			'Small',
			'Span',
			'Strong',
			'Time'
		]
	},
	{
		id: 'media',
		title: 'Media',
		description: 'Images, avatars, audio, video, and embedded content.',
		components: [
			'Audio',
			'Avatar',
			'AvatarGroup',
			'Canvas',
			'Carousel',
			'Figcaption',
			'Figure',
			'Iframe',
			'Img',
			'Picture',
			'Source',
			'Track',
			'Video'
		]
	},
	{
		id: 'svg',
		title: 'SVG',
		description: 'Vector shapes, text, gradients, and reusable definitions.',
		components: [
			'Circle',
			'ClipPath',
			'Defs',
			'Ellipse',
			'ForeignObject',
			'G',
			'Line',
			'LinearGradient',
			'Marker',
			'Mask',
			'Path',
			'Pattern',
			'Polygon',
			'Polyline',
			'RadialGradient',
			'Rect',
			'Stop',
			'Svg',
			'SvgDesc',
			'SvgImage',
			'SvgTitle',
			'Symbol',
			'Text',
			'TextPath',
			'Tspan',
			'Use'
		]
	}
];

const keywords: Partial<Record<ComponentName, string>> = {
	A: 'anchor hyperlink link',
	Abbr: 'abbreviation acronym',
	Button: 'action submit click',
	Combobox: 'autocomplete dropdown searchable select',
	Caption: 'table title caption',
	Col: 'table column',
	Colgroup: 'table columns group',
	Dd: 'description definition value',
	Dl: 'description definition list',
	Dt: 'description definition term',
	Datatable: 'data grid sorting filtering pagination editable rows',
	Dialog: 'modal overlay popup',
	Drawer: 'panel sheet sidebar overlay',
	DropdownMenu: 'actions menu dropdown',
	FileUpload: 'file drag drop attachment',
	H1: 'heading title',
	H2: 'heading title',
	H3: 'heading title',
	H4: 'heading title',
	H5: 'heading title',
	H6: 'heading title',
	Img: 'image photo picture',
	Input: 'text email password number field',
	Li: 'list item',
	MultiSelect: 'multiple selection tags chips',
	Ol: 'ordered numbered list',
	P: 'paragraph text',
	Select: 'dropdown selection options',
	Switch: 'toggle boolean on off',
	Textarea: 'multiline text message',
	Tbody: 'table body rows',
	Td: 'table cell',
	Tfoot: 'table footer rows',
	Th: 'table header heading cell',
	Thead: 'table header heading rows',
	Tr: 'table row',
	Toast: 'notification message',
	Toaster: 'notifications messages',
	Ul: 'unordered bullet list'
};

export const componentCatalog = componentCategories.flatMap((category) =>
	[...category.components]
		.sort((a, b) => a.localeCompare(b))
		.map((name) => ({
			name,
			category: category.id,
			searchText: `${name} ${category.title} ${keywords[name] ?? ''}`.toLowerCase()
		}))
);
