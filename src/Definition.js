import React from "react";
import Example from "./Example";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div>
      {props.definition.map((definition, index) => {
        return (
          <div className="definition" key={index}>
            {definition.definition}
            <br />
            <Example example={definition.example} />
          </div>
        );
      })}
    </div>
  );
}
