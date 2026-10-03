import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { Theme } from '$lib/theme';
import type { TransitionProps } from '$lib/components/types';

export type BooleanFilterOperator = 'equals' | 'notEquals';
export type CellSnippetProps = {
	column: Column;
	key: string;
	row: Row;
	update: (value: any) => void | Promise<void>;
	value: any;
};
export type CellType = 'boolean' | 'date' | 'number' | 'object' | 'string' | 'undefined';
export type Column = {
	getOptionLabel?: (option: any) => string;
	getOptionValue?: (option: any) => any;
	isCreatable: boolean;
	isEditable: boolean;
	isFilterable: boolean;
	isSortable: boolean;
	isVisible: boolean;
	key: string;
	label: string;
	options?: Option[];
	snippet: Snippet<[CellSnippetProps]>;
	type: CellType;
};
export type ColumnInput = Pick<Column, 'key'> & Partial<Omit<Column, 'key'>>;
export type DateFilterOperator =
	| 'equals'
	| 'notEquals'
	| 'before'
	| 'beforeOrEqual'
	| 'after'
	| 'afterOrEqual'
	| 'isEmpty'
	| 'isNotEmpty';
export type Filter = {
	key: string;
	operator: FilterOperator;
	value?: unknown;
};
export type FilterOperator =
	| StringFilterOperator
	| NumberFilterOperator
	| BooleanFilterOperator
	| DateFilterOperator;
export type NumberFilterOperator =
	| 'equals'
	| 'notEquals'
	| 'greaterThan'
	| 'greaterThanOrEqual'
	| 'lessThan'
	| 'lessThanOrEqual'
	| 'isEmpty'
	| 'isNotEmpty';
export type Option = {
	label: string;
	value: any;
};
export type Pagination = {
	currentPage: number;
	rowsPerPage: number;
};
export type Props = HTMLAttributes<HTMLDivElement> & {
	children?: Snippet;
	class?: string;
	columns?: (string | ColumnInput)[];
	element?: HTMLDivElement | null;
	filters?: Filter[];
	getRowKey?: ({ index, row }: { index: number; row: Row }) => RowKey;
	inTransition?: TransitionProps;
	isCreatable?: boolean;
	isCustomizable?: boolean;
	isDataControlled?: boolean;
	isDeletable?: boolean;
	isEditable?: boolean;
	isFilterable?: boolean;
	isPaginatable?: boolean;
	isSortable?: boolean;
	isVisible?: boolean;
	oncreate?: (row: Row) => void | Promise<void>;
	ondelete?: (rows: Row[]) => void | Promise<void>;
	onfilter?: (filters: Filter[]) => void | Promise<void>;
	onpaginate?: (pagination: Pagination) => void | Promise<void>;
	onsort?: (sort: Sort) => void | Promise<void>;
	onupdate?: (args: { key: string; row: Row; value: any }) => void | Promise<void>;
	outTransition?: TransitionProps;
	pagination?: Pagination;
	rows?: Row[];
	sort?: Sort;
	table?: Snippet;
	tbody?: Snippet;
	td?: Snippet<[CellSnippetProps]>;
	th?: Snippet<[Column]>;
	thead?: Snippet;
	theme?: Theme;
	toolbar?: Snippet;
	totalRows?: number;
	transition?: TransitionProps;
	variants?: string[];
};
export type Row = Record<string, any>;
export type RowKey = string | number;
export type Sort = {
	direction: SortDirection;
	key: string;
};
export type SortDirection = 'asc' | 'desc';
export type StringFilterOperator =
	| 'contains'
	| 'doesNotContain'
	| 'equals'
	| 'notEquals'
	| 'startsWith'
	| 'endsWith'
	| 'isEmpty'
	| 'isNotEmpty';
