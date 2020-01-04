import React from 'react'
import { NavLink, Link, Route, Switch, withRouter } from "react-router-dom";
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
            name: "",
            tempName: ""
        }
    }

    passName = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    addName = e => {
        e.preventDefault();
        const name = this.state.tempName;
        this.setState({
            name
        })
        e.target.firstElementChild.value = "";
        this.props.history.push('/app/pulpit');
    }

    render() {
        const { name } = this.state;
        const values = { name };
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
                        <span className='user__name'>{this.state.name}</span>
                        <i className='fa fa-user-circle-o fa-3x icon'></i>
                    </div>
                </nav>
                <div className='application__body'>
                    <div className='application__options'>
                        <NavLink
                            to='/app/pulpit'
                            className='option'
                            >
                            <p>Pulpit</p>
                        </NavLink>
                        <NavLink
                            to='/app/przepisy'
                            className='option'
                            >
                            <p>Przepisy</p>
                        </NavLink>
                        <NavLink
                            to='/app/plany'
                            className='option'
                            >
                            <p>Plany</p>
                        </NavLink>
                    </div>
                    <AppWrapper>
                        <div className='application__center'>
                            <Switch>
                                <Route exact path='/app' render={(props) => <Welcome {...props} passName={this.passName} addName={this.addName} values={values} />}></Route>
                                <Route path='/app/pulpit' component={Pulpit} ></Route>
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