import { Card, CardMedia, CardBody, CardHeader } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";

function TeamCard({name, position}) {
  const { t, i18n } = useTranslation();
  const textStyle = { textAlign: i18n.language === "ar" ? "right" : "left" };

  return (
    <>
      <Card
        gridLayout={{ tablet: { col: 4 } }}
        containerProps={{ className: 'border-none' }}>
        <CardHeader>
          <h3 style={textStyle}>{t(name)}</h3>
        </CardHeader>
        <CardMedia>
          <img
            src={`/assets/${name}.jpg`}
            alt={t("headshot", { name: name })}
          />
        </CardMedia>
        <CardBody>
          <p style={textStyle}>
            {t(position)}
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default TeamCard;
