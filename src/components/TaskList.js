import React from "react";

class TaskList extends React.Component {
  state = {
    commited: [],
  };
  render() {
    const active = this.props.active.map((task) => {
      return (
        <div>
          Task desription: <span className="taskname">{task.name} </span>
          Task deadline:
          <span className="taskname">{task.date.toISOString()} </span>
          <button onClick={() => this.handleCommit(task.id)}>Done</button>
        </div>
      );
    });
    let realised = [];
    if (this.state.commited !== null)
      realised = this.state.commited.map((task) => {
        return (
          <div>
            Task desription: <span className="taskname">{task.name}</span>
            <span className="taskname">{task.date.toISOString()} </span>
            <button onClick={() => this.handleDelete(task.id)}>Delete</button>
          </div>
        );
      });

    return (
      <React.Fragment>
        <h2>Tasks To Do</h2>
        <div>{active}</div>
        <hr />
        <h2>Finished Tasks</h2>
        <div>{realised}</div>
      </React.Fragment>
    );
  }
  handleCommit = (id) => {
    const temp = this.props.active.filter((task) => task.id === id);
    // console.log(temp);
    if (temp !== null) {
      temp[0].date = new Date();
      this.setState((prevState) => {
        return prevState.commited.push(temp[0]);
      });
      this.props.handleDelete(id);
    }
  };

  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        commited: prevState.commited.filter((task) => task.id !== id),
      };
    });
  };
}
export default TaskList;
