<script lang="ts">
	import { Code, CodePreview, H3, P, Table, Tbody, Td, Th, Thead, Tr } from '$components';

	const props = [
		{
			name: 'children',
			type: 'Snippet',
			defaultValue: 'undefined',
			description: 'Content snippet rendered by the component.'
		},
		{
			name: 'class',
			type: 'string',
			defaultValue: "''",
			description: 'Tailwind classes merged with the theme and variants.'
		},
		{
			name: 'element',
			type: 'HTMLTableCellElement | null',
			defaultValue: 'null',
			description: 'Bindable reference to the underlying DOM element.'
		},
		{
			name: 'inTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the opening transition.'
		},
		{
			name: 'isVisible',
			type: 'boolean',
			defaultValue: 'true',
			description: 'Bindable visibility state.'
		},
		{
			name: 'outTransition',
			type: 'TransitionProps',
			defaultValue: 'undefined',
			description: 'Overrides the closing transition.'
		},
		{
			name: 'theme',
			type: 'Theme',
			defaultValue: 'global theme',
			description: 'Optional local theme override.'
		},
		{
			name: 'transition',
			type: 'TransitionProps',
			defaultValue: '[noopTransition, {}]',
			description: 'A Svelte transition function and its options.'
		},
		{
			name: 'variants',
			type: 'string[]',
			defaultValue: '[]',
			description: 'Local variant names or theme references such as button.base.'
		}
	];

	import ComponentDoc from '$components/ComponentDoc/ComponentDoc.svelte';
	import Demo from '$components/ComponentDoc/previews/Th.svelte';
	import examples from '$components/ComponentDoc/previews/Th.svelte?component-examples&raw';
</script>

<ComponentDoc name="Th" {props} demo={Demo} {examples}>
	{#snippet description()}
		<P>A themed native table header cell.</P>
	{/snippet}
	{#snippet propNotes()}
		<P>
			Native attributes and event handlers are forwarded to the underlying <Code>th</Code> element unless
			handled by the component.
		</P>
	{/snippet}
	{#snippet usageNotes()}
		<P>Use Th inside a complete table to preserve native table structure.</P>
	{/snippet}
	{#snippet additionalExamples()}
		<H3>Custom classes</H3>
		<P>Use class to merge Tailwind utilities with the component theme.</P>
		<div data-example-preview class="w-full min-w-0">
			<CodePreview
				code={'<script lang="ts">\n\timport { Table, Thead, Tr, Th, Tbody, Td } from \'sveltewind/components\';\n</scr' +
					'ipt>\n\n<Table>\n\t<Thead>\n\t\t<Tr>\n\t\t\t<Th class="text-primary-500 dark:text-primary-400">Name</Th>\n\n\t\t\t<Th>Role</Th>\n\t\t</Tr>\n\t</Thead>\n\n\t<Tbody>\n\t\t<Tr>\n\t\t\t<Td>Ada</Td>\n\n\t\t\t<Td>Developer</Td>\n\t\t</Tr>\n\t</Tbody>\n</Table>\n'}
				title="+page.svelte"
			>
				<Table>
					<Thead>
						<Tr>
							<Th class="text-primary-500 dark:text-primary-400">Name</Th>
							<Th>Role</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Ada</Td>
							<Td>Developer</Td>
						</Tr>
					</Tbody>
				</Table>
			</CodePreview>
		</div>
	{/snippet}
</ComponentDoc>
