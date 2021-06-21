import { GridContainer } from '@trussworks/react-uswds';
import { useTranslation } from "react-i18next";

function MissingPage() {

  const { t } = useTranslation();
  
  return (
    <GridContainer containerSize="widescreen" id="main-content">
      <br />
      <h1>{t("missing")}</h1>
      <br />
    </GridContainer>
  );
}

export default MissingPage;
