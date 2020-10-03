import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, []);
  const token = window.localStorage.getItem("token");
  const history = useHistory();
  const deleteData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      }
    );
    history.push("/");
  };
  return (
    <div>
      <h2>{projectData.title}</h2>
      <h2>Description: {projectData.description}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      {projectData.pledges?.length > 0 && (
        <>
          <h3>Pledges:</h3>
          <ul>
            {projectData.pledges.map((pledgeData, key) => {
              return (
                <li key={key}>
                  ${pledgeData.amount} from {pledgeData.supporter}
                </li>
              );
            })}
          </ul>
        </>
      )}
      <button type="submit" onClick={deleteData}>
        Delete Project
      </button>
      <Link to={`/project/${projectData.id}`}>Edit Project</Link>
    </div>
  );
}
export default ProjectPage;
