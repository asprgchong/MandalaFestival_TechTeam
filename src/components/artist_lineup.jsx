import Card from './artist_card';
import '/src/css/artist_lineup.css';

const Lineup = () => {

    return (
        <>
            <h3>Artist Lineup</h3>
            <div className="artist-lineup">
                <button className="slider-btn left">&lt;</button>
                <Card />
                <Card />
                <Card />
                <button className="slider-btn right">&gt;</button>
            </div>
        </>
    );
};

export default Lineup;
