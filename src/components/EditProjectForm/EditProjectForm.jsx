import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./index.css";

function EditProjectForm() {
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
  const [credentials, setCredentials] = useState({
    title: "",
    description: "",
    goal: 150,
    image: "http://lorempixel.com/400/400/nightlife",
    is_open: true,
    date_created: "2020-09-04T11:33:37Z",
  });
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };
  const putData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      putData()
        .then((response) => {
          // window.localStorage.setItem("token", response.token);
          history.push(`/project/${id}`);
      })
      .catch((error) => {
          alert("you haven't filled in all criteria");
    });
    }
  };
  return (
    <form>
      <div class= "form1-item">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter Title"
          onChange={handleChange}
        />
      </div>
      <div class="form1-item">
        <label htmlFor="description">Description:</label>
        <input
          type="description"
          id="description"
          placeholder="description"
          onChange={handleChange}
          value={credentials.description}
        />
      </div>
      <div class="form1-item">
        <label htmlFor="goal">Goal:</label>
        <input
          type="goal"
          id="goal"
          placeholder="goal"
          onChange={handleChange}
          value={credentials.goal}
        />
      </div>
      <div class="form1-item">
        <label htmlFor="image">Image:</label>
        <input
          type="image"
          id="image"
          placeholder="image"
          onChange={handleChange}
          value={credentials.image}
        />
      </div>
      <div class="form1-item">
        <label htmlFor="is_open">Project Open:</label>
        <input
          type="is_open"
          id="is_open"
          placeholder="true or false"
          onChange={handleChange}
          value={credentials.is_open}
        />
      </div>
      <div class="form1-item">
        <label htmlFor="date_created">Date Created:</label>
        <input
          type="date_created"
          id="date_created"
          placeholder="date_Created"
          onChange={handleChange}
          value={credentials.date_created}
        />
      </div>
        <button type="submit" onClick={handleSubmit}>
        Edit Project
        </button>
    </form>
  );
}
export default EditProjectForm;
