import React, { useState, useEffect } from "react";
import "./Player.css";

export default function Player(props) {
  const [audio, setAudio] = useState(new Audio(null));
  const [playing, setPlaying] = useState(false);

  function toggle() {
    setPlaying(!playing);
    setAudio(new Audio(props.url));
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
  }, [audio]);

  return (
    <div>
      <button className="listen-btn" onClick={toggle}>
        Listen
      </button>
    </div>
  );
}
