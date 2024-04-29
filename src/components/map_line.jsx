import React from 'react';

export function Rotated_Line() {
    return (
        <div style={{ 
          width: '48.87px', 
          height: '3px', 
          backgroundColor: 'white',
          transform: 'rotate(90deg)', 
        }}></div>
    );
}

export function Arrow_Line1() {
    return (
        <div style={{ 
            width: '10px', 
            height: '1px', 
            backgroundColor: 'white',
            transform: 'rotate(45deg)', 
          }}></div>
    );
}
export function Arrow_Line2() {
    return (
        <div style={{ 
            width: '10px', 
            height: '1px', 
            backgroundColor: 'white',
            transform: 'rotate(315deg)', 
          }}></div>
    );
}

export function Arrow_Line3() {
    return (
        <div style={{ 
            width: '10px', 
            height: '1px', 
            backgroundColor: 'white',
            transform: 'rotate(135deg)', 
          }}></div>
    );
}




export default function Line() {
    return (
      <div style={{ width: '226.56px', height: '3px', backgroundColor: 'white' }}></div>
    );
}

