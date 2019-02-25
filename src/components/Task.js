import React from "react";

const Task = ({ description, isStart, isEnd, moveLeft, moveRight }) => {
  return (
    <div className="task">
      {!isStart && <button onClick={moveLeft}>{"<"}</button>}
      <div className="task-description">{description}</div>
      {!isEnd && <button onClick={moveRight}>{">"}</button>}
    </div>
  );
};

export default Task;
