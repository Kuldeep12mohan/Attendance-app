import React from 'react';
import './PercentageWheel.css'; // Import CSS file for styling

const PercentageWheel = ({ percentage }) => {
  const radius = 40; // Adjust radius as needed
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="percentage-wheel">
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet" // Ensure the SVG scales to fit the div
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#ccc"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#f00"
          strokeWidth="10"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fill="#000"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default PercentageWheel;
