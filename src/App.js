import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ContactPage from './pages/Contact';
import TeamPage from './pages/Team';
import Menu from './components/Menu';

function App() {
  const [lng, setLng] = useState('en');

  return (
    <Router basename={`/${lng}`}>
      <Menu />
      <Switch>
        // Might make homepage later— for now, root directs to team page.
        <Redirect exact from="/" to="/team" />
        <Route path="/team" exact>
          <TeamPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
