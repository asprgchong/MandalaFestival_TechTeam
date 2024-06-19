import React, { useState } from "react";
import MiniPlaylist from "../components/miniPlaylist";
import Navbar from "../components/navbar";
import '../css/playlist.css';

const Playlist = () => {
    let [isVisibleO, setIsVisible] = useState(1);
    const toggleVisibility = () => {
        setIsVisible(isVisibleO == 1 ? (isVisibleO = 0): isVisibleO = isVisibleO + 1);
      };

    let [isVisibleT, setIsVisibleT] = useState(1);
    const toggleVisibilityT = () => {
        setIsVisibleT(isVisibleT == 1 ? (isVisibleT = 0): isVisibleT = isVisibleT + 1);
    };

    return (
        <>
            <Navbar/>
            <div className="playlist">
                <h3 className="title">Explore More Music</h3>
                <div className='artistdrop' onClick={toggleVisibility}>
                    <h5>Chethan Anant</h5>
                    <button className='butt'>^</button>
                </div>
                <MiniPlaylist isVisible={isVisibleO} artist="Chethan"/> 

                <div className='artistdrop' onClick={toggleVisibilityT}>
                    <h5>Juan Pastor</h5>
                    <button className='butt'>^</button>
                </div>
                <MiniPlaylist isVisible={isVisibleT} artist="Juan"/> 
            </div>
            
        </>
    );
};

export default Playlist; 