<script>
  import { Button, Card, Fieldset, Form, Input, H1 } from '$lib/components';
</script>

<Card>
  <Form on:submit={(e) => e.preventDefault()}>
    <H1>Welcome Back!</H1>
    <Fieldset legend="Username or email">
      <Input />
    </Fieldset>
    <Fieldset legend="Password">
      <Input type="password" />
    </Fieldset>
    <Button>Sign In</Button>
  </Form>
</Card>
