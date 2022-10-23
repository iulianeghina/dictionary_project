import React from "react";
import Definition from "./Definition";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="result">
        <h4>{props.result.word}</h4>
        <Phonetics phonetics={props.result.phonetics} />
        {props.result.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <strong>{meaning.partOfSpeech}</strong>
              <Definition definition={meaning.definitions} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
