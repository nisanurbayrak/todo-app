import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo("");
  };
  return (
    <div className="todoapp">
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></input>
      </form>
    </div>
  );
};

export default Form;
