import React from "react";
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

const App = () => {
  return (
    <div>
      <TodoProvider>
        <TodoWrapperLocalStorage />
      </TodoProvider>
    </div>
  );
};

export default App;
