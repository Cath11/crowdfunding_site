import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import image1 from "../image1.png";

function HomePage() {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  return (
    <>
      <img src={image1} class name="image1" />
      <img src={image1} class name="image1" />
      <img src={image1} class name="image1" />

      <div id="project-list">
        {/* <h3> Welcome to Fund My Research. </h3> */}
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </>
  );
}
export default HomePage;
