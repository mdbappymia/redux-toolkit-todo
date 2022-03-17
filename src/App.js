import React from "react";
import "./App.css";
import { Counter } from "./components/Counter/Counter";
import Post from "./components/Post/Post";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    // <div style={{ textAlign: "center", margin: 40 }}>
    //   <Todo />
    // </div>
    <div>
      <Post />
    </div>
  );
}

export default App;
