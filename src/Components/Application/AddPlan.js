import React from "react";

const AddPlan = ({ closeBackdrop, passThing, values }) => {

    return (
    <div className="backdrop" onClick={closeBackdrop}>
      <div className='addPlan__container modal '>
          <form className='addPlan__form'>
            {/* <i className='fa fa-times close-btn' aria-hidden='true'></i> */}
            <div className='addPlan_header__box'>
              <h2>NOWY PLAN</h2>
              <button type='submit'>Zapisz i zamknij</button>
            </div>
            <div className='addPlan__input'>
              <div className='addPlan_input__box'>
                <div className='addPlan_input__el'>
                <h3>Nazwa planu</h3>
                <input
                    type='text'
                    name='tempPlanName'
                    value={values.tempPlanName}
                    onChange={passThing}
                    placeholder='Nazwa planu'
                    // className={name.length <= 0 ? "error" : null}
                  />
                </div>
                  <div className='addPlan_input__el'>
                    <h3>Opis planu</h3>
                    <textarea
                      name='tempPlanDescription'
                      rows='10'
                      cols='20'
                      value={values.tempPlanDescription}
                      onChange={passThing}
                      placeholder='Opis planu'></textarea>
                  </div>
                  <div className='addPlan_input__week'>
                    <h3>Numer tygodnia</h3>
                    <input
                      type='number'
                      name='tempWeekNumber'
                      min='1'
                      max='52'
                      value={values.tempWeekNumber}
                      onChange={passThing}
                      className="week_number"
                    />
                  </div>
              </div>
            </div>
            <div className='addPlan_table__container'>
              <table className='addPlan__table'>
                <thead>
                  <tr className='addPlan_table__header'>
                    <th></th>
                    <th>Śniadanie</th>
                    <th>Drugie Śniadanie</th>
                    <th>Zupa</th>
                    <th>Drugie Danie</th>
                    <th>Kolacja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h4>Poniedziałek</h4>
                    </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4>Wtorek</h4>
                      </td>
                        <td>
                          <select>
                            <option>
                              Wybierz przepis
                            </option>
                          </select>
                        </td>
                        <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4>Środa</h4>
                      </td>
                        <td>
                          <select>
                            <option>
                              Wybierz przepis
                            </option>
                          </select>
                        </td>
                        <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4>Czwartek</h4>
                      </td>
                        <td>
                          <select>
                            <option>
                              Wybierz przepis
                            </option>
                          </select>
                        </td>
                        <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4>Piątek</h4>
                      </td>
                        <td>
                          <select>
                            <option>
                              Wybierz przepis
                            </option>
                          </select>
                        </td>
                        <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4>Sobota</h4>
                      </td>
                        <td>
                          <select>
                            <option>
                              Wybierz przepis
                            </option>
                          </select>
                        </td>
                        <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4>Niedziela</h4>
                      </td>
                        <td>
                          <select>
                            <option>
                              Wybierz przepis
                            </option>
                          </select>
                        </td>
                        <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option>
                            Wybierz przepis
                          </option>
                        </select>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddPlan;