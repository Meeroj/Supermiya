// src/components/CircularProgressBar.js

import React from 'react';

const CircularProgressBar = ({ progress }) => {
  const radius = 100;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="inline-block">
      <circle
        stroke="#D69358"
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#D69358"
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDashoffset={strokeDashoffset}
      />
      <text
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="20"
        fill="#D69358"
        className="font-bold"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
