import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontView from './Components/Application/FrontViev';
import LandingPage from './Components/LandingPage/LandingPage';
import Test from './Components/Test';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/app' component={FrontView} />
      </Switch>
    </Router>
  );
}

export default App;
