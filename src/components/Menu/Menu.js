import { useState } from 'react';
import { PrimaryNav, Header, Title, } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

function Header() {
  const [expanded, setExpanded] = useState(false);
  const onClick = () => {
    setExpanded(prvExpanded => !prvExpanded);
  }
  const menuItems = [
    <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
  ];

  return (
    <>
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>Project Title</Title>
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

export default Header;
