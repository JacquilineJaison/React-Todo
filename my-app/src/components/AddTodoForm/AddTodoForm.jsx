import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormGroup,
  Container,
  FormHelperText,
} from "@mui/material";

const AddTodoForm = ({
  enteredTodo,
  onInputChange,
  onCancel,
  onSave,
  todoError,
  clearError,
}) => {
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={onSave}>
          <FormGroup>
            <FormControl error={todoError.length > 0}>
              <InputLabel htmlFor="enteredTodo">Todo</InputLabel>
              <Input
                name="enteredTodo"
                value={enteredTodo}
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  onInputChange(e);
                }}
                onFocus={() => clearError()}
              />
              <FormHelperText id="my-helper-text">{todoError}</FormHelperText>
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

export default AddTodoForm;