import React from 'react';
import "font-awesome/css/font-awesome.min.css";

const Pulpit = () => {
    return (
        <div className="pulpit">
            <div className="dashboard">
                <div className="dashboard__widgets">
                    <div className="add_widget__container">
                        <div className="add_widget__box">
                            <div className="add__widget recipe">
                                <i class="fa fa-plus"></i>
                            </div>
                            <p>dodaj przepis</p>
                        </div>
                        <div className="add_widget__box">
                            <div className="add__widget plan">
                                <i class="fa fa-plus"></i>
                            </div>
                            <p>dodaj plan</p>
                        </div>
                    </div>
                    <div className="info_widget__container">
                        <div className="info_widget__box">
                            <div className="info_widget__content">
                                <div className="info_widget__icon first">
                                    <i class="fa fa-info"></i>
                                </div>
                                <p className="info_widget_paragraph__first">
                                    Masz już 99 przepisów, nieźle!
                                </p>
                            </div>
                            <div className="info_widget__close close_first">
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                        <div className="info_widget__box">
                            <div className="info_widget__content">
                                 <div className="info_widget__icon second">
                                    <i class="fa fa-exclamation"></i>
                                </div>
                                <p className="info_widget_paragraph__second">
                                    Pamiętaj, aby dodać plan!
                                </p>
                            </div>
                            <div className="info_widget__close close_second ">
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                        <div className="info_widget__box">
                            <div className="info_widget__content">
                                <div className="info_widget__icon third">
                                    <i class="fa fa-check"></i>
                                </div>
                                <p className="info_widget_paragraph__third">
                                    Świetnie że jesteś! Udanego planowania i smacznego! :)
                                </p>
                            </div>
                            <div className="info_widget__close close_third">
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard__plan">
      <div className="dashboard_table__container">
        <h4>Twój plan na nr_tygodnia tydzień:</h4>
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
              <td>sniadanie</td>
              <td>sniadanie</td>
              <td>sniadanie</td>
              <td>sniadanie</td>
              <td>sniadanie</td>
              <td>sniadanie</td>
              <td>sniadanie</td>
            </tr>
            <tr>
              <td>drugie sniadanie</td>
              <td>drugie sniadanie</td>
              <td>drugie sniadanie</td>
              <td>drugie sniadanie</td>
              <td>drugie sniadanie</td>
              <td>drugie sniadanie</td>
              <td>drugie sniadanie</td>
            </tr>
            <tr>
              <td>zupa</td>
              <td>zupa</td>
              <td>zupa</td>
              <td>zupa</td>
              <td>zupa</td>
              <td>zupa</td>
              <td>zupa</td>
            </tr>
            <tr>
              <td>drugie danie</td>
              <td>drugie danie</td>
              <td>drugie danie</td>
              <td>drugie danie</td>
              <td>drugie danie</td>
              <td>drugie danie</td>
              <td>drugie danie</td>
            </tr>
            <tr>
              <td>kolacja</td>
              <td>kolacja</td>
              <td>kolacja</td>
              <td>kolacja</td>
              <td>kolacja</td>
              <td>kolacja</td>
              <td>kolacja</td>
            </tr>
          </thead>
        </table>
      </div>
      <div className="dashboard__next_page">
        <div className="dashboard_next_page__box">
          <div>
            <i class="fa fa-angle-double-left"></i>
          </div>
          <p>poprzedni</p>
        </div>
        <div className="dashboard_next_page__box">
          <p>następny</p>
          <div>
            <i class="fa fa-angle-double-right"></i>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    )
}

export default Pulpit;