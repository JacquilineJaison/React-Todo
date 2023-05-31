import { useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormGroup,
  Container,
  FormHelperText,
} from "@mui/material";

const AddTodoForm = (enteredTodo,) => {

  const handleValidation = () => {
    let error = null;
    console.log(enteredTodo, "enteredTodo");
    if (title.trim().length === 0) {
      setEnteredTodoError("Please enter a valid title");
      error = true;
    }

    if (error) {
      return false;
    } else {
      return true;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      //form reset
      props.reset();

      props.onClick({
        title: title,
      });
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={submitHandler}>
          <FormGroup>
            <FormControl error={titleError.length > 0}>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input
                name="title"
                value={enteredTodo}
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  handleEnteredTodo(e);
                }}
                //onFocus={() => setEnteredTodoError("")}
              />
              <FormHelperText id="my-helper-text">{enteredTodoError}</FormHelperText>
            </FormControl>            
            <Button type="submit" variant="contained">
              Save
            </Button>
          </FormGroup>
        </form>
      </Container>
    </>
  );
};

export default AddTodoForm;