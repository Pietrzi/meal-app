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
            recipeId: 9,
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
            plansId: 4,
            plans: [
                {
                    id: 1,
                    name: "Smaczny tydzień",
                    description: "Długi opis tygodnia bez mięsa.",
                    weekNumber: 1,
                    monday: ["Owsianka","Jajecznica ze szczypiorkiem","Zupa Szczawiowa","Kiczeri","Warzywa w kuminie"],
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
                    monday: ["Jajecznica ze szczypiorkiem","Gryczane grzanki","Zupa Szczawiowa","Kiczeri","Warzywa w kuminie"],
                    tuesday: ["Gryczane grzanki","Jajecznica ze szczypiorkiem","Zupa Szczawiowa","Kiczeri","Warzywa w kuminie"],
                    wednesday: ["Jajecznica ze szczypiorkiem","Gryczane grzanki","Zupa Szczawiowa","Kiczeri","Warzywa w kuminie"],
                    thursday: ["Gryczane grzanki","Jajecznica ze szczypiorkiem","Zupa Szczawiowa","Kiczeri","Warzywa w kuminie"],
                    friday: ["Jajecznica ze szczypiorkiem","Gryczane grzanki","Zupa Szczawiowa","Kiczeri","Warzywa w kuminie"],
                    saturday: ["Gryczane grzanki","Jajecznica ze szczypiorkiem","Zupa Szczawiowa","Kiczeri","Warzywa w kuminie"],
                    sunday: ["Jajecznica ze szczypiorkiem","Gryczane grzanki","Zupa Szczawiowa","Kiczeri","Warzywa w kuminie"]
                  },
                  {
                    id: 3,
                    name: "Wesoły tydzień",
                    description: "Długi opis tygodnia bez żadnych smutków.",
                    weekNumber: 3,
                    monday: ["Warzywa w kuminie","Gryczane grzanki","Zupa Szczawiowa","Warzywa w kuminie","Zupa Szczawiowa"],
                    tuesday: ["Warzywa w kuminie","Gryczane grzanki","Zupa Szczawiowa","Warzywa w kuminie","Zupa Szczawiowa"],
                    wednesday: ["Warzywa w kuminie","Gryczane grzanki","Zupa Pomidorowa","Warzywa w kuminie","Zupa Pomidorowa"],
                    thursday: ["Warzywa w kuminie","Gryczane grzanki","Zupa Pomidorowa","Warzywa w kuminie","Zupa Pomidorowa"],
                    friday: ["Warzywa w kuminie","Gryczane grzanki","Zupa Jarzynowa","Warzywa w kuminie","Zupa Jarzynowa"],
                    saturday: ["Warzywa w kuminie","Gryczane grzanki","Zupa Jarzynowa","Warzywa w kuminie","Zupa Jarzynowa"],
                    sunday: ["Warzywa w kuminie","Gryczane grzanki","Zupa Jarzynowa","Warzywa w kuminie","Zupa Jarzynowa"]
                  }
                ],
                tempPlanName: "",
                tempPlanDescription: "",
                tempWeekNumber: "",
                currentPlan: 0,
                mon1: "",
                mon2: "",
                mon3: "",
                mon4: "",
                mon5: "",
                tue1: "",
                tue2: "",
                tue3: "",
                tue4: "",
                tue5: "",
                wed1: "",
                wed2: "",
                wed3: "",
                wed4: "",
                wed5: "",
                thur1: "",
                thur2: "",
                thur3: "",
                thur4: "",
                thur5: "",
                fri1: "",
                fri2: "",
                fri3: "",
                fri4: "",
                fri5: "",
                sat1: "",
                sat2: "",
                sat3: "",
                sat4: "",
                sat5: "",
                sun1: "",
                sun2: "",
                sun3: "",
                sun4: "",
                sun5: ""
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
        const input = document.querySelector("textarea[name='tempStep']");
        input.value = "";
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
                ingredient: ""
            }
        })
        const input = document.querySelector("input[name='tempIngredient']");
        input.value = "";
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
                tempSteps: [],
                tempIngredients: [],
                isBackdrop: false,
                isAddPlan: false,
                isAddRecipe: false
            } 
        })
    }
    
    addPlan = e => {
        e.preventDefault();
        this.setState(prevState =>{
            return {plansId: prevState.plansId + 1}
        })
        const monday = [this.state.mon1, this.state.mon2, this.state.mon3, this.state.mon4, this.state.mon5];
        const tuesday = [this.state.tue1, this.state.tue2, this.state.tue3, this.state.tue4, this.state.tue5];
        const wednesday = [this.state.wed1, this.state.wed2, this.state.wed3, this.state.wed4, this.state.wed5];
        const thursday = [this.state.thur1, this.state.thur2, this.state.thur3, this.state.thur4, this.state.thur5];
        const friday = [this.state.fri1, this.state.fri2, this.state.fri3, this.state.fri4, this.state.fri5];
        const saturday = [this.state.sat1, this.state.sat2, this.state.sat3, this.state.sat4, this.state.sat5];
        const sunday = [this.state.sun1, this.state.sun2, this.state.sun3, this.state.sun4, this.state.sun5];

        const plan = {
            id: this.state.plansId,
            name: this.state.tempPlanName,
            description: this.state.tempPlanDescription,
            weekNumber: this.state.tempWeekNumber,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday
        }
        this.setState(state => {
            const plans = state.plans.concat(plan);
            return {
                plans,
                isBackdrop: false,
                isAddPlan: false,
                isAddRecipe: false
            }
        })
    }
     
    nextPlan = () => {
        const plansNumbers = [];
        for (let i = 0; i < this.state.plans.length; i++) {
            plansNumbers.push(this.state.plans[i].weekNumber);
        }
        if (this.state.currentPlan < plansNumbers.length -1) {
            this.setState(prevState => {
                return {currentPlan: prevState.currentPlan + 1}
            }) 
        } else {
            this.setState({
                currentPlan: 0
            })
        }
    }

    prevPlan = () => {
        const plansNumbers = [];
        for (let i = 0; i < this.state.plans.length; i++) {
            plansNumbers.push(this.state.plans[i].weekNumber);
        }
        if (this.state.currentPlan > 0) {
            this.setState(prevState => {
                return {currentPlan: prevState.currentPlan - 1}
            }) 
        } 
        else {
            this.setState({
                currentPlan: plansNumbers.length -1
            })
        }
    }

    removeRecipe = (e) => {
        const recipId = e.target.closest("tr").id
        this.setState(prevState => {
            let newRecipes = prevState.recipes.slice();
            newRecipes.splice(recipId, 1)
            return {
                recipes: newRecipes
            }
        })
    }

    removePlan = (e) => {
        const planId = e.target.closest("tr").id
        this.setState(prevState => {
            let newPlans = prevState.plans.slice();
            newPlans.splice(planId, 1)
            return {
                plans: newPlans
            }
        })
    }

    removeIngredient = (e) => {
        const ingredientId = e.target.closest("li").id
        this.setState(prevState => {
            let newTempIgredients = prevState.tempIngredients.slice();
            newTempIgredients.splice(ingredientId, 1)
            return {
                tempIngredients: newTempIgredients
            }
        })
    }

    removeStep = (e) => {
        const stepId = e.target.closest("li").id
        this.setState(prevState => {
            let newTempSteps = prevState.tempSteps.slice();
            newTempSteps.splice(stepId, 1)
            return {
                tempSteps: newTempSteps
            }
        })
    }

    render() {
        const { name, tempName, isBackdrop, isAddPlan, isAddRecipe, recipes, tempSteps, tempIngredients, plans, currentPlan } = this.state;
        const values = { name, tempName, isBackdrop, isAddPlan, isAddRecipe, recipes, tempSteps, tempIngredients, plans, currentPlan };

        const Addplan = isAddPlan ? <AddPlan closeBackdrop={this.closeBackdrop} passThing={this.passTempThing} addPlan={this.addPlan} values={values}/> : null;
        const Addrecipe = isAddRecipe ? <AddRecipe closeBackdrop={this.closeBackdrop} passThing={this.passTempThing} addStep={this.addTempStep} addIngredient={this.addTempIngredient} addRecipe={this.addRecipe} removeIngredient={this.removeIngredient} removeStep={this.removeStep} values={values}/> : null;

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
                                <Route path='/app/pulpit' render={(props) => <Pulpit {...props} addPlan={this.showAddPlan} addRecipe={this.showAddRecipe} nextPlan={this.nextPlan} prevPlan={this.prevPlan} values={values} />}></Route>
                                <Route path='/app/przepisy' render={(props) => <Przepisy {...props} recipes={recipes} addRecipe={this.showAddRecipe} removeRecipe={this.removeRecipe} />}></Route>
                                <Route path='/app/plany' render={(props) => <Plany {...props} plans={plans} addPlan={this.showAddPlan} removePlan={this.removePlan} />}></Route>
                            </Switch>
                        </div>
                    </AppWrapper>
                </div>
            </div>
        )
    }
}


export default FrontViev;