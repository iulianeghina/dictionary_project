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
        <Dictionary defaultKeyword="sunset"/>
      </div>
    </div>
  );
}

export default App;
