import React from "react";
import "../css/ArtistMap.css";

const ArtistMap = ({artistName}) => {

    const getClassByArtistName = (name) => {
        switch (name.toLowerCase()) {
          case 'pastor':
            return 'kedzie-stop';
          case 'anant':
            return 'sheridan-stop';
          case 'nurullah':
            return 'clark-stop';
          case 'kertayuda':
            return 'rockwell-stop';
          default:
            return ''; 
        }
      };
  return (
    <>
      <div className="artist-map-container">
        
        <div className="bus-stop kedzie"></div>

        <div className="connect-one"></div>

        <div className="bus-stop rockwell"></div>

        <div className="connect-two"></div>

        <div className="bus-stop clark"></div>

        <div className="connect-three"></div>

        <div className="connect-four"></div>

        <div className="connect-five"></div>

        <div className="connect-six"></div>

        <div className="bus-stop sheridan"></div>

        <div className={`pin ${getClassByArtistName(artistName)}`}></div>
        
      </div>
    </>
  );
};

export default ArtistMap;