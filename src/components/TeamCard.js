import { Card, CardMedia, CardBody, CardHeader } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";
import styles from "./styles.scss"

function TeamCard({name, position}) {
  const { t, i18n } = useTranslation();

  return (
    <Card
      gridLayout={{ tablet: { col: 4 } }}
      containerProps={{ className: 'border-none' }}>
      <CardHeader>
        <h2 className={i18n.language === "ar" ? "rtl rtlText" : ""}>{t(name)}</h2>
      </CardHeader>
      <CardMedia>
        <img
          src={`/assets/${name}.jpg`}
          alt={t("headshot", { name: name })}
        />
      </CardMedia>
      <CardBody>
        <p className={i18n.language === "ar" ? "rtl rtlText" : ""}>
          {t(position)}
        </p>
      </CardBody>
    </Card>
  );
}

export default TeamCard;
