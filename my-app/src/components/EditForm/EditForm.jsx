const EditForm = (
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
) => {
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={submitHandlerEdit}>
          <FormGroup>
            <FormControl error={titleError.length > 0}>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input
                name="title"
                value={props.title}
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value, "e.target");
                }}
                //onFocus={() => setTitleError("")}
              />
              <FormHelperText id="my-helper-text">{titleError}</FormHelperText>
            </FormControl>
            <Button variant="contained">Cancel</Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </FormGroup>
        </form>
      </Container>
    </>
  );
};

export default EditForm;
