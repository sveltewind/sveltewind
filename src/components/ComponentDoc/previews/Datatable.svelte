<script lang="ts">
	import { Div, Datatable } from '$lib/components';
	let datatableRows = $state([
		{ id: 1, name: 'Alex', role: 'Designer' },
		{ id: 2, name: 'Sam', role: 'Developer' },
		{ id: 3, name: 'Casey', role: 'Editor' }
	]);
	let projectRows = $state([
		{ id: 1, name: 'Riley', role: 'Designer' },
		{ id: 2, name: 'Quinn', role: 'Developer' },
		{ id: 3, name: 'Jordan', role: 'Editor' }
	]);
	let datatableSequence = $state(3);
	let {
		documentationExample = 'default',
		documentationVariant = ''
	}: {
		documentationVariant?: string;
		documentationExample?: 'default' | 'variant' | 'class' | 'props' | 'content';
	} = $props();
</script>

{#if documentationExample === 'default'}
	<!-- @example {"title":"Default usage","description":"The component with default styling."} -->
	<Div class="w-full min-w-0">
		<Datatable
			columns={[
				'name',
				{
					key: 'role',
					options: [
						{ label: 'Designer', value: 'Designer' },
						{ label: 'Developer', value: 'Developer' },
						{ label: 'Editor', value: 'Editor' }
					]
				}
			]}
			rows={datatableRows}
			pagination={{ currentPage: 1, rowsPerPage: 2 }}
			oncreate={(row) => {
				datatableRows = [
					...datatableRows,
					{ id: ++datatableSequence, name: String(row.name ?? ''), role: String(row.role ?? '') }
				];
			}}
			ondelete={(deleted) => {
				const ids = new Set(deleted.map((row) => row.id));
				datatableRows = datatableRows.filter((row) => !ids.has(row.id));
			}}
			onupdate={({ key, row, value }) => {
				datatableRows = datatableRows.map((entry) =>
					entry.id === row.id ? { ...entry, [key]: value } : entry
				);
			}}
		/>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Div class="w-full min-w-0">
		<Datatable
			variants={[documentationVariant]}
			columns={[
				'name',
				{
					key: 'role',
					options: [
						{ label: 'Designer', value: 'Designer' },
						{ label: 'Developer', value: 'Developer' },
						{ label: 'Editor', value: 'Editor' }
					]
				}
			]}
			rows={datatableRows}
			pagination={{ currentPage: 1, rowsPerPage: 2 }}
			oncreate={(row) => {
				datatableRows = [
					...datatableRows,
					{ id: ++datatableSequence, name: String(row.name ?? ''), role: String(row.role ?? '') }
				];
			}}
			ondelete={(deleted) => {
				const ids = new Set(deleted.map((row) => row.id));
				datatableRows = datatableRows.filter((row) => !ids.has(row.id));
			}}
			onupdate={({ key, row, value }) => {
				datatableRows = datatableRows.map((entry) =>
					entry.id === row.id ? { ...entry, [key]: value } : entry
				);
			}}
		/>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<Datatable
			class="rounded-xl border border-primary-500/40 p-4"
			columns={[
				'name',
				{
					key: 'role',
					options: [
						{ label: 'Designer', value: 'Designer' },
						{ label: 'Developer', value: 'Developer' },
						{ label: 'Editor', value: 'Editor' }
					]
				}
			]}
			rows={datatableRows}
			pagination={{ currentPage: 1, rowsPerPage: 2 }}
			oncreate={(row) => {
				datatableRows = [
					...datatableRows,
					{ id: ++datatableSequence, name: String(row.name ?? ''), role: String(row.role ?? '') }
				];
			}}
			ondelete={(deleted) => {
				const ids = new Set(deleted.map((row) => row.id));
				datatableRows = datatableRows.filter((row) => !ids.has(row.id));
			}}
			onupdate={({ key, row, value }) => {
				datatableRows = datatableRows.map((entry) =>
					entry.id === row.id ? { ...entry, [key]: value } : entry
				);
			}}
		/>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change isEditable, isDeletable, isCreatable while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<Datatable
			isCreatable={false}
			isDeletable={false}
			isEditable={false}
			columns={[
				'name',
				{
					key: 'role',
					options: [
						{ label: 'Designer', value: 'Designer' },
						{ label: 'Developer', value: 'Developer' },
						{ label: 'Editor', value: 'Editor' }
					]
				}
			]}
			rows={datatableRows}
			pagination={{ currentPage: 1, rowsPerPage: 2 }}
			oncreate={(row) => {
				datatableRows = [
					...datatableRows,
					{ id: ++datatableSequence, name: String(row.name ?? ''), role: String(row.role ?? '') }
				];
			}}
			ondelete={(deleted) => {
				const ids = new Set(deleted.map((row) => row.id));
				datatableRows = datatableRows.filter((row) => !ids.has(row.id));
			}}
			onupdate={({ key, row, value }) => {
				datatableRows = datatableRows.map((entry) =>
					entry.id === row.id ? { ...entry, [key]: value } : entry
				);
			}}
		/>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different text, child content, or definitions inside the required parent context."} -->
	<Div class="w-full min-w-0">
		<Datatable
			aria-label="Custom datatable example"
			columns={[
				'name',
				{
					key: 'role',
					options: [
						{ label: 'Designer', value: 'Designer' },
						{ label: 'Developer', value: 'Developer' },
						{ label: 'Editor', value: 'Editor' }
					]
				}
			]}
			rows={projectRows}
			pagination={{ currentPage: 1, rowsPerPage: 2 }}
			oncreate={(row) => {
				projectRows = [
					...projectRows,
					{ id: ++datatableSequence, name: String(row.name ?? ''), role: String(row.role ?? '') }
				];
			}}
			ondelete={(deleted) => {
				const ids = new Set(deleted.map((row) => row.id));
				projectRows = projectRows.filter((row) => !ids.has(row.id));
			}}
			onupdate={({ key, row, value }) => {
				projectRows = projectRows.map((entry) =>
					entry.id === row.id ? { ...entry, [key]: value } : entry
				);
			}}
		/>
	</Div>
{/if}
