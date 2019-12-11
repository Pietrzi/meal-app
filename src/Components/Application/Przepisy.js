import React from 'react';
// import { fetchRecipes } from '../../redux/recipes/actions';
// import { connect } from 'react-redux';

class Przepisy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    // componentDidMount() {
    //     this.props.fetchRecipes();
    // }

    render() {

        const recipesList = this.state.recipes.length ? (
            this.state.recipes.map(recip => {
                return (
                    <tr key={recip.id}>
                        <td>{recip.id}</td>
                        <td>{recip.name}</td>
                        <td>{recip.description}</td>
                        <td className="icons">
                            <i className="edit" class="fa fa-edit"></i>
                            <i className="delete" class="fa fa-trash"></i>
                        </td>
                    </tr>
                )
            })
        ) : (
            null
        );

        return (
            <div className="recipes__wrapper">
                <div className="recipes__header">
                    <h2>Lista Przepisów</h2>
                    <i class="fa fa-plus-square"></i>
                </div>
                <div className="table__container">
                    <table>
                        <thead>
                          <tr className="table__header">
                            <th className="id">id</th>
                            <th className="name">nazwa</th>
                            <th className="description">opis</th>
                            <th className="actions">akcje</th>
                          </tr>
                          </thead>
                        <tbody>
                            { recipesList }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
   
}


// const mapStateToProps = state => ({
//     recipes: state.recipes.recipes
// })

// export default connect(mapStateToProps, { fetchRecipes })(Przepisy);

export default Przepisy;
