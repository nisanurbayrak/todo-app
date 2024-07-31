import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";
import FormFooter from "./FormFooter";

const TodoList = ({}) => {
  const [todoValue, setTodoValue] = useState([
    { id: 1, task: "todo 1" },
    { id: 2, task: "todo 2" },
    { id: 3, task: "todo 3" },
  ]);

  const createTodo = (todo) => {
    const newTodo = { id: Date.now(), task: todo, isChecked: false };
    setTodoValue([...todoValue, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  const [filter, setFilter] = useState("all");

  const showAllTodos = () => {
    setFilter("all");
  };

  const showCompletedTodos = () => {
    setFilter("completed");
  };

  const showActiveTodos = () => {
    setFilter("active");
  };

  const todosToDisplay =
    filter === "completed"
      ? todoValue.filter((todo) => todo.isChecked)
      : filter === "active"
      ? todoValue.filter((todo) => !todo.isChecked)
      : todoValue;

  return (
    <div>
      <Header />

      <Form createTodo={createTodo} />
      {todosToDisplay.map((todo) => (
        <Todo
          task={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={(id) =>
            setTodoValue(
              todoValue.map((todo) =>
                todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
              )
            )
          }
        />
      ))}
      <FormFooter
        showAllTodos={showAllTodos}
        showCompletedTodos={showCompletedTodos}
        showActiveTodos={showActiveTodos}
        deleteCompleted={() =>
          setTodoValue(todoValue.filter((todo) => !todo.isChecked))
        }
        todos={todoValue}
        filter={filter}
      />
      <Footer />
    </div>
  );
};

export default TodoList;
