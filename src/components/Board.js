import React, { Component } from "react";
import Section from "./Section";

class Board extends Component {
  state = {
    board: [
      { name: "Winnie", color: "#8E6E95", tasks: ["W-Task 1", "W-Task 2"] },
      { name: "Bob", color: "#39A59C", tasks: ["B-Task 1", "B-Task 2"] },
      { name: "Thomas", color: "#344759", tasks: ["T-Task 1", "T-Task 2"] },
      { name: "George", color: "#E8741E", tasks: ["G-Task 1", "G-Task 2"] }
    ]
  };

  componentDidMount() {
    this.setState({
      board: JSON.parse(localStorage.getItem("board")) || this.state.board
    });
  }

  componentDidUpdate() {
    console.log("BOARD", JSON.stringify(this.state.board));
    localStorage.setItem("board", JSON.stringify(this.state.board));
  }

  addTask = sectionIndex => {
    const boardCopy = this.state.board;
    const description = window.prompt();
    boardCopy[sectionIndex].tasks.push(description);
    this.setState({ board: boardCopy });
  };

  moveLeft = sectionIndex => taskIndex => {
    const boardCopy = this.state.board;
    const taskToMove = boardCopy[sectionIndex].tasks[taskIndex];
    boardCopy[sectionIndex - 1].tasks.push(taskToMove);
    boardCopy[sectionIndex].tasks.splice(taskIndex, 1);
    this.setState({ board: boardCopy });
  };

  moveRight = sectionIndex => taskIndex => {
    const boardCopy = this.state.board;
    const taskToMove = boardCopy[sectionIndex].tasks[taskIndex];
    boardCopy[sectionIndex + 1].tasks.push(taskToMove);
    boardCopy[sectionIndex].tasks.splice(taskIndex, 1);
    this.setState({ board: boardCopy });
  };

  render() {
    const { board } = this.state;
    return (
      <div className="board">
        {board.map((props, i) => (
          <Section
            {...props}
            addTask={this.addTask.bind(this, i)}
            isStart={i === 0}
            isEnd={i === board.length - 1}
            moveLeft={this.moveLeft(i)}
            moveRight={this.moveRight(i)}
          />
        ))}
      </div>
    );
  }
}

export default Board;
