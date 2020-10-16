import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddTask extends Component {
  state = { title: "", description: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description, isComplete, completionDate } = this.state;
    axios
      .post(`${process.env.REACT_APP_API_DOMAIN}/task/create`, {
        title,
        description,
        isComplete,
        completionDate,
      })
      .then(() => {
        // this.props.getData();
        this.setState({
          title: "",
          description: "",
          isComplete: false,
          completionDate: "",
        });
      })
      .catch((error) => console.log(error));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <label>
            Complete:
            <input
              type="checkbox"
              name="isComplete"
              // value={this.state.isComplete}
              onChange={(e) => this.handleChange(e)}
              checked={this.state.isComplete ? true : false}
            />
          </label>
          <label>Completion Date:</label>
          <input
            type="text"
            name="completionDate"
            value={this.state.completionDate}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddTask;
