import React from 'react'
import { NavLink, Link, Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import AppWrapper from './AppWrapper';
import Pulpit from "./Pulpit";
import Plany from "./Plany";
import Przepisy from "./Przepisy";
import Welcome from './Welcome';


class FrontViev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            path: ""
        }
    }
    render() {
        return (
            <div className="application__wrapper">
                <nav>
                    <Link to='/' className='application__logo'>
                        <h1>
                            <span id='first'>Zaplanuj</span>
                            <span id='second'>Jedzonko</span>
                        </h1>
                    </Link>
                    <div className='application__user'>
                        <span className='user__name'>{this.state.user}</span>
                        <i
                            //   className='fa fa-user-circle-o fa-3x icon'
                            //   aria-hidden='true'
                            //   onClick={() => this.props.clearUserName()}
                        >
                        </i>
                    </div>
                </nav>
                <div className='application__body'>
                    <div className='application__options'>
                        <NavLink
                            to='/app/pulpit'
                            className='option'
                            onClick={this.handlePulpitChange}>
                            <p>Pulpit</p>
                        </NavLink>
                        <NavLink
                            to='/app/przepisy'
                            className='option'
                            onClick={this.handlePrzepisyChange}>
                            <p>Przepisy</p>
                        </NavLink>
                        <NavLink
                            to='/app/plany'
                            className='option'
                            onClick={this.handlePlanyChange}>
                            <p>Plany</p>
                        </NavLink>
                    </div>
                    <AppWrapper>
                        <div className='application__center'>
                            <Switch>
                                <Route exact path='/app' component={Welcome}></Route>
                                <Route path='/app/pulpit' component={Pulpit} />
                                <Route path='/app/przepisy' component={Przepisy} />
                                <Route path='/app/plany' component={Plany} />
                            </Switch>
                        </div>
                    </AppWrapper>
                </div>
            </div>
        )
    }
}


export default FrontViev;