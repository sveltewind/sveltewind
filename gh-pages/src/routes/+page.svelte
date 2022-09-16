<script>
	// imports
	import { Button, Checkbox, Fieldset, Input } from '$components';

    const testAction = (node, message = 'yup') => 
        node.addEventListener('click', e => console.log(message));
    
</script>

<div class="p-[1rem] flex flex-col space-y-[2rem] items-start">
	<Fieldset legend="Button">
		<Button use={[[testAction, 'test']]}>Button</Button>
	</Fieldset>
	<Fieldset legend="Input">
		<Input />
	</Fieldset>
	<Checkbox>Checkbox</Checkbox>
</div>