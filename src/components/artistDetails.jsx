import Navbar from "./navbar";
import ArtistMap from "./ArtistMap";
import "../css/artistDetails.css";
import "../App.css";

function artistDetails({ artistName, artistInfo, artistImages }) {
  return (
    <>
      <Navbar />
      <div className="artist-detials-container">
        <div className="artist">
            <div className="artist-name">Chethan Anant</div>
            
            <ArtistMap artistName="Anant"/>
        </div>
        
        <div class="line" id="left"></div>

        <div className="artist-info">
            {/* I'm not sure how the json or info will be setup. But once we talk about that I can create some jsx that will parse it. */}
          Chethan Anant (@TheBansurist) is an Indian Classical musician,
          multi-instrumentalist, music producer, and music educator from
          Chicago. He is uniquely proficient as both a bansuri player and
          vocalist, and has studied music throughout his life with performers
          and musicologists, including Pandit Ronu Majumdar, Dr. Vikas
          Kashalkar, Pandit Arun Kashalkar, and Pandit Shyam Kane.
          <br />
          <br />
          As a performer, Anant specializes in the Hindustani Classical
          tradition. In addition to performing classical repertoire across the
          U.S. and internationally, he is an avid collaborator and loves sharing
          music with artists spanning varied genres, including Carnatic, jazz,
          Thai traditional, roots, blues, and hip hop. He spent more than a
          decade playing flute for Indian Classical dance recitals
          internationally, and built a reputation as one of the most sought-
          after flutists for dance performance. Through his experience in live
          sound management and studio recordings, he has developed a specialized
          skill set in music production and has mixed and mastered three of his
          own live albums.
          <br />
          <br />
          As an educator, Anant has been teaching music since 2016, and strives
          to share his new-generational perspective on the age-old Hindustani
          Classical music tradition with his students. He has given lecture
          demonstrations and performances at various institutions including
          Stanford University, Tulane University, MIT, and Rensellaer
          Polytechnic Institute.
        </div>
        <div className="artist-images-container">
          <img src="" alt="" id="artist-image-one" />
          <img src="" alt="" id="artist-image-two" />
          <img src="" alt="" id="artist-image-three" />
        </div>
      </div>
    </>
  );
}

export default artistDetails;
