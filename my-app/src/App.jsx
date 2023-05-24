import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const saveTodo = (todoData) => {
    setTodos((prevTodos) => {
      return [todoData, ...prevTodos];
    });
  };

  return (
    <div>
      <TodoForm onClick={saveTodo}></TodoForm>
      <Todos items={todos}></Todos>
    </div>
  );
};

export default App;
