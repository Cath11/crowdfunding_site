import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav/Nav";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import CreateProjectPage from "./pages/CreateProjectPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/users">
            <CreateAccountPage />
          </Route>
          <Route path="/createproject/">
            <CreateProjectPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
