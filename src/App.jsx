import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import helloKitty from './assets/hellokitty.png'
import './App.css'
import './index.css'

function App() {
   const [clicked, setClicked] = useState(false);
     const hearts = [
    { id: 1, top: "10%", left: "15%", delay: "0s" },
    { id: 2, top: "20%", left: "80%", delay: "0.2s" },
    { id: 3, top: "70%", left: "10%", delay: "0.4s" },
    { id: 4, top: "80%", left: "75%", delay: "0.6s" },
    { id: 5, top: "40%", left: "90%", delay: "0.8s" },
    { id: 6, top: "60%", left: "25%", delay: "1s" },
  ];
  return (
    <div className="hero">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            top: heart.top,
            left: heart.left,
            animationDelay: heart.delay
          }}
        >
          💖
        </span>
      ))}
      <img src={helloKitty}
        alt="Hello Kitty"
        className="hello-kitty"/>
      <h1 className="title">Happy National Girlfriend Day!</h1>
      <p className="subtitle">To the most beautiful girlfriend in the world!</p>
    <button
      className={`button ${clicked ? "" : "pop-animation"}`}
      onClick={() => setClicked(true)}
    >
      I Love You
    </button>
  
    </div>
  );
}

export default App
