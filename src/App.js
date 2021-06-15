import { Switch, Route } from 'react-router-dom';

import ContactPage from './pages/Contact';
import TeamPage from './pages/Team';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <TeamPage />
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
