import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
import Pictures from "./Pictures";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [response, setResponse] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResponse(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000017f3dc78b932547a69b03d12e9c3a7d7c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let header = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: header,
      })
      .then(handlePexelsResponse);
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
            <div className="col-md-9">
              <input
                className="form-control"
                type="search"
                placeholder="Type a word..."
                autoFocus="on"
                onChange={handleChange}
              />
            </div>
            <div className="search-btn col-md-3">
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={handleSubmit}
              >
                Search
              </button>
            </div>
          </form>
          <div className="sugested-words">
            sugested words: mirror, wine, plant, yoga...{" "}
          </div>
        </section>
        <Result result={response} />
        <Pictures pictures={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
