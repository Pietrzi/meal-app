import React from 'react';
import "font-awesome/css/font-awesome.min.css";

class Pulpit extends React.Component {

  render() {
    const { addPlan, addRecipe, values } = this.props;
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
                    <h4>Twój plan na {plans[0].weekNumber} tydzień:</h4>
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
                          <td>{plans[0].monday[0]}</td>
                          <td>{plans[0].tuesday[0]}</td>
                          <td>{plans[0].wednesday[0]}</td>
                          <td>{plans[0].thursday[0]}</td>
                          <td>{plans[0].friday[0]}</td>
                          <td>{plans[0].saturday[0]}</td>
                          <td>{plans[0].sunday[0]}</td>
                        </tr>
                        <tr>
                          <td>{plans[0].monday[1]}</td>
                          <td>{plans[0].tuesday[1]}</td>
                          <td>{plans[0].wednesday[1]}</td>
                          <td>{plans[0].thursday[1]}</td>
                          <td>{plans[0].friday[1]}</td>
                          <td>{plans[0].saturday[1]}</td>
                          <td>{plans[0].sunday[1]}</td>
                        </tr>
                        <tr>
                          <td>{plans[0].monday[2]}</td>
                          <td>{plans[0].tuesday[2]}</td>
                          <td>{plans[0].wednesday[2]}</td>
                          <td>{plans[0].thursday[2]}</td>
                          <td>{plans[0].friday[2]}</td>
                          <td>{plans[0].saturday[2]}</td>
                          <td>{plans[0].sunday[2]}</td>
                        </tr>
                        <tr>
                          <td>{plans[0].monday[3]}</td>
                          <td>{plans[0].tuesday[3]}</td>
                          <td>{plans[0].wednesday[3]}</td>
                          <td>{plans[0].thursday[3]}</td>
                          <td>{plans[0].friday[3]}</td>
                          <td>{plans[0].saturday[3]}</td>
                          <td>{plans[0].sunday[3]}</td>
                        </tr>
                        <tr>
                          <td>{plans[0].monday[4]}</td>
                          <td>{plans[0].tuesday[4]}</td>
                          <td>{plans[0].wednesday[4]}</td>
                          <td>{plans[0].thursday[4]}</td>
                          <td>{plans[0].friday[4]}</td>
                          <td>{plans[0].saturday[4]}</td>
                          <td>{plans[0].sunday[4]}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="dashboard__next_page">
                    <div className="dashboard_next_page__box">
                      <div>
                        <i className="fa fa-angle-double-left"></i>
                      </div>
                      <p>poprzedni</p>
                    </div>
                    <div className="dashboard_next_page__box">
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
  
}

export default Pulpit;