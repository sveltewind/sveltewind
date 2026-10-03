<script lang="ts">
	import {
		ArrowDown,
		ArrowUp,
		ChevronFirst,
		ChevronLast,
		ChevronLeft,
		ChevronRight,
		ChevronsUpDown,
		Filter as FilterIcon,
		Plus,
		Settings2,
		Trash,
		TriangleAlert,
		X
	} from '@lucide/svelte';
	import { untrack, type Snippet } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { theme as globalTheme, type Theme } from '$lib/theme';
	import {
		Br,
		Button,
		Card,
		Checkbox,
		Dialog,
		Div,
		Field,
		Input,
		Label,
		P,
		Select,
		Span,
		Table,
		Tbody,
		Td,
		Th,
		Thead,
		Tr,
		noopTransition
	} from '$lib/components';
	import { scale } from 'svelte/transition';
	import type {
		CellSnippetProps,
		CellType,
		Column,
		ColumnInput,
		Filter,
		FilterOperator,
		Option,
		Props,
		Row,
		RowKey
	} from './types';

	// $props
	let {
		children,
		class: className = '',
		columns,
		element = $bindable(null),
		filters = $bindable([]),
		getRowKey = ({ index, row }: { index: number; row: Row }) => row.id ?? row._id ?? index,
		inTransition,
		isCreatable = true,
		isCustomizable = true,
		isDataControlled = false,
		isDeletable = true,
		isEditable = true,
		isFilterable = true,
		isPaginatable = true,
		isSortable = true,
		isVisible = $bindable(true),
		oncreate,
		ondelete,
		onfilter,
		onpaginate,
		onsort,
		onupdate,
		outTransition,
		pagination = $bindable({
			currentPage: 1,
			rowsPerPage: 10
		}),
		rows = [],
		sort = $bindable(),
		table,
		tbody,
		td,
		th,
		thead,
		theme = globalTheme,
		toolbar,
		totalRows,
		transition = [noopTransition, {}],
		variants = [],
		...restProps
	}: Props = $props();

	// Constants
	const filterOperatorsByType: Record<CellType, FilterOperator[]> = {
		boolean: ['equals', 'notEquals'],
		date: [
			'equals',
			'notEquals',
			'before',
			'beforeOrEqual',
			'after',
			'afterOrEqual',
			'isEmpty',
			'isNotEmpty'
		],
		number: [
			'equals',
			'notEquals',
			'greaterThan',
			'greaterThanOrEqual',
			'lessThan',
			'lessThanOrEqual',
			'isEmpty',
			'isNotEmpty'
		],
		object: ['isEmpty', 'isNotEmpty'],
		string: [
			'contains',
			'doesNotContain',
			'equals',
			'notEquals',
			'startsWith',
			'endsWith',
			'isEmpty',
			'isNotEmpty'
		],
		undefined: ['isEmpty', 'isNotEmpty']
	};
	const selectedRowKeys = new SvelteSet<RowKey>();
	const snippetMap = new Map<CellType, Snippet<[CellSnippetProps]>>([
		['boolean', booleanCell],
		['date', dateCell],
		['number', numberCell],
		['object', objectCell],
		['string', stringCell],
		['undefined', undefinedCell]
	]);
	const uid = $props.id();

	// Helpers
	const addFilter = async () => {
		const column = tableData.sanitizedColumns.find((column) => column.isFilterable);

		if (!column) return;

		const operator = filterOperatorsByType[column.type][0];

		tempFilters = [
			...tempFilters,
			{
				key: column.key,
				operator,
				value:
					operator === 'isEmpty' || operator === 'isNotEmpty'
						? undefined
						: (column.options?.[0]?.value ?? (column.type === 'boolean' ? true : undefined))
			}
		];
	};
	const applyCustomization = async () => {
		if (tempRowsPerPage !== pagination.rowsPerPage) {
			selectedRowKeys.clear();
			pagination = {
				currentPage: 1,
				rowsPerPage: tempRowsPerPage
			};

			await onpaginate?.(pagination);
		}

		isCustomizeDialogVisible = false;
	};
	const applyFilters = async () => {
		selectedRowKeys.clear();
		filters = tempFilters.map((filter) => ({ ...filter }));

		await onfilter?.(filters);

		isFilterDialogVisible = false;
	};
	const createNewRow = async () => {
		await oncreate?.({ ...createRow });

		createRow = {};
		isCreateDialogVisible = false;
	};
	const deleteSelectedRows = async () => {
		const selected = tableData.paginatedRows.filter((row) =>
			selectedRowKeys.has(getRowKey({ index: rows.indexOf(row), row }))
		);

		if (!selected.length) return;

		await ondelete?.(selected);

		selectedRowKeys.clear();
		isDeleteDialogVisible = false;
	};
	const formatLabel = (key: string) => {
		return key
			.replace(/^_/, '')
			.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
			.replace(/[-_]/g, ' ')
			.replace(/\b\w/g, (character) => character.toUpperCase());
	};
	const getColumnOptions = (column: ColumnInput): Option[] =>
		(
			column.options?.map((option) => {
				if (
					typeof option === 'object' &&
					option !== null &&
					'label' in option &&
					'value' in option &&
					!column.getOptionLabel &&
					!column.getOptionValue
				) {
					return option as Option;
				}

				return {
					label: column.getOptionLabel?.(option) ?? String(option),
					value: column.getOptionValue?.(option) ?? option
				};
			}) ?? []
		).sort((a, b) => a.label.localeCompare(b.label));
	const getValue = (row: Row, key: string): any => {
		return key.split('.').reduce((value, part) => value?.[part], row);
	};
	const goToPage = async (currentPage: number) => {
		selectedRowKeys.clear();

		pagination = {
			...pagination,
			currentPage: Math.max(1, Math.min(tableData.totalPages, Math.floor(currentPage)))
		};

		await onpaginate?.(pagination);
	};
	const inferType = (key: string): CellType => {
		for (const row of rows) {
			const value = getValue(row, key);

			if (value === null || value === undefined) continue;

			if (value instanceof Date) return 'date';

			if (
				typeof value === 'string' &&
				!Number.isNaN(Date.parse(value)) &&
				/^\d{4}-\d{2}-\d{2}T/.test(value)
			) {
				return 'date';
			}

			if (typeof value === 'boolean') return 'boolean';
			if (typeof value === 'number') return 'number';
			if (typeof value === 'object') return 'object';

			return 'string';
		}

		return 'undefined';
	};
	const matchesFilter = (row: Row, filter: Filter, columns: Column[]): boolean => {
		const value = getValue(row, filter.key);

		switch (filter.operator) {
			case 'contains':
				return String(value ?? '')
					.toLowerCase()
					.includes(String(filter.value ?? '').toLowerCase());

			case 'doesNotContain':
				return !String(value ?? '')
					.toLowerCase()
					.includes(String(filter.value ?? '').toLowerCase());

			case 'equals': {
				const column = columns.find((column) => column.key === filter.key);

				if (column?.type === 'date') {
					return new Date(value).getTime() === new Date(filter.value as string).getTime();
				}

				return value === filter.value;
			}

			case 'notEquals': {
				const column = columns.find((column) => column.key === filter.key);

				if (column?.type === 'date') {
					return new Date(value).getTime() !== new Date(filter.value as string).getTime();
				}

				return value !== filter.value;
			}

			case 'startsWith':
				return String(value ?? '')
					.toLowerCase()
					.startsWith(String(filter.value ?? '').toLowerCase());

			case 'endsWith':
				return String(value ?? '')
					.toLowerCase()
					.endsWith(String(filter.value ?? '').toLowerCase());

			case 'greaterThan':
				return typeof filter.value === 'number' && value > filter.value;

			case 'greaterThanOrEqual':
				return typeof filter.value === 'number' && value >= filter.value;

			case 'lessThan':
				return typeof filter.value === 'number' && value < filter.value;

			case 'lessThanOrEqual':
				return typeof filter.value === 'number' && value <= filter.value;

			case 'before':
				return new Date(value).getTime() < new Date(filter.value as string).getTime();

			case 'beforeOrEqual':
				return new Date(value).getTime() <= new Date(filter.value as string).getTime();

			case 'after':
				return new Date(value).getTime() > new Date(filter.value as string).getTime();

			case 'afterOrEqual':
				return new Date(value).getTime() >= new Date(filter.value as string).getTime();

			case 'isEmpty':
				return value === null || value === undefined || value === '';

			case 'isNotEmpty':
				return value !== null && value !== undefined && value !== '';
		}
	};
	const openCreateDialog = () => {
		createRow = {};

		for (const column of tableData.sanitizedColumns.filter((column) => column.isCreatable)) {
			if (column.options?.length) {
				createRow[column.key] = column.options[0].value;
				continue;
			}

			switch (column.type) {
				case 'boolean':
					createRow[column.key] = false;
					break;

				case 'number':
					createRow[column.key] = 0;
					break;

				default:
					createRow[column.key] = '';
			}
		}

		isCreateDialogVisible = true;
	};
	const openCustomizeDialog = () => {
		tempRowsPerPage = pagination.rowsPerPage;
		isCustomizeDialogVisible = true;
	};
	const openFilterDialog = () => {
		tempFilters = filters.map((filter) => ({ ...filter }));
		isFilterDialogVisible = true;
	};
	const removeFilter = async (index: number) => {
		tempFilters = tempFilters.filter((_, filterIndex) => filterIndex !== index);
	};
	const sortColumn = async (column: Column) => {
		if (!column.isSortable) return;

		const direction = sort?.key === column.key && sort.direction === 'asc' ? 'desc' : 'asc';

		selectedRowKeys.clear();
		sort = { direction, key: column.key };
		await onsort?.(sort);
	};
	const toLocalDateTime = (value: any): string => {
		if (!value) return '';

		const date = new Date(value);
		if (Number.isNaN(date.getTime())) return '';
		const offset = date.getTimezoneOffset() * 60_000;

		return new Date(date.getTime() - offset).toISOString().slice(0, 16);
	};
	const toggleAllRows = (checked: boolean) => {
		selectedRowKeys.clear();

		if (!checked) return;

		tableData.paginatedRows.forEach((row) => {
			selectedRowKeys.add(getRowKey({ index: rows.indexOf(row), row }));
		});
	};
	const toggleRow = ({ checked, index, row }: { checked: boolean; index: number; row: Row }) => {
		const key = getRowKey({ index: rows.indexOf(row), row });

		if (checked) selectedRowKeys.add(key);
		if (!checked) selectedRowKeys.delete(key);
	};
	const updateCell = async ({ key, row, value }: { key: string; row: Row; value: any }) => {
		await onupdate?.({ key, row, value });
	};
	const updateFilter = async (index: number, update: Partial<Filter>) => {
		tempFilters = tempFilters.map((filter, filterIndex) =>
			filterIndex === index ? { ...filter, ...update } : filter
		);
	};
	const updateFilterColumn = async (index: number, key: string) => {
		const column = tableData.sanitizedColumns.find((column) => column.key === key);

		if (!column) return;

		updateFilter(index, {
			key,
			operator: filterOperatorsByType[column.type][0],
			value: column.options?.[0]?.value ?? (column.type === 'boolean' ? true : undefined)
		});
	};
	// $state
	let createRow = $state<Row>({});
	let isCreateDialogVisible = $state(false);
	let isCustomizeDialogVisible = $state(false);
	let isDeleteDialogVisible = $state(false);
	let isFilterDialogVisible = $state(false);
	let tempFilters = $state<Filter[]>([]);
	let tempRowsPerPage = $state(pagination.rowsPerPage);

	// $derived
	const classes = $derived(theme.resolve('datatable', variants, className));
	const tableData = $derived.by(() => {
		const sanitizedColumns = (() => {
			// Row property order can change when sorting or fetching another page.
			const inferredKeys = Object.keys(rows[0] ?? {})
				.filter((key) => !['_id', '__v'].includes(key))
				.sort();

			const source: ColumnInput[] =
				columns !== undefined
					? columns.map((column) => (typeof column === 'string' ? { key: column } : column))
					: inferredKeys.map((key) => ({ key }));

			return source.map((column): Column => {
				const normalized =
					typeof column === 'string'
						? {
								key: column
							}
						: column;

				const type = normalized.type ?? inferType(normalized.key);

				return {
					...normalized,
					isCreatable: normalized.isCreatable ?? isCreatable,
					isEditable: normalized.isEditable ?? isEditable,
					isFilterable: normalized.isFilterable ?? isFilterable,
					isSortable: normalized.isSortable ?? isSortable,
					isVisible: normalized.isVisible ?? true,
					label: normalized.label ?? formatLabel(normalized.key),
					options: getColumnOptions(normalized),
					snippet: normalized.snippet ?? snippetMap.get(type) ?? stringCell,
					type
				};
			});
		})();
		const filteredRows = (() => {
			if (isDataControlled || !filters.length) return rows;

			return rows.filter((row) =>
				filters.every((filter) => matchesFilter(row, filter, sanitizedColumns))
			);
		})();
		const sortedRows = (() => {
			if (isDataControlled || !sort) return filteredRows;

			const order = sort;
			return [...filteredRows].sort((a, b) => {
				const aValue = getValue(a, order.key);
				const bValue = getValue(b, order.key);

				if (aValue == null && bValue == null) return 0;
				if (aValue == null) return 1;
				if (bValue == null) return -1;

				let result = 0;

				if (typeof aValue === 'number' && typeof bValue === 'number') {
					result = aValue - bValue;
				} else if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
					result = Number(aValue) - Number(bValue);
				} else {
					result = String(aValue).localeCompare(String(bValue), undefined, {
						numeric: true,
						sensitivity: 'base'
					});
				}

				return order.direction === 'asc' ? result : -result;
			});
		})();
		const pageSize = Math.max(1, Math.floor(pagination.rowsPerPage) || 10);
		const totalPages = Math.max(1, Math.ceil((totalRows ?? sortedRows.length) / pageSize));
		const currentPage = Math.max(1, Math.min(totalPages, Math.floor(pagination.currentPage) || 1));
		const pageStart = (currentPage - 1) * pageSize;
		const paginatedRows = (() => {
			if (isDataControlled || totalRows !== undefined || !isPaginatable) {
				return sortedRows;
			}

			return sortedRows.slice(pageStart, pageStart + pageSize);
		})();

		const isAllRowsSelected =
			paginatedRows.length > 0 &&
			paginatedRows.every((row) =>
				selectedRowKeys.has(getRowKey({ index: rows.indexOf(row), row }))
			);
		const isAnyRowsSelected = selectedRowKeys.size > 0;
		const isToolbarVisible = isCreatable || isCustomizable || isDeletable || isFilterable;
		return {
			filteredRows,
			isAllRowsSelected,
			isAnyRowsSelected,
			isToolbarVisible,
			pageStart,
			paginatedRows,
			sanitizedColumns,
			sortedRows,
			totalPages
		};
	});
	// $effects
	$effect(() => {
		rows;
		untrack(() => selectedRowKeys.clear());
	});
	$effect(() => {
		if (!isVisible) {
			isCreateDialogVisible =
				isCustomizeDialogVisible =
				isDeleteDialogVisible =
				isFilterDialogVisible =
					false;
		}
	});
	$effect(() => {
		if (!Number.isFinite(pagination.rowsPerPage) || pagination.rowsPerPage < 1) {
			pagination = { ...pagination, rowsPerPage: 10 };
		}
		if (!Number.isFinite(pagination.currentPage) || pagination.currentPage < 1) {
			goToPage(1);
		} else if (pagination.currentPage > tableData.totalPages) {
			goToPage(tableData.totalPages);
		}
	});
