import * as React from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import ReactTypingEffect from "react-typing-effect";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Divider, Link } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import surfdemo_1 from "./images/surfdemo_1.mp4";
import surfdemo_2 from "./images/surfdemo_2.mp4";
import surfdemo_3 from "./images/surfdemo_3.mp4";
import surfdemo_4 from "./images/surfdemo_4.mp4";
import mitosis_0 from "./images/mitosis_0.png";
import mitosis_2 from "./images/mitosis_2.png";
import mitosis_5 from "./images/mitosis_5.png";
import EmailIcon from "@mui/icons-material/Email";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProgressBar from "./components/ProgressBar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="container">
      <ProgressBar />

      <List
        id="head-navigation"
        className="nav-box"
        style={{
          backgroundColor: "rgba(219,219,219,0.2)",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          left: 0,
          bottom: 0,
        }}
      >
        <ListItem>
          <Box>
            {theme.palette.mode} mode
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </ListItem>
        <ListItem>
          <Link href="#start" onClick={() => scrollTo("start")}>
            START
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#about" onClick={() => scrollTo("about")}>
            ABOUT
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#experience" onClick={() => scrollTo("experience")}>
            EXPERIENCE
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#projects" onClick={() => scrollTo("projects")}>
            PROJECTS
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#contact" onClick={() => scrollTo("contact")}>
            CONTACT
          </Link>
        </ListItem>
      </List>
      <br />
      <br />
      <br />
      <div id="top">
        <h1>
          <ReactTypingEffect text={["Hi, I'm Lynn.😊"]} />
        </h1>
        <br />
      </div>
      <div id="start"> {/*TODO: pfp */}</div>
      <div id="about">
        <Divider>
          <h2 className="titles">ABOUT</h2>
        </Divider>
        <p>
          I study applied computer science with specialization in health
          informatics at HTW Berlin.
        </p>
        <br />
        <h3>Skills</h3>
        <ul className="grid-list" style={{}}>
          <li>Java</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li> Javascript</li>
          <li> TypeScript</li>
          <li> SQL </li>
          <li>Angular</li>
          <li> Node</li>
          <li> Git</li>
        </ul>
      </div>

      <h3>Hobbies & Interests</h3>
      <ul className="grid-list">
        <li>playing piano</li>
        <li>reading mangas</li>
        <li>video games</li>
        <li>cooking</li>
        <li>crochet & knitting</li>
        <li>Data Visualization</li>
      </ul>
      <div id="experience" className="screen">
        <Divider>
          <h2 className="titles">EXPERIENCE</h2>
        </Divider>
        {/*
        <h3>Frontend Development Intern @ Capgemini</h3>
        <p>March 2022 - May 2022</p>- Angular, TypeScript, HTML CSS, D3.js,
        Visual Studio Code
        <p>
          Data Visualisation, building internal webapplication for data
          insights,{" "}
        </p>
        <h3>Frontend Development Working Student @ Capgemini</h3>
        <p>June 2022 - September 2022</p>- Angular, TypeScript, HTML CSS, Git,
        Jira, Bitbucket, InteliJ Ultimate
        <p>Improving UI Design of Message Simulator </p>
        <p>UI Testing</p>
      */}
        <br />
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Frontend Development Intern @{" "}
                <span className="capgemini">Capgemini</span>
              </Typography>
              <Typography
                sx={{ marginLeft: "auto", marginRight: 0, opacity: 0.5 }}
              >
                March 2022 - May 2022
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>Implementation of UI with Angular</p>
                <p>Building Frontend of an in-house Webapplication</p>
                <p>Data Visualization with D3.js</p>
                <br />
                <p style={{ color: "rgb(96, 157, 159, 0.5)" }}>
                  Angular, TypeScript, HTML & CSS, D3.js, PostgresSQL, Visual
                  Studio Code
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Frontend Development Working Student @{" "}
                <span className="capgemini"> Capgemini </span>
              </Typography>
              <Typography
                sx={{ marginLeft: "auto", marginRight: 0, opacity: 0.5 }}
              >
                June 2022 - September 2022
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>Refactoring and Improving Angular Webapplication</p>
                <p>UI Testing</p>
                <br />
                <p style={{ color: "rgb(96, 157, 159, 0.5)" }}>
                  Angular, TypeScript, HTML CSS, Git, Jira, Bitbucket, InteliJ
                  Ultimate
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div id="projects" className="screen">
        <Divider>
          <h2 className="titles">PROJECTS</h2>
        </Divider>
        <h3>Unity Game deployed for Android</h3>
        <p>computer graphics, 4th semester</p>
        <p>Blender, Unity, C#, Visual Studio </p>
        [TBD: description]
        <br />
        <br />
        <a
          href="https://github.com/phamflam/happy-pengu-surf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video playsInline autoPlay muted loop>
            <source src={surfdemo_1} type="video/mp4"></source>
          </video>
        </a>
        <a
          href="https://github.com/phamflam/happy-pengu-surf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video playsInline autoPlay muted loop>
            <source src={surfdemo_2} type="video/mp4"></source>
          </video>
        </a>
        <br />
        <a
          href="https://github.com/phamflam/happy-pengu-surf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video playsInline autoPlay muted loop>
            <source src={surfdemo_3} type="video/mp4"></source>
          </video>
        </a>
        <a
          href="https://github.com/phamflam/happy-pengu-surf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video playsInline autoPlay muted loop>
            <source src={surfdemo_4} type="video/mp4"></source>
          </video>
        </a>
        <h3>Contacts manager application</h3>
        <p>webapplication development, 4th semester</p>
        <p> React.js Node.js Express.js MongoDB TypeScript </p>
        <p>[TBD: description]</p>
        <a
          href="https://github.com/phamflam/LYPH-WAD2021"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br />
          <img
            className="img"
            alt="WAD"
            src="https://user-images.githubusercontent.com/63077827/145820729-1172c3e1-83a2-4c9d-b7da-a6f4ec61e7e7.png"
          />
        </a>
        <h3>Mitosis Detection</h3>
        <p>medical image processing, 4th semester</p>
        <p>Python, Jupyter Notebook</p>
        [TBD: description]
        <a
          href="https://github.com/phamflam/mitosis-detection/blob/master/mitosis_counter.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img" alt="mitosis_5" src={mitosis_5} />
          <img className="img" alt="mitosis_2" src={mitosis_2} />
          <img className="img" alt="mitosis_0" src={mitosis_0} />
        </a>
        <h3>Next Generation Sequencing</h3>
        <p>health informatics, 5th semester</p>
        <p>Python, Tablet (viewer for next generation sequencing)</p>
        <p> [can not be shown yet☹️]</p>
        <p>
          Implementation of a tool in order to be able to make reliable
          statements, despite sequencing errors in the data set, to suggest
          antibiotics, that can be used to treat four different infections.
        </p>
      </div>

      <div id="contact" className="screen">
        <Divider>
          <h2 className="titles">CONTACT</h2>
        </Divider>
        <Link
          href="mailto: lynnphamthu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon fontSize="large" />
        </Link>
        <Link
          href="https://github.com/phamflam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lynn-pham-841876212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </div>
      <br />
      <Button onClick={goToTop}>
        back up <ArrowUpwardIcon />
      </Button>
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
