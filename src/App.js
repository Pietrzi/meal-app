import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontView from './Components/Application/FrontViev';
import LandingPage from './Components/LandingPage/LandingPage';
import Test from './Components/Test';

class App extends React.Component{
    state = {
      name: "imię"
    }

  render() {

    // let frontView = <FrontView name={this.state.name}/>
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <FrontView {...props}  name={ this.state.name }/>}></Route>
          <Route path='/app' component={FrontView}/>
        </Switch>
      </Router>
    );
  }
  
}

export default App;
