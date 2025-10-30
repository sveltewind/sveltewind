<script lang="ts">
	import { Div, Header, Main, Nav } from '$lib/components';
	import '../app.css';

	let { children } = $props();
</script>

<Div class="relative flex flex-col">
	<Header class="sticky top-0">
		<Nav>Test</Nav>
	</Header>
	<Main class="flex flex-col">
		{@render children()}
	</Main>
</Div>
