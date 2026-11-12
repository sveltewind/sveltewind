<script lang="ts">
	import { Button, Card, Container, Field, H1, Input, Label, P } from '$components';
	let { data, form } = $props();
</script>

<svelte:head>
	<title>Blog admin · Sveltewind</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Container class="max-w-xl py-16">
	<H1>Blog admin</H1>
	{#if !data.configured}
		<Card class="mt-6">
			<P>Configure the blog admin credentials on the server before signing in.</P>
		</Card>
	{:else}
		<form method="POST" class="mt-8 flex flex-col gap-6">
			<Field>
				<Label for="admin-key">Admin access key</Label><Input
					id="admin-key"
					name="key"
					type="password"
					autocomplete="current-password"
					required
					maxlength={1000}
				/>
			</Field>
			{#if form?.message}<P role="alert">{form.message}</P>{/if}
			<Button type="submit">Sign in</Button>
		</form>
	{/if}
</Container>
