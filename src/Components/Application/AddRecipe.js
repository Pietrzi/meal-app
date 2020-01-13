import React from 'react';
import "font-awesome/css/font-awesome.min.css";

const AddRecipe = ({ closeBackdrop, passThing, addStep, addIngredient, addRecipe, values }) => {

        return (
            <div className="backdrop" onClick={closeBackdrop}>
                <form className='addRecipe'>
                    <div className='addRecipe__header'>
                        <h2>nowy przepis</h2>
                        <button onClick={addRecipe}>Zapisz i zamknij</button>
                    </div>
                    <div className='addRecipe__desc-inputs'>
                        <div className='addRecipe__input-box'>
                            <div className='input-element'>
                                <h3>Nazwa przepisu</h3>
                                <input type='text' name='tempRecipName' value={values.tempRecipName} placeholder='Nazwa przepisu' onChange={passThing}/>
                            </div>
                            <div className='input-element'>
                                <h3>Opis przepisu</h3>
                                <textarea
                                    name='tempRecipDescription'
                                    id='description'
                                    cols='30'
                                    rows='10'
                                    value={values.tempRecipDescription}
                                    onChange={passThing}
                                    placeholder='Opis przepisu'></textarea>
                                    
                            </div>
                        </div>
                    </div>
                    <div className='addRecipe__instructions'>
                    <div className='addRecipe__container'>
                        <h2>Instrukcje</h2>

                        <div className='addRecipe__form-items'>
                            <div className='addRecipe__input-box-instr'>
                                <textarea
                                    name='tempStep'
                                    value={values.tempStep}
                                    id='steps'
                                    cols='30'
                                    rows='10'
                                    placeholder='Dodaj sposób przygotowania'
                                    onChange={passThing}
                                />
                                <button onClick={addStep}>
                                    <i className='fa fa-plus-square fa-3x'></i>
                                </button>
                            </div>

                            <div className='addRecipe__list'>
                                <ol>
                                    {values.tempSteps ? (
                                        values.tempSteps.map((step, idx) => (
                                            <li key={idx}>
                                                {step}
                                                <i className='fa fa-edit'></i>
                                                <i className='fa fa-trash-o' aria-hidden='true'></i>
                                            </li>
                                    ))
                                    ) : null
                                    }
                                </ol>
                            </div>
                            </div>
                        </div>
                        <div className='addRecipe__container' style={{ paddingLeft: "1rem" }}>
                            <h2>Składniki</h2>
                            <div className='addRecipe__form-items'>
                                <div className='addRecipe__input-box-instr'>
                                    <input type='text' name='tempIngredient' value={values.tempIngredient} placeholder='Dodaj składniki' onChange={passThing}/>
                                    <button onClick={addIngredient}>
                                        <i className='fa fa-plus-square fa-3x'></i>
                                    </button>
                                </div>
                                <div className='addRecipe__list'>
                                    <ul>
                                        {values.tempIngredients ? (
                                            values.tempIngredients.map((ingredient, idx) => (
                                                <li key={idx}>
                                                    {ingredient}
                                                    <i className='fa fa-edit'></i>
                                                    <i className='fa fa-trash-o' aria-hidden='true'></i>
                                                </li>
                                            ))
                                        ) : null
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )

}


export default AddRecipe;