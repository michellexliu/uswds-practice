import { useState } from 'react';
import { PrimaryNav, Header, Title, NavMenuButton, GovBanner } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";
import "../translations/i18n";

import styles from './Menu.modules.scss';
import { NAVIGATION } from '../lib/constants'

function Menu() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const onClick = () => {
    setExpanded(prvExpanded => !prvExpanded);
  }

  const menuItems = NAVIGATION.map(({name, route}) => {
    return (
      <a href={route} key={name} className="usa-nav__link">
        <span>{t(name)}</span>
      </a>
    )
  });

  return (
    <>
      <GovBanner aria-label="Official government website" />
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>{t('title')}</Title>
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
