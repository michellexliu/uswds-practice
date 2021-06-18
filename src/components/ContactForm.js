import { Form, FormGroup, Label, TextInput, Textarea, Button } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";
import styles from "./styles.scss";

function ContactForm() {
  const { t, i18n } = useTranslation();

  return (
    <Form style={{ float: i18n.language === "ar" ? "right" : "left" }}>
      <FormGroup>
        <Label htmlFor="full-name" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t('full-name')}</Label>
        <TextInput id="full-name" name="full-name" type="text" className={i18n.language === "ar" ? "rtl rtlText" : ""} />
        <Label htmlFor="subject" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t('subject')}</Label>
        <TextInput id="subject" name="subject" type="text" className={i18n.language === "ar" ? "rtl rtlText" : ""} />
        <Label htmlFor="email" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t('email')}</Label>
        <TextInput id="email" name="email" type="email"  className={i18n.language === "ar" ? "rtl rtlText" : ""}/>
        <Label htmlFor="message" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t('message')}</Label>
        <Textarea id="message" name="message" className={i18n.language === "ar" ? "rtl rtlText" : ""} />
        <Button type="submit" className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t("submit")}</Button>
      </FormGroup>
    </Form>
  );
}

export default ContactForm;
