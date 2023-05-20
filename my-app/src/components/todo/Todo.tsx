import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button
} from "@chakra-ui/react";

function Todo() {
  const createTodo = () => {
    //open Todo form
  };

 const  saveTodo = () => {
    //save Todo form
  };

  return (
    <>
      <Button colorScheme="blue" onClick={createTodo}>
        Create Todo
      </Button>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" />
        <FormLabel>Description</FormLabel>
        <Input type="text" />
        <Button colorScheme="blue" onClick={saveTodo}>
          Save
        </Button>
      </FormControl>
    </>
  );
}

export default Todo;
