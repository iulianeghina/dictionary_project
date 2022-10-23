import React from "react";
import Example from "./Example";

export default function Definition(props) {
  return (
    <div>
      {props.definition.map((definition, index) => {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <Example example={definition.example} />
          </div>
        );
      })}
    </div>
  );
}
