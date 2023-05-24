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
  FormHelperText,
} from "@mui/material";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [titleError, setTitleError] = useState("");

  //const [submitted, setSubmitted] = useState(false);

  const handleValidation = () => {
    let error = null;

    if (title.trim().length === 0) {
      setTitleError("Please enter a valid title");
      error = true;
    }
    if (description.trim().length === 0) {
      setDescriptionError("Please enter a valid description");
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
    //setSubmitted(true);

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
            <FormControl error={titleError.length > 0}>
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
              <FormHelperText>{titleError}</FormHelperText>
            </FormControl>
            <FormControl              
              error={descriptionError.length > 0}
            >
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  console.log(description, "description");
                }}
              />
              <FormHelperText>{descriptionError}</FormHelperText>
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

{
  /* <form onSubmit={submitHandler}>
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
      </form> */
}
{
  /* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      > */
}
