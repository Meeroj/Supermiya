// src/components/WorkCalendar.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const WorkCalendar = () => {
  const [datesWorked, setDatesWorked] = useState([]);

  const handleDateClick = (date) => {
    const updatedDatesWorked = [...datesWorked];
    const dateIndex = updatedDatesWorked.findIndex((d) => d.getTime() === date.getTime());
    if (dateIndex !== -1) {
      // If date is already in the list, remove it
      updatedDatesWorked.splice(dateIndex, 1);
    } else {
      // If date is not in the list, add it
      updatedDatesWorked.push(date);
    }
    setDatesWorked(updatedDatesWorked);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">Work Calendar</h2>
      <Calendar onClickDay={handleDateClick} value={datesWorked} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Dates Worked:</h3>
        <ul>
          {datesWorked.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCalendar;
