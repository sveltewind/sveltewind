<script lang="ts">
	import { Card, Div, Avatar, H2, P, Badge, Button } from '$lib/components';
	let following = $state(false);
	const interests = ['Product design', 'Accessibility', 'Design systems'];
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<Div class="flex flex-wrap items-center gap-4">
		<Avatar name="Alex Morgan" variants={['lg']} />
		<Div>
			<H2 class="text-2xl font-semibold">Designer profile</H2>
			<P>Alex Morgan</P>
		</Div>
	</Div>
	<P>
		Sharing thoughtful work and practical ideas about Product design, Accessibility, Design systems.
	</P>

	<Div class="flex flex-wrap gap-2">
		{#each interests as interest}
			<Badge>{interest}</Badge>
		{/each}
	</Div>
	<Div class="grid grid-cols-3 gap-3">
		<Div>
			<P class="text-2xl font-semibold">24</P>
			<P class="text-xs">Projects</P>
		</Div>
		<Div>
			<P class="text-2xl font-semibold">{128 + Number(following)}</P>
			<P class="text-xs">Followers</P>
		</Div>
		<Div>
			<P class="text-2xl font-semibold">86</P>
			<P class="text-xs">Following</P>
		</Div>
	</Div>

	<Button type="button" aria-pressed={following} onclick={() => (following = !following)}>
		{following ? 'Following' : 'Follow designer'}
	</Button>
</Card>
