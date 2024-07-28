import React from "react";

const Todo = ({ task, deleteTodo }) => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label>Mark all as complete</label>
      <ul className="todo-list">
        <li>
          <div className="view">
            <input type="checkbox" property="done" className="toggle" />
            <label>{task.task}</label>
            <button
              className="destroy"
              onClick={() => deleteTodo(task.id)}
            ></button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Todo;
