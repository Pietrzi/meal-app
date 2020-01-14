import React from "react";

const Plan = ({ schedule, removePlan }) => {
  return (
    <tr>
      <td>{schedule.id}</td>
      <td>{schedule.name}</td>
      <td>{schedule.description}</td>
      <td>{schedule.weekNumber}</td>
      <td className='icons'>
        <i className='edit fa fa-edit'></i>
        <i className='delete fa fa-trash' onClick></i>
      </td>
    </tr>
  );
};

export default Plan;