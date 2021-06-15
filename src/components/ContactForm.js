import { Form, FormGroup, Label, TextInput, Textarea } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

function ContactForm() {

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="name">Full Name</Label>
        <TextInput id="name" name="name" type="text" />
        <Label htmlFor="subject">Subject</Label>
        <TextInput id="subject" name="subject" type="text" />
        <Label htmlFor="email">Email</Label>
        <TextInput id="email" name="email" type="email" />
        <Label htmlFor="message-content">Message</Label>
        <Textarea id="message-content" name="message-content" />
      </FormGroup>
    </Form>
  );
}

export default ContactForm;
