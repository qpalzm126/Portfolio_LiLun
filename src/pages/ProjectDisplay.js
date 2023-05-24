import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1> {project.name}</h1>
            <Link to={{ pathname: project.link }} target="_blank">
                <img src={project.image} alt="" />
            </Link>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
        </div>
    );
}

export default ProjectDisplay;
