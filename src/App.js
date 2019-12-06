import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import FrontView from './Components/FrontViev';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Router path='/app' component={FrontView} />
      </Switch>
    </Router>
  );
}

export default App;
