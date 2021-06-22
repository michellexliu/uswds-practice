import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import {
  PrimaryNav,
  Header,
  Title,
  NavMenuButton,
  GovBanner,
  GridContainer,
  Grid,
  Button,
  Link
} from "@trussworks/react-uswds";
import "@trussworks/react-uswds/lib/index.css";

import { useTranslation } from "react-i18next";

import LangSelect from "./LangSelect";
import { NAVIGATION } from "../lib/constants";
import styles from "./styles.scss";

function Menu() {
  const history = useHistory();
  const location = useLocation();

  const [expanded, setExpanded] = useState(false);
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const onClick = () => {
    setExpanded((prvExpanded) => !prvExpanded);
  };

  const getNewUrl = (page) => {
    return `/${locale}/${page}`;
  };

  const menuItems = NAVIGATION.map(({ name }) => {
    const handleClick = (event) => {
      history.push(getNewUrl(name));
      event.preventDefault();
    };

    console.log(location.pathname.split("/")[2], name);

    return (
      <Button
        onClick={handleClick}
        key={t(name)}
        className={`usa-nav__link ${
          location.pathname.split("/")[2] === name ? "usa-current" : ""
        }`}
        tabIndex='0'
      >
        <span>{t(name)}</span>
      </Button>
    );
  });

  const returnHome = (event) => {
    history.push(getNewUrl("team"));
    event.preventDefault();
  };

  return (
    <>
      <Link className='usa-skipnav' href='#main-content'>
        Skip to main content
      </Link>
      <GovBanner
        aria-label={t("gov")}
        language={locale === "es" ? "spanish" : "english"}
        id='top'
      />
      <Header basic={true} className={i18n.language === "ar" ? "rtl" : ""}>
        <GridContainer className='usa-nav-container'>
          <Grid row className='usa-navbar'>
            <Title onClick={returnHome}>{t("title")}</Title>
            <NavMenuButton onClick={onClick} label='Menu' />
          </Grid>
          <PrimaryNav
            items={[...menuItems, <LangSelect />]}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}
          />
        </GridContainer>
      </Header>
    </>
  );
}

export default Menu;
