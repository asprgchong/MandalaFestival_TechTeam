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

            <div className="smallGrey"></div>

            <div className="busbutton">
                <p className="busname ctaStation" id="statone">Morse Station</p>
                <div className="statOneCircle"></div>
            </div>

            <div className="whiteOne"></div>
            <div className="whiteTwo"></div>

            <div className="busbutton">
                <p className="busname" id="stattwo">Bus 155 Route</p>
                <div className="statTwoCircle"></div>
            </div>

            <div className="statThreeCircle"></div>

            <div className="statFourCircle"></div>
        </div>
    )
}

export default button