import React from "react";

function FormFooter() {
  return (
    <div>
      <footer className="footer">
        <span className="todo-count"></span>

        <ul className="filters">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
}

export default FormFooter;
