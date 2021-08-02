import ScriptTag from "react-script-tag";
import { useLocation, useHistory } from "react-router-dom";
import {
  Footer,
  GridContainer,
  Button,
  Logo,
  Link,
  NavList,
  Grid,
} from "@trussworks/react-uswds";
import "@trussworks/react-uswds/lib/index.css";
import { useTranslation } from "react-i18next";

import "./styles.scss";
import { LANGS, NAVIGATION } from "../lib/constants";

function NavFooter() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const history = useHistory();
  const location = useLocation();

  const getNewUrlLang = (lng) => {
    const curPath = location.pathname;
    const pagePath = curPath.split("/")[2];
    return `/${lng}/${pagePath}`;
  };

  const listItems = LANGS.map((lang) => {
    const handleClick = (event) => {
      history.push(getNewUrlLang(lang.code));
      event.preventDefault();
    };
    // TODO: Update hrefs after figuring out language routing situation— potentially might need equivalent of onclick instead
    return (
      <Button onClick={handleClick} key={lang.code} tabIndex="0">
        {lang.name}
      </Button>
    );
  });

  const getNewUrl = (page) => {
    return `/${locale}/${page}`;
  };

  const menuItems = NAVIGATION.map(({ name }) => {
    const handleClick = (event) => {
      history.push(getNewUrl(name));
      event.preventDefault();
    };

    return (
      <Button
        onClick={handleClick}
        key={t(name)}
        className="usa-nav__link"
        tabIndex="0"
      >
        <span>{t(name)}</span>
      </Button>
    );
  });

  const returnToTop = (
    <GridContainer
      containerSize="widescreen"
      className="usa-footer__return-to-top padding-0 position-relative"
    >
      <Link href="#top" className="padding-2 bottom-0 position-absolute">
        {t("top")}
      </Link>
      <div
        id="feedback-widget"
        lang={i18n.language}
        pagetitle="MOCTO x CIC"
        endpoint="xedh26krnxt1ti"
        gaid="G-GTL37H4YS0"
      ></div>
      <ScriptTag src="/feedback-module.min.js" type="text/javascript" />
    </GridContainer>
  );

  return (
    <Footer
      size="big"
      className={i18n.language === "ar" ? "rtl" : ""}
      returnToTop={returnToTop}
      primary={
        <GridContainer containerSize="widescreen">
          <Grid row className="flex-justify">
            <Grid>
              <NavList type="primary" items={menuItems} />
            </Grid>
            <Grid>
              <NavList type="primary" items={listItems} />
            </Grid>
          </Grid>
        </GridContainer>
      }
      secondary={
        <Grid row>
          <Logo
            size="big"
            image={
              <img
                className="usa-footer__logo-img"
                alt=""
                src="/assets/mocto_logo.png"
              />
            }
            heading={<p className="usa-footer__logo-heading">{t("title")}</p>}
          />
          <Grid className="usa-footer__contact-links mobile-lg:grid-col-6 flex-align-center mobile-lg:display-flex flex-justify-end">
            <Link href="https://github.com/michellexliu/uswds-practice">
              Github
            </Link>
          </Grid>
        </Grid>
      }
    />
  );
}

export default NavFooter;
