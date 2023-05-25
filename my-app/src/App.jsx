import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

//TODO: Implement typescript
//TODO: CSS

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const saveTodo = (todoData) => {
    setTodos((prevTodos) => {
      return [todoData, ...prevTodos];
    });
  };

  const deleteTodo = (index) => {
    console.log(index, "index");

    setTodos((prevTodos) => {
      const remainingTodos = prevTodos.filter((todo, idx) => {
        if (index !== idx) return todo;
      });
      console.log(remainingTodos, "remainingTodos");

      return [...remainingTodos];
    });
  };

  const editTodo = (index) => {
    console.log(index, "index");
    //TODO try accessing the form using elemnt ref
    setEditTitle(todos[index].title);
    setEditDescription(todos[index].description);
  };

  return (
    <div>
      <TodoForm
        title={editTitle}
        description={editDescription}
        onClick={saveTodo}
      ></TodoForm>
      <Todos items={todos} onDelete={deleteTodo} onEdit={editTodo}></Todos>
    </div>
  );
};

export default App;
