import { useState } from 'react';
import { useHistory } from 'react-router';
import { 
  PrimaryNav, 
  Header, 
  Title, 
  NavMenuButton, 
  GovBanner, 
  GridContainer, 
  Grid, 
  Link 
} from '@trussworks/react-uswds'
import '@trussworks/react-uswds/lib/index.css'

import { useTranslation } from "react-i18next";

import { NAVIGATION } from '../lib/constants';
import styles from './styles.scss';

function Menu() {
  let history = useHistory();
  
  const [expanded, setExpanded] = useState(false);
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

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
      <Link onClick={handleClick} key={t(name)} className="usa-nav__link">
        <span>{t(name)}</span>
      </Link>
    )
  });

  return (
    <>
      <GovBanner aria-label="Official government website" language={locale === "es" ? "spanish" : "english"} />
      <Header basic={true} className={i18n.language === "ar" ? "rtl" : ""}>
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
