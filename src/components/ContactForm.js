import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Button,
  ErrorMessage,
  Link
} from "@trussworks/react-uswds";
import "@trussworks/react-uswds/lib/index.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import validator from "validator";
import styles from "./styles.scss";

function ContactForm() {
  const { t, i18n } = useTranslation();

  const [errors, setErrors] = useState([]);
  const [submission, setSubmission] = useState({
    name: "",
    subject: "",
    email: "",
    message: ""
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setSubmission((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = () => {
    let newErrors = [];
    for (const property in submission) {
      if (property === "email" && !validator.isEmail(submission[property])) {
        newErrors.push(
          <ErrorMessage id='input-error-message'>
            <Link href={`#${property}`}>{t(`contactErrors.${property}`)}</Link>
          </ErrorMessage>
        );
      } else if (submission[property] === "") {
        newErrors.push(
          <ErrorMessage id='input-error-message'>
            <Link href={`#${property}`}>{t(`contactErrors.${property}`)}</Link>
          </ErrorMessage>
        );
      }
    }
    setErrors(() => newErrors);
  };

  return (
    <>
      {errors.length !== 0 && errors}
      <Form className={i18n.language === "ar" ? "rtlText" : ""}>
        <FormGroup>
          <Label
            htmlFor='name'
            className={i18n.language === "ar" ? "rtl rtlText" : ""}
          >
            {t("contactFields.name")}
          </Label>
          <TextInput
            required
            onChange={handleChange}
            id='name'
            name='name'
            type='text'
            className={i18n.language === "ar" ? "rtl rtlText" : ""}
            autoComplete='name'
          />
          <Label
            htmlFor='subject'
            className={i18n.language === "ar" ? "rtl rtlText" : ""}
          >
            {t("contactFields.subject")}
          </Label>
          <TextInput
            required
            onChange={handleChange}
            id='subject'
            name='subject'
            type='text'
            className={i18n.language === "ar" ? "rtl rtlText" : ""}
            autoComplete='subject'
          />
          <Label
            htmlFor='email'
            className={i18n.language === "ar" ? "rtl rtlText" : ""}
          >
            {t("contactFields.email")}
          </Label>
          <TextInput
            required
            onChange={handleChange}
            id='email'
            name='email'
            type='email'
            className={i18n.language === "ar" ? "rtl rtlText" : ""}
            autoComplete='email'
          />
          <Label
            htmlFor='message'
            className={i18n.language === "ar" ? "rtl rtlText" : ""}
          >
            {t("contactFields.message")}
          </Label>
          <Textarea
            required
            onChange={handleChange}
            id='message'
            name='message'
            className={i18n.language === "ar" ? "rtl rtlText" : ""}
            autoComplete='message'
          />
          <Button type='submit' aria-label={t("submit")} onClick={handleSubmit}>
            {t("contactFields.submit")}
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default ContactForm;
