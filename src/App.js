import { Component } from 'react';
import './App.css';
// import Box from './components/Box';
import SideNav from './components/SideNav';

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
          <br /> <p style={{
            color: "#A52A2A"
          }}>(which is still in the making)</p>
          <div >
          </div>
        </div>
        {/* <div className="box"></div> */}
        <div id="about" className="screen" >
          <h2>ABOUT.</h2>
          I study applied computer science at HTW Berlin.
          <h5>HOBBIES.</h5>
          <ul >
            <li>playing piano</li>
            <p>I started taking piano lessons in 2011. My favorite pieces are "One Summer's Day" and "Merry Go Round of Life" both by Joe Hisaishi.</p>
            <li>cooking</li>
            <p>I especially enjoy Vietnamese and Korean cuisine.</p>
            <li>drawing</li>
            <p>It started with simple manga characters,  I usually draw realistic portraits now.</p>
          </ul>
          <h5>INTERESTS.</h5>
          <ul>

            <li>anime, manga, webtoons</li>
            <p>my top 3 Anime:
              <ul>
                <li>Samurai Champloo</li>
                <li>Attack on Titan</li>
                <li>Naruto</li>
              </ul>
            </p>
            <p>my top 3 manga/manhwas:
              <ul>
                <li>Bastard</li>
                <li>Uzumaki</li>
                <li>Chainsaw Man</li>
              </ul>
            </p>
            <li>music</li>
            <p>According to my spotify wrapped, my top genre is korean RnB. But I also really like to listen to Lo-Fi and (k-)hiphop. <br />
              Some of my favorite artists are:

              <ul>
                <li>BTS</li>
                <li>BONES</li>
                <li>Nujabes</li>
                <li>Joji</li>
              </ul>
            </p><li>esports</li>
            <p>League of Legends and Teamfight Tactics!</p>
          </ul>
          {/* <br />        <br /> */}

        </div>

        <div id="projects" className="screen">
          <h2>PROJECTS.</h2>
          You can find most of my projects on   <a className="link" href="https://github.com/phamflam" target="_blank" rel="noopener noreferrer" >GitHub</a>.
          <br />  <br />

          Contacts manager application with React.js Node.js Express.js and MongoDB. (module: webapplication development, 4 semester)
          <a href='https://github.com/phamflam/LYPH-WAD2021' target="_blank" rel="noopener noreferrer">
            <br />view on Github</a>
          <br />
          <br />
          Viewer for whole slide images. (module: introduction to health informatics, 3rd semester)
          <h3>Coming soon.</h3>
          Mitosis detection with python jupyter notebooks (module: medical image processing, 4th semester)
          <h3>Coming soon.</h3>
          Next generation sequencing (module: health informatics, 5th semester)
          <h3>Coming soon.</h3>
          <br />
          <p>Unity game for module computer graphics (4th semester)<br />written in C# and deployed for Android.</p>

          <br /> <br />
          <a href="https://github.com/phamflam/happy-pengu-surf" target="_blank" rel="noopener noreferrer">
            <video className="gif" playsInline autoPlay muted loop>
              <source src={surfdemo_1} type="video/mp4"></source>
            </video>
          </a>
          <a href="https://github.com/phamflam/happy-pengu-surf" target="_blank" rel="noopener noreferrer">
            <video className="gif" playsInline autoPlay muted loop>
              <source src={surfdemo_2} type="video/mp4"></source>
            </video>
          </a>
          <a href="https://github.com/phamflam/happy-pengu-surf" target="_blank" rel="noopener noreferrer">
            <video className="gif" playsInline autoPlay muted loop>
              <source src={surfdemo_3} type="video/mp4"></source>
            </video>
          </a>
          <a href="https://github.com/phamflam/happy-pengu-surf" target="_blank" rel="noopener noreferrer">
            <video className="gif" playsInline autoPlay muted loop>
              <source src={surfdemo_4} type="video/mp4"></source>
            </video>
          </a>
        </div>
        <div id="contact" className="screen">
          <h2>CONTACT.</h2>
          Contact me: <br /> <br />
          <a style={{ "padding-right": 30 }} href="mailto: lynnphamthu@gmail.com" target="_blank" rel="noopener noreferrer" className="icon">Email</a>
          {/* <br /> */}
          <a style={{ "padding-right": 30 }} href="https://github.com/phamflam" target="_blank" rel="noopener noreferrer">
            <img className="icon" alt="GitHub" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
          </a>
          {/* <br /> */}
          <a style={{ "padding-right": 30 }} href="https://www.linkedin.com/in/lynn-pham-841876212/" target="_blank" rel="noopener noreferrer">
            <img className="icon" alt="LinkedIn" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          </a>
        </div>
        <br />
        <footer className="footer">
          favicon made by melina
        </footer>
        {/* <Box /> */}
      </div >
    );
  }
}

export default App;
