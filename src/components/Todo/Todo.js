import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  conpleteTodo,
  removeTodo,
} from "../../redux/slices/todoSlice";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ message: todoText, status: "incomplete" }));
    setTodoText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h1>All todos</h1>
        {todos.map((todo) => (
          <li>
            <span style={{ color: `${todo.status === "complete" && "green"}` }}>
              {todo.message}
            </span>
            {"  "}
            <button onClick={() => dispatch(removeTodo(todo.message))}>
              delete
            </button>
            <button
              disabled={todo.status === "complete"}
              onClick={() => dispatch(conpleteTodo(todo.message))}
            >
              complete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Todo;
