import TeamGrid from '../components/TeamGrid/TeamGrid';
import { GridContainer } from '@trussworks/react-uswds';

function TeamPage() {
  return (
    <GridContainer containerSize="widescreen">
      <h1>Our Team</h1>
      <br />
      <TeamGrid />
    </GridContainer>
  );
}

export default TeamPage;
