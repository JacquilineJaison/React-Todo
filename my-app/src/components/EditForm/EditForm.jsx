import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormGroup,
  Container,
  FormHelperText,
} from "@mui/material";

const EditForm = ({editingTodo, onCancel, onEditInputChange, onEditSave, todoEditError, eraseError}) => {
  console.log(editingTodo,"editingTodo")
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={onEditSave}>
          <FormGroup>
            <FormControl
            error={todoEditError.length > 0}
            >
              <InputLabel htmlFor="editingTodo">Edit Todo</InputLabel>
              <Input
                name="editingTodo"
                value={editingTodo.text}
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  onEditInputChange(e);
                }}
                onFocus={() => eraseError()}
              />
              <FormHelperText id="my-helper-text">{todoEditError}</FormHelperText>
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