export type Example = {
	id: string;
	title: string;
	category: string;
	kind: string;
	description: string;
	items: string[];
	components: string[];
};

export const categories = [
	{ id: 'landing', title: 'Landing pages' },
	{ id: 'heroes', title: 'Hero sections' },
	{ id: 'forms', title: 'Forms & accounts' },
	{ id: 'workspace', title: 'Workspaces' },
	{ id: 'commerce', title: 'Commerce & finance' },
	{ id: 'content', title: 'Content & community' },
	{ id: 'discovery', title: 'Navigation & discovery' },
	{ id: 'learning', title: 'Learning & onboarding' }
];

function example(
	id: string,
	title: string,
	kind: string,
	description: string,
	components: string[],
	items: string[] = []
): Example {
	return {
		id,
		title,
		kind,
		category: categories.find((category) => category.id === kind)!.title,
		description,
		components,
		items
	};
}

export const examples: Example[] = [
	example(
		'saas-landing-page',
		'SaaS landing page',
		'landing',
		'A complete team workspace website with features, pricing, FAQs, and an interactive signup form.',
		['Accordion', 'Switch', 'Input', 'Card'],
		['website', 'subscription', 'pricing']
	),
	example(
		'studio-landing-page',
		'Creative studio landing page',
		'landing',
		'An editorial agency website with selected work, services, process, and a project inquiry form.',
		['Card', 'Badge', 'Input', 'Textarea'],
		['website', 'agency', 'portfolio']
	),
	example(
		'restaurant-landing-page',
		'Neighborhood restaurant landing page',
		'landing',
		'A welcoming restaurant website with a seasonal menu, opening hours, and table reservation flow.',
		['Card', 'Select', 'Input', 'Alert'],
		['website', 'food', 'booking']
	),
	example(
		'course-landing-page',
		'Online course landing page',
		'landing',
		'A learning website with curriculum, instructor introduction, lesson previews, FAQs, and enrollment.',
		['Accordion', 'Progress', 'Button', 'Alert'],
		['website', 'education', 'lessons']
	),
	example(
		'hero-centered',
		'Centered launch hero',
		'heroes',
		'A focused announcement, large centered headline, paired actions, and a local early-access signup.',
		['Badge', 'Button', 'Input', 'Alert'],
		['landing page', 'launch', 'signup']
	),
	example(
		'hero-product',
		'Split product hero',
		'heroes',
		'A two-column SaaS introduction with an interactive product mockup and workflow selector.',
		['Button', 'Card', 'Select', 'Badge'],
		['landing page', 'saas', 'dashboard']
	),
	example(
		'hero-developer',
		'Developer tool hero',
		'heroes',
		'A terminal-led introduction with package-manager tabs and a copyable installation command.',
		['Tabs', 'Button', 'Card', 'Badge'],
		['landing page', 'terminal', 'developer']
	),
	example(
		'hero-event',
		'Conference registration hero',
		'heroes',
		'An event-led layout with date, location, speakers, ticket selection, and reservation feedback.',
		['Avatar', 'Select', 'Button', 'Alert'],
		['landing page', 'conference', 'tickets']
	),
	example(
		'hero-editorial',
		'Editorial publication hero',
		'heroes',
		'An asymmetric magazine cover with a featured story, reading panel, and issue contents.',
		['Badge', 'Button', 'Card', 'Dialog'],
		['landing page', 'magazine', 'article']
	),
	example(
		'hero-commerce',
		'Product collection hero',
		'heroes',
		'A storefront introduction with a CSS product illustration, color selection, and a working bag action.',
		['Button', 'Badge', 'Alert'],
		['landing page', 'storefront', 'product']
	),
	example(
		'kanban-board',
		'Kanban project board',
		'workspace',
		'Move tasks between columns, filter by assignee, and add work to the backlog.',
		['Card', 'Select', 'Avatar', 'Badge'],
		['tasks', 'backlog', 'in progress', 'done']
	),
	example(
		'appointment-scheduler',
		'Appointment scheduler',
		'workspace',
		'Choose a day, select an available time, and confirm a booking with a contact name.',
		['Button', 'Input', 'Card', 'Alert'],
		['booking', 'availability', 'time slots']
	),
	example(
		'event-calendar',
		'Monthly event calendar',
		'workspace',
		'Navigate months, inspect a day’s events, and add a named event to the selected date.',
		['Button', 'Card', 'Badge', 'Input'],
		['month', 'dates', 'events']
	),
	example(
		'permission-matrix',
		'Role permission matrix',
		'workspace',
		'Edit a grid of role permissions, apply a preset, and save an explicit summary.',
		['Table', 'Checkbox', 'Select', 'Alert'],
		['roles', 'access', 'permissions']
	),
	example(
		'file-explorer',
		'Folder and file explorer',
		'workspace',
		'Navigate nested folders using breadcrumbs, search the current directory, and inspect file details.',
		['Breadcrumbs', 'Button', 'Card', 'Input'],
		['files', 'folders', 'documents']
	),
	example(
		'notification-inbox',
		'Notification inbox',
		'workspace',
		'Filter unread messages, mark notifications individually, and clear the unread count in bulk.',
		['Tabs', 'Avatar', 'Badge', 'Button'],
		['notifications', 'inbox', 'read', 'unread']
	),
	example(
		'organization-tree',
		'Organization tree',
		'workspace',
		'Expand a nested team hierarchy, select a group, and add a member to that group.',
		['Button', 'Avatar', 'Input', 'Badge'],
		['hierarchy', 'teams', 'members']
	),
	example(
		'weekly-priorities',
		'Weekly priorities checklist',
		'workspace',
		'Complete tasks, track the finished count, and add a new priority without losing progress.',
		['Checkbox', 'Input', 'Badge', 'Card'],
		['checklist', 'tasks']
	),
	example(
		'team-directory',
		'Searchable team directory',
		'workspace',
		'Search and sort people, select rows, and download the selected records as a CSV file.',
		['Table', 'Input', 'Checkbox', 'Button'],
		['people', 'selection', 'CSV export']
	),
	example(
		'notification-preferences',
		'Notification preferences',
		'forms',
		'Configure independent notification switches and save the enabled-option count.',
		['Switch', 'Card', 'Button', 'Alert']
	),
	example(
		'contact-sales',
		'Contact sales form',
		'forms',
		'Submit a labeled contact form with native validation, a field summary, and a reset action.',
		['Form', 'Field', 'Input', 'Textarea']
	),
	example(
		'password-validation',
		'Password validation checklist',
		'forms',
		'Check password requirements as you type, reveal the password, and validate matching confirmation.',
		['Input', 'Checkbox', 'Progress', 'Alert'],
		['password', 'validation', 'strength']
	),
	example(
		'verification-code',
		'Verification code entry',
		'forms',
		'Enter or paste six digits, move between fields with the keyboard, and verify a demo code.',
		['Input', 'Button', 'Alert'],
		['OTP', 'two factor', 'verification']
	),
	example(
		'profile-photo-upload',
		'Restricted file upload',
		'forms',
		'Select images with file-type and size restrictions, inspect selected files, and clear the selection.',
		['FileUpload', 'Badge', 'Button']
	),
	example(
		'delete-project-confirmation',
		'Destructive action dialog',
		'forms',
		'Review a destructive action in a modal, cancel with Escape, or explicitly confirm the demo action.',
		['Dialog', 'Button', 'Alert']
	),
	example(
		'shopping-cart',
		'Shopping cart with discount',
		'commerce',
		'Change quantities, remove products, apply a coupon, and see subtotal, shipping, and total update.',
		['Card', 'Input', 'Button', 'Badge'],
		['cart', 'coupon', 'quantity', 'checkout']
	),
	example(
		'invoice-builder',
		'Editable invoice builder',
		'commerce',
		'Add line items, edit quantities and prices, adjust tax, and calculate the invoice total.',
		['Table', 'Input', 'Button', 'Card'],
		['invoice', 'line items', 'tax']
	),
	example(
		'split-bill',
		'Split-bill calculator',
		'commerce',
		'Divide a bill between guests with an adjustable tip and a transparent per-person breakdown.',
		['Input', 'Range', 'Card', 'Badge'],
		['tip', 'guests', 'calculator']
	),
	example(
		'inventory-reorder',
		'Inventory reorder planner',
		'commerce',
		'Inspect low-stock items, calculate suggested reorder quantities, and create a local purchase-order summary.',
		['Table', 'Input', 'Checkbox', 'Alert'],
		['stock', 'inventory', 'reorder']
	),
	example(
		'plan-comparison',
		'Plan comparison table',
		'commerce',
		'Compare feature availability side by side and hide shared features to focus on the differences.',
		['Table', 'Switch', 'Badge', 'Button'],
		['comparison', 'plans', 'features']
	),
	example(
		'software-subscription',
		'Subscription pricing cards',
		'commerce',
		'Compare three tiers, switch monthly and annual prices, and select a plan.',
		['Card', 'Switch', 'Badge', 'Button']
	),
	example(
		'notebook-product',
		'Product detail card',
		'commerce',
		'Choose a product option and quantity, then update the demo cart count.',
		['Card', 'Badge', 'Button', 'Select']
	),
	example(
		'comment-thread',
		'Comment thread with replies',
		'content',
		'Post comments, add inline replies, and toggle reactions on individual messages.',
		['Avatar', 'Textarea', 'Button', 'Card'],
		['comments', 'replies', 'reactions']
	),
	example(
		'messaging-inbox',
		'Messaging inbox',
		'content',
		'Switch between conversations, read the message history, and send a local reply.',
		['Avatar', 'Button', 'Input', 'Card'],
		['chat', 'messages', 'conversations']
	),
	example(
		'community-poll',
		'Community poll',
		'content',
		'Choose an answer, cast one vote, and inspect percentage bars calculated from the results.',
		['Radio', 'Label', 'Progress', 'Button'],
		['poll', 'votes', 'results']
	),
	example(
		'designer-profile',
		'Designer profile',
		'content',
		'Show a person’s biography and expertise, with a follow toggle and an updating follower count.',
		['Avatar', 'Badge', 'Card', 'Button']
	),
	example(
		'note-editor',
		'Note editor with live preview',
		'content',
		'Compose a note with a word count, live rendered preview, save feedback, and reset controls.',
		['Textarea', 'Input', 'Card', 'Button']
	),
	example(
		'command-palette',
		'Keyboard command palette',
		'discovery',
		'Open a searchable command dialog, navigate results with arrow keys, and run an action with Enter.',
		['Dialog', 'Input', 'Button', 'Badge'],
		['search', 'commands', 'keyboard']
	),
	example(
		'tag-picker',
		'Tag picker with suggestions',
		'discovery',
		'Search suggestions, create a custom tag, remove chips, and prevent duplicate selections.',
		['Input', 'Button', 'Badge', 'Card'],
		['tags', 'chips', 'autocomplete']
	),
	example(
		'faceted-search',
		'Faceted resource search',
		'discovery',
		'Combine text search, type filters, a favorites toggle, and pagination across a resource catalog.',
		['Input', 'Checkbox', 'Select', 'Card'],
		['search', 'filters', 'pagination', 'resources']
	),
	example(
		'product-questions',
		'Searchable product FAQ',
		'discovery',
		'Find a question and expand native disclosures to read its answer.',
		['Accordion', 'Input', 'Card']
	),
	example(
		'knowledge-quiz',
		'Knowledge quiz with feedback',
		'learning',
		'Answer one question at a time, get an explanation, and review the final score before restarting.',
		['Radio', 'Progress', 'Alert', 'Button'],
		['quiz', 'questions', 'score']
	),
	example(
		'flashcard-review',
		'Flashcard study session',
		'learning',
		'Reveal answers, record remembered cards, and advance through a study deck.',
		['Card', 'Button', 'Badge', 'Progress'],
		['flashcards', 'study', 'review']
	),
	example(
		'workspace-setup',
		'Workspace onboarding wizard',
		'learning',
		'Complete a three-step setup flow, move backward to revise answers, and review the completed summary.',
		['Stepper', 'Input', 'Card', 'Button']
	),
	example(
		'course-completion',
		'Course completion tracker',
		'learning',
		'Adjust completion with a slider and see milestone badges and the progress bar update together.',
		['Progress', 'Range', 'Badge', 'Button']
	),
	example(
		'no-projects-yet',
		'Empty workspace to first project',
		'learning',
		'Replace a helpful empty state with a populated project list when the first project is created.',
		['Card', 'Input', 'Button', 'Badge']
	)
];
