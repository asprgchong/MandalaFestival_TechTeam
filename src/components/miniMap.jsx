import React from "react";
import '/src/css/miniMap.css';

const button = () => {
    return(
        <div className="redlineIm">
            <div className="greybox"></div>
            <div className="redlineOne"></div>
            <div className="whiteDotOne"></div>
            <div className="whiteDotTwo"></div>
            <div className="redlineTwo"></div>
            <div className="whiteDotThree"></div>

            <p className="stationName" id="side1">Loyola</p>
            <p className="stationName" id="side2">Morse</p>

            <div className="smallGrey"></div>

            <button>
                <p className="busname" id="statone">Sheridan & Loyola</p>
                <div className="statOneCircle"></div>
            </button>
            <div className="whiteOne"></div>
            <div className="whiteTwo"></div>

            <button>
                <p className="busname" id="stattwo">Clark & Devon</p>
                <div className="statTwoCircle"></div>
            </button>

            <button>
                <p className="busname" id="statthree">Devon & Rockwell</p>
                <div className="statThreeCircle"></div>
            </button>

            <button>
                <p className="busname" id="statfour">Devon & Kedzie</p>
                <div className="statFourCircle"></div>
            </button>
        </div>
    )
}

export default button