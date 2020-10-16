import React, { Component } from "react";
import Loading from "../../components/Loading";
import axios from "axios";
import { Link } from "react-router-dom";

export default class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: null,
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_DOMAIN}/task/all-tasks`, {
        withCredentials: true,
      })
      .then((tasksFromApi) => {
        this.setState({ tasks: tasksFromApi.data });
      })
      .catch((err) => console.log(err));
  }

  getAllTasks() {
    axios
      .get(`${process.env.REACT_APP_API_DOMAIN}/task/all-tasks`, {
        withCredentials: true,
      })
      .then((tasksFromApi) => {
        this.setState({ tasks: tasksFromApi.data });
      })
      .catch((err) => console.log(err));
  }

  deleteTask() {
    axios
      .delete(`${process.env.REACT_APP_API_DOMAIN}/task/delete`, {
        withCredentials: true,
      })
      .then(() => {
        this.getAllTasks();
      })
      .catch((err) => console.log(err));
  }

  displayTasks() {
    return this.state.tasks.map((task, i) => {
      return (
        <div className="task-box" key={i}>
          <div className="space-between">
            <h3>{task.title}</h3>
            <h4>{task.author}</h4>
          </div>
          <div>
            <p>{task.description}</p>
          </div>
          <div className="space-between">
            <h4>{task.isComplete ? "Task Complete" : "Task Incomplete"}</h4>
            <Link to={`/update/${task._id}`}>Update</Link>
            <h4>{task.completionDate}</h4>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="class-container">
        {this.state.tasks ? this.displayTasks() : <Loading />}
      </div>
    );
  }
}
