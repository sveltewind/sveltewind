<script lang="ts">
	import {
		Card,
		Code,
		CodePreview,
		ComposedPreview,
		DocsSection,
		H1,
		H2,
		P,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr
	} from '$components';
	const code =
		"<script lang=\"ts\">\n  import { Datatable, type DatatableRow } from 'sveltewind/components';\n  let rows = $state<DatatableRow[]>([{ id: 1, name: 'Alex', role: 'Designer' }]);\n<\/script>\n\n<Datatable\n  columns={['name', 'role']}\n  {rows}\n  isCreatable={false}\n  isDeletable={false}\n  onupdate={({ key, row, value }) => {\n    rows = rows.map((entry) => entry.id === row.id ? { ...entry, [key]: value } : entry);\n  }}\n/>";
	const props = [
		{
			description: 'Replaces the built-in toolbar, table, and pagination content.',
			name: 'children',
			type: 'Snippet'
		},
		{ description: 'Local root class override.', name: 'class', type: 'string' },
		{
			description:
				'Explicit column list and order. Omit to infer columns from the first row. Supports dotted property paths.',
			name: 'columns',
			type: '(string | ColumnInput)[]'
		},
		{
			description: 'Bindable native root HTMLDivElement.',
			name: 'element',
			type: 'HTMLDivElement | null'
		},
		{
			description: 'Bindable filters combined with AND for local data.',
			name: 'filters',
			type: 'Filter[]'
		},
		{
			description:
				'Stable selection key; defaults to row.id, row._id, or the original input index.',
			name: 'getRowKey',
			type: '({ index, row }: { index: number; row: Row }) => RowKey'
		},
		{
			description: 'Overrides the enter transition.',
			name: 'inTransition',
			type: 'TransitionProps'
		},
		{ description: 'Enables the creatable feature.', name: 'isCreatable', type: 'boolean' },
		{ description: 'Enables the customizable feature.', name: 'isCustomizable', type: 'boolean' },
		{
			description:
				'Skips local filtering, sorting, and slicing when the application supplies a page of rows.',
			name: 'isDataControlled',
			type: 'boolean'
		},
		{ description: 'Enables the deletable feature.', name: 'isDeletable', type: 'boolean' },
		{ description: 'Enables the editable feature.', name: 'isEditable', type: 'boolean' },
		{ description: 'Enables the filterable feature.', name: 'isFilterable', type: 'boolean' },
		{ description: 'Enables the paginatable feature.', name: 'isPaginatable', type: 'boolean' },
		{ description: 'Enables the sortable feature.', name: 'isSortable', type: 'boolean' },
		{
			description: 'Bindable root visibility; hiding the component closes its dialogs.',
			name: 'isVisible',
			type: 'boolean'
		},
		{
			description: 'Persists a new row. The component does not mutate the supplied rows.',
			name: 'oncreate',
			type: '(row: Row) => void | Promise<void>'
		},
		{
			description: 'Persists deletion of the selected visible rows.',
			name: 'ondelete',
			type: '(rows: Row[]) => void | Promise<void>'
		},
		{
			description: 'Receives filters when Apply is clicked.',
			name: 'onfilter',
			type: '(filters: Filter[]) => void | Promise<void>'
		},
		{
			description:
				'Receives page changes from buttons, the page selector, and page-size customization.',
			name: 'onpaginate',
			type: '(pagination: Pagination) => void | Promise<void>'
		},
		{
			description: 'Receives the updated sort state.',
			name: 'onsort',
			type: '(sort: Sort) => void | Promise<void>'
		},
		{
			description: 'Persists an edited cell using its row, dotted key, and new value.',
			name: 'onupdate',
			type: '(args: { key: string; row: Row; value: any }) => void | Promise<void>'
		},
		{
			description: 'Overrides the exit transition.',
			name: 'outTransition',
			type: 'TransitionProps'
		},
		{
			description: 'Bindable one-based page and positive rows-per-page configuration.',
			name: 'pagination',
			type: 'Pagination'
		},
		{ description: 'Input records; defaults to an empty array.', name: 'rows', type: 'Row[]' },
		{ description: 'Bindable sort state; direction is asc or desc.', name: 'sort', type: 'Sort' },
		{
			description: 'Overrides the built-in table content with a snippet.',
			name: 'table',
			type: 'Snippet'
		},
		{
			description: 'Overrides the built-in tbody content with a snippet.',
			name: 'tbody',
			type: 'Snippet'
		},
		{
			description:
				'Cell override receiving column, key, row, value, and update. Render a Td in the snippet.',
			name: 'td',
			type: 'Snippet<[CellSnippetProps]>'
		},
		{
			description: 'Column-header override receiving the column. Render a Th in the snippet.',
			name: 'th',
			type: 'Snippet<[Column]>'
		},
		{
			description: 'Overrides the built-in thead content with a snippet.',
			name: 'thead',
			type: 'Snippet'
		},
		{
			description: 'Theme applied to the root and every built-in child component.',
			name: 'theme',
			type: 'Theme'
		},
		{
			description: 'Overrides the built-in toolbar content with a snippet.',
			name: 'toolbar',
			type: 'Snippet'
		},
		{
			description: 'Total remote result count. Supplying this value bypasses local page slicing.',
			name: 'totalRows',
			type: 'number'
		},
		{
			description: 'Root transition tuple; defaults to noopTransition.',
			name: 'transition',
			type: 'TransitionProps'
		},
		{ description: 'Root theme variants.', name: 'variants', type: 'string[]' }
	];
	const parts = [
		'datatable',
		'datatableActions',
		'datatableApply',
		'datatableCell',
		'datatableClose',
		'datatableDeleteActions',
		'datatableDeleteDialog',
		'datatableDialog',
		'datatableFilterAnchor',
		'datatableFilterCount',
		'datatableFilters',
		'datatableHeading',
		'datatableIcon',
		'datatableNumericInput',
		'datatablePageControls',
		'datatablePagination',
		'datatableScroll',
		'datatableSort',
		'datatableSortIcon',
		'datatableToolbar',
		'datatableUnsortedIcon',
		'datatableWarningIcon'
	];
