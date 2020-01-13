import React from "react";

const AddPlan = ({ closeBackdrop, passThing, addPlan, values }) => {
  
    // const bla = () => {
    //   return (
    //     <select>
    //       <option>
    //         Wybierz przepis
    //       </option>
    //     </select>
    //   )                
    // }
    // for (let i= 1; i <= 7; i++) {
    //   return "<td> {bla} </td>";
    // }
    return (
    <div className="backdrop" onClick={closeBackdrop}>
      <div className='addPlan__container modal '>
          <form className='addPlan__form'>
            {/* <i className='fa fa-times close-btn' aria-hidden='true'></i> */}
            <div className='addPlan_header__box'>
              <h2>NOWY PLAN</h2>
              <button onClick={addPlan}>Zapisz i zamknij</button>
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
                    <th>Poniedziałek</th>
                    <th>Wtorek</th>
                    <th>Środa</th>
                    <th>Czwartek</th>
                    <th>Piątek</th>
                    <th>Sobota</th>
                    <th>Niedziela</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>
                        <select onChange={passThing} name="mon1" value={values.mon1}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="tue1" value={values.tue1}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="wed1" value={values.wed1}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="thur1" value={values.thur1}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select>
                          <option onChange={passThing} name="fri1" value={values.fri1}>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sat1" value={values.sat1}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sun1" value={values.sun1}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                        <td>
                          <select onChange={passThing} name="mon2" value={values.mon2}>
                            <option>
                              Wybierz przepis
                            </option>
                            {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                          </select>
                        </td>
                        <td>
                        <select onChange={passThing} name="tue2" value={values.tue2}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="wed2" value={values.wed2}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="thur2" value={values.thur2}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="fri2" value={values.fri2}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sat2" value={values.sat2}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sun2" value={values.sun2}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                        <td>
                          <select onChange={passThing} name="mon3" value={values.mon3}>
                            <option>
                              Wybierz przepis
                            </option>
                            {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                          </select>
                        </td>
                        <td>
                        <select onChange={passThing} name="tue3" value={values.tue3}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="wed3" value={values.wed3}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="thur3" value={values.thur3}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="fri3" value={values.fri3}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sat3" value={values.sat3}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sun3" value={values.sun3}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                        <td>
                          <select onChange={passThing} name="mon4" value={values.mon4}>
                            <option>
                              Wybierz przepis
                            </option>
                            {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                          </select>
                        </td>
                        <td>
                        <select onChange={passThing} name="tue4" value={values.tue4}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="wed4" value={values.wed4}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="thur4" value={values.thur4}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="fri4" value={values.fri4}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sat4" value={values.sat4}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sun4" value={values.sun4}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                        <td>
                          <select onChange={passThing} name="mon5" value={values.mon5}>
                            <option>
                              Wybierz przepis
                            </option>
                            {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                          </select>
                        </td>
                        <td>
                        <select onChange={passThing} name="tue5" value={values.tue5}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="wed5" value={values.wed5}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="thur5" value={values.thur5}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="fri5" value={values.fri5}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sat5" value={values.sat5}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select onChange={passThing} name="sun5" value={values.sun5}>
                          <option>
                            Wybierz przepis
                          </option>
                          {values.recipes.map((el) => (
                              <option key={el.id} value={el.name} id={el.id}>
                                  {el.name}
                              </option>
                          ))}
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