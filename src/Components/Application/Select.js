import React from 'react';

const Select = (values) => {
    const recipes = values.recipes
    return (
        <td>
            <select>
                <option>
                    Wybierz przepis
                </option>
                {recipes.map((el) => (
                    <option key={el.id} value={el.name} id={el.id}>
                        {el.name}
                    </option>
                ))}
            </select>
        </td>
    )
}


export default Select