import { GridContainer } from '@trussworks/react-uswds';
import Form from '../components/ContactForm';

import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <GridContainer containerSize="widescreen">
      <br />
      <h1 style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>{t('contact')}</h1>
      <Form />
    </GridContainer>
  );
}

export default Contact;
