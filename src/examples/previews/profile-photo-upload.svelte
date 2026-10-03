<script lang="ts">
	import { Card, H2, P, FileUpload, Div, Badge, Button } from '$lib/components';
	let files = $state<File[]>([]);
</script>

<Card class="mx-auto w-full max-w-2xl space-y-5">
	<H2 class="text-2xl font-semibold">Profile photo upload</H2>
	<P class="text-sm">Choose files up to 5 MB each. Files stay in your browser in this example.</P>
	<FileUpload
		label="Choose a profile photo"
		accept="image/*"
		multiple
		maxSize={5 * 1024 * 1024}
		bind:files
	/>
	<Div class="flex flex-wrap items-center justify-between gap-3">
		<Badge>{files.length} selected</Badge>
		<Button
			type="button"
			variants={['outline']}
			disabled={!files.length}
			onclick={() => (files = [])}
		>
			Clear selection
		</Button>
	</Div>
</Card>
