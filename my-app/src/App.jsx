import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import EditForm from "./components/EditForm/EditForm";
import Todos from "./components/Todos/Todos";
//TODO:
//CSS
//error message display
//cancel todo add

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
    console.log(text, "text");
    if (text.trim().length === 0) {
      // setEnteredTodoError("Please enter a valid title");
      return false;
    }
    else{
      return true;
    }
  };

  const handleSaveTodo = (event) => {
    event.preventDefault();

    if (handleValidation(enteredTodo)) {
      //form reset
      setEnteredTodo("");
      //setEnteredTodoError("");

      setTodos((prevTodos) => {
        return [{ id: new Date(), text: enteredTodo }, ...prevTodos];
      });
    }
  };

  const handleDeleteTodo = (index) => {
    console.log(index, "index");

    setTodos((prevTodos) => {
      const remainingTodos = prevTodos.filter((todo, idx) => {
        if (index !== idx){return todo};
      });
      console.log(remainingTodos, "remainingTodos");

      return [...remainingTodos];
    });
  };

  const handleEditTodo = (index) => {
    console.log(index, "index");
    setIsEditing(true);
    setEditingTodo(todos[index]);
  };

  const handleEditInputChange = (e) => {
    setEditingTodo({ ...editingTodo, text: e.target.value });
    console.log(editingTodo);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleEditSave = (e)=>{
    e.preventDefault();
    const updatedItem = todos.map((todo) => {
      return todo.id === editingTodo.id ? editingTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  return (
    <div>
      {isEditing ? (
        <EditForm
          editingTodo={editingTodo}
          onCancel={handleEditCancel}
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
      <Todos
        items={todos}
        editStatus={isEditing}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      ></Todos>
    </div>
  );
};

export default App;