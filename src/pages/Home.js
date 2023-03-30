import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Li Lun Chen</h2>
        <div className="prompt">
          <p>
            A self-taught software developer with a passion for learning and
            creating.
          </p>
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,Express</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript,Python,R</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
