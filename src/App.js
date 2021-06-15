import { Switch, Route, Redirect } from 'react-router-dom';

import ContactPage from './pages/Contact';
import TeamPage from './pages/Team';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/team" />
        </Route>
        <Route path="/team" exact>
          <TeamPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
