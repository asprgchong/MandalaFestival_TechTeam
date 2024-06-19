import React, { useRef, useState } from "react";
import { tracks } from '../../data/tracks';

import '../../css/music_bar.css';
import Download from './download_button';
import Play_button from './play_button';
import Progress_bar from './progress_bar';
import Track_data from './track_data';

const music_bar = ({artist}) => {
    // const [current_track, set_next_track] = useState(tracks[0]);
    const music = [];
    for (let i=0; i < tracks.length; i++){
        if (tracks[i].artist == "chethan" && artist == "chethan"){
            for (let x=0; x < tracks[i].tracks.length; x++){
                const [current_track, set_next_track] = useState(tracks[i].tracks[x]);
                const audioRef = useRef();
                const progressBarRef = useRef();
                const [timeProgress, setTimeProgress] = useState(0);
                const [duration, setDuration] = useState(0);
                music.push(
                    <div className="music_bar">
                        <div className="inner">
                            <Track_data 
                                current_track={current_track} 
                                audioRef={audioRef}
                                setDuration={setDuration}
                                progressBarRef={progressBarRef}
                            />
                            <Play_button 
                                audioRef={audioRef}
                                progressBarRef={progressBarRef} 
                                duration={duration}
                                setTimeProgress={setTimeProgress}
                            />
                            <Progress_bar 
                                progressBarRef={progressBarRef} 
                                audioRef={audioRef} 
                                timeProgress={timeProgress}
                                duration={duration}
                            />
                            <Download/>
                        </div>
                    </div>
                )
            }
        } else if (tracks[i].artist == "juan" && artist == "juan") {
            for (let x=0; x < tracks[i].tracks.length; x++){
                const [current_track, set_next_track] = useState(tracks[i].tracks[x]);
                const audioRef = useRef();
                const progressBarRef = useRef();
                const [timeProgress, setTimeProgress] = useState(0);
                const [duration, setDuration] = useState(0);
                music.push(
                    <div className="music_bar">
                        <div className="inner">
                            <Track_data 
                                current_track={current_track} 
                                audioRef={audioRef}
                                setDuration={setDuration}
                                progressBarRef={progressBarRef}
                            />
                            <Play_button 
                                audioRef={audioRef}
                                progressBarRef={progressBarRef} 
                                duration={duration}
                                setTimeProgress={setTimeProgress}
                            />
                            <Progress_bar 
                                progressBarRef={progressBarRef} 
                                audioRef={audioRef} 
                                timeProgress={timeProgress}
                                duration={duration}
                            />
                            <Download/>
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <>
        {music}
        </>
    )
}

export default music_bar