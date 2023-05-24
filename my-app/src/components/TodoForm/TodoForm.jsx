import { useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  TextField,
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

  const [submitted, setSubmitted] = useState(false);

  const handleValidation = () => {
    let error = null;
    console.log(title, "title");
    if (title.trim().length === 0) {
      setTitleError("Please enter a valid title");
      error = true;
    }
    console.log(description, "description");
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
    setSubmitted(true);

    if (handleValidation()) {
      //form reset
      setTitle("");
      setDescription("");
      setSubmitted(false);
      setTitleError("");
      setDescriptionError("");

      props.onClick({
        title: title,
        description: description,
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
                value={title}
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  setTitle(e.target.value);
                  //console.log(title, "title"); this seems to print the stale title value...why? js is runs sequentially
                  console.log(e.target.value, "e.target");
                }}
                onFocus={() => setTitleError("")}
              />
              <FormHelperText id="my-helper-text">{titleError}</FormHelperText>
            </FormControl>
            <FormControl error={descriptionError.length > 0}>
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                value={description}
                aria-describedby="helper_text"
                onChange={(e) => {
                  setDescription(e.target.value);
                  //console.log(description, "description");
                  console.log(e.target.value, "e.target");
                }}
                onFocus={() => setDescriptionError("")}
              />
              <FormHelperText id="helper_text">
                {descriptionError}
              </FormHelperText>
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
