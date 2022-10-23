import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length>0) {
    return (
      <div>
        <span className="fw-semibold">Synonyms:</span>
        <ul className="synonyms">
          {props.synonyms.map((synonym, index) => {
            return (
              <li key={index} className="synonym">
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
