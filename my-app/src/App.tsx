import "./App.css";
import Todo from "./components/todo/Todo";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="xl" centerContent>
        <Todo></Todo>
      </Container>
    </ChakraProvider>
  );
}

export default App;