import { CardGroup } from "@trussworks/react-uswds";
import "@trussworks/react-uswds/lib/index.css";

import TeamCard from "./TeamCard";
import { useTranslation } from "react-i18next";

function TeamGrid() {
  const { i18n, t } = useTranslation();

  return (
    <CardGroup
      style={{
        justifyContent: i18n.language === "ar" ? "flex-end" : "flex-start"
      }}
    >
      {t("interns", { returnObjects: true }).map((intern) => {
        return (
          <TeamCard
            name={intern.name}
            position={intern.position}
            key={intern.name}
            img={intern.img}
          />
        );
      })}
    </CardGroup>
  );
}

export default TeamGrid;
