import { Link, useLocation } from 'react-router-dom';
import ArtistMap from '../components/ArtistMap';
import Navbar from '../components/navbar';
import '/src/css/artist_details.css';

const artistDetails = () => {
    let playlist = 0;
    const location = useLocation()
    const { from } = location.state
    if (from == "Chethan Anant" || from == "Juan Pastor"){
        playlist = 1;
    }

    let map, text = "";
    let smallerTitle = "hidden";
    if (from == "Chethan Anant"){
        map = "anant";
        text = ["Chethan Anant (@TheBansurist) is an Indian Classical musician,multi-instrumentalist, music producer, and music educator from Chicago. He is uniquely proficient as both a bansuri player and vocalist, and has studied music throughout his life with performers and musicologists, including Pandit Ronu Majumdar, Dr. Vikas Kashalkar, Pandit Arun Kashalkar, and Pandit Shyam Kane.", <br/>, <br/>, "As a performer, Anant specializes in the Hindustani Classical tradition. In addition to performing classical repertoire across the U.S. and internationally, he is an avid collaborator and loves sharing music with artists spanning varied genres, including Carnatic, jazz, Thai traditional, roots, blues, and hip hop. He spent more than a decade playing flute for Indian Classical dance recitals internationally, and built a reputation as one of the most sought-after flutists for dance performance. Through his experience in live sound management and studio recordings, he has developed a specialized skill set in music production and has mixed and mastered three of his own live albums.", <br/>, <br/>, "As an educator, Anant has been teaching music since 2016, and strives to share his new-generational perspective on the age-old Hindustani Classical music tradition with his students. He has given lecture demonstrations and performances at various institutions including Stanford University, Tulane University, MIT, and Rensellaer Polytechnic Institute."];
        smallerTitle = "hidden";
    } else if (from == "Shantah Nurullah"){
        map = "nurullah";
        text = ["Shanta Nurullah makes music primarily on sitar, bass, and mbira, and works as a storyteller and teaching artist. She has been performing professionally as a musician since 1972 and as a storyteller since 1978. She co-founded two all-women’s groups, Sojourner and Samana, and currently leads the ensemble, Sitarsys.", <br/>, <br/>, 
        "A member of the AACM (Association for the Advancement of Creative Musicians), Shanta has received an Artist Fellowship from the Illinois Arts Council Agency and the Zora Neale Hurston Award from the National Association of Black Storytellers. She has performed in venues across the country, distinguishing herself as a sitarist and bassist exploring African American improvisational music. ShaZah, her collaboration with vocalist Zahra Baker, has been featured recently on several virtual platforms.", 
        <br/>, <br/>, 
        "Shanta teaches in the early childhood program at the Old Town School of Folk Music and is an advocate for women in music."];
        smallerTitle = "hidden";
    } else if (from == "I Gusti Ngurah Kertayuda"){
        map = "kertayuda";
        text = "I Gusti Ngurah Kertayda is a graduate of the National Performing Arts Institute (KOKAR) in Denpasar, Indonesia. He has taught and performed traditional and modern dance and gamelan since the 1970’s both nationally and internationally for numerous dignitaries and festivals. Since his relocation to the United States in 1989, he has served as the artistic and choreographic dance director for the Indonesian Consulate General of Chicago and has just retired from this position in December 2012. He is now the director of Indonesian Dance of Illinois, a non-profit organization in the greater Chicago area promoting Indonesian culture through dance and music.";
        smallerTitle = "smaller"; 
    } else if (from == "Juan Pastor") {
        map = "pastor";
        text = "Drummer/percussionist and composer Juan Pastor finds himself caught between two homes: his native Lima, Peru, and the city where he has lived for the past 13 years, Chicago. As a result, both his original compositions and the sound of his ensemble, Chinchano, draw life from deep sources - Peru’s enchantingly diverse culture, history, landscapes, and folk music, and the language of North American Jazz. Pastor evokes his multifaceted story poignantly on his new recording, El Regreso (Quinto Pulso, 2019). Pastor begins his story with a lively arrangement of Wilfredo Franco Laguna's Mayoral, the album’s sole cover and a beloved Peruvian song, whose lyrics call out the oppressive racism of Spanish colonialism. Juan’s drums animate the arrangement with a powerful Afro-Peruvian “Festejo” dance rhythm, and special guest percussionists Makarito Nicasio and Edu Campos (both members of the acclaimed ensemble Peru Negro) join the rhythm section. In addition to energetically guiding Chinchano from the drums, Pastor’s original compositions highlight his skill as a musical storyteller."; 
        smallerTitle = "hidden";
    } else {
        text = "";
    }

    return (
        <>
            <div className='artistPage'>
                <Navbar/>
                <div className="artist-detials-container">
                    <div className="artist">
                        <div className="artist-name" id={`${smallerTitle}`}>{from}</div>
                        <ArtistMap artistName={map}/>
                    </div>

                    <div class="line" id="left"></div>

                    <div className='artistDetails'>
                        {playlist ? (
                            <Link to="/playlist">Listen to more songs</Link>
                        ) : null}
                    </div>
                    <div className="artist-info">
                        {text}
                    </div>
                </div>
            </div>
        </>
    )
}

export default artistDetails

{/* <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
    </button>
    <p>
        Edit <code>src/App.jsx</code> and save to test HMR
    </p>
</div>
<p className="read-the-docs">
    Click on the Vite and React logos to learn more
</p> */}