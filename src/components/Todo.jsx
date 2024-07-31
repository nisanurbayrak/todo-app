import React, { useState } from "react";

const Todo = ({ task, deleteTodo }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(task);

    task.isChecked = isChecked;
    console.log(task);
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        <li>
          <div className="view">
            <input
              type="checkbox"
              className="toggle"
              onChange={handleCheckboxChange}
              property="done"
            />
            <label
              style={{
                textDecoration: task.isChecked ? "line-through" : "none",
              }}
            >
              {task.task}
            </label>

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
