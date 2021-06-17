import { Form, FormGroup, Label, TextInput, Textarea, Button } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t, i18n } = useTranslation();

  const textStyle = { textAlign: i18n.language === "ar" ? "right" : "left" };

  return (
    <Form style={{ float: i18n.language === "ar" ? "right" : "left" }}>
      <FormGroup>
        <Label htmlFor="full_name" style={textStyle}>{t('full_name')}</Label>
        <TextInput id="full_name" name="full_name" type="text" style={textStyle} />
        <Label htmlFor="subject" style={textStyle}>{t('subject')}</Label>
        <TextInput id="subject" name="subject" type="text" style={textStyle} />
        <Label htmlFor="email" style={textStyle}>{t('email')}</Label>
        <TextInput id="email" name="email" type="email"  style={textStyle}/>
        <Label htmlFor="message" style={textStyle}>{t('message')}</Label>
        <Textarea id="message" name="message" style={textStyle} />
        <Button type="submit" style={{ float: i18n.language === "ar" ? "right" : "left" }}>{t("submit")}</Button>
      </FormGroup>
    </Form>
  );
}

export default ContactForm;
