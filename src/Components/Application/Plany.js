import React from 'react';
import Plan from './Plan';

class Plany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: [
                {
                    id: 1,
                    name: "Wegetariański tydzień",
                    description: "Długi opis tygodnia bez mięsa.",
                    weekNumber: 1,
                    monday: [1,2,3,4,5],
                    tuesday: [1,2,3,4,5],
                    wednesday: [1,2,3,4,5],
                    thrusday: [1,2,3,4,5],
                    friday: [1,2,3,4,5],
                    satruday: [1,2,3,4,5],
                    sunday: [1,2,3,4,5]
                  },
                  {
                    id: 2,
                    name: "Jadalny tydzień",
                    description: "Długi opis tygodnia bez potrzeby jedzenia.",
                    weekNumber: 2,
                    monday: [1,2,3,4,5],
                    tuesday: [1,2,3,4,5],
                    wednesday: [1,2,3,4,5],
                    thrusday: [1,2,3,4,5],
                    friday: [1,2,3,4,5],
                    satruday: [1,2,3,4,5],
                    sunday: [1,2,3,4,5]
                  },
                  {
                    id: 3,
                    name: "Wesoły tydzień",
                    description: "Długi opis tygodnia bez żadnych smutków.",
                    weekNumber: 3,
                    monday: [1,2,3,4,5],
                    tuesday: [1,2,3,4,5],
                    wednesday: [1,2,3,4,5],
                    thrusday: [1,2,3,4,5],
                    friday: [1,2,3,4,5],
                    satruday: [1,2,3,4,5],
                    sunday: [1,2,3,4,5]
                  },
                  {
                    id: 4,
                    name: "Wegetariański tydzień",
                    description: "Długi opis tygodnia bez mięsa.",
                    weekNumber: 4,
                    monday: [1,2,3,4,5],
                    tuesday: [1,2,3,4,5],
                    wednesday: [1,2,3,4,5],
                    thrusday: [1,2,3,4,5],
                    friday: [1,2,3,4,5],
                    satruday: [1,2,3,4,5],
                    sunday: [1,2,3,4,5]
                  },
                  {
                    id: 5,
                    name: "Jadalny tydzień",
                    description: "Długi opis tygodnia bez potrzeby jedzenia.",
                    weekNumber: 5,
                    monday: [1,2,3,4,5],
                    tuesday: [1,2,3,4,5],
                    wednesday: [1,2,3,4,5],
                    thrusday: [1,2,3,4,5],
                    friday: [1,2,3,4,5],
                    satruday: [1,2,3,4,5],
                    sunday: [1,2,3,4,5]
                  },
                  {
                    id: 6,
                    name: "Wesoły tydzień",
                    description: "Długi opis tygodnia bez żadnych smutków.",
                    weekNumber: 6,
                    monday: [1,2,3,4,5],
                    tuesday: [1,2,3,4,5],
                    wednesday: [1,2,3,4,5],
                    thrusday: [1,2,3,4,5],
                    friday: [1,2,3,4,5],
                    satruday: [1,2,3,4,5],
                    sunday: [1,2,3,4,5]
                  }
            ]
        }
    }

    render() {

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
                    {this.state.plans.map((el) => (
                      <Plan
                        key={el.id}
                        schedule={el}
                        id={el.id}
                        // getScheduleDetails={getScheduleDetails}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            )
    }
    
}

export default Plany;