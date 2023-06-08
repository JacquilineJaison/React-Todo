import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import todo from "../Types.ts";

type todoProps = {
  items: todo[];
  editStatus: boolean;
  onDelete: (id: string) => void;
  onEdit: (todoData: todo) => void;
  editingTodo: todo;
};

const Todos = ({
  items,
  editStatus,
  onDelete,
  onEdit,
  editingTodo,
}: todoProps) => {
  const todos = items.map((todoItem) => {
    return (
      <ListItem key={todoItem.id}>
        <ListItemButton disabled={editStatus && editingTodo.id === todoItem.id}>
          <ListItemText primary={todoItem.text} />
          <ListItemIcon>
            <EditIcon
              onClick={() => {
                onEdit(todoItem);
              }}
            />
            <DeleteIcon
              onClick={() => {
                onDelete(todoItem.id);
              }}
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    );
  });
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 660, bgcolor: "background.paper" }}>
        <nav aria-label="todo list">
          <List>{todos}</List>
        </nav>
      </Box>
    </>
  );
};

export default Todos;