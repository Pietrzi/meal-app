import React from 'react'
import { NavLink, Link, Route, Switch,} from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import AppWrapper from './AppWrapper';
import Pulpit from "./Pulpit";
import Plany from "./Plany";
import Przepisy from "./Przepisy";
import Welcome from './Welcome';
import AddPlan from './AddPlan';
import AddRecipe from './AddRecipe';

class FrontViev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tempName: "",
            isBackdrop: false,
            isAddPlan: false,
            isAddRecipe: false,
            recipes: [
                {id: 1, name: "Zupa Pomidorowa", description: "Pyszna zupa pomidorowa z całych pomidorów.", steps: ["Wlej wodę do garnka", "Wrzuć pomidory i zagotuj"], ingredients: ["Pomidory", "Woda"]},
                {id: 2, name: "Zupa Jarzynowa", description: "Pyszna zupa jarzynowa z całych warzyw.", steps: ["Wlej wodę do garnka", "Wrzuć warzywa i zagotuj"], ingredients: ["Warzywa", "Woda"]},
                {id: 3, name: "Zupa Szczawiowa", description: "Pyszna zupa szczawiowa z całych szczawiów.", steps: ["Wlej wodę do garnka", "Wrzuć szczaw i zagotuj"], ingredients: ["Szczaw", "Woda"]},
                {id: 4, name: "Zupa Ogórkowa", description: "Pyszna zupa ogórkowa z całych ogórków.", steps: ["Wlej wodę do garnka", "Wrzuć ogórki i zagotuj"], ingredients: ["Ogórki", "Woda"]},
                {id: 5, name: "Zupa Cebulowa", description: "Pyszna zupa cebulowa z całych cebul.", steps: ["Wlej wodę do garnka", "Wrzuć cebulę i zagotuj"], ingredients: ["Cebula", "Woda"]},
                {id: 6, name: "Zupa Truskawkowa", description: "Pyszna zupa truskawkowa z całych truskawek.", steps: ["Wlej wodę do garnka", "Wrzuć truskawki i zagotuj"], ingredients: ["Truskawki", "Woda"]},
            ]
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

    closeBackdrop = e => {
        if (e.target.classList.contains("backdrop")) {
            this.setState({
                isBackdrop: false,
                isAddPlan: false,
                isAddRecipe: false
            })
        }
        
    }

    addPlan = () => {
        this.setState({
            isBackdrop: true,
            isAddPlan: true
        })
    }

    addRecipe = () => {
        console.log("click");
        this.setState({
            isAddRecipe: true,
            isBackdrop: true
        })
    }

    render() {
        const { name, tempName, isBackdrop, isAddPlan, isAddRecipe, recipes } = this.state;
        const values = { name, tempName, isBackdrop, isAddPlan, isAddRecipe };

        const Addplan = isAddPlan ? <AddPlan closeBackdrop={this.closeBackdrop}/> : null;
        const Addrecipe = isAddRecipe ? <AddRecipe closeBackdrop={this.closeBackdrop}/> : null;

        return (
            
            <div className="application__wrapper">
                {Addplan}
                {Addrecipe}
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
                                <Route path='/app/pulpit' render={(props) => <Pulpit {...props} addPlan={this.addPlan} addRecipe={this.addRecipe} values={values} />}></Route>
                                <Route path='/app/przepisy' render={(props) => <Przepisy {...props} recipes={recipes} />}></Route>
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