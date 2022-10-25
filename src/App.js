import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center mb-5 mt-5">
          <div className="dictionary-logo">
            <div className="letter">D</div>
          </div>
          <span className="abreviation fw-normal">
            EED
            <div className="dictionary-name">
              English explanatory dictionary
            </div>
          </span>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This dictionary was coded by Iulia Neghina and it's{" "}
          <a
            href="https://github.com/iulianeghina/dictionary_project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced
          </a>{" "}
          on Github and hosted on{" "}
          <a
            href="https://heartfelt-parfait-bffae4.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
