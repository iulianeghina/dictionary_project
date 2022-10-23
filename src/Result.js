import React from "react";
import Definition from "./Definition";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="result">
        <h4>{props.result.word}</h4>
        {props.result.meanings.map((meaning, index) => {
          return (
            <p key={index}>
              <em className="fw-bold">{meaning.partOfSpeech}</em>
              <Definition definition={meaning.definitions} />
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
