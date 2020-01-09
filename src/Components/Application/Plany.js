import React from 'react';
import Plan from './Plan';

const Plany = ({ plans }) => {

        return (
            <div className='recipes__wrapper'>
              <div className='recipes__header'>
                <h2>Lista Przepisów</h2>
                <i className='fa fa-plus-square'></i>
              </div>
              <div className='table__container'>
                <table>
                  <thead>
                    <tr className='table__header'>
                      <th className='id'>id</th>
                      <th className='name'>nazwa</th>
                      <th className='description'>opis</th>
                      <th className='description'>tydzień</th>
                      <th className='actions'>akcje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map((el) => (
                      <Plan
                        key={el.id}
                        schedule={el}
                        id={el.id}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            )
}

export default Plany;