import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [response, setResponse] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResponse(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h5 className="mb-3">What word do you want to look up?</h5>
          <form
            className="search-form text-center row"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Type a word..."
                autoFocus="on"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={handleSubmit}
              >
                Search
              </button>
            </div>
          </form>
          <p className="sugested-words">
            sugested words: mirror, wine, plant, yoga...{" "}
          </p>
        </section>
        <Result result={response} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
