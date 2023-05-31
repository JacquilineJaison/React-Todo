import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Todos from "./components/Todos/Todos";
//TODO:
//CSS
//array index confusion on deletion fix
//error message display

const App = () => {
  const [todos, setTodos] = useState([]);
  const [enteredTodo, setEnteredTodo] = useState("");
  // const [enteredTodoError, setEnteredTodoError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState({});

  const handleEnteredTodo = (e) => {
    setEnteredTodo(e.target.value);
    console.log(e.target.value, "e.target");
  };

  const handleSaveTodo = (todoData) => {
    setTodos((prevTodos) => {
      return [todoData, ...prevTodos];
    });
  };

  const resetForm = () => {
    setTitle("");
    clearTitleError();
  };

  const clearTitleError = () => {
    setTitleError("");
  };

  const handleDeleteTodo = (index) => {
    console.log(index, "index");

    setTodos((prevTodos) => {
      const remainingTodos = prevTodos.filter((todo, idx) => {
        if (index !== idx) return todo;
      });
      console.log(remainingTodos, "remainingTodos");

      return [...remainingTodos];
    });
  };

  const handleEditTodo = (index) => {
    console.log(index, "index");
  };

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  return (
    <div>
      {isEditing ? (
        <EditForm
          editingTodo={editingTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditSave={handleEditSave}
        />
      ) : (
        <AddTodoForm
          enteredTodo={enteredTodo}
          onInputChange={handleInputChange}
          onSave={handleSaveTodo}
        ></AddTodoForm>
      )}
      <Todos items={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo}></Todos>
    </div>
  );
};

export default App;