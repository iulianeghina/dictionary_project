import React from "react";
import "./Phonetics.css";
import Player from "./Player";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetics.map((phonetic, index) => {
        if (phonetic.audio.length > 0) {
          return (
            <div className="phonetics" key={index}>
              <Player url={phonetic.audio} />
              <span className="phonetic-text">{phonetic.text}</span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
