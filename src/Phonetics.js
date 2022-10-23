import React from "react";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      {props.phonetics.map((phonetic, index) => {
        if (phonetic.text.length > 0 && phonetic.audio.length > 0) {
          return (
            <div key={index}>
              <a href={phonetic.audio} target="_blank" rel="noreferrer">
                Listen
              </a>
              <div>{phonetic.text}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
