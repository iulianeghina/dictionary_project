import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example">
        <span className="fw-semibold">Example:</span> {props.example}
      </div>
    );
  } else {
    return null;
  }
}
