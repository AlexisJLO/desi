import { useState } from "react";

import song1 from "../assets/music/Cant Help Falling In Love With You.mp3";


function MusicPlayer() {
  const songs = [
    {
      title: "Our Song 💖",
      file: song1,
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
        🎵 Now Playing
      </h3>

      <p>
        {songs[currentSong].title}
      </p>

      <audio
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