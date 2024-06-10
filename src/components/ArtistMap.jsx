import React from "react";
import '../css/artistMap.css';

const ArtistMap = () => {
    return (
        <>
            <div>
                <p className="busname" id="statone">Sheridan & Loyola</p>
                <div className="statOneCircle"></div>
            </div>
            <div className="whiteOne"></div>
            <div className="whiteTwo"></div>

            <div>
                <p className="busname" id="stattwo">Clark & Devon</p>
                <div className="statTwoCircle"></div>
            </div>

            <div>
                <p className="busname" id="statthree">Devon & Rockwell</p>
                <div className="statThreeCircle"></div>
            </div>

            <div>
                <p className="busname" id="statfour">Devon & Kedzie</p>
                <div className="statFourCircle"></div>
            </div>
        </>
    );
}

export default ArtistMap;
