import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import ContactPage from './pages/Contact';
import TeamPage from './pages/Team';
import MissingPage from './pages/Missing';
import Menu from './components/Menu';
import LangSelect from './components/LangSelect';
import { NAVIGATION } from './lib/constants';

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const pagePath = location.pathname;
    console.log("location changed!", pagePath.split("/"));
    i18n.changeLanguage(pagePath.split("/")[1]);
  }, [location]);

  const teamRoute = NAVIGATION[0].route;
  const contactRoute = NAVIGATION[1].route;

  const [locale, setLocale] = useState(i18n.language);

  const changeLang = (lng) => {
    setLocale(lng);
    console.log("locale", lng);
  }

  return (
    <>
      <Menu locale={locale} />
      <LangSelect changeLang={changeLang} />
      <Switch>
        <Redirect from='/' to={`/${locale}${teamRoute}`} exact />
        <Redirect from={`/${locale}`} to={`/${locale}${teamRoute}`} exact />
        <Redirect from={teamRoute} to={`/${locale}${teamRoute}`} exact />
        <Redirect from={contactRoute} to={`/${locale}${contactRoute}`} exact />
        <Route path={`/${locale}${teamRoute}`} exact>
          <TeamPage />
        </Route>
        <Route path={`/${locale}${contactRoute}`} exact>
          <ContactPage />
        </Route>
        <Route path="*" exact>
          <MissingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
