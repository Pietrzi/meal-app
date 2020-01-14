import React from 'react';
// import Plan from './Plan';

const Plany = ({ plans, addPlan, removePlan }) => {

        return (
            <div className='recipes__wrapper'>
              <div className='recipes__header'>
                <h2>Lista Przepisów</h2>
                <i className='fa fa-plus-square' onClick={addPlan}></i>
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
                    {plans.map((el, idx) => (
                      <tr key={idx} id={idx}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.description}</td>
                        <td>{el.weekNumber}</td>
                        <td className='icons'>
                          <i className='edit fa fa-edit'></i>
                          <i className='delete fa fa-trash' onClick={removePlan}></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            )
}

export default Plany;