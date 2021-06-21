import { Form, FormGroup, Label, TextInput, Textarea, Button } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";
import styles from "./styles.scss";

function ContactForm() {
  const { t, i18n } = useTranslation();

  return (
    <Form className={i18n.language === "ar" ? "rtlText" : ""}>
      <FormGroup>
        <Label htmlFor="full-name" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t('full-name')}</Label>
        <TextInput id="full-name" name="full-name" type="text" className={i18n.language === "ar" ? "rtl rtlText" : ""} autoComplete="name" />
        <Label htmlFor="subject" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t('subject')}</Label>
        <TextInput id="subject" name="subject" type="text" className={i18n.language === "ar" ? "rtl rtlText" : ""} autoComplete="subject" />
        <Label htmlFor="email" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t('email')}</Label>
        <TextInput id="email" name="email" type="email"  className={i18n.language === "ar" ? "rtl rtlText" : ""} autoComplete="email"/>
        <Label htmlFor="message" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t('message')}</Label>
        <Textarea id="message" name="message" className={i18n.language === "ar" ? "rtl rtlText" : ""} autoComplete="message" />
        <Button type="submit" aria-label="Submit">{t("submit")}</Button>
      </FormGroup>
    </Form>
  );
}

export default ContactForm;
