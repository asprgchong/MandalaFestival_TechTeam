import React, { useCallback, useEffect, useRef, useState } from "react";
import '../../css/music_bar.css';

import {
    IoPauseSharp,
    IoPlaySharp,
} from 'react-icons/io5';

const button = ({audioRef, progressBarRef, duration, setTimeProgress }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };
    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
        console.log('run');
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
          '--range-progress',
          `${(progressBarRef.current.value / duration) * 100}%`
        );
    
        playAnimationRef.current = requestAnimationFrame(repeat);
      }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
      }, [isPlaying, audioRef, repeat]);
    return(
        <div>
            
            <button className="play_button" style={{outline: 'none'}} onClick={togglePlayPause}>
                {isPlaying ? <IoPauseSharp/> : <IoPlaySharp/>}
            </button>
            
        </div>
    )
}

export default button