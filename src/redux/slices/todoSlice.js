import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.message !== action.payload
      );
    },
    conpleteTodo: (state, action) => {
      const updateTodos = [];
      for (let item of state.todos) {
        if (action.payload === item.message) {
          item.status = "complete";
        }
        updateTodos.push(item);
      }
      state.todos = updateTodos;
    },
  },
});

export const { addTodo, removeTodo, conpleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
