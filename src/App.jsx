import { useState } from 'react'
import helloKitty from './assets/hellokitty.png'
import heart from "./assets/heart.svg";
import bow1 from "./assets/bow1.svg";
import bow2 from "./assets/bow2.svg";
import './App.css'
import './index.css'

function App() {
   const [clicked, setClicked] = useState(false);
  return (
    <div className="hero">
  
      <img 
        src={heart}
        alt="heart"
        className="decoration heart"
      />

      <img 
        src={bow1}
        alt="bow"
        className="decoration bow1"
      />

      <img 
        src={bow2}
        alt="bow2"
        className="decoration bow2"
      />
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
