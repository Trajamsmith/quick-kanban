import React, { Component } from "react";
import Task from "./Task";

class Section extends Component {
  render() {
    const {
      name,
      color,
      tasks,
      addTask,
      isStart,
      isEnd,
      moveLeft,
      moveRight
    } = this.props;
    return (
      <div className="section">
        <div className="section-name" style={{ background: color }}>
          {name}
        </div>
        {tasks.map((description, i) => (
          <Task
            isStart={isStart}
            isEnd={isEnd}
            description={description}
            moveLeft={moveLeft.bind(this, i)}
            moveRight={moveRight.bind(this, i)}
          />
        ))}
        <button onClick={addTask}>Add a card</button>
      </div>
    );
  }
}

export default Section;
