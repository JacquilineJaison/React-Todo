import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormGroup,
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
        <h1>Create Todo</h1>
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
            <span style={{ paddingTop: "10px"}}>
              <span 
                style={{paddingRight:"10px"}}><Button
                variant="contained"
                onClick={() => {
                  onCancel();
                }}
              >
                Cancel
              </Button></span>
              
              <Button type="submit" variant="contained">
                Save
              </Button>
            </span>
          </FormGroup>
        </form>
    </>
  );
};

export default AddTodoForm;
