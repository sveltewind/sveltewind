<script lang="ts">
	import CodeExample from './CodeExample/index.svelte';
	import Header from './Header/index.svelte';
	import Hero from './Hero/index.svelte';
	import IndexBeams from './IndexBeams/index.svelte';
</script>

<header class="relative">
	<div class="px-4 sm:px-6 md:px-8">
		<IndexBeams />
		<Header />
		<Hero />
	</div>
	<CodeExample />
</header>
