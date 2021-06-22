import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import ContactPage from "./pages/Contact";
import TeamPage from "./pages/Team";
import MissingPage from "./pages/Missing";
import Menu from "./components/Menu";
import NavFooter from "./components/Footer";
import { NAVIGATION, LOCALES } from "./lib/constants";

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const pagePath = location.pathname;
    const newLocale = pagePath.split("/")[1];
    const curPage = pagePath.split("/")[2];
    changeLang(LOCALES.includes(newLocale) ? newLocale : i18n.language);
    document.title = `${
      curPage === "team" || curPage === "contact" ? t(curPage) + " | " : ""
    } MOCTO x CIC`;
    window.document.documentElement.lang = i18n.language;
  }, [location]);

  const teamRoute = NAVIGATION[0].name;
  const contactRoute = NAVIGATION[1].name;

  const [locale, setLocale] = useState(i18n.language);

  const changeLang = (newLocale) => {
    i18n.changeLanguage(newLocale);
    setLocale(newLocale);
  };

  return (
    <>
      <Menu />
      <main id='main-content'>
        <Switch>
          <Redirect from='/' to={`/${locale}/${teamRoute}`} exact />
          <Redirect from={`/${locale}`} to={`/${locale}/${teamRoute}`} exact />
          <Redirect
            from={`/${teamRoute}`}
            to={`/${locale}/${teamRoute}`}
            exact
          />
          <Redirect
            from={`/${contactRoute}`}
            to={`/${locale}/${contactRoute}`}
            exact
          />
          <Route path={`/${locale}/${teamRoute}`} component={TeamPage} exact />
          <Route
            path={`/${locale}/${contactRoute}`}
            component={ContactPage}
            exact
          />
          <Route path='*' component={MissingPage} exact />
        </Switch>
      </main>
      <NavFooter />
    </>
  );
}

export default App;
