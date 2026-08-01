import "../pages/Memories.css";

import photo1 from "../assets/Pics/wifey.jpg";
import photo2 from "../assets/Pics/boat.jpeg";
import photo3 from "../assets/Pics/fireworks.gif";
import photo4 from "../assets/Pics/ring.jpeg";

function Memories() {

  const memories = [
    {
      image: photo1,
      title: "My Beautiful Girlfriend 💖",
      description: "The most beautiful person in my life, inside and out."
    },
    {
      image: photo2,
      title: "My Favorite Sidequest ❤️",
      description: "Every second with you is a treasure."
    },
    {
      image: photo3,
      title: "A Special Memory 🎀",
      description: "A moment I'll never forget."
    },
    {
      image: photo4,
      title: "Forever Us 💕",
      description: "Ill put a ring on it, and make you mine forever."
    }
  ];

  return (
    <div className="memories-page">

      <h1 className="memories-title">
        Our Memories Together 💖
      </h1>

      <p className="memories-subtitle">
        Every picture tells a story.
      </p>

      <div className="gallery">

        {memories.map((memory, index) => (
          <div
            key={index}
            className="memory-card"
          >
            <img
              src={memory.image}
              alt={memory.title}
            />

            <h3>{memory.title}</h3>

            <p>{memory.description}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Memories;