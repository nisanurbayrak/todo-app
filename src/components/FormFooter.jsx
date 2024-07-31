import React from "react";

const FormFooter = ({
  showAllTodos,
  showCompletedTodos,
  showActiveTodos,
  deleteCompleted,
  todos,
  filter,
}) => {
  const completedCount = todos.filter((todo) => todo.isChecked).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {completedCount} item{completedCount !== 1 ? "s" : ""} completed
      </span>

      <ul className="filters">
        <li>
          <a
            href="#"
            onClick={showAllTodos}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={showActiveTodos}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={showCompletedTodos}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={deleteCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default FormFooter;
