import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function DeleteProject() {
  const [credentials, setCredentials] = useState({
    title: "",
    description: "Super Duper",
    goal: "250",
    image: "http://lorempixel.com/400/400/nightlife",
    is_open: "true",
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

  const deleteData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
      method: "delete",
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

    {
      deleteData()
        .then((response) => {
         

          history.push("/");
        })
       
        };
    }
  };
  
  return (
      <h1>Your project has been deleted</h1>

    
  );
}

export default DeleteProject;
