import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import EditForm from "./components/EditForm";
import Todos from "./components/Todos";
import { Container } from "@mui/material";
import todo from "./Types.js";

const App = () => {
  const [todos, setTodos] = useState<todo[]>([]);
  const [enteredTodo, setEnteredTodo] = useState("");
  const [enteredTodoError, setEnteredTodoError] = useState("");
  const [editingTodoError, setEditingTodoError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState<todo>({ id: "", text: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setEnteredTodo(e.target.value);
  };

  const handleValidation = (text: string) => {
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

  const handleSaveTodo = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidation(enteredTodo)) {
      //form reset
      setEnteredTodo("");
      handleClearError();

      setTodos((prevTodos) => {
        return [{ id: new Date().toString(), text: enteredTodo }, ...prevTodos];
      });
    }
  };

  const handleDeleteTodo = (deleteId: String) => {
    setTodos((prevTodos) => {
      const remainingTodos = prevTodos.filter((todo: todo) => {
        if (deleteId !== todo.id) {
          return todo;
        }
      });
      return [...remainingTodos];
    });
  };

  const handleEditTodo = (todoData: todo) => {
    setIsEditing(true);
    setEditingTodo(todoData);
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setEditingTodo({ ...editingTodo, text: e.target.value });
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEnteredTodo("");
  };
 
  const handleEditSave = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();

    if (handleValidation(editingTodo.text)) {
      //form reset
      setEditingTodo({ id: "", text: "" });
      handleEraseError();
      const updatedItem = todos.map((todo: todo) => {
        return todo.id === editingTodo.id ? editingTodo : todo;
      });
      setIsEditing(false);
      setTodos(updatedItem);
    }
  };

  return (
    <div className="App">
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
        <div style={{ paddingTop: "30px" }}>
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
