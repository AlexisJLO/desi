import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import helloKitty from './assets/hellokitty.png'
import './App.css'
import './index.css'

function App() {
   const [clicked, setClicked] = useState(false);
  return (
    <div className="hero">
      <img src={helloKitty}
        alt="Hello Kitty"
        className="hello-kitty"/>
      <h1 className="title">Happy National Girlfriend Day!</h1>
      <p className="subtitle">To the most beautiful girlfriend in the world!</p>
    <button
      className={`button ${clicked ? "" : "pop-animation"}`}
      onClick={() => setClicked(true)}
    >
      I Love You 💖
    </button>
  
    </div>
  );
}

export default App
