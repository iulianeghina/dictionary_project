import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form className="search-form mt-5" onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} />
    </form>
  );
}
