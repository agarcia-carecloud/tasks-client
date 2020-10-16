import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      isComplete: false,
      completionDate: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API_DOMAIN}/task/details/${this.props.match.params.taskId}`,
        {
          withCredentials: true,
        }
      )
      .then((taskDetailsFromApi) => {
        console.log({ taskDetails: taskDetailsFromApi.data });
        this.setState(taskDetailsFromApi.data);
      })
      .catch((err) => console.log(err));
  }

  handleCheckChange(event) {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  submitUpdate() {
    axios
      .put(`${process.env.REACT_APP_API_DOMAIN}/task/update`, this.state, {
        withCredentials: true,
      })
      .then(() => {
        <Redirect to="/task-list" />;
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={() => this.handleChange(event)}
        />
        <br />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={() => this.handleChange(event)}
        />
        <br />
        <label>
          Complete:
          <input
            type="checkbox"
            name="isComplete"
            // value={this.state.isComplete}
            onChange={() => this.handleCheckChange(event)}
            checked={this.state.isComplete ? true : false}
          />
        </label>
        <br />
        <input
          type="text"
          name="completionDate"
          value={this.state.completionDate}
          onChange={() => this.handleChange(event)}
        />
        <br />
      </div>
    );
  }
}
