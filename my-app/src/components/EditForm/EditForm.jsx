const EditForm = (editingTodo, onEditInputChange, onEditSave) => {
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={onEditSave}>
          <FormGroup>
            <FormControl
            //error={titleError.length > 0}
            >
              <InputLabel htmlFor="editingTodo">Edit Todo</InputLabel>
              <Input
                name="editingTodo"
                value={editingTodo}
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  onEditInputChange(e);
                }}
                //onFocus={() => setTitleError("")}
              />
              {/* <FormHelperText id="my-helper-text">{titleError}</FormHelperText> */}
            </FormControl>
            <Button
              variant="contained"
              onClick={() => {
                onCancel();
              }}
            >
              Cancel
            </Button>
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