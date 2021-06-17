import { CardGroup } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/index.css';

import { INTERNS } from '../lib/constants';
import TeamCard from './TeamCard';

function TeamGrid() {

  return (
    <>
      <CardGroup>
        {INTERNS.map((intern) => {
          return <TeamCard name={intern.name} position={intern.position} />
        })}
      </CardGroup>
    </>
  );
}

export default TeamGrid;
