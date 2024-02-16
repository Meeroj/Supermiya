import React, { useState } from 'react';
import DailyResultsChart from '../DailyResultsChart';

const AttendanceTracker = () => {
  const chartData = [
    {
      name: 'Speed Number',
      data: [40, 70, 83, 70, 85, 90, 105,40, 70, 83, 70, 85, 90, 105,40, 70, 83, 70, 85, 90, 105,40, 70, 83, 70, 85, 90, 105,],
    },
    {
      name: 'Binar Number',
      data: [30, 40, 45, 50, 55, 60, 55,20, 20, 25, 30, 45, 50, 60,20, 20, 25, 30, 45, 50, 60,30, 40, 45, 50, 55, 60, 55]
    }, {
      name: 'Card memory',
      data: [20, 20, 25, 30, 45, 50, 60,30, 40, 45, 50, 55, 60, 55,30, 40, 45, 50, 55, 60, 55,20, 20, 25, 30, 45, 50, 60,]
    }
  ];

  return (
    <div>      
      <div>
        <DailyResultsChart data={chartData} />
      </div>
    </div>
  );
};

export default AttendanceTracker;
