import React from "react";

export default function Example(props) {
  if (props.example) {
    return <span className="example">Example: {props.example}</span>;
  } else {
    return null;
  }
}
