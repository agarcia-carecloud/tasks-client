import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TaskList from "./components/tasks/TaskList";
import UpdateTask from "./components/tasks/UpdateTask";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/task-list" component={TaskList} />
        <Route
          exact
          path="/update/:taskId"
          render={(props) => <UpdateTask {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
