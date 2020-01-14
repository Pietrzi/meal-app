import React from 'react';


const Przepisy = ({ recipes, addRecipe, removeRecipe }) => {
   
        const recipesList = recipes.length ? (
            recipes.map((recip, idx) => {
                return (
                    <tr key={recip.id} id={idx}>
                        <td>{recip.id}</td>
                        <td>{recip.name}</td>
                        <td>{recip.description}</td>
                        <td className="icons">
                            <i className="edit" class="fa fa-edit"></i>
                            <i className="delete" class="fa fa-trash" onClick={removeRecipe}></i>
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
                    <i className="fa fa-plus-square" onClick={addRecipe}></i>
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

export default Przepisy;
