import React from "react";
import "./styles.css";
import { useState } from "react";

const Lib = {
  LataMangeshkar: [
    {
      name: "Hothon Main Aisi Baat, Jewel Thief",
      rating: "4.9/5",
      description: "‘Hothon Main Aisi Baat’ is a duet featuring Bhupinder Singh and Lata Mangeshkar. The song was a remarkable achievement at the time because of the way it was recorded and shot. The movie Jewel Thief was one of the finest thrillers in mainstream Bollywood."
    },
    {
      name: "Tujhe Dekha Toh Yeh Jana, Dilwale Dulhania Le Jayenge",
      rating: "4.6/5",
      description:
        " This song is an unforgettable one, indeed. Sung by Kumar Sanu and Lata Mangeshkar, 'Tujhe Dekha toh yeh jana’ became an instant hit, when DDLJ released. Who knew, that this song and the movie will both become evergreen pieces of cinematic art?"
    },
    {
      name: "Aaj Phir Jeene Ki Tamanna, Guide",
      rating: "4.6/5",
      description:
        "Based on RK Narayan’s novel of the same name, Guide is the story of smooth-talking tourist guide Raju. The movie's chart-buster was the song 'Aaj Phir Jeene Ki Tamanna' written by Shailendra and composed by S.D. Burman and it turned out to be a cult classic."
    },
    {
      name: "Piya Tose, Guide ",
      rating: "4.5/5",
      description: "The number featured in the 1965 romantic drama Guide and was picturised on Waheeda Rehman and Dev Anand. Till date, it remains one of the most soulful romantic songs Bollywood has ever produced."
    }
  ],

  MohammadRafi: [
    {
      name: "Bahaaron Phool Barsao",
      rating: "4.8/5",
      description:
        ""
    },
    {
      name: "Ehsaan Tera Hoga Mujh Par",
      rating: "4.7/5",
      description:
        ""
    },
    {
      name: "Suhani Raat Dhal Chuk",
      rating: "4.6/5",
      description:
        ""
    },
    {
      name: "Kya Hua Tera Wada",
      rating: "4.9/5",
      description: ""
    },
    {
      name: "Yeh Chand Sa Roshan Chehra",
      rating: "4.8/5",
      description:
        ""
    }
  ],

  UditNarayan: [
    {
      name: "Papa Kehte Hain Bada Naam Karega",
      rating: "4.5/5",
      description:
        "The song “Papa Kehte Hain Bada Naam Karega” has hit the hearts of many father-son duos and this song has also been the most jolly song that brings forth an amusing and chucklesome mood all around!"
    },
    {
      name: "Pehla Nasha",
      rating: "4.3/5",
      description:
        "“Pehla Nasha“ is one of the most romantic songs ever! Udit has rendered soulful and emotive base vocals in this song that portrays the euphoria associated with “First Love”. Today it has become a cult song."
    },
    {
      name: "Jaadu Teri Nazar",
      rating: "5/5",
      description:
        "“Jaadu Teri Nazar” is another beautiful love song that has remarkable varying tones to build a castle of love and it indeed seeps well in mellowed softer arrangements. This song has beautiful composition and lyrics as well."  },
    {
      name: "Mitwa",
      rating: "4.5/5",
      description:
        "“Mitwa” is a very beautiful song from the movie “Lagaan” that brings forth the promises of love for the motherland, of freedom, of restlessness and joy. This song cannot be imagined in another singer’s voice apart from Udit’s magical voice. "
    },
    {
      name: "Main Nikla Gaddi Leke",
      rating: "4.5/5",
      description:
        "“Main Nikla Gaddi Leke” is one of the most happy and jolly songs that can make anyone go dancing! Udit’s voice had given it such a happy mood that the whole of this song is worth listening and enjoying!"
    }
  ],
  AshaBhosle: [
    {
      name: "Aaiye Meherban",
      rating: "4.8/5",
      description:"This evergreen song from Shakti Samanta directed 1958 film, Howrah Bridge essentially captures the significant times. This beautiful song sung in the melodious voice of Asha Bhosle is still popular in the contemporary times. Famous lyricist and Urdu poet Qamar Jalalabadi penned the songs of this film. The song Aaiye Meherbaan Baithiye Jaane Jaan picturised on Madhu Bala and Ashok Kumar."
    },
    {
      name: "Piya Tu Ab Toh Aaja",
      rating: "4.9/5",
      description:"This peppy number from 1971 Bollywood thriller film, Caravan, was sung by Asha Bhosle. The amalgamation of Helen’s dance moves and Asha Tai’s melodious voice made this song a hit. Parties were hard to imagine without this dance number during the nineties. Asha Bhosle was awarded the Filmfare Award for Best Playback Singer for this song."
    },
    {
      name: "Dum Maaro Dum",
      rating: "4.7/5",
      description:"Written by Anand Bakshi and composed by R.D.Burman, this Indian Hindi Song from the 1971 film Hare Rama Hare Krishna was a true cult classic song. The song, Dum Maaro Dum was picturised on Zeenat Aman. The team of R.D.Burman and Asha Bhosle never failed to mesmerize its audience and Dum Maaro Dum was one such song. Deemed to be a song of the hippie generation, this song won Asha Tai a Filmfare Award."
    },
    {
      name: "Chura Liya Hai Tumne Jo Dil Ko",
      rating: "4.6/5",
      description:"A romantic number of the nineties, this song touches the chords of hearts in the contemporary times.A song from 1973 Indian film, Yaadon Ki Baaraat, directed by Nasir Hussain, Chura Liya Hai Tumne Jo Dil Ko is a timeless song. The iconic voice of Asha Bhosle still reverberates in hearts whenever this song is played . This classic song is an exemplary example of Asha Tai’s profound voice and R.D.Burman’s brilliant music."
      }
    
  ], 
};

export default function App() {
  const [selectedGenre, setGenre] = useState("LataMangeshkar");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Some Great Music </h1>
      <p>Best songs dilevered till date by singers like</p>

      <div>
        {Object.keys(Lib).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div className="Song-names" style={{ textAlign: "left" }}>
        <ul>
          {Lib[selectedGenre].map((Song) => (
            <li key={Song.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {Song.name} </div>
              <p style={{ fontSize: "smaller" }}>{Song.description}</p>
              <div style={{ fontSize: "smaller" }}> {Song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
  );
}
