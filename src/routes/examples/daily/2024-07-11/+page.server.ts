let tasks = [
	{
		priority: 'High',
		title: 'Create a design system',
		ongoing: true,
		description:
			'Create a set of interconnected patterns and shared practices coherently organized.',
		attachments: [{ filename: 'Brief.pdf', filetype: 'pdf', size: '1.2 mb' }],
		checklist: [
			{ label: 'Choose typography', complete: true },
			{ label: 'Create a styleguide', complete: false },
			{ label: 'Add input components', complete: false }
		],
		complete: false
	},
	{
		priority: 'Normal',
		title: 'Study for exam',
		ongoing: false,
		attachments: [{ filename: 'Brief.pdf', filetype: 'pdf', size: '1.2 mb' }],
		complete: false
	},
	{
		priority: 'Normal',
		title: 'Go for the job interview',
		ongoing: false,
		attachments: [{ filename: 'Brief.pdf', filetype: 'pdf', size: '1.2 mb' }],
		complete: false
	},
	{
		priority: 'Normal',
		title: 'Attend lunch with Steve',
		ongoing: false,
		complete: true
	},
	{
		priority: 'Low',
		title: 'Go for a walk',
		ongoing: false,
		complete: true
	}
];

export const load = async () => {
	return { tasks };
};
