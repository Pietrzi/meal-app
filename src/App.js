import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontView from './Components/Application/FrontViev';
import LandingPage from './Components/LandingPage/LandingPage';

class App extends React.Component{
    state = {
      name: "imię"
    }

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route path='/app' component={FrontView}></Route>
        </Switch>
      </Router>
    );
  }
  
}

export default App;
