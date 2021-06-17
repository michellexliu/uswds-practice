import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { 
  PrimaryNav, 
  Header, 
  Title, 
  NavMenuButton, 
  GovBanner, 
  GridContainer, 
  Grid, 
  Button 
} from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";

import styles from './Menu.scss';
import { NAVIGATION } from '../lib/constants';

function Menu({ locale }) {
  let history = useHistory()

  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const onClick = () => {
    setExpanded(prvExpanded => !prvExpanded);
  }

  const getNewUrl = (page) => {
    console.log(`/${locale}/${page}`);
    return `/${locale}/${page}`;
  }

  const menuItems = NAVIGATION.map(({name}) => {
    const handleClick = event => {
      history.push(getNewUrl(name));
      event.preventDefault();
    }

    return (
      <Button onClick={handleClick} key={t(name)} className="usa-nav__link">
        <span>{t(name)}</span>
      </Button>
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
