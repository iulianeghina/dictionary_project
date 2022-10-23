import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      {props.phonetics.map((phonetic, index) => {
        if (phonetic.text.length > 0 && phonetic.audio.length > 0) {
          return (
            <div key={index}>
              <a
                className="listen-btn"
                href={phonetic.audio}
                target="_blank"
                rel="noreferrer"
              >
                Listen
              </a>{" "}
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
