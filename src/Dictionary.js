import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [response, setResponse] = useState(null);

  function handleResponse(response) {
    setResponse(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary-app">
      <form
        className="search-form mt-5"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input type="search" onChange={handleChange} />
      </form>
      <Result result={response} />
    </div>
  );
}
