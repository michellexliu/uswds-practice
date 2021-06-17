import TeamGrid from '../components/TeamGrid';
import { GridContainer } from '@trussworks/react-uswds';

import { useTranslation } from "react-i18next";

function TeamPage() {

  const { t } = useTranslation();
  
  return (
    <GridContainer containerSize="widescreen">
      <br />
      <h1>{t("team")}</h1>
      <br />
      <TeamGrid />
      <br />
    </GridContainer>
  );
}

export default TeamPage;
