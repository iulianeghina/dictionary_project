import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetics.map((phonetic, index) => {
        if (phonetic.audio.length > 0) {
          return (
            <div className="phonetics" key={index}>
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
