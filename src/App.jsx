import { useState } from 'react'
import helloKitty from './assets/hellokitty.png'
import heart from "./assets/heart.svg";
import bow1 from "./assets/bow1.svg";
import bow2 from "./assets/bow2.svg";
import './App.css'
import './index.css'

function App() {
   const [clicked, setClicked] = useState(false);
   const decorations = [
  { image: heart, top: "10%", left: "15%" },
  { image: heart, top: "70%", left: "10%" },
  { image: heart, top: "25%", left: "80%" },
  { image: heart, top: "80%", left: "75%" },
  { image: heart, top: "52%", left: "61.5%", },

  { image: bow1, top: "15%", left: "75%" },
  { image: bow1, top: "60%", left: "10%" },
  { image: bow1, top: "85%", left: "30%" },
  { image: bow1, top: "40%", left: "20%" },

  { image: bow2, top: "20%", left: "30%" },
  { image: bow2, top: "55%", left: "85%" },
  { image: bow2, top: "80%", left: "50%" },
  { image: bow2, top: "10%", left: "60%" },
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
