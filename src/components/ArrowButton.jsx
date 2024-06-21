import React from 'react';
import '../css/ArrowButton.css';

const ArrowButton = ({ direction, onClick }) => {
    const arrowText = direction === 'left' ? '<' : '>';

    return (
        <button className={`arrow-button ${direction}`} onClick={onClick}>
            {arrowText}
        </button>
    );
};

export default ArrowButton;
