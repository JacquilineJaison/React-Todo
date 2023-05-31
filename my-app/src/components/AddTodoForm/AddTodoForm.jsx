import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormGroup,
  Container,
  FormHelperText,
} from "@mui/material";

const AddTodoForm = ({enteredTodo,onInputChange,onSave}) => {
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={onSave}>
          <FormGroup>
            <FormControl 
           // error={titleError.length > 0}
            >
              <InputLabel htmlFor="enteredTodo">Todo</InputLabel>
              <Input
                name="enteredTodo"
                value={enteredTodo}
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  onInputChange(e);
                }}
                //onFocus={() => setEnteredTodoError("")}
              />
              {/* <FormHelperText id="my-helper-text">{enteredTodoError}</FormHelperText> */}
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