</script>

<Div
	{theme}
	{...restProps}
	bind:element
	class={classes}
	{inTransition}
	bind:isVisible
	{outTransition}
	{transition}
>
	{#if children}
		{@render children()}
	{:else}
		{#if toolbar}
			{@render toolbar()}
		{:else}
			<Div {theme} class={theme.resolve('datatableToolbar')} isVisible={tableData.isToolbarVisible}>
				{#if isDeletable}
					<Button
						{theme}
						type="button"
						disabled={!tableData.isAnyRowsSelected}
						aria-label="Delete selected records"
						onclick={() => {
							isDeleteDialogVisible = true;
						}}
						variants={['icon', 'error']}
					>
						<Trash aria-hidden="true" class={theme.resolve('datatableIcon')} />
					</Button>
				{/if}
				<Button
					{theme}
					type="button"
					isVisible={isCustomizable}
					aria-label="Customize table"
					onclick={openCustomizeDialog}
					variants={['icon']}
				>
					<Settings2 aria-hidden="true" class={theme.resolve('datatableIcon')} />
				</Button>
				{#if isFilterable}
					<Div {theme} class={theme.resolve('datatableFilterAnchor')}>
						<Button
							{theme}
							type="button"
							aria-label="Filter records"
							onclick={openFilterDialog}
							variants={['icon']}
						>
							<FilterIcon aria-hidden="true" class={theme.resolve('datatableIcon')} />
						</Button>
						<Div
							{theme}
							class={theme.resolve('datatableFilterCount')}
							isVisible={filters.length > 0}
							transition={[scale, { duration: 200, opacity: 1 }]}
						>
							{filters.length}
						</Div>
					</Div>
				{/if}
				{#if isCreatable}
					<Button
						{theme}
						type="button"
						aria-label="Create record"
						onclick={openCreateDialog}
						variants={['icon']}
					>
						<Plus aria-hidden="true" class={theme.resolve('datatableIcon')} />
					</Button>
				{/if}
			</Div>
		{/if}
		{#if table}
			{@render table()}
		{:else}
			<Card {theme} class={theme.resolve('datatableScroll')}>
				<Table {theme} aria-label={restProps['aria-label'] ?? 'Data table'}>
					{#if thead}
						{@render thead()}
					{:else}
						<Thead {theme}>
							<Tr {theme}>
								{#if isDeletable}
									<Th {theme}>
										<Checkbox
											{theme}
											aria-label="Select all records"
											checked={tableData.isAllRowsSelected}
											onchange={(event) => {
												toggleAllRows((event.currentTarget as HTMLInputElement).checked);
											}}
										/>
									</Th>
								{/if}
								{#each tableData.sanitizedColumns.filter((column) => column.isVisible) as column (column.key)}
									{#if th}
										{@render th(column)}
									{:else if column.isSortable}
										<Th
											{theme}
											scope="col"
											aria-sort={sort?.key === column.key
												? sort.direction === 'asc'
													? 'ascending'
													: 'descending'
												: 'none'}
											class={theme.resolve('datatableCell')}
										>
											<Button
												{theme}
												type="button"
												class={theme.resolve('datatableSort')}
												onclick={() => sortColumn(column)}
												variants={['ghost', 'square']}
											>
												<Span {theme} class={theme.resolve('datatableHeading')}>
													{column.label}
												</Span>

												{#if sort?.key === column.key}
													{#if sort.direction === 'asc'}
														<ArrowUp
															aria-hidden="true"
															class={theme.resolve('datatableSortIcon')}
														/>
													{:else}
														<ArrowDown
															aria-hidden="true"
															class={theme.resolve('datatableSortIcon')}
														/>
													{/if}
												{:else}
													<ChevronsUpDown
														aria-hidden="true"
														class={theme.resolve('datatableUnsortedIcon')}
													/>
												{/if}
											</Button>
										</Th>
									{:else}
										<Th {theme} scope="col" class={theme.resolve('datatableHeading')}>
											{column.label}
										</Th>
									{/if}
								{/each}
							</Tr>
						</Thead>
					{/if}
					{#if tbody}
						{@render tbody()}
					{:else}
						<Tbody {theme}>
							{#if tableData.paginatedRows.length === 0}
								<Tr {theme}>
									{#if isDeletable}
										<Td {theme}></Td>
									{/if}
									<Td
										{theme}
										colspan={Math.max(
											1,
											tableData.sanitizedColumns.filter((column) => column.isVisible).length
										)}>No records found.</Td
									>
								</Tr>
							{:else}
								{#each tableData.paginatedRows as row, index (getRowKey( { index: rows.indexOf(row), row } ))}
									<Tr {theme}>
										{#if isDeletable}
											<Td {theme}>
												<Checkbox
													{theme}
													aria-label="Select record"
													checked={selectedRowKeys.has(
														getRowKey({ index: rows.indexOf(row), row })
													)}
													onchange={(event) => {
														toggleRow({
															checked: (event.currentTarget as HTMLInputElement).checked,
															index: rows.indexOf(row),
															row
														});
													}}
												/>
											</Td>
										{/if}
										{#each tableData.sanitizedColumns.filter((column) => column.isVisible) as column (column.key)}
											{@const value = getValue(row, column.key)}

											{#if td}{@render td({
													column,
													key: column.key,
													row,
													value,
													update: (value) => updateCell({ key: column.key, row, value })
												})}{:else}
												{@render column.snippet?.({
													column,
													key: column.key,
													row,
													value,
													update: (value) => updateCell({ key: column.key, row, value })
												})}
											{/if}
										{/each}
									</Tr>
								{/each}
							{/if}
						</Tbody>
					{/if}
				</Table>
			</Card>
		{/if}
		<Div {theme} class={theme.resolve('datatablePagination')} isVisible={isPaginatable}>
			<Div {theme}>
				Page {pagination.currentPage} of {tableData.totalPages}
			</Div>

			<Div {theme} class={theme.resolve('datatablePageControls')}>
				<Button
					{theme}
					type="button"
					disabled={pagination.currentPage < 2}
					aria-label="First page"
					onclick={() => goToPage(1)}
					variants={['icon']}
				>
					<ChevronFirst aria-hidden="true" class={theme.resolve('datatableIcon')} />
				</Button>
				<Button
					{theme}
					type="button"
					disabled={pagination.currentPage < 2}
					aria-label="Previous page"
					onclick={() => goToPage(pagination.currentPage - 1)}
					variants={['icon']}
				>
					<ChevronLeft aria-hidden="true" class={theme.resolve('datatableIcon')} />
				</Button>
				<Select
					{theme}
					value={pagination.currentPage}
					onchange={(event) => goToPage(Number(event.currentTarget.value))}
					aria-label="Page"
					options={Array.from({ length: tableData.totalPages }).map((_, index) => ({
						label: `${index + 1}`,
						value: index + 1
					}))}
				/>
				<Button
					{theme}
					type="button"
					disabled={pagination.currentPage >= tableData.totalPages}
					aria-label="Next page"
					onclick={() => goToPage(pagination.currentPage + 1)}
					variants={['icon']}
				>
					<ChevronRight aria-hidden="true" class={theme.resolve('datatableIcon')} />
				</Button>

				<Button
					{theme}
					type="button"
					disabled={pagination.currentPage >= tableData.totalPages}
					aria-label="Last page"
					onclick={() => goToPage(tableData.totalPages)}
					variants={['icon']}
				>
					<ChevronLast aria-hidden="true" class={theme.resolve('datatableIcon')} />
				</Button>
			</Div>
		</Div>
	{/if}
</Div>

<Dialog
	{theme}
	aria-label="Create record"
	bind:isVisible={isCreateDialogVisible}
	class={theme.resolve('datatableDialog')}
>
	<Button
		{theme}
		type="button"
		class={theme.resolve('datatableClose')}
		aria-label="Close dialog"
		onclick={() => (isCreateDialogVisible = false)}
		variants={['icon']}
	>
		<X aria-hidden="true" class={theme.resolve('datatableIcon')} />
	</Button>

	{#each tableData.sanitizedColumns.filter((column) => column.isCreatable) as column (column.key)}
		<Field {theme}>
			<Label {theme} for={`create-${uid}-${column.key}`}>
				{column.label}
			</Label>

			{#if column.options?.length}
				<Select
					{theme}
					id={`create-${uid}-${column.key}`}
					onchange={(event) => {
						createRow[column.key] = column.options?.[event.currentTarget.selectedIndex]?.value;
					}}
					options={column.options}
					value={createRow[column.key] ?? ''}
				/>
			{:else if column.type === 'boolean'}
				<Checkbox
					{theme}
					id={`create-${uid}-${column.key}`}
					checked={createRow[column.key] ?? false}
					onchange={(event) => {
						createRow[column.key] = (event.currentTarget as HTMLInputElement).checked;
					}}
				/>
			{:else if column.type === 'date'}
				<Input
					{theme}
					id={`create-${uid}-${column.key}`}
					oninput={(event) => {
						const value = (event.currentTarget as HTMLInputElement).value;

						createRow[column.key] = value ? new Date(value).toISOString() : null;
					}}
					type="datetime-local"
					value={toLocalDateTime(createRow[column.key])}
				/>
			{:else if column.type === 'number'}
				<Input
					{theme}
					class={theme.resolve('datatableNumericInput')}
					id={`create-${uid}-${column.key}`}
					oninput={(event) => {
						createRow[column.key] = Number((event.currentTarget as HTMLInputElement).value);
					}}
					type="number"
					value={createRow[column.key] ?? 0}
				/>
			{:else}
				<Input
					{theme}
					id={`create-${uid}-${column.key}`}
					oninput={(event) => {
						createRow[column.key] = (event.currentTarget as HTMLInputElement).value;
					}}
					value={createRow[column.key] ?? ''}
				/>
			{/if}
		</Field>
	{/each}

	<Div {theme} class={theme.resolve('datatableActions')}>
		<Button
			{theme}
			type="button"
			onclick={() => (isCreateDialogVisible = false)}
			variants={['ghost']}>Cancel</Button
		>
		<Button {theme} type="button" onclick={createNewRow}>Create</Button>
	</Div>
</Dialog>
<Dialog
	{theme}
	aria-label="Customize table"
	bind:isVisible={isCustomizeDialogVisible}
	class={theme.resolve('datatableDialog')}
>
	<Button
		{theme}
		type="button"
		class={theme.resolve('datatableClose')}
		aria-label="Close dialog"
		onclick={() => (isCustomizeDialogVisible = false)}
		variants={['icon']}
	>
		<X aria-hidden="true" class={theme.resolve('datatableIcon')} />
	</Button>

	<Field {theme}>
		<Label {theme} for={`${uid}-rows-per-page`}>Rows Per Page</Label>

		<Select
			{theme}
			id={`${uid}-rows-per-page`}
			onchange={(event) => {
				tempRowsPerPage = Number((event.currentTarget as HTMLSelectElement).value);
			}}
			options={[
				{ label: '10', value: '10' },
				{ label: '25', value: '25' },
				{ label: '50', value: '50' },
				{ label: '100', value: '100' }
			]}
			value={String(tempRowsPerPage)}
		/>
	</Field>

	<Div {theme} class={theme.resolve('datatableApply')}>
		<Button {theme} type="button" onclick={applyCustomization}>Apply</Button>
	</Div>
</Dialog>
<Dialog
	{theme}
	aria-label="Delete selected records"
	bind:isVisible={isDeleteDialogVisible}
	class={theme.resolve('datatableDeleteDialog')}
>
	<Button
		{theme}
		type="button"
		class={theme.resolve('datatableClose')}
		aria-label="Close dialog"
		onclick={() => (isDeleteDialogVisible = false)}
		variants={['icon']}
	>
		<X aria-hidden="true" class={theme.resolve('datatableIcon')} />
	</Button>
	<TriangleAlert aria-hidden="true" class={theme.resolve('datatableWarningIcon')} />
	<P {theme}
		>Are you sure you want to delete these items?<Br {theme} />This action cannot be undone.</P
	>
	<Div {theme} class={theme.resolve('datatableDeleteActions')}>
		<Button
			{theme}
			type="button"
			onclick={() => (isDeleteDialogVisible = false)}
			variants={['ghost']}>Cancel</Button
		>
		<Button {theme} type="button" onclick={deleteSelectedRows} variants={['error']}
			>Delete Rows</Button
		>
	</Div>
</Dialog>
<Dialog
	{theme}
	aria-label="Filter records"
	bind:isVisible={isFilterDialogVisible}
	class={theme.resolve('datatableDialog')}
>
	<Button
		{theme}
		type="button"
		class={theme.resolve('datatableClose')}
		aria-label="Close dialog"
		onclick={() => (isFilterDialogVisible = false)}
		variants={['icon']}
	>
		<X aria-hidden="true" class={theme.resolve('datatableIcon')} />
	</Button>

	<Div {theme} class={theme.resolve('datatableFilters')}>
		<Div {theme} />
		<Label {theme}>Column</Label>
		<Label {theme}>Operator</Label>
		<Label {theme}>Value</Label>

		{#each tempFilters as filter, index}
			{@const column = tableData.sanitizedColumns.find((column) => column.key === filter.key)}

			{#if column}
				<Button
					{theme}
					type="button"
					aria-label="Remove filter"
					onclick={() => removeFilter(index)}
					variants={['icon', 'error']}
				>
					<Trash aria-hidden="true" class={theme.resolve('datatableIcon')} />
				</Button>

				<Select
					{theme}
					aria-label="Filter column"
					value={filter.key}
					onchange={(event) =>
						updateFilterColumn(index, (event.currentTarget as HTMLSelectElement).value)}
					options={tableData.sanitizedColumns
						.filter((column) => column.isFilterable)
						.map((column) => ({ label: column.label, value: column.key }))}
				/>

				<Select
					{theme}
					aria-label="Filter operator"
					value={filter.operator}
					onchange={(event) => {
						const operator = (event.currentTarget as HTMLSelectElement).value as FilterOperator;

						updateFilter(index, {
							operator,
							value: operator === 'isEmpty' || operator === 'isNotEmpty' ? undefined : filter.value
						});
					}}
					options={filterOperatorsByType[column.type].map((operator) => ({
						label: formatLabel(operator),
						value: operator
					}))}
				/>

				{#if filter.operator === 'isEmpty' || filter.operator === 'isNotEmpty'}
					<Div {theme} />
				{:else if column.options?.length}
					<Select
						aria-label="Filter value"
						{theme}
						onchange={(event) => {
							updateFilter(index, {
								value: column.options?.[event.currentTarget.selectedIndex]?.value
							});
						}}
						options={column.options}
						value={filter.value ?? column.options[0]?.value ?? ''}
					/>
				{:else if column.type === 'boolean'}
					<Select
						aria-label="Filter value"
						{theme}
						onchange={(event) =>
							updateFilter(index, {
								value: (event.currentTarget as HTMLSelectElement).value === 'true'
							})}
						options={[
							{ label: 'True', value: 'true' },
							{ label: 'False', value: 'false' }
						]}
						value={String(filter.value ?? true)}
					/>
				{:else if column.type === 'number'}
					<Input
						aria-label="Filter value"
						{theme}
						oninput={(event) => {
							const value = (event.currentTarget as HTMLInputElement).value;

							updateFilter(index, {
								value: value === '' ? undefined : Number(value)
							});
						}}
						type="number"
						value={filter.value ?? ''}
					/>
				{:else if column.type === 'date'}
					<Input
						aria-label="Filter value"
						{theme}
						oninput={(event) => {
							const value = (event.currentTarget as HTMLInputElement).value;

							updateFilter(index, {
								value: value ? new Date(value).toISOString() : undefined
							});
						}}
						type="datetime-local"
						value={toLocalDateTime(filter.value)}
					/>
				{:else}
					<Input
						aria-label="Filter value"
						{theme}
						oninput={(event) =>
							updateFilter(index, {
								value: (event.currentTarget as HTMLInputElement).value
							})}
						value={filter.value ?? ''}
					/>
				{/if}
			{/if}
		{/each}
	</Div>

	<Div {theme} class={theme.resolve('datatableActions')}>
		<Button {theme} type="button" onclick={addFilter} variants={['ghost']}>Add Filter</Button>

		<Button {theme} type="button" onclick={applyFilters}>Apply</Button>
	</Div>
</Dialog>

{#snippet booleanCell({ column, update, value }: CellSnippetProps)}
	<Td {theme}>
		<Checkbox
			{theme}
			aria-label={column.label}
			checked={value ?? false}
			disabled={column.isEditable ? undefined : true}
			onchange={(event) => {
				update((event.currentTarget as HTMLInputElement).checked);
			}}
		/>
	</Td>
{/snippet}
{#snippet dateCell({ column, update, value }: CellSnippetProps)}
	<Td {theme} class={theme.resolve('datatableCell')}>
		<Input
			aria-label={column.label}
			{theme}
			class={theme.resolve('datatableNumericInput')}
			disabled={column.isEditable ? undefined : true}
			onchange={(event) => {
				const value = (event.currentTarget as HTMLInputElement).value;
				update(value ? new Date(value).toISOString() : null);
			}}
			readonly={column.isEditable ? undefined : true}
			type="datetime-local"
			value={toLocalDateTime(value)}
			variants={['ghost', 'square']}
		/>
	</Td>
{/snippet}
{#snippet numberCell({ column, update, value }: CellSnippetProps)}
	<Td {theme} class={theme.resolve('datatableCell')}>
		{#if column.options?.length}
			<Select
				aria-label={column.label}
				{theme}
				class={theme.resolve('datatableNumericInput')}
				disabled={column.isEditable ? undefined : true}
				onchange={(event) => {
					update(column.options?.[event.currentTarget.selectedIndex]?.value);
				}}
				options={column.options}
				value={value ?? 0}
				variants={['ghost', 'square']}
			/>
		{:else}
			<Input
				aria-label={column.label}
				{theme}
				class={theme.resolve('datatableNumericInput')}
				disabled={column.isEditable ? undefined : true}
				onchange={(event) => {
					update(Number((event.currentTarget as HTMLInputElement).value));
				}}
				value={value ?? 0}
				variants={['ghost', 'square']}
			/>
		{/if}
	</Td>
{/snippet}
{#snippet objectCell({ value }: CellSnippetProps)}
	<Td {theme}>
		{JSON.stringify(value)}
	</Td>
{/snippet}
{#snippet stringCell({ column, update, value }: CellSnippetProps)}
	<Td {theme} class={theme.resolve('datatableCell')}>
		{#if column.options?.length}
			<Select
				aria-label={column.label}
				{theme}
				disabled={column.isEditable ? undefined : true}
				onchange={(event) => {
					update(column.options?.[event.currentTarget.selectedIndex]?.value);
				}}
				options={column.options}
				value={value ?? ''}
				variants={['ghost', 'square']}
			/>
		{:else}
			<Input
				aria-label={column.label}
				{theme}
				disabled={column.isEditable ? undefined : true}
				onchange={(event) => {
					const nextValue = (event.currentTarget as HTMLInputElement).value;

					if (nextValue !== value) {
						update(nextValue);
					}
				}}
				readonly={column.isEditable ? undefined : true}
				value={value ?? ''}
				variants={['ghost', 'square']}
			/>
		{/if}
	</Td>
{/snippet}
{#snippet undefinedCell(_: CellSnippetProps)}
	<Td {theme}></Td>
{/snippet}
