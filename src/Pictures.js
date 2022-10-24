import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <section className="pictures">
        <div className="row">
          {props.pictures.map((picture, index) => {
            return (
              <div className="col-sm-6 col-md-4" key={index}>
                <a href={picture.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="picture-searched-word img-fluid rounded"
                    src={picture.src.landscape}
                    alt="searched word"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
