import { Form, FormGroup, Label, TextInput, Textarea } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";
import "../translations/i18n";

function ContactForm() {
  const { t } = useTranslation();

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="full_name">{t('full_name')}</Label>
        <TextInput id="full_name" name="full_name" type="text" />
        <Label htmlFor="subject">{t('subject')}</Label>
        <TextInput id="subject" name="subject" type="text" />
        <Label htmlFor="email">{t('email')}</Label>
        <TextInput id="email" name="email" type="email" />
        <Label htmlFor="message">{t('message')}</Label>
        <Textarea id="message" name="message" />
      </FormGroup>
    </Form>
  );
}

export default ContactForm;
