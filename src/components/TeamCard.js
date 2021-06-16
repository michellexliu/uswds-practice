import { Card, CardMedia, CardBody, CardHeader } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";
import "../translations/i18n";

function TeamCard({name, position}) {
  const { t } = useTranslation();

  return (
    <>
      <Card
        gridLayout={{ tablet: { col: 4 } }}
        containerProps={{ className: 'border-none' }}>
        <CardHeader>
          <h3>{t(name)}</h3>
        </CardHeader>
        <CardMedia>
          <img
            src={`/assets/${name}.jpg`}
            alt={t("headshot", { name: name })}
          />
        </CardMedia>
        <CardBody>
          <p>
            {t(position)}
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default TeamCard;
