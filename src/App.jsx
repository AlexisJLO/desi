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

function App() {
   const [clicked, setClicked] = useState(false);
   const decorations = [
  { image: heart, top: "10%", left: "15%" },
  { image: heart, top: "70%", left: "10%" },
  { image: heart, top: "25%", left: "80%" },
  { image: heart, top: "80%", left: "75%" },
  { image: heart, top: "53%", left: "59.2%", },

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
  return (
    
    <div className="hero">
  
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
    
      <img src={helloKitty}
        alt="Hello Kitty"
        className="hello-kitty"/>


      <h1 className="title">Happy National Girlfriend Day!</h1>
      <p className="subtitle">To the most beautiful girlfriend in the world!</p>
    
    <button
      className={`button ${clicked ? "" : "pop-animation"}`}
      onClick={() => setClicked(true)}
    >
      I Love You!
    </button>
  
    </div>
  );
}

export default App
