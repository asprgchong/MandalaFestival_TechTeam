import React from 'react';
import './MiniMap.css';

const MiniMap = () => {
  const stops = [
    { name: 'Devon & Kedzie', x: 40, y: 105,  rotation: 270, cx: 100, cy: 100},
    { name: 'Devon & Rockwell', x: 120, y: 100,  rotation: 270, cx:180, cy: 100},
    { name: 'Clark & Devon', x: 130, y: 60, rotation: 0, cx: 180, cy: 60},
  ];

  const activeStop = { name: 'Sheridan & Loyola', x: 20, y: 100, rotation: 270,
                       cx: 20, cy: 100}; 
  // The active stop can be passed in as a prop if it changes

  return (
    <svg width="210" height="210" viewBox="-5 20 210 210" className="mini-map">
    {/* Line path */}
    <line x1="20" y1="100" x2="180" y2="100" stroke="white" strokeWidth="4" />
    <line x1="180" y1="100" x2="180" y2="60" stroke="white" strokeWidth="4" />


    {stops.map((stop, index) => (
        <g key={index}>
          <circle cx={stop.cx} cy={stop.cy} r="6" fill="white" />
          <text 
            x={stop.x} 
            y={stop.y} 
            textAnchor="middle" 
            fill="white" 
            className="stop-label"
            transform={`rotate(${stop.rotation}, ${stop.cx}, ${stop.cy})`}
          >
            {stop.name}
          </text>
        </g>
      ))}

    {/* Active stop indicator */}
    <g>
        <circle cx={activeStop.cx} cy={activeStop.cy} r="6" fill="white" />
        <circle cx="20" cy="80" r="8" fill="orange" />
        <polygon points="20,100 12,80 28,80" fill="orange"/>
        <text 
        x={activeStop.x} 
        y={activeStop.y - 15} 
        textAnchor="end" 
        fill="white" 
        className="active-stop-label"
        transform={`rotate(${activeStop.rotation}, ${activeStop.x + 15}, ${activeStop.y})`}
        >
        {activeStop.name}
        </text>
    </g>
    </svg>
  );
};

export default MiniMap;