import { Component } from 'react';
import './App.css';
// import Box from './components/Box';
import SideNav from './components/SideNav';
import game from './images/gamedemo.jpeg';
import game_2 from './images/gamedemo_2.jpeg';
import surfdemo_1 from "./images/surfdemo_1.mp4"
import surfdemo_2 from "./images/surfdemo_2.mp4"
import surfdemo_3 from "./images/surfdemo_3.mp4"
import surfdemo_4 from "./images/surfdemo_4.mp4"

// import gude from "./images/gudetama.png"
// import pengulynn from "../public/favicon.ico"

class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div id="home" className="screen">
          <h1>Lynn Pham</h1>
          Welcome to my webportfolio made with React.js
          <div >
          </div>
        </div>
        {/* <div className="box"></div> */}
        <div id="about" className="screen" >
          I study applied computer science at HTW Berlin.
          <br />        <br />
        </div>

        <div id="projects" className="screen">
          You can find most of my projects on   <a className="link" href="https://github.com/phamflam" target="_blank" rel="noopener noreferrer" >GitHub</a>.
          <br />  <br />

          Contacts manager application with React.js Node.js Express.js and MongoDB. (module: webapplication development, 4rd semester)
          <h2>Coming soon.</h2>
          Viewer for whole slide images. (module: introduction to health informatics, 3rd semester)
          <h2>Coming soon.</h2>
          Mitosis detection with python jupyter notebooks (module: medical image processing, 4th semester)
          <h2>Coming soon.</h2>
          Next generation sequencing (module: health informatics, 3rd semester)
          <h2>Coming soon.</h2>
          <br />
          <p>Unity game for module computer graphics (5th semester)</p>
          <a href="https://github.com/phamflam/happy-pengu-surf" target="_blank" rel="noopener noreferrer"><img className="image" alt="Unity" src={game_2} /></a>
          <a href="https://github.com/phamflam/happy-pengu-surf" target="_blank" rel="noopener noreferrer"><img className="image" alt="Unity_2" src={game} /></a>
          written in C# and deployed for Android.
          <br /> <br />
          <video className="gif" autoPlay loop>
            <source src={surfdemo_1} type="video/mp4"></source>
          </video>
          <video className="gif" autoPlay loop>
            <source src={surfdemo_2} type="video/mp4"></source>
          </video>
          <video className="gif" autoPlay loop>
            <source src={surfdemo_3} type="video/mp4"></source>
          </video>
          <video className="gif" autoPlay loop>
            <source src={surfdemo_4} type="video/mp4"></source>
          </video>
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
        {/* <Box /> */}
      </div >
    );
  }
}

export default App;
