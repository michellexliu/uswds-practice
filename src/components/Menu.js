import { useState } from 'react';
import { PrimaryNav, Header, Title, NavMenuButton, GovBanner, GridContainer, Grid, Link } from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";

import styles from './Menu.scss';
import { NAVIGATION } from '../lib/constants';
import LangSelect from './LangSelect';

function Menu({ locale }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const onClick = () => {
    setExpanded(prvExpanded => !prvExpanded);
  }

  const menuItems = NAVIGATION.map(({name, route}) => {
    return (
      <Link href={route} key={t(name)} className="usa-nav__link">
        <span>{t(name)}</span>
      </Link>
    )
  });

  return (
    <>
      <GovBanner aria-label="Official government website" />
      <Header basic={true}>
        <GridContainer className="usa-nav-container">
          <Grid row className="usa-navbar">
            <Title>{t('title')}</Title>
            <NavMenuButton onClick={onClick} label="Menu" />
          </Grid>
          <PrimaryNav
            items={menuItems}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick} />
        </GridContainer>
      </Header>
    </>
  );
}

export default Menu;
