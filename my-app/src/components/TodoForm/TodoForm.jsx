import { useState } from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    titleError: "",
    descriptionError: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const titleChangeHandler = (event) => {
    event.preventDefault();
    //console.log(event.target.value);
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    event.preventDefault();
    //console.log(event.target.value);
    setDescription(event.target.value);
  };

  const handleValidation = () => {
    let titleError = "";
    let descriptionError = "";
    console.log("handleValidation");
    if (title.trim().length === 0) {
      titleError = "Please enter a valid title";
    }
    if (description.trim().length === 0) {
      descriptionError = "Please enter a valid description";
    }
    console.log(titleError, "titleError");
    console.log(descriptionError, "descriptionError");
    setErrors({ titleError: titleError, descriptionError: descriptionError });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(event.target.value);
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
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
        <p
          className={submitted && Object.keys(errors).length > 0 ? error_hide}
        >
          {errors.titleError}
        </p>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={descriptionChangeHandler}
        />
        <p>{errors.descriptionError}</p>
        <button colorScheme="blue" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default TodoForm;