import React, { Component } from 'react'

export default class AddRecipe extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className='addRecipe__header'>
                        <h2>nowy przepis</h2>
                        <button type='submit'>Zapisz i zamknij</button>
                    </div>
                    <div className='addRecipe__desc-inputs'>
                        <div className='addRecipe__input-box'>
                            <div className='input-element'>
                                <h3>Nazwa przepisu</h3>
                                <input
                                type='text'
                                name='name'
                                // value={name}
                                placeholder='Nazwa przepisu'
                                // onChange={addName}
                                // className={name.length <= 0 || name.length >= 50 ? "error" : null}
                                />
                            </div>

                            {/* {name.length <= 0 || name.length >= 50 ? (
                            <ErrorMessage>{errors.name}</ErrorMessage>
                            ) : null} */}

                            <div className='input-element'>
                            <h3>Opis przepisu</h3>
                            <textarea
                                name='description'
                                id='description'
                                // value={description}
                                cols='30'
                                rows='10'
                                placeholder='Opis przepisu'
                                // onChange={addDescription}
                                // className={
                                // description.length <= 0 || description.length >= 360
                                //     ? "error"
                                //     : null
                                // }
                            />
                            </div>

                            {/* {description.length <= 0 || description.length >= 360 ? (
                            <ErrorMessage>{errors.description}</ErrorMessage>
                            ) : null} */}
                        </div>
                    </div>
                    forminstr

                </form>
            </div>
        )
    }
}
