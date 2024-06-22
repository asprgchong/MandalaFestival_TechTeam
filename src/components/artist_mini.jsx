import React, { useState } from 'react';
import ngurah from '../assets/Ngurah.jpg';
import anant from '../assets/anant.jpg';
import narullah from '../assets/narullah.jpg';
import pastor from '../assets/pastor.jpg';
import Card from './artist_card';
import ArrowButton from './ArrowButton';
import '../css/artist_mini.css'

const Lineup = () => {
    const [startIndex, setStartIndex] = useState(0);

    const cards = [
        { person: { name: 'Chethan Anant' }, src: anant, name: 'chethanAnant' },
        { person: { name: 'Shantah Nurullah' }, src: narullah, name: 'shantahNurullah' },
        { person: { name: 'I Gusti Ngurah Kertayuda' }, src: ngurah, name: 'IGustiNgurahKertayuda' },
        { person: { name: 'Juan Pastor' }, src: pastor, name: 'juanPastor' },
        { person: { name: 'Fifth Artist' }, src: '', name: 'fifthArtist' },
    ];

    const totalCards = 5;

    const visibleCards = cards.slice(startIndex, startIndex + 3);

    const nextCards = () => {
        if (startIndex + 3 < totalCards) {
            setStartIndex(startIndex + 1);
        } else {
            setStartIndex(0);
        }
    };

    const prevCards = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        } else {
            setStartIndex(totalCards - 3); 
        }
    };

    return (
        <div className="artist-lineup">
            <ArrowButton direction="left" onClick={prevCards} />
            {visibleCards.map((card, idx) => (
                <Card key={idx} person={card.person} src={card.src} name={card.name} />
            ))}
            <ArrowButton direction="right" onClick={nextCards} />
        </div>
    );
};

export default Lineup;
