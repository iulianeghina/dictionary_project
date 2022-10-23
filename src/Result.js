import React from "react";
import Definition from "./Definition";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="result">
        <section>
          <h4>{props.result.word}</h4>
          <Phonetics phonetics={props.result.phonetics} />
        </section>
        {props.result.meanings.map((meaning, index) => {
          return (
            <section>
              <div key={index}>
                <div className="part-of-speech fw-semibold">
                  {meaning.partOfSpeech}
                </div>
                <Definition definition={meaning.definitions} />
                <Synonyms synonyms={meaning.synonyms} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
