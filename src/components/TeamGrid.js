import { CardGroup } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/index.css';

import { INTERNS } from '../lib/constants';
import TeamCard from './TeamCard';
import { useTranslation } from 'react-i18next';

function TeamGrid() {
  const { i18n } = useTranslation();

  return (
    <>
      <CardGroup style={{ justifyContent: i18n.language === "ar" ? "flex-end" : "flex-start" }}>
        {INTERNS.map((intern) => {
          return <TeamCard name={intern.name} position={intern.position} key={intern.name} />
        })}
      </CardGroup>
    </>
  );
}

export default TeamGrid;
