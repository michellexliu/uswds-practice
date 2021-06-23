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

  const menuItems = t("routes", { returnObjects: true }).map(
    ({ route, title }) => {
      const handleClick = (event) => {
        history.push(getNewUrl(route));
        event.preventDefault();
      };

      return (
        <Button
          onClick={handleClick}
          key={route}
          className={`usa-nav__link ${
            location.pathname.split("/")[2] === route ? "usa-current" : ""
          }`}
          tabIndex='0'
        >
          <span>{title}</span>
        </Button>
      );
    }
  );

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
