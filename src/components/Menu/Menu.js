import { useState } from 'react';
import { PrimaryNav, Header, Title, NavMenuButton } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import styles from './Menu.modules.scss';

function Menu() {
  const [expanded, setExpanded] = useState(false);
  const onClick = () => {
    setExpanded(prvExpanded => !prvExpanded);
  }
  const menuItems = [
    <a href="/team" key="two" className="usa-nav__link">
      <span>Team</span>
    </a>,
    <a href="/contact" key="three" className="usa-nav__link">
      <span>Contact</span>
    </a>,
  ];

  return (
    <>
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>MOCTO CIC Interns</Title>
            <NavMenuButton onClick={onClick} label="Menu" />
          </div>
          <PrimaryNav
            items={menuItems}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick} />
        </div>
      </Header>
    </>
  );
}

export default Menu;
