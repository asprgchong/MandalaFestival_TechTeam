import { React } from "react";
import { Link } from "react-router-dom";
import "/src/css/artist_card.css";

const Card = ({ person, src, name }) => {
  let playlist = 0;
  let nameURL = "/" + name;
  if (person.name == "Chethan Anant" || person.name == "Juan Pastor") {
    playlist = 1;
  }
  return (
    <>
      <Link to={nameURL} state={{ from: person.name }}>
        <div className="artist-card">
          <img
            className="artist-image"
            src={src}
            alt={person.name}
          />
          <p className="card-text">{person.name}</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
