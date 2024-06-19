import ngurah from '../assets/Ngurah.jpg';
import anant from '../assets/anant.jpg';
import narullah from '../assets/narullah.jpg';
import pastor from '../assets/pastor.jpg';
import Card from './artist_card';
import '/src/css/artist_mini.css';

const Lineup = () => {

    return (
        <>
            <div className="artist-lineup">
                <div className="artist-cards">
                    <Card 
                    size={10} 
                    person={{name: 'Chethan Anant'}}
                    src={anant}
                    name="chethanAnant"
                    />
                    <Card 
                    size={10} 
                    person={{name: 'Shantah Nurullah'}}
                    src={narullah}
                    name="shantahNurullah"
                    />
                    <Card 
                    size={10} 
                    person={{name: 'I Gusti Ngurah Kertayuda'}}
                    src={ngurah}
                    name="IGustiNgurahKertayuda"
                    />
                    <Card 
                    size={10} 
                    person={{name: 'Juan Pastor'}}
                    src={pastor}
                    name="juanPastor"
                    />
                </div>
            </div>
        </>
    );
};

export default Lineup;