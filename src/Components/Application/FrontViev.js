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
            recipeId: 6,
            recipes: [
                {id: 1, name: "Zupa Pomidorowa", description: "Pyszna zupa pomidorowa z całych pomidorów.", steps: ["Wlej wodę do garnka", "Wrzuć pomidory i zagotuj"], ingredients: ["Pomidory", "Woda"]},
                {id: 2, name: "Zupa Jarzynowa", description: "Pyszna zupa jarzynowa z całych warzyw.", steps: ["Wlej wodę do garnka", "Wrzuć warzywa i zagotuj"], ingredients: ["Warzywa", "Woda"]},
                {id: 3, name: "Zupa Szczawiowa", description: "Pyszna zupa szczawiowa z całych szczawiów.", steps: ["Wlej wodę do garnka", "Wrzuć szczaw i zagotuj"], ingredients: ["Szczaw", "Woda"]},
                {id: 4, name: "Jajecznica ze szczypiorkiem", description: "Pyszna jajecznica na maśle ze szczypiorkiem.", steps: ["Roztopić masło na patelni", "Wbij jajka na patelnie", "Posól i zetnij jajka mieszająć", "Posyp jajecznicę świerzym szczypiorkiem"], ingredients: ["Jajka", "Szczypiorek", "Masło", "Sól"]},
                {id: 5, name: "Owsianka", description: "Owsianka z prażonymi pestkami dyni", steps: ["Zalej owsiankę wodą i gotuj 6-8min", "Na patelni spraż pestki z dyni", "Owsiankę na telerzy posyp pestkami i dodaj łyśkę miodu"], ingredients: ["Płatki owsiane", "Woda", "Pestki dyni", "Miód"]},
                {id: 6, name: "Kiczeri", description: "Ajurwedyjski zdrowy posiłek na ryżu.", steps: ["Roztopić masło klarowane w garnku", "Wrzucić i przysmażyć czerwoną soczewicę", "Dorzycić ryż basmanti brązowy i zalać wrzątkiem", "Gotować ok 35min"], ingredients: ["Czerwona soczewica", "Ryż basmanti brązowy", "Masło klarowane", "Woda"]},
                {id: 7, name: "Warzywa w kuminie", description: "Warzywa w kuminie z kaszą gryczaną", steps: ["Roztopić masło klarowane na patelni", "Wrzucić i przysmażyć za dużo kuminu", "Dorzycić pokrojone dowolne warzywa i przysmażyć do miękkości", "Ugotować kaszę grycznaną ok 12-14min", "Przed podaniem warzywa posolić i wymieszać"], ingredients: ["Dowolne warzywa", "Kasza gryczana", "Masło klarowane", "Sól jajeczna"]},
                {id: 8, name: "Gryczane grzanki", description: "Gryczane grzanki z chranową pastą.", steps: ["W piekarniku zrobić kromki gryczanego chleba na tosty", "Zblendować pestki słonecznika z chrzanem", "Posmarować grzanki pastą i dodać po plastrze pomidora"], ingredients: ["Chleb gryczany", "Chrzan", "Pestki słonecznika", "Pomidor"]}
            ],
            tempRecipName: "",
            tempRecipDescription: "",
            step: "",
            tempStep: "",
            tempSteps: [],
            ingredient: "",
            tempIngredient: "",
            tempIngredients: [],
            plansId: 3,
            plans: [
                {
                    id: 1,
                    name: "Smaczny tydzień",
                    description: "Długi opis tygodnia bez mięsa.",
                    weekNumber: 1,
                    monday: ["Owsianka","Jajecznica ze szczypiorkiem","Zupa Pomidorowa","Kiczeri","Warzywa w kuminie"],
                    tuesday: ["Jajecznica ze szczypiorkiem","Owsianka","Zupa Jarzynowa","Warzywa w kuminie","Kiczeri"],
                    wednesday: ["Owsianka","Jajecznica ze szczypiorkiem","Zupa Szczawiowa","Kiczeri","Zupa Pomidorowa"],
                    thursday: ["Jajecznica ze szczypiorkiem","Owsianka","Zupa Pomidorowa","Warzywa w kuminie","Kiczeri"],
                    friday: ["Owsianka","Jajecznica ze szczypiorkiem","Zupa Jarzynowa","Kiczeri","Warzywa w kuminie"],
                    saturday: ["Jajecznica ze szczypiorkiem","Owsianka","Zupa Szczawiowa","Warzywa w kuminie","Zupa Jarzynowa"],
                    sunday: ["Owsianka","Jajecznica ze szczypiorkiem","Zupa Pomidorowa","Kiczeri","Warzywa w kuminie"]
                  },
                  {
                    id: 2,
                    name: "Jadalny tydzień",
                    description: "Długi opis tygodnia bez potrzeby jedzenia.",
                    weekNumber: 2,
                    monday: [1,2,3,4,5],
                    tuesday: [1,2,3,4,5],
                    wednesday: [1,2,3,4,5],
                    thrusday: [1,2,3,4,5],
                    friday: [1,2,3,4,5],
                    satruday: [1,2,3,4,5],
                    sunday: [1,2,3,4,5]
                  },
                  {
                    id: 3,
                    name: "Wesoły tydzień",
                    description: "Długi opis tygodnia bez żadnych smutków.",
                    weekNumber: 3,
                    monday: [1,2,3,4,5],
                    tuesday: [1,2,3,4,5],
                    wednesday: [1,2,3,4,5],
                    thrusday: [1,2,3,4,5],
                    friday: [1,2,3,4,5],
                    satruday: [1,2,3,4,5],
                    sunday: [1,2,3,4,5]
                  }
                ],
                tempPlanName: "",
                tempPlanDescription: "",
                tempWeekNumber: "",
                mon1: "",
                mon2: "",
                mon3: "",
                mon4: "",
                mon5: "",
                mon6: "",
                mon7: "",
                tue1: "",
                tue2: "",
                tue3: "",
                tue4: "",
                tue5: "",
                tue6: "",
                tue7: "",
                wed1: "",
                wed2: "",
                wed3: "",
                wed4: "",
                wed5: "",
                wed6: "",
                wed7: "",
                thur1: "",
                thur2: "",
                thur3: "",
                thur4: "",
                thur5: "",
                thur6: "",
                thur7: "",
                fri1: "",
                fri2: "",
                fri3: "",
                fri4: "",
                fri5: "",
                fri6: "",
                fri7: "",
                sat1: "",
                sat2: "",
                sat3: "",
                sat4: "",
                sat5: "",
                sat6: "",
                sat7: "",
                sun1: "",
                sun2: "",
                sun3: "",
                sun4: "",
                sun5: "",
                sun6: "",
                sun7: "",

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

    showAddPlan = () => {
        this.setState({
            isBackdrop: true,
            isAddPlan: true
        })
    }

    showAddRecipe = () => {
        this.setState({
            isAddRecipe: true,
            isBackdrop: true
        })
    }

    passTempThing = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    addTempStep = e => {
        e.preventDefault();
        const step = this.state.tempStep;
        this.setState({
            step
        })
        this.setState(state => {
            const tempSteps = state.tempSteps.concat(state.step);
            return {
                tempSteps,
                step: ""
            }
        })
    }

    addTempIngredient = e => {
        e.preventDefault();
        const ingredient = this.state.tempIngredient;
        this.setState({
            ingredient
        })
        this.setState(state => {
            const tempIngredients = state.tempIngredients.concat(state.ingredient);
            return {
                tempIngredients,
                ingredient: "",
            }
        })
    }

    addRecipe = e => {
        e.preventDefault();
        this.setState(prevState => {
            return {recipeId: prevState.recipeId + 1}
         })
        const recipe = {
            id: this.state.recipeId,
            name: this.state.tempRecipName,
            description: this.state.tempRecipDescription,
            steps: this.state.tempStpes,
            ingredients: this.state.tempIngredients
        }
        this.setState(state =>{
            const recipes = state.recipes.concat(recipe);
            return {
                recipes,
                tempStpes: [],
                tempIngredients: [],
                isBackdrop: false,
                isAddPlan: false,
                isAddRecipe: false
            } 
        })
    }

    render() {
        const { name, tempName, isBackdrop, isAddPlan, isAddRecipe, recipes, tempSteps, tempIngredients, plans } = this.state;
        const values = { name, tempName, isBackdrop, isAddPlan, isAddRecipe, recipes, tempSteps, tempIngredients, plans };

        const Addplan = isAddPlan ? <AddPlan closeBackdrop={this.closeBackdrop} passThing={this.passTempThing} values={values}/> : null;
        const Addrecipe = isAddRecipe ? <AddRecipe closeBackdrop={this.closeBackdrop} passThing={this.passTempThing} addStep={this.addTempStep} addIngredient={this.addTempIngredient} addRecipe={this.addRecipe} values={values}/> : null;

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
                                <Route path='/app/pulpit' render={(props) => <Pulpit {...props} addPlan={this.showAddPlan} addRecipe={this.showAddRecipe} values={values} />}></Route>
                                <Route path='/app/przepisy' render={(props) => <Przepisy {...props} recipes={recipes} />}></Route>
                                <Route path='/app/plany' render={(props) => <Plany {...props} plans={plans} />}></Route>
                            </Switch>
                        </div>
                    </AppWrapper>
                </div>
            </div>
        )
    }
}


export default FrontViev;