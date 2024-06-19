import { React } from "react";
import { Link } from "react-router-dom";
import '/src/css/artist_card.css';


const Card = ({person, src, size, name}) => {
    let playlist = 0;
    let nameURL = "/" + name;
    if (person.name == "Chethan Anant" || person.name == "Juan Pastor") {
        playlist = 1;
    }
    return (
        <>
            <Link to={nameURL} state={{ from: person.name}}>
                <div className="artist-card">
                    <img
                    className="artist_each"
                    src={src}
                    alt={person.name}
                    width={size}
                    height={size}
                    />
                    <p className="card-text">
                        <span className="text-inner">{person.name}</span>
                    </p>
                    
                </div>
            </Link>
        </>
    )
}

export default Card

