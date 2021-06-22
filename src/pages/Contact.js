import { GridContainer } from "@trussworks/react-uswds";
import Form from "../components/ContactForm";

import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <GridContainer containerSize='widescreen'>
      <br />
      <h1
        className={i18n.language === "ar" ? "rtl rtlText" : ""}
        id='main-content'
      >
        {t("contact")}
      </h1>
      <Form />
      <br />
    </GridContainer>
  );
}

export default Contact;
