import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
  state = {
    tasks: [],
  };
  counter = 1;
  render() {
    return (
      <div className="App">
        <AddTask sendSubmit={this.handleAddTask} />
        <hr />
        <TaskList active={this.state.tasks} handleDelete={this.deleteTask} />
      </div>
    );
  }
  handleAddTask = (taskname, taskdate, taskimportant) => {
    const task = {
      name: taskname,
      date: taskdate,
      important: taskimportant,
      id: this.counter,
    };
    this.counter++;
    this.setState((prevState) => {
      return prevState.tasks.push(task);
    });
  };
  deleteTask = (id) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };
}

export default App;
