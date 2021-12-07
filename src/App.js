import './App.css';
// import tft from './images/TFT.jpg';
// import gude from "./images/gudetama.png"
import "./css/sidenav.css";

function App() {
  function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    // const [text, setText] = useState("darkmode");
    // return <h1 onClick={() => setTitle("New title")}>{title}</h1>;
  }


  return (
    <div >
      <div className="sidenav">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
        {/* <div onClick={darkMode}></div> */}
        <button className="button" onClick={() => darkMode()}>darkmode </button>
      </div>

      <h1>Lynn Pham</h1>
      <div id="home" className="screen">
        Welcome to my webportfolio made with React.js
        <div >
          {/* <img className="image" src={tft} alt="tft" /> */}
        </div>
      </div>
      {/* <div className="box"></div> */}
      <div id="about" className="screen">
        I study applied computer science at HTW Berlin.
        {/* <br />        <br /> */}


      </div>
      <div id="projects" className="screen">
        You can find most of my projects on   <a className="link" href="https://github.com/phamflam">GitHub</a>.
        {/* <br />        <br />
         */}
      </div>
      <div id="contact" className="screen">
        Contact me: <br />
        <a href="mailto: lynnphamthu@gmail.com" className="icon">Email</a> <br />
        <a href="https://github.com/phamflam">
          <img className="icon" alt="GitHub" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
        </a> <br />
        <a href="https://www.linkedin.com/in/lynn-pham-841876212/">
          <img className="icon" alt="LinkedIn" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
        </a>
      </div>
    </div >

  );
}

export default App;