</script>

<DocsSection
	><H1>Datatable</H1><P
		>Editable, sortable tables with typed filters, selection, creation dialogs, and built-in
		pagination.</P
	></DocsSection
>
<DocsSection
	><H2>Usage</H2><CodePreview {code} title="+page.svelte"
		><ComposedPreview name="Datatable" /></CodePreview
	><P
		>The preview supports creating, editing, and deleting local records. Application callbacks
		persist changes; the component never writes data to a server.</P
	></DocsSection
>
<DocsSection
	><H2>Data and selection</H2><P
		>Explicit columns define the table order and work with an empty dataset. Without columns, fields
		are inferred from the first row. Provide a unique id or _id for each record, or supply
		getRowKey. Its index is the original input index before local filtering and sorting. Selection
		clears when the input rows reference changes and when the user changes sort, filters, or page.</P
	><P
		>Bind sort, filters, and pagination to observe their state. For remote data, set
		isDataControlled, supply totalRows and the current page of rows, and fetch data in the
		callbacks. Each feature can be disabled individually. isDeletable also controls row selection.</P
	><P
		>Column snippets and td receive column, key, row, value, and update; render a Td component in
		these snippets. Dotted keys are passed unchanged to onupdate, so the application can persist
		nested fields. table, tbody, thead, th, and toolbar provide additional rendering overrides.</P
	></DocsSection
>
<DocsSection
	><H2>Props</H2><P
		>Native Div attributes and events are forwarded to the root. Common theme, visibility, and
		transition props are supported. Feature flags default to true except isDataControlled, which
		defaults to false. Pagination defaults to page 1 with 10 rows per page.</P
	><Card class="overflow-x-auto p-0"
		><Table
			><Thead><Tr><Th>Prop</Th><Th>Type</Th><Th>Description</Th></Tr></Thead><Tbody
				>{#each props as prop (prop.name)}<Tr
						><Td><Code>{prop.name}</Code></Td><Td>{prop.type}</Td><Td>{prop.description}</Td></Tr
					>{/each}</Tbody
			></Table
		></Card
	></DocsSection
>
<DocsSection
	><H2>Theming</H2><P
		>All presets include Datatable styles. The compact root variant reduces text size. The supplied
		theme also reaches every built-in primitive.</P
	><P
		>Theme entries: {#each parts as part, index (part)}{#if index > 0},
			{/if}<Code>{part}</Code>{/each}.</P
	></DocsSection
>
