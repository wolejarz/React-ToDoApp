import React, { Component } from "react";
class AddTask extends Component {
  state = {
    task: "",
    date: new Date(),
    important: false,
  };
  render() {
    return (
      <React.Fragment>
        <label htmlFor="task">
          Enter your task :
          <input
            type="text"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="task">
          Enter your task's deadline :
          <input
            type="date"
            id="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="important">
          Important Task :
          <input
            type="checkbox"
            id="important"
            name="important"
            checked={this.state.important}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleSubmit}>Add Task</button>
      </React.Fragment>
    );
  }

  handleChange = (e) => {
    if (e.target.id === "task")
      this.setState({
        task: e.target.value,
      });
    if (e.target.id === "date")
      this.setState({
        date: new Date(e.target.value),
      });
    if (e.target.id === "important")
      this.setState({
        important: e.target.checked,
      });

    //console.log(e.target);
  };

  handleSubmit = (e) => {
    if (this.state.task !== "") {
      this.setState({
        task: "",
        date: new Date(),
        important: false,
      });
      this.props.sendSubmit(
        this.state.task,
        this.state.date,
        this.state.important
      );
    }
  };
}

export default AddTask;
