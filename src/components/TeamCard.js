import { useState } from 'react';
import { Card, CardMedia, CardBody, CardHeader, Title } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'


function TeamCard({name, position, img_source}) {
  return (
    <>
      <Card
        gridLayout={{ tablet: { col: 4 } }}
        containerProps={{ className: 'border-none' }}>
        <CardHeader>
          <h3>{name}</h3>
        </CardHeader>
        <CardMedia>
          <img
            src={img_source}
            alt={`${name}'s headshot`}
          />
        </CardMedia>
        <CardBody>
          <p>
            {position}
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default TeamCard;
