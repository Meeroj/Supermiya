// src/components/DailyResultsChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DailyResultsChart = ({ data }) => {
  const chartOptions = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">Daily Results</h2>
      <ReactApexChart options={chartOptions} series={data} type="line" height={350} />
    </div>
  );
};

export default DailyResultsChart;
