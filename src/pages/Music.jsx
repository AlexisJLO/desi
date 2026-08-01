import { useState } from "react";
import "../pages/Music.css"

import song1 from "../assets/music/Cant Help Falling In Love With You.mp3";
import song2 from "../assets/music/Bruno Mars - Risk It All.mp3";
import song3 from "../assets/music/maye - Tú.mp3";
import song4 from "../assets/music/My Love.mp3";

function MusicPlayer() {
  const songs = [
    {
      title: "Cant Help Falling In Love With You",
      file: song1,
    },
    {
      title: "Bruno Mars - Risk It All",
      file: song2,
    },
    {
      title: "Tú - maye",
      file: song3,
    },
    {
      title: "My Love - maye",
      file: song4,
    },


  ];

  const [currentSong, setCurrentSong] = useState(0);

  const nextSong = () => {
    setCurrentSong(
      (currentSong + 1) % songs.length
    );
  };

  const prevSong = () => {
    setCurrentSong(
      currentSong === 0
        ? songs.length - 1
        : currentSong - 1
    );
  };

  return (
    <div className="music-player">

      

      <h3>
        {songs[currentSong].title}
      </h3>

      <audio
        autoPlay
        loop
        controls
        src={songs[currentSong].file}
      />

      <div className="music-buttons">

        <button onClick={prevSong}>
          ⏮ Previous
        </button>

        <button onClick={nextSong}>
          Next ⏭
        </button>

      </div>

    </div>
  );
}

export default MusicPlayer;