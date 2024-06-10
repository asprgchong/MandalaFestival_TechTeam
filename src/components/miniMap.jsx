import React from "react";
import { Link } from "react-router-dom";
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

            <Link to='/chethanAnant' state={{from:"Chethan Anant"}}>
            <div className="busbutton">
                <p className="busname" id="statone">Sheridan & Loyola</p>
                <div className="statOneCircle"></div>
            </div>
            </Link>

            <div className="whiteOne"></div>
            <div className="whiteTwo"></div>

            <Link to='/shantahNurullah' state={{from:"Shantah Nurullah"}}>
            <div className="busbutton">
                <p className="busname" id="stattwo">Clark & Devon</p>
                <div className="statTwoCircle"></div>
            </div>
            </Link>

            <Link to='/IGustiNgurahKertayuda' state={{from:"I Gusti Ngurah Kertayuda"}}>
            <div className="busbutton">
                <p className="busname" id="statthree">Devon & Rockwell</p>
                <div className="statThreeCircle"></div>
            </div>
            </Link>

            <Link to='/juanPastor' state={{from:"Juan Pastor"}}>
            <div className="busbutton">
                <p className="busname" id="statfour">Devon & Kedzie</p>
                <div className="statFourCircle"></div>
            </div>
            </Link>
        </div>
    )
}

export default button