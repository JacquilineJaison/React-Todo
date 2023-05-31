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

  const handleInputChange = (e) => {
    setEnteredTodo(e.target.value);
    console.log(e.target.value, "e.target");
  };



  const handleValidation = (text) => {
    let error = null;
    console.log(text, "text");
    if (text.trim().length === 0) {
     // setEnteredTodoError("Please enter a valid title");
      error = true;
    }

    if (error) {
      return false;
    } else {
      return true;
    }
  };

  const handleSaveTodo = (event) => {
    event.preventDefault();

    if (handleValidation(enteredTodo)) {
      //form reset
      setTitle("");
      setEnteredTodoError("");

      setTodos((prevTodos) => {
        return [todoData, ...prevTodos];
      });
    }
    else{
      
    }
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