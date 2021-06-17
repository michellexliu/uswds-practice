import { GridContainer } from '@trussworks/react-uswds';
import Form from '../components/ContactForm';

import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <GridContainer containerSize="widescreen">
      <br />
      <h1>{t('contact')}</h1>
      <Form />
    </GridContainer>
  );
}

export default Contact;
