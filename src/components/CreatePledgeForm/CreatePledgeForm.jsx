import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreatePledge() {
  const [credentials, setCredentials] = useState({
    amount: "30",
    comment: "goodluck",
    annonymous: "false",
    project: "",
    supporter: "",
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
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
          alert("you loser you haven't completed the form");
        });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="amount">Title:</label>
        <input
          type="amount"
          id="amount"
          placeholder="Enter amount"
          onChange={handleChange}
          value={credentials.amount}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="comment"
          onChange={handleChange}
          value={credentials.comment}
        />
      </div>
      <div>
        <label htmlFor="annonymous">Annonymous:</label>
        <input
          type="annonymous"
          id="annonymous"
          placeholder="annonymous"
          onChange={handleChange}
          value={credentials.annonymous}
        />
      </div>
      <div>
        <label htmlFor="project">Project:</label>
        <input
          type="project"
          id="project"
          placeholder="project"
          onChange={handleChange}
          value={credentials.project}
        />
      </div>
      <div>
        <label htmlFor="supporter">Supporter:</label>
        <input
          type="supporter"
          id="supporter"
          placeholder="supporter"
          onChange={handleChange}
          value={credentials.supporter}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Create Pledge
      </button>
    </form>
  );
}

export default CreatePledge;
