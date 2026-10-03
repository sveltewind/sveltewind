<script lang="ts">
	import { Alert, Badge, Button, Card, Div, Form, H2, Input, P } from '$lib/components';
	const uid = $props.id();
	let digits = $state(['', '', '', '', '', '']);
	let inputs = $state<(HTMLInputElement | null)[]>(Array(6).fill(null));
	let message = $state('');
	let verified = $state(false);
	let resends = $state(0);
	function enter(event: Event & { currentTarget: HTMLInputElement }, index: number) {
		digits[index] = event.currentTarget.value.replace(/\D/g, '').slice(-1);
		message = '';
		if (digits[index]) inputs[index + 1]?.focus();
	}
	function keyboard(event: KeyboardEvent, index: number) {
		if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
			event.preventDefault();
			inputs[Math.max(0, Math.min(5, index + (event.key === 'ArrowRight' ? 1 : -1)))]?.focus();
		} else if (event.key === 'Backspace' && !digits[index]) inputs[index - 1]?.focus();
	}
	function paste(event: ClipboardEvent) {
		const code = event.clipboardData?.getData('text').replace(/\D/g, '').slice(0, 6) ?? '';
		if (!code) return;
		event.preventDefault();
		digits = Array.from({ length: 6 }, (_, i) => code[i] ?? '');
		inputs[Math.min(code.length, 5)]?.focus();
		message = '';
	}
	function verify(event: SubmitEvent) {
		event.preventDefault();
		verified = digits.join('') === '123456';
		message = verified
			? 'Demo code verified. You can continue.'
			: 'That code did not match. Try 123456.';
	}
</script>

<Card class="mx-auto max-w-lg space-y-5 text-center"
	><Badge>Account verification</Badge><H2 class="text-2xl font-semibold"
		>Enter your six-digit code</H2
	><P class="text-sm"
		>Use the demo code <strong>123456</strong>. You can paste all six digits or enter them
		individually.</P
	><Form class="space-y-5" onsubmit={verify} onpaste={paste}
		><Div class="grid grid-cols-6 gap-2"
			>{#each digits as digit, index}<Input
					aria-label={'Digit ' + (index + 1)}
					id={uid + index}
					type="text"
					inputmode="numeric"
					autocomplete={index === 0 ? 'one-time-code' : 'off'}
					maxlength={1}
					pattern="[0-9]"
					value={digit}
					bind:element={inputs[index]}
					class="w-full min-w-0 px-0 text-center text-2xl"
					oninput={(event) => enter(event, index)}
					onkeydown={(event) => keyboard(event, index)}
					required
				/>{/each}</Div
		><Button type="submit" disabled={digits.some((digit) => !digit)}>Verify code</Button></Form
	>{#if message}<Alert role="status" variants={verified ? ['success'] : ['info']}>{message}</Alert
		>{/if}<Button
		type="button"
		variants={['ghost']}
		class="text-sm"
		onclick={() => {
			resends++;
			verified = false;
			message = 'Demo code resent: 123456. No email was sent.';
		}}>Resend code</Button
	>{#if resends}<P class="text-xs">{resends} demo resend{resends === 1 ? '' : 's'}</P>{/if}</Card
>
