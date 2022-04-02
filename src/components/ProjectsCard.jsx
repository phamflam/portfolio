import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import surfdemo_1 from "../images/surfdemo_1.mp4";
import surfdemo_2 from "../images/surfdemo_2.mp4";
import surfdemo_3 from "../images/surfdemo_3.mp4";
import surfdemo_4 from "../images/surfdemo_4.mp4";
import mitosis_0 from "../images/mitosis_0.png";
import mitosis_2 from "../images/mitosis_2.png";
import mitosis_5 from "../images/mitosis_5.png";
import { Link } from "@mui/material";

export default function ProjectsCard() {
  return (
    <Card id="projects" variant="outlined">
      <CardContent>
        <h2>PROJECTS.</h2>
        You can find most of my projects on{" "}
        <Link
          className="link"
          href="https://github.com/phamflam"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <br /> <br />
        <Card>
          <CardContent>
            <p>
              Unity game for module computer graphics (4th semester)
              <br />
              written in C# and deployed for Android.
            </p>
            <Link
              href="https://github.com/phamflam/happy-pengu-surf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video className="gif" playsInline autoPlay muted loop>
                <source src={surfdemo_1} type="video/mp4"></source>
              </video>
            </Link>
            <Link
              href="https://github.com/phamflam/happy-pengu-surf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video className="gif" playsInline autoPlay muted loop>
                <source src={surfdemo_2} type="video/mp4"></source>
              </video>
            </Link>
            <Link
              href="https://github.com/phamflam/happy-pengu-surf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video className="gif" playsInline autoPlay muted loop>
                <source src={surfdemo_3} type="video/mp4"></source>
              </video>
            </Link>
            <Link
              href="https://github.com/phamflam/happy-pengu-surf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video className="gif" playsInline autoPlay muted loop>
                <source src={surfdemo_4} type="video/mp4"></source>
              </video>
            </Link>
          </CardContent>
        </Card>
        <br /> <br />
        <Card>
          <CardContent>
            Contacts manager application with React.js Node.js Express.js and
            MongoDB. (module: webapplication development, 4th semester)
            <br />
            <Link
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
            </Link>
          </CardContent>
        </Card>
        <br />
        <br />
        <Card>
          <CardContent>
            Mitosis detection with python jupyter notebooks (module: medical
            image processing, 4th semester)
            <br />
            <br />
            <Link
              href="https://github.com/phamflam/mitosis-detection/blob/master/mitosis_counter.ipynb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img" alt="mitosis_5" src={mitosis_5} />
              <img className="img" alt="mitosis_2" src={mitosis_2} />
              <img className="img" alt="mitosis_0" src={mitosis_0} />
            </Link>
          </CardContent>
        </Card>
        <br />
        <br />
        <Card>
          <CardContent>
            Viewer for whole slide images.(module: introduction to health
            informatics, 3rd semester)
            <h3>TBD</h3>
          </CardContent>
        </Card>
        <br />
        <br />
        <Card>
          <CardContent>
            Next generation sequencing (module: health informatics, 5th
            semester)
            <h3>TBD</h3>{" "}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
