import React, { Component } from 'react';
import "font-awesome/css/font-awesome.min.css";

export default class AddRecipe extends Component {
    state = {
        steps: [
            "Brukselkę obierz z zewnętrznych liści, nadetnij na krzyż od strony głąba. ",
            "Gotuj około 5 minut w osolonym wrzątku. Odcedź i przelej zimną wodą.  Brukselkę przetnij na pół, wytnij głąb, a następnie rozdziel od siebie wszystkie liście kapusty.",
            "Obraną cebulę pokrój w kostkę, zeszklij na patelni na rozgrzanej Ramie.",
            "Smaż około 2-3 minut cały czas mieszając.",
            "Po tym czasie ziemniaki zalej śmietaną wymieszaną z Knorr Naturalnie smaczne, dodaj liście brukselki i dokładnie wymieszaj",
            "Smaż około 2-3 minut cały czas mieszając.",
            "Po tym czasie ziemniaki zalej śmietaną wymieszaną z Knorr Naturalnie smaczne, dodaj liście brukselki i dokładnie wymieszaj",
            "Smaż około 2-3 minut cały czas mieszając.",
            "Po tym czasie ziemniaki zalej śmietaną wymieszaną z Knorr Naturalnie smaczne, dodaj liście brukselki i dokładnie wymieszaj"
        ],
        ingredients: [
            "brukselka 300g",
            "ziemniaki 500g",
            "Fix Naturalnie makaronowa z szynką Knorr 1 szt.",
            "średnia cebula 1szt.",
            "ząbek czosnku 1szt.",
            "kiełbasa np. śląska 500g",
            "śmietana 18% 200 ml",
            "Rama Smaż jak szef kuchni, wariant klasyczny 4 łyżki",
            "gałązka tymianku 1 szt."
        ]
    }
    render() {
        return (
            <div>
                <form className='addRecipe'>
                    <div className='addRecipe__header'>
                        <h2>nowy przepis</h2>
                        <button type='submit'>Zapisz i zamknij</button>
                    </div>
                    <div className='addRecipe__desc-inputs'>
                        <div className='addRecipe__input-box'>
                            <div className='input-element'>
                                <h3>Nazwa przepisu</h3>
                                <input type='text' name='name' placeholder='Nazwa przepisu' />
                            </div>
                            <div className='input-element'>
                                <h3>Opis przepisu</h3>
                                <textarea
                                    name='description'
                                    id='description'
                                    cols='30'
                                    rows='10'
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
                                    name='steps'
                                    id='steps'
                                    cols='30'
                                    rows='10'
                                    placeholder='Dodaj sposób przygotowania'
                                />
                                <button type='submit'>
                                <i className='fa fa-plus-square fa-3x'></i>
                                </button>
                            </div>

                            <div className='addRecipe__list'>
                                <ol>
                                    {this.state.steps.map((step, idx) => (
                                        <li key={idx}>
                                        {step}
                                        <i className='fa fa-edit'></i>
                                        <i className='fa fa-trash-o' aria-hidden='true'></i>
                                      </li>
                                    ))}
                                </ol>
                            </div>
                            </div>
                        </div>
                        <div className='addRecipe__container' style={{ paddingLeft: "1rem" }}>
                            <h2>Składniki</h2>
                            <div className='addRecipe__form-items'>
                                <div className='addRecipe__input-box-instr'>
                                    <input type='text' name='ingredients' placeholder='Dodaj składniki' />
                                    <button type='submit'>
                                        <i className='fa fa-plus-square fa-3x'></i>
                                    </button>
                                </div>
                                <div className='addRecipe__list'>
                                    <ul>
                                        {this.state.ingredients.map((ingredient, idx) => (
                                            <li key={idx}>
                                                {ingredient}
                                                <i className='fa fa-edit'></i>
                                                <i className='fa fa-trash-o' aria-hidden='true'></i>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
