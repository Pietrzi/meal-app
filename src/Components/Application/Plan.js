import React from "react";

const Plan = ({ schedule, id, getScheduleDetails }) => {
  return (
    <tr>
      <td>{schedule.id}</td>
      <td>{schedule.name}</td>
      <td>{schedule.description}</td>
      <td>{schedule.weekNumber}</td>
      <td className='icons'>
        <i className='edit fa fa-edit'></i>
        <i className='delete fa fa-trash'></i>
      </td>
    </tr>
  );
};

export default Plan;