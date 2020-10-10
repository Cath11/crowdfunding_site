import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateProject() {
  const [credentials, setCredentials] = useState({
    title: "",
    description: "Super Duper",
    goal: 250,
    image: "http://lorempixel.com/400/400/nightlife",
    is_open: true,
    date_created: "2020-09-09T20:31:00Z",
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

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (true) {
      postData()
        .then((response) => {
          // window.localStorage.setItem("token", response.token);

          history.push("/");
        })
        .catch((error) => {
          alert("you haven't fully completed the form");
        });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          onChange={handleChange}
          value={credentials.title}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="description"
          onChange={handleChange}
          value={credentials.description}
        />
      </div>
      <div>
        <label htmlFor="goal">Goal:</label>
        <input
          type="goal"
          id="goal"
          placeholder="goal"
          onChange={handleChange}
          value={credentials.goal}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="image"
          id="image"
          placeholder="image"
          onChange={handleChange}
          value={credentials.image}
        />
      </div>
      <div>
        <label htmlFor="is_open">Project Open:</label>
        <input
          type="is_open"
          id="is_open"
          placeholder="is_open"
          onChange={handleChange}
          value={credentials.is_open}
        />
      </div>
      <div>
        <label htmlFor="date_created">Date Created:</label>
        <input
          type="date_created"
          id="date_created"
          placeholder="date_created"
          onChange={handleChange}
          value={credentials.date_created}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Create Project
      </button>
    </form>
  );
}

export default CreateProject;
