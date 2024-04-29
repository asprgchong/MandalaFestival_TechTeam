import React from 'react';
import './MiniMap.css';

const MiniMap = () => {
  const stops = [
    { name: 'Sheridan & Loyola', x: 20, y: 100, rotation: 0},
    { name: 'Devon & Kedzie', x: 100, y: 100,  rotation: 0},
    { name: 'Devon & Rockwell', x: 180, y: 100,  rotation: 0},
    { name: 'Clark & Devon', x: 180, y: 60, rotation: 0},
  ];

  const activeStop = { name: 'Sheridan & Loyola', x: 20, y: 100, rotation: 270 }; 
  // The active stop can be passed in as a prop if it changes

  return (
    <svg width="210" height="210" viewBox="0 0 210 210" className="mini-map">
    {/* Line path */}
    <line x1="20" y1="100" x2="180" y2="100" stroke="white" strokeWidth="4" />
    <line x1="180" y1="100" x2="180" y2="60" stroke="white" strokeWidth="4" />

    <g>
        <circle cx={100} cy={100} r="6" fill="white" />
        <text 
            x= {60} 
            y = {105} 
            textAnchor="middle" 
            fill="white" 
            className="stop-label"
            transform={`rotate(${270}, ${100}, ${100})`}
        >
        Devon & Kedzie
        </text>
    </g>

    <g>
        <circle cx={180} cy={100} r="6" fill="white" />
        <text 
            x= {140} 
            y = {100} 
            textAnchor="middle" 
            fill="white" 
            className="stop-label"
            transform={`rotate(${270}, ${180}, ${100})`}
        >
        Devon & Rockwell
        </text>
    </g>

    <g>
        <circle cx={180} cy={60} r="6" fill="white" />
        <text 
            x= {140} 
            y = {60} 
            textAnchor="middle" 
            fill="white" 
            className="stop-label"
            transform={`rotate(${0}, ${180}, ${60})`}
        >
        Clark & Devon
        </text>
    </g>

    {/* Active stop indicator */}
    <g>
        <circle cx="20" cy="100" r="6" fill="white" />
        <circle cx="20" cy="80" r="8" fill="orange" />
        <polygon points="20,100 12,80 28,80" fill="orange" />
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