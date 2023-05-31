import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import EditForm from "./components/EditForm/EditForm";
import Todos from "./components/Todos/Todos";
import {Container} from "@mui/material";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [enteredTodo, setEnteredTodo] = useState("");
  const [enteredTodoError, setEnteredTodoError] = useState("");
  const [editingTodoError, setEditingTodoError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState({ id: "", text: "" });

  const handleInputChange = (e) => {
    setEnteredTodo(e.target.value);
  };

  const handleValidation = (text) => {
    const errorMessage = "Please enter a valid todo";
    if (text.trim().length === 0) {
      if (isEditing) {
        setEditingTodoError(errorMessage);
      } else {
        setEnteredTodoError(errorMessage);
      }
      return false;
    } else {
      return true;
    }
  };

  const handleClearError = () => {
    setEnteredTodoError("");
  };

  const handleEraseError = () => {
    setEditingTodoError("");
  };

  const handleSaveTodo = (event) => {
    event.preventDefault();

    if (handleValidation(enteredTodo)) {
      //form reset
      setEnteredTodo("");
      handleClearError();

      setTodos((prevTodos) => {
        return [{ id: new Date(), text: enteredTodo }, ...prevTodos];
      });
    }
  };

  const handleDeleteTodo = (deleteId) => {
    setTodos((prevTodos) => {
      const remainingTodos = prevTodos.filter((todo) => {
        if (deleteId !== todo.id) {
          return todo;
        }
      });
      return [...remainingTodos];
    });
  };

  const handleEditTodo = (todoData) => {
    setIsEditing(true);
    setEditingTodo(todoData);
  };

  const handleEditInputChange = (e) => {
    setEditingTodo({ ...editingTodo, text: e.target.value });
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEnteredTodo("");
  };

  const handleEditSave = (e) => {
    e.preventDefault();

    if (handleValidation(editingTodo.text)) {
      //form reset
      setEditingTodo("");
      handleEraseError();
      const updatedItem = todos.map((todo) => {
        return todo.id === editingTodo.id ? editingTodo : todo;
      });
      setIsEditing(false);
      setTodos(updatedItem);
    }
  };

  return (
    <div style={{ paddingTop: "10px" }}>
      <Container maxWidth="sm">
      {isEditing ? (
        <EditForm
          editingTodo={editingTodo}
          onCancel={handleEditCancel}
          onEditInputChange={handleEditInputChange}
          onEditSave={handleEditSave}
          todoEditError={editingTodoError}
          eraseError={handleEraseError}
        />
      ) : (
        <AddTodoForm
          enteredTodo={enteredTodo}
          onInputChange={handleInputChange}
          onCancel={handleCancel}
          onSave={handleSaveTodo}
          todoError={enteredTodoError}
          clearError={handleClearError}
        ></AddTodoForm>
      )}
      <div style={{paddingTop:"30px"}}>
      <h3>Todo List</h3>
      {todos.length > 0 ? (
        <Todos
          items={todos}
          editStatus={isEditing}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
          editingTodo={editingTodo}
        ></Todos>
      ) : (
        <p>Nothing to display</p>
      )}
      </div>

      </Container>
    </div>
  );
};

export default App;
