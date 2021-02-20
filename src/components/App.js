import React from "react";
import "./App.css";
import AddTask from "./AddTask";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddTask />
      </div>
    );
  }
}

export default App;
