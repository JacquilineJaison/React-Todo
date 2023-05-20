import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

interface ButtonProps {
  saveTodo: React.MouseEventHandler<HTMLButtonElement>;
}

function TodoForm(prop: ButtonProps) {
  return (
    <>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" />
        <FormLabel>Description</FormLabel>
        <Input type="text" />
        <Button colorScheme="blue" onClick={prop.saveTodo}>
          Save
        </Button>
      </FormControl>
    </>
  );
}

export default TodoForm;