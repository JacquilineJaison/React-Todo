import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const todoData = {
      title: title,
      description: description
    };

    console.log(todoData);
  };

  return (
    <>
    <form onSubmit={submitHandler}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" value={title} onChange={titleChangeHandler} />
        <FormLabel>Description</FormLabel>
        <Input type="text" value={description} onChange={descriptionChangeHandler}/>
        <Button colorScheme="blue" type="submit" onClick={props.onClick}>
          Save
        </Button>
      </FormControl>
      </form>
    </>
  );
};

export default TodoForm;