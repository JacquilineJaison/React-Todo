import "./Todos.css";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Todos = ({items,editStatus,onDelete,onEdit}) => {
  console.log(items,"items");
  const todos = items.map((todoItem, index) => {
    return (
      <ListItem key={index} disabled={editStatus}>
        <ListItemButton>
          <ListItemText
            primary={todoItem.text}            
          />
          <ListItemIcon>
            <EditIcon
              onClick={() => {
                onEdit(index);
                //disable edit on this item until edit saved
              }}
            />
            <DeleteIcon
              onClick={() => {
                onDelete(index);
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