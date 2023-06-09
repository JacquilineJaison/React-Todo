import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormGroup,
  FormHelperText,
} from "@mui/material";

import todo from "../Types.js";

type EditProps = {
  editingTodo: todo;
  onCancel: () => void;
  onEditInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onEditSave: (e: React.FormEvent<HTMLFormElement>) => void;
  todoEditError: string;
  eraseError: () => void;
};

const EditForm = ({
  editingTodo,
  onCancel,
  onEditInputChange,
  onEditSave,
  todoEditError,
  eraseError,
}: EditProps) => {
  return (
    <>
      <h1>Edit Todo</h1>
      <form
        onSubmit={(e) => {
          onEditSave(e);
        }}
      >
        <FormGroup>
          <FormControl error={todoEditError.length > 0}>
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
          <span>
            <span style={{ paddingRight: "10px" }}>
              <Button
                variant="contained"
                onClick={() => {
                  onCancel();
                }}
              >
                Cancel
              </Button>
            </span>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </span>
        </FormGroup>
      </form>
    </>
  );
};

export default EditForm;