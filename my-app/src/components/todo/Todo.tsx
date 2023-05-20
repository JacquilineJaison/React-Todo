import {Button} from "@chakra-ui/react";
import  TodoForm from '../todoForm/TodoForm';

function Todo() {
  const createTodo = () => {
    //open Todo form
  };

  const saveTodo = () => {
    //save Todo form
  };

  return (
    <>
      <Button colorScheme="blue" onClick={createTodo}>
        Create Todo
      </Button>
      <TodoForm saveTodo={saveTodo}></TodoForm>
    </>
  );
}

export default Todo;