import React from 'react';
import "font-awesome/css/font-awesome.min.css";

const Pulpit = ({ addPlan, addRecipe, nextPlan, prevPlan, values }) => {

    const plans = values.plans;

    return (
        
            <div className="dashboard">
                <div className="dashboard__widgets">
                    <div className="add_widget__container">
                        <div onClick={addRecipe} className="add_widget__box">
                            <div className="add__widget recipe">
                                <i className="fa fa-plus"></i>
                            </div>
                            <p>dodaj przepis</p>
                        </div>
                        <div onClick={addPlan} className="add_widget__box">
                            <div className="add__widget plan">
                                <i className="fa fa-plus"></i>
                            </div>
                            <p>dodaj plan</p>
                        </div>
                    </div>
                    <div className="info_widget__container">
                        <div className="info_widget__box">
                            <div className="info_widget__content">
                                <div className="info_widget__icon first">
                                    <i className="fa fa-info"></i>
                                </div>
                                <p className="info_widget_paragraph__first">
                                    Masz już {values.recipes.length} przepisów, nieźle!
                                </p>
                            </div>
                            <div className="info_widget__close close_first">
                                <i className="fa fa-times"></i>
                            </div>
                        </div>
                        <div className="info_widget__box">
                            <div className="info_widget__content">
                                 <div className="info_widget__icon second">
                                    <i className="fa fa-exclamation"></i>
                                </div>
                                <p className="info_widget_paragraph__second">
                                    Pamiętaj, aby dodać plan!
                                </p>
                            </div>
                            <div className="info_widget__close close_second ">
                                <i className="fa fa-times"></i>
                            </div>
                        </div>
                        <div className="info_widget__box">
                            <div className="info_widget__content">
                                <div className="info_widget__icon third">
                                    <i className="fa fa-check"></i>
                                </div>
                                <p className="info_widget_paragraph__third">
                                    Świetnie że jesteś! Udanego planowania i smacznego! :)
                                </p>
                            </div>
                            <div className="info_widget__close close_third">
                                <i className="fa fa-times"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard__plan">
                  <div className="dashboard_table__container">
                    <h4>Twój plan na {values.plans[values.currentPlan].weekNumber} tydzień:</h4>  
                        {/* <select>
                        {values.plans.map((el) => (
                              <option key={el.id} value={el.weekNumber} id={el.id}>
                                  {el.weekNumber}
                              </option>
                        ))}
                        </select> */}
                        
                    <table className="dashboard__table">
                      <thead>
                        <tr className="dashboard_table__header">
                          <th>Poniedziałek</th>
                          <th>Wtorek</th>
                          <th>Środa</th>
                          <th>Czwartek</th>
                          <th>Piątek</th>
                          <th>Sobota</th>
                          <th>Niedziela</th>
                        </tr>
                        <tr>
                          <td>{plans[values.currentPlan].monday[0]}</td>
                          <td>{plans[values.currentPlan].tuesday[0]}</td>
                          <td>{plans[values.currentPlan].wednesday[0]}</td>
                          <td>{plans[values.currentPlan].thursday[0]}</td>
                          <td>{plans[values.currentPlan].friday[0]}</td>
                          <td>{plans[values.currentPlan].saturday[0]}</td>
                          <td>{plans[values.currentPlan].sunday[0]}</td>
                        </tr>
                        <tr>
                          <td>{plans[values.currentPlan].monday[1]}</td>
                          <td>{plans[values.currentPlan].tuesday[1]}</td>
                          <td>{plans[values.currentPlan].wednesday[1]}</td>
                          <td>{plans[values.currentPlan].thursday[1]}</td>
                          <td>{plans[values.currentPlan].friday[1]}</td>
                          <td>{plans[values.currentPlan].saturday[1]}</td>
                          <td>{plans[values.currentPlan].sunday[1]}</td>
                        </tr>
                        <tr>
                          <td>{plans[values.currentPlan].monday[2]}</td>
                          <td>{plans[values.currentPlan].tuesday[2]}</td>
                          <td>{plans[values.currentPlan].wednesday[2]}</td>
                          <td>{plans[values.currentPlan].thursday[2]}</td>
                          <td>{plans[values.currentPlan].friday[2]}</td>
                          <td>{plans[values.currentPlan].saturday[2]}</td>
                          <td>{plans[values.currentPlan].sunday[2]}</td>
                        </tr>
                        <tr>
                          <td>{plans[values.currentPlan].monday[3]}</td>
                          <td>{plans[values.currentPlan].tuesday[3]}</td>
                          <td>{plans[values.currentPlan].wednesday[3]}</td>
                          <td>{plans[values.currentPlan].thursday[3]}</td>
                          <td>{plans[values.currentPlan].friday[3]}</td>
                          <td>{plans[values.currentPlan].saturday[3]}</td>
                          <td>{plans[values.currentPlan].sunday[3]}</td>
                        </tr>
                        <tr>
                          <td>{plans[values.currentPlan].monday[4]}</td>
                          <td>{plans[values.currentPlan].tuesday[4]}</td>
                          <td>{plans[values.currentPlan].wednesday[4]}</td>
                          <td>{plans[values.currentPlan].thursday[4]}</td>
                          <td>{plans[values.currentPlan].friday[4]}</td>
                          <td>{plans[values.currentPlan].saturday[4]}</td>
                          <td>{plans[values.currentPlan].sunday[4]}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="dashboard__next_page">
                    <div className="dashboard_next_page__box" onClick={prevPlan}>
                      <div>
                        <i className="fa fa-angle-double-left"></i>
                      </div>
                      <p>poprzedni</p>
                    </div>
                    <div className="dashboard_next_page__box" onClick={nextPlan}>
                      <p>następny</p>
                      <div>
                        <i className="fa fa-angle-double-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          
       
    )  
}

export default Pulpit;