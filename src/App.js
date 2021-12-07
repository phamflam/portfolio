import './App.css';
// import tft from './images/TFT.jpg';
// import gude from "./images/gudetama.png"

function App() {
  return (
    <div className="content">
      <h1>Lynn Pham</h1>
      <div id="home" className="screen">
        Welcome to my webportfolio made with React.js
        <div >
          {/* <img id="bg" src={tft} alt="tft"/> */}
        </div>
      </div>
      <div id="about" className="screen">
        I study applied computer science at HTW Berlin.
      </div>
      <div id="projects" className="screen">
        You can find most of my projects on Github.
      </div>
      <div id="contact" className="screen">
        Email <br />
        Github <br />
        LinkedIn
      </div>

    </div>

  );
}

export default App;
