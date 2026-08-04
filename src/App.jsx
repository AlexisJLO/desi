import { useState } from 'react'
import helloKitty from './assets/hellokitty.png'
import kuromi from './assets/kuromi.png'
import heart from "./assets/heart.svg";
import bow1 from "./assets/bow1.svg";
import bow2 from "./assets/bow2.svg";
import cinnamoroll from "./assets/cinnamoroll.webp";
import myMelody from "./assets/MyMelody.png";
import './App.css'
import './index.css'
import MusicPlayer from "./pages/Music.jsx";

function App() {
  const [clicked, setClicked] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const decorations = [
    { image: heart, top: "10%", left: "15%" },
    { image: heart, top: "70%", left: "10%" },
    { image: heart, top: "25%", left: "80%" },
    { image: heart, top: "80%", left: "75%" },
    { image: heart, top: "53%", left: "59.2%" },

    { image: bow1, top: "15%", left: "75%" },
    { image: bow1, top: "60%", left: "10%" },
    { image: bow1, top: "85.2%", left: "23.2%" },
    { image: bow1, top: "40%", left: "20%" },

    { image: bow2, top: "20%", left: "30%" },
    { image: bow2, top: "55%", left: "85%" },
    { image: bow2, top: "80%", left: "50%" },
    { image: bow2, top: "10%", left: "60%" },
  ];

  const kuromiDecorations = [
    { image: kuromi, top: "10%", left: "88%" },
    { image: cinnamoroll, top: "83%", left: "20%" },
    { image: myMelody, top: "15%", left: "-3%" },
  ];

  const scrollToLetter = () => {
    setShowLetter(true);

    setTimeout(() => {
      document
        .getElementById("love-letter")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  return (
    <div className="page">
 
      <section className="hero">
      <MusicPlayer />
        <div className="decorations">
          {decorations.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="decoration"
              className="decoration heart"
              style={{
                top: item.top,
                left: item.left,
              }}
            />
          ))}
        </div>

        <div className="kuromi-decorations">
          {kuromiDecorations.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="kuromi decoration"
              className="decoration kuromi"
              style={{
                top: item.top,
                left: item.left,
              }}
            />
          ))}
        </div>

        <img
          src={helloKitty}
          alt="Hello Kitty"
          className="hello-kitty"
        />

        <h1 className="title">
          Happy National Girlfriend Day!
        </h1>

        <p className="subtitle">
          To the most beautiful girlfriend in the world!
        </p>

        <button
          className={`button ${clicked ? "" : "pop-animation"}`}
          onClick={() => {
            setClicked(true);
            scrollToLetter();
          }}
        >
          I Love You!
        </button>
 <MusicPlayer />
      </section>
         
      {showLetter && (
        <section
          id="love-letter"
          className="love-letter-section"
        >
          <h2>My Love</h2>

          <p>
            1 Corinthians 13:4-7 – Love is patient, kind, and enduring; it does not envy or boast, and it always protects, trusts, hopes, and perseveres, providing 
            a model for all relationships
            God I love your eyes, your smile, your laugh, and your heart. You are the most beautiful person I have ever met, and I am so grateful to have you in my life.
            Desiray, I will do any and everything in my power to make you happy, and I will always be here for you. I love you more than words can express, and I am so lucky to have you as my girlfriend,
            and one day my beautiful wife. I will always cherish and love you, and I will never take you for granted. You are my everything, and I am so grateful to have you in my life. I love you more 
            than anything in this world, and I will always be here for you, no matter what. Cant wait to hold you in my arms again, and kiss you like I have never kissed you before. 
            I love you more than anything in this world, and I will always be here for you, no matter what.
          </p>
          <button
            className={`button ${clicked ? "" : "pop-animation"}`}
            onClick={() => {
              setClicked(true);
              window.location.href = "/quiz";
            }}
          >
            Quiz Time!
          </button>
        
        </section>
      )}

    </div>
  );
}

export default App;