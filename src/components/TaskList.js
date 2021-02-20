import React from "react";

class TaskList extends React.Component {
  state = {
    commited: [],
  };
  render() {
    const active = this.props.active.map((task) => {
      return (
        <div>
          Task desription: {task.name}
          <button onClick={() => this.handleCommit(task.id)}>Commit</button>
        </div>
      );
    });
    let commited = [];
    if (this.state.commited !== null)
      commited = this.state.commited.map((task) => {
        return (
          <span>
            Task desription: {task.name}
            <button onClick={this.handleDelete}>Commit</button>
          </span>
        );
      });

    return (
      <React.Fragment>
        <div>{active}</div>
        <hr />
        <div>{commited}</div>
      </React.Fragment>
    );
  }
  handleCommit = (id) => {
    const temp = this.props.active.filter((task) => task.id === id);
    // console.log(temp);
    if (temp !== null)
      this.setState((prevState) => {
        return prevState.commited.push(temp[0]);
      });
  };
}
export default TaskList;
