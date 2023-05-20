import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function TodoForm(prop: ButtonProps) {
  return (
    <>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" />
        <FormLabel>Description</FormLabel>
        <Input type="text" />
        <Button colorScheme="blue" onClick={prop.onClick}>
          Save
        </Button>
      </FormControl>
    </>
  );
}

export default TodoForm;