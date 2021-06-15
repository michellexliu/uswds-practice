import { CardGroup } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import TeamCard from './TeamCard';

function TeamGrid() {
  const interns = [
    {name: "Michelle Liu", position: "Software Engineering Intern", img_source: "https://images.unsplash.com/photo-1552084117-56a987666449?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800"},
    {name: "Kara Siegel", position: "Software Engineering Intern", img_source: "https://images.unsplash.com/photo-1552084117-56a987666449?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800"},
    {name: "Saiful Islam", position: "Software Engineering Intern", img_source: "https://images.unsplash.com/photo-1552084117-56a987666449?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800"},
    {name: "Anya Dunaif", position: "Software Engineering Intern", img_source: "https://images.unsplash.com/photo-1552084117-56a987666449?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800"},
    {name: "Britney Johnson", position: "Product Management Intern", img_source: "https://images.unsplash.com/photo-1552084117-56a987666449?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800"}
  ];

  return (
    <>
      <CardGroup>
        {interns.map((intern) => {
          return <TeamCard name={intern.name} position={intern.position} img_source={intern.img_source} />
        })}
      </CardGroup>
    </>
  );
}

export default TeamGrid;
