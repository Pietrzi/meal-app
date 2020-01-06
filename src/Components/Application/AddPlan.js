import React from "react";
// import Header from "./Header";
// import Input from "./Input";
// import Select from "./Select";

class AddPlan extends React.Component {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [weekNumber, setWeekNumber] = useState("");
  // const [monday, setMonday] = useState([]);
  // const [tuesday, setTuesday] = useState([]);
  // const [wednesday, setWednesday] = useState([]);
  // const [thrusday, setThrusday] = useState([]);
  // const [friday, setFriday] = useState([]);
  // const [satruday, setSatruday] = useState([]);
  // const [sunday, setSunday] = useState([]);
  // const [plan, setPlan] = useState({
  //   name: "",
  //   description: "",
  //   weekNumber: "",
  //   monday: [],
  //   tuesday: [],
  //   wednesday: [],
  //   thrusday: [],
  //   friday: [],
  //   satruday: [],
  //   sunday: []
  // });

  // //validation
  // let errors = {
  //   name: "",
  //   description: "",
  //   weekNumber: "",
  //   monday: "",
  //   tuesday: "",
  //   wednesday: "",
  //   thrusday: "",
  //   friday: "",
  //   satruday: "",
  //   sunday: ""
  // };

  // let isValid = true;

  // const validate = () => {
  //   if (!name) {
  //     isValid = false;
  //     errors.name = "Podaj nazwę planu!";
  //   } else {
  //     plan.name = name;
  //     errors.name = "";
  //   }

  //   if (!description) {
  //     errors.description = "Podaj opis planu!";
  //   } else {
  //     plan.description = description;
  //     errors.description = "";
  //   }

  //   if (!weekNumber) {
  //     isValid = false;
  //     errors.weekNumber = "Podaj numer tygodnia!";
  //   } else {
  //     plan.weekNumber = weekNumber;
  //     errors.weekNumber = "";
  //   }

  //   if (!monday) {
  //     errors.monday = "pusta";
  //   } else {
  //     plan.monday = monday;
  //     errors.monday = "";
  //   }
  //   if (!tuesday) {
  //     errors.tuesday = "pusta";
  //   } else {
  //     plan.tuesday = tuesday;
  //     errors.tuesday = "";
  //   }
  //   if (!wednesday) {
  //     errors.wednesday = "pusta";
  //   } else {
  //     plan.wednesday = wednesday;
  //     errors.wednesday = "";
  //   }
  //   if (!thrusday) {
  //     errors.monday = "pusta";
  //   } else {
  //     plan.thrusday = thrusday;
  //     errors.thrusday = "";
  //   }
  //   if (!friday) {
  //     errors.friday = "pusta";
  //   } else {
  //     plan.friday = friday;
  //     errors.friday = "";
  //   }
  //   if (!satruday) {
  //     errors.satruday = "pusta";
  //   } else {
  //     plan.satruday = satruday;
  //     errors.satruday = "";
  //   }
  //   if (!sunday) {
  //     errors.sunday = "pusta";
  //   } else {
  //     plan.sunday = sunday;
  //     errors.sunday = "";
  //   }

  //   setPlan({ ...plan });

  //   return isValid;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     addPlan(plan);
  //     setName("");
  //     setDescription("");
  //     setWeekNumber("");
  //     onClose();
  //     alert("Dziękujemy za dodanie planu!");
  //   } else {
  //     // console.log("Formularz błędnie wypełniony");
  //     console.log(errors);
  //     return errors;
  //   }
  // };

  // useEffect(() => {
  //   fetchRecipes();
  // }, [fetchRecipes]);
  render() {
    return (
      <div className='addPlan__container modal '>
          <form className='addPlan__form'>
            <i className='fa fa-times close-btn' aria-hidden='true'></i>
            <div className='addPlan_header__box'>
              <h2>NOWY PLAN</h2>
              {/* {name.length <= 0 || !weekNumber ? (
                <ErrorMessage>Uzupełnij zaznaczone pola!</ErrorMessage>
                ) : null} */}
              <button type='submit'>Zapisz i zamknij</button>
            </div>
            <div className='addPlan__input'>
              <div className='addPlan_input__box'>
                <div className='addPlan_input__el'>
                <h3>Nazwa planu</h3>
                <input
                    type='text'
                    name='name'
                    // value={name}
                    // onChange={addName}
                    placeholder='Nazwa planu'
                    // className={name.length <= 0 ? "error" : null}
                  />
                </div>

                {/* {name.length >= 50 && <ErrorMessage>Nazwa jest za długa!</ErrorMessage>} */}

                  <div className='addPlan_input__el'>
                    <h3>Opis planu</h3>
                    <textarea
                      name='description'
                      rows='10'
                      cols='20'
                      // value={description}
                      // onChange={addDescription}
                      placeholder='Opis planu'></textarea>
                  </div>

                    {/* {description.length >= 360 && (
                    <ErrorMessage>Opis jest za długi!</ErrorMessage>
                    )} */}

                  <div className='addPlan_input__week'>
                    <h3>Numer tygodnia</h3>
                    <input
                      type='number'
                      min='1'
                      max='52'
                      // value={weekNumber}
                      // onChange={addWeekNumber}
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
    );
  }

  
};

export default AddPlan;