import { useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  TextField,
  Box,
  Button,
  FormGroup,
  Container,
} from "@mui/material";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    titleError: "",
    descriptionError: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleValidation = () => {
    let titleError = null;
    let descriptionError = null;    
    
    if (title.trim().length === 0) {
      titleError = "Please enter a valid title";
      console.log(titleError, "titleError");
    }
    if (description.trim().length === 0) {
      descriptionError = "Please enter a valid description";
      console.log(descriptionError, "descriptionError");
    }

    if (titleError || descriptionError) {
      setErrors({ titleError: titleError, descriptionError: descriptionError });
      return false;
    }
    else{
      return true;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (handleValidation()) {
      setTitle("");
      setDescription("");
      props.onClick({
        title: title,
        description: description,
      });
    } else {
      //show error messages
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={submitHandler}>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input
                id="title"
                value={title}
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(title, "title");
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  console.log(description, "description");
                }}
              />
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

export default TodoForm;

      {/* <form onSubmit={submitHandler}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={titleChangeHandler}
          required
        />
        <p
          className={
            submitted && Object.keys(errors).length > 0
              ? "error_show"
              : "error_hide"
          }
        >
          {errors.titleError}
        </p>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={descriptionChangeHandler}
          required
        />
        <p
          className={
            submitted && Object.keys(errors).length > 0
              ? "error_show"
              : "error_hide"
          }
        >
          {errors.descriptionError}
        </p>
        <button colorScheme="blue" type="submit">
          Save
        </button>
      </form> */}
      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      > */}