import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import ContactPage from './pages/Contact';
import TeamPage from './pages/Team';
import MissingPage from './pages/Missing';
import Menu from './components/Menu';
import LangSelect from './components/LangSelect';
import { NAVIGATION, LOCALES } from './lib/constants';

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const pagePath = location.pathname;
    const newLocale = pagePath.split("/")[1];
    const curPage = pagePath.split("/")[2];
    i18n.changeLanguage(LOCALES.includes(newLocale) ? newLocale : i18n.language);
    document.title = `${curPage === "team" || curPage === "contact"
                        ? t(curPage) + " | " : ""} MOCTO x CIC`;
    window.document.documentElement.lang = i18n.language;
  }, [location]);

  const teamRoute = NAVIGATION[0].name;
  const contactRoute = NAVIGATION[1].name;

  const [locale, setLocale] = useState(i18n.language);

  const changeLang = (lng) => {
    setLocale(LOCALES.includes(lng) ? lng : i18n.language);
    console.log("locale", lng);
  }

  return (
    <>
      <Menu />
      <main>
        <Switch>
          <Redirect from='/' to={`/${locale}/${teamRoute}`} exact />
          <Redirect from={`/${locale}`} to={`/${locale}/${teamRoute}`} exact />
          <Redirect from={`/${teamRoute}`} to={`/${locale}/${teamRoute}`} exact />
          <Redirect from={`/${contactRoute}`} to={`/${locale}/${contactRoute}`} exact />
          <Route path={`/${locale}/${teamRoute}`} exact>
            <TeamPage />
          </Route>
          <Route path={`/${locale}/${contactRoute}`} exact>
            <ContactPage />
          </Route>
          <Route path="*" exact>
            <MissingPage />
          </Route>
        </Switch>
      </main>
      <LangSelect changeLang={changeLang} />
    </>
  );
}

export default App;
