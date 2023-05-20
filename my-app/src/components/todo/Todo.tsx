import { useState } from "react";
import { Button } from "@chakra-ui/react";
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";

function Todo() {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([{ title: null, description: null }]);

  const createTodo = () => {
    //open Todo form
    setOpen(true);
  };

  const saveTodo = () => {
    //save Todo form and show the updated todo list
    setTodos(todos.slice());
  };

  return (
    <>
      {open ? (
        <TodoForm onClick={saveTodo}></TodoForm>
      ) : (
        <Button colorScheme="blue" onClick={createTodo}>
          Create Todo
        </Button>
      )}

      {todos.length > 0 ? <TodoList list={todos}></TodoList> : null}
    </>
  );
}

export default Todo;
