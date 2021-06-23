import { useLocation, useHistory } from "react-router-dom";
import {
  Footer,
  GridContainer,
  Button,
  Logo,
  Address,
  Link,
  NavList,
  Grid
} from "@trussworks/react-uswds";
import "@trussworks/react-uswds/lib/index.css";
import { useTranslation } from "react-i18next";

import styles from "./styles.scss";
import { LANGS } from "../lib/constants";

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
      <Button onClick={handleClick} key={lang.code} tabIndex='0'>
        {lang.name}
      </Button>
    );
  });

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
          className='usa-nav__link'
          tabIndex='0'
        >
          <span>{title}</span>
        </Button>
      );
    }
  );

  const returnToTop = (
    <GridContainer
      containerSize='widescreen'
      className='usa-footer__return-to-top'
    >
      <Link href='#top'>{t("top")}</Link>
    </GridContainer>
  );

  return (
    <Footer
      size='big'
      className={i18n.language === "ar" ? "rtl" : ""}
      returnToTop={returnToTop}
      primary={
        <GridContainer containerSize='widescreen'>
          <Grid row className='flex-justify'>
            <Grid>
              <NavList type='primary' items={menuItems} />
            </Grid>
            <Grid>
              <NavList type='primary' items={listItems} />
            </Grid>
          </Grid>
        </GridContainer>
      }
      secondary={
        <Grid row>
          <Logo
            size='big'
            image={
              <img
                className='usa-footer__logo-img'
                alt=''
                src='/assets/mocto_logo.png'
              />
            }
            heading={<p className='usa-footer__logo-heading'>{t("title")}</p>}
          />
          <Grid className='usa-footer__contact-links mobile-lg:grid-col-6 flex-align-center mobile-lg:display-flex flex-justify-end'>
            <Link href='https://github.com/michellexliu/uswds-practice'>
              Github
            </Link>
          </Grid>
        </Grid>
      }
    />
  );
}

export default NavFooter;
