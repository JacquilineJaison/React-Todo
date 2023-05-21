import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

const App = () => {
  const [todos, setTodos] = useState([{ title: "", description: "" }]);

  const saveTodo = (todoData) => {
    //save Todo form and show the updated todo list
    setTodos((prevTodos) => {
      return [todoData, ...prevTodos];
    });
  };

  return (
    <ChakraProvider>
      <Container maxW="xl" centerContent>
        <TodoForm onClick={saveTodo}></TodoForm>
        <Todos items={todos}></Todos>
      </Container>
    </ChakraProvider>
  );
};

export default App;
