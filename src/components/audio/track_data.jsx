import React from "react";
import { BsMusicNoteBeamed } from 'react-icons/bs';
import '../../css/music_bar.css';

const track_data = ({current_track, audioRef, setDuration, progressBarRef}) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };
    return (
        <>
            <div className="track_data">
                <audio 
                    src={current_track.src}
                    ref={audioRef}
                    onLoadedMetadata={onLoadedMetadata}
                />
                <audio src={current_track.src} ref={audioRef} />
                <div className="audio_img">
                    <div className="img">
                    {current_track.image ? (
                        <img src={current_track.image} width="100%" alt="audio thumbnail"/>
                    ) : (
                        <div className="image-wrapper">
                            <span className="audio_icon">
                                <BsMusicNoteBeamed/>
                            </span>
                        </div>
                    )}</div>
                </div>  
                <div className="audio_text">
                    <p className="title">{current_track.title}</p>
                    <p className="artist_text">{current_track.artist}</p>
                </div>
            </div>
        </>
    )
}

export default track_data