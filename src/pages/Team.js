import TeamGrid from '../components/TeamGrid';
import { GridContainer } from '@trussworks/react-uswds';

import { useTranslation } from "react-i18next";
import "../translations/i18n";

function TeamPage() {

  const { t } = useTranslation();
  
  return (
    <GridContainer containerSize="widescreen">
      <br />
      <h1>{t("team")}</h1>
      <br />
      <TeamGrid />
    </GridContainer>
  );
}

export default TeamPage;
