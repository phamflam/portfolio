import { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav';

// import tft from './images/TFT.jpg';
// import gude from "./images/gudetama.png"
// import pengulynn from "../public/favicon.ico"

class App extends Component {
  render() {
    return (
      <div id="main" >
        <SideNav />
        <div id="home" className="screen">
          <h1>Lynn Pham</h1>
          Welcome to my webportfolio made with React.js
          <div >
            {/* <img className="image" src={tft} alt="tft" /> */}
          </div>
        </div>
        {/* <div className="box"></div> */}
        <div id="about" className="screen" >
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
          <a href="mailto: lynnphamthu@gmail.com" target="_blank" rel="noopener noreferrer" className="icon">Email</a> <br />
          <a href="https://github.com/phamflam" target="_blank" rel="noopener noreferrer">
            <img className="icon" alt="GitHub" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
          </a> <br />
          <a href="https://www.linkedin.com/in/lynn-pham-841876212/" target="_blank" rel="noopener noreferrer">
            <img className="icon" alt="LinkedIn" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          </a>
        </div>
        <footer className="footer">
          favicon made by melina
        </footer>
      </div >

    );
  }
}

export default App;
