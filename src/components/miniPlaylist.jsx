import '../css/miniPlaylist.css';
import Music_bar from './audio/music_bar';

const miniPlay = ({isVisible, artist}) => {

    let chethan = [
        {
            musicName: "SAmple1",
            audioFile: "sound.mp3"
        }, 
        {
            musicName: "SAmple3",
            audioFile: "sound3.mp3"
        }
    ];

    let juan = [
        {
            musicName: "Sample 2",
            audioFile: "sound2.mp3"
        }, 
        {
            musicName: "Sample 4",
            audioFile: "sound4.mp3"
        }
    ]

    // need a if here to check which artist and also loop through the list of audio stuff
    return (
        <>
            {isVisible == 1 ? (
                <div className='audioTracks'>
                    {artist == "Chethan" ? (
                        <div>
                            <Music_bar artist="chethan" />
                        </div>
                    ) : 
                        <div>
                            <Music_bar artist="juan"/>
                        </div>}
                </div>
            ): null}
        </>
    )
}

export default miniPlay;