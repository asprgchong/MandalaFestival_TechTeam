import img from '/src/assets/sample.jpeg';
import Card from './artist_card';
import imgtwo from '/src/assets/imageArt.png';
import '/src/css/artist_mini.css';
import { 
    Link
} from "react-router-dom";

const Lineup = () => {

    return (
        <>
            <div className="artist-lineup">
                <div className="artist-cards">
                    <Card 
                    size={10} 
                    person={{name: 'Chethan Anant'}}
                    src={imgtwo}
                    name="chethanAnant"
                    />
                    <Card 
                    size={10} 
                    person={{name: 'Shantah Nurullah'}}
                    src={img}
                    name="shantahNurullah"
                    />
                    <Card 
                    size={10} 
                    person={{name: 'I Gusti Ngurah Kertayuda'}}
                    src={img}
                    name="IGustiNgurahKertayuda"
                    />
                    <Card 
                    size={10} 
                    person={{name: 'Juan Pastor'}}
                    src={img}
                    name="juanPastor"
                    />
                </div>
            </div>
        </>
    );
};

export default Lineup;