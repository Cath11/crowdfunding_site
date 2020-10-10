import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

function CreateAccountForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };

  // const postData = async () => {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}api-token-auth/`,
  //     {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     }
  //   );
  //   return response.json();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData()
        .then((response) => {
          window.localStorage.setItem("token", response.token);

          history.push("/");
        })
        .catch((error) => {
          alert("username taken");
        });
    }
  };
  return (
    <form>
      <div class="form1">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div class= "form1">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
      </div>
      <div class="form1">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Sign Up
      </button>
    </form>
  );
}

export default CreateAccountForm;
