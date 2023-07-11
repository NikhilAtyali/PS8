import React, { useState, useEffect } from "react";
import { projectapi } from "./api";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await projectapi("https://example.com/api/projects");
      try {
        const projectDetails = response.data.projects;
        setProjects(projectDetails);
      } catch (error) {
        error.log("Error: " + error);
      }
    };
    fetchProjects();
  }, []);
const renderDetails =()=>setShowDetails(true)
  return (
    <>
      <h3>Projects</h3>
      <div>
        {projects.map((project) => {
          return (
            <li>
              <p>Name: {project.title}</p>
              <p>Description: {project.description}</p>
              <button onClick={renderDetails}>Show Details</button>
              <p style={{display: showDetails ? 'block' : 'none'}}>Technologies:{project.technologies}</p>
              <p style={{display: showDetails ? 'block' : 'none'}}>Completed: {project.completed === true ? "true" : "false"}</p>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
