import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";
import FormFooter from "./FormFooter";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    const newTodo = { id: Date.now(), task: todo, isEditing: false };
    setTodoValue([...todoValue, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Header />
      <Form createTodo={createTodo} />
      {todoValue.map((todo) => (
        <Todo task={todo} key={todo.id} deleteTodo={deleteTodo} />
      ))}
      <FormFooter />
      <Footer />
    </div>
  );
};

export default TodoList;
