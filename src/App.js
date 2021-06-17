import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import ContactPage from './pages/Contact';
import TeamPage from './pages/Team';
import Menu from './components/Menu';
import { NAVIGATION } from './lib/constants';

function App() {
  const { t } = useTranslation();

  const teamRoute = NAVIGATION[0].route;
  const contactRoute = NAVIGATION[1].route;

  return (
    <Router>
      <Menu />
      <Switch>
        // Might make homepage later— for now, root directs to team page.
        <Redirect exact from="/" to={teamRoute} />
        <Route path={teamRoute} exact>
          <TeamPage />
        </Route>
        <Route path={contactRoute} exact>
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
