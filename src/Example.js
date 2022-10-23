import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example fst-italic">
        <span className="fw-semibold">Example:</span> {props.example}
      </div>
    );
  } else {
    return null;
  }
}
