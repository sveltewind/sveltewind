<script lang="ts">
	import { Div, AvatarGroup } from '$lib/components';
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
		<AvatarGroup
			avatars={[
				{ name: 'Alex Morgan' },
				{ name: 'Sam Rivera' },
				{ name: 'Casey Lee' },
				{ name: 'Taylor Gray' }
			]}
			max={3}
		/>
	</Div>
{:else if documentationExample === 'variant'}
	<!-- @example {"title":"Theme variants","description":"Apply a built-in theme variant."} -->
	<Div class="w-full min-w-0">
		<AvatarGroup
			variants={[documentationVariant]}
			avatars={[
				{ name: 'Alex Morgan' },
				{ name: 'Sam Rivera' },
				{ name: 'Casey Lee' },
				{ name: 'Taylor Gray' }
			]}
			max={3}
		/>
	</Div>
{:else if documentationExample === 'class'}
	<!-- @example {"title":"Class overrides","description":"Apply rounded-xl border border-primary-500/40 p-4 locally."} -->
	<Div class="w-full min-w-0">
		<AvatarGroup
			class="rounded-xl border border-primary-500/40 p-4"
			avatars={[
				{ name: 'Alex Morgan' },
				{ name: 'Sam Rivera' },
				{ name: 'Casey Lee' },
				{ name: 'Taylor Gray' }
			]}
			max={3}
		/>
	</Div>
{:else if documentationExample === 'props'}
	<!-- @example {"title":"Props and behavior","description":"Change max while retaining the default component styling."} -->
	<Div class="w-full min-w-0">
		<AvatarGroup
			avatars={[
				{ name: 'Alex Morgan' },
				{ name: 'Sam Rivera' },
				{ name: 'Casey Lee' },
				{ name: 'Taylor Gray' }
			]}
			max={2}
		/>
	</Div>
{:else if documentationExample === 'content'}
	<!-- @example {"title":"Content and values","description":"Provide different avatars values."} -->
	<Div class="w-full min-w-0">
		<AvatarGroup
			avatars={[{ name: 'Riley Chen' }, { name: 'Quinn Davis' }, { name: 'Jordan Lee' }]}
			max={3}
		/>
	</Div>
{/if}
