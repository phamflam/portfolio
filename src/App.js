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
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
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

      {/* <div id="head-navigation">
        <List>
          <ListItem>
            <ListItemText>
              <Link href="#start">Start</Link>
            </ListItemText>
            <ListItemText>
              <Link href="#about">About</Link>
            </ListItemText>
            <ListItemText>
              <Link href="#projects">Projects</Link>
            </ListItemText>
            <ListItemText>
              <Link href="#contact">Contact</Link>
            </ListItemText>
          </ListItem>
        </List>
      </div> */}

      <Divider />
      <div id="top">
        <h1>
          <ReactTypingEffect text={["Hello World!"]} />
        </h1>
      </div>
      <div id="start">
        <h1>Lynn Pham</h1>
      </div>
      <div id="about">
        <h2 className="titles">ABOUT</h2>
        I study applied computer science at HTW Berlin.
        <br />
      </div>

      <div id="projects" className="screen">
        <h2 className="titles">PROJECTS</h2>
        You can find most of my projects on
        <Link
          href="https://github.com/phamflam"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
        <h3>
          Unity game (computer graphics, 4th semester)
          <br />
          written in C# and deployed for Android.
        </h3>
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
        <h3>
          Contacts manager application (webapplication development, 4th
          semester)
          <br />
          Techstack: (MERN) React.js Node.js Express.js & MongoDB
        </h3>
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
        <br />
        <h3>
          Mitosis detection (medical image processing, 4th semester) <br />
          Python Jupyter Notebook
        </h3>
        <br />
        <a
          href="https://github.com/phamflam/mitosis-detection/blob/master/mitosis_counter.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img" alt="mitosis_5" src={mitosis_5} />
          <img className="img" alt="mitosis_2" src={mitosis_2} />
          <img className="img" alt="mitosis_0" src={mitosis_0} />
        </a>
        <h3>
          Next Generation Sequencing (health informatics, 5th semester) <br />
          Python, Tablet (viewer for next generation sequencing)
        </h3>
        <p>cant be shown :(</p>
        <p>
          Implementation of a tool in order to be able to make reliable
          statements despite sequencing errors in the data set to suggest
          antibiotics that can be used to treat four infections.
        </p>
      </div>
      <div id="contact" className="screen">
        <h2 className="titles">CONTACT</h2>
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
    </>
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
