import TeamGrid from "../components/TeamGrid";
import { GridContainer } from "@trussworks/react-uswds";

import { useTranslation } from "react-i18next";

function TeamPage() {
  const { t, i18n } = useTranslation();

  return (
    <GridContainer containerSize="widescreen">
      <br />
      <h1 style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
        {t("routes", { returnObjects: true })[0].title}
      </h1>
      <br />
      <TeamGrid />
      <br />
    </GridContainer>
  );
}

export default TeamPage;
