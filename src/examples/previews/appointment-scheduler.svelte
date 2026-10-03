<script lang="ts">
	import {
		Alert,
		Badge,
		Button,
		Card,
		Div,
		Field,
		Form,
		H2,
		H3,
		Input,
		Label,
		P
	} from '$lib/components';
	const uid = $props.id();
	const days = Array.from({ length: 5 }, (_, i) =>
		new Date(Date.UTC(2026, 9, 5 + i)).toLocaleDateString('en-US', {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
			timeZone: 'UTC'
		})
	);
	const times = ['09:00', '10:30', '11:30', '14:00', '15:30'];
	const unavailable: Record<number, string[]> = {
		0: ['10:30'],
		1: ['09:00', '14:00'],
		2: ['11:30'],
		3: [],
		4: ['15:30']
	};
	let day = $state(0);
	let time = $state('');
	let name = $state('');
	let confirmation = $state('');
	let booked = $state<Record<string, boolean>>({});
	function confirm(event: SubmitEvent) {
		event.preventDefault();
		if (!name.trim() || !time) return;
		booked[day + ':' + time] = true;
		confirmation = `${name.trim()}, your demo consultation is booked for ${days[day]} at ${time} UTC.`;
		time = '';
	}
</script>

<Card class="mx-auto max-w-2xl space-y-6"
	><Div
		><Badge>30-minute consultation</Badge><H2 class="mt-3 text-2xl font-semibold"
			>Choose a time to talk</H2
		><P class="mt-2 text-sm">Sample availability for October 2026. All times are UTC.</P></Div
	><Div class="grid grid-cols-5 gap-2"
		>{#each days as date, i}<Button
				type="button"
				variants={day === i ? [] : ['outline']}
				class="px-2 text-xs"
				aria-pressed={day === i}
				onclick={() => {
					day = i;
					time = '';
				}}>{date}</Button
			>{/each}</Div
	><H3 class="text-base font-semibold">Available times</H3><Div
		class="grid grid-cols-2 gap-3 sm:grid-cols-3"
		>{#each times as slot}<Button
				type="button"
				disabled={unavailable[day].includes(slot) || booked[day + ':' + slot]}
				variants={time === slot ? [] : ['outline']}
				aria-pressed={time === slot}
				onclick={() => (time = slot)}>{slot}</Button
			>{/each}</Div
	><Form class="space-y-4" onsubmit={confirm}
		><Field
			><Label for={uid}>Your name</Label><Input
				id={uid}
				bind:value={name}
				required
				placeholder="Alex Morgan"
			/></Field
		><Button type="submit" disabled={!time || !name.trim()}>Confirm appointment</Button></Form
	>{#if confirmation}<Alert role="status" variants={['success']}>{confirmation}</Alert>{/if}</Card
>
