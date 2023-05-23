import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { GitHub } from "@mui/icons-material";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hello, My name is Li Lun Chen</h2>
                <div className="prompt">
                    <p>
                        A self-taught software developer with a passion for
                        learning and programming.
                    </p>
                    <a
                        href="mailto:qpalzm126@gmail.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <EmailIcon />
                    </a>
                    <a
                        href="https://github.com/qpalzm126"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <GitHub />
                    </a>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>ReactJS, Redux, HTML, CSS, TailwindCSS</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NodeJS, ExpressJS</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>Javascript, Python, R</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
