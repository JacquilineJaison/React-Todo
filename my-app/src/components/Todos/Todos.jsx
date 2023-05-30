import "./Todos.css";
import { Paper, Stack, styled, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Todos = (props) => {
  const todos = props.items.map((todoItem, index) => {
    return (
      <ListItem key={index}>
        <ListItemButton>
          <ListItemText
            primary={todoItem.title}
            secondary={todoItem.description}
          />
          <ListItemIcon>
            <EditIcon
              onClick={() => {
                props.onEdit(index);
                //disable edit on this item until edit saved
              }}
            />
            <DeleteIcon
              onClick={() => {
                props.onDelete(index);
              }}
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    );
  });
  return (
    <>
      {/* <Stack spacing={2}>{todos}</Stack> */}

      <Box sx={{ width: "100%", maxWidth: 660, bgcolor: "background.paper" }}>
        <nav aria-label="todo list">
          <List>{todos}</List>
        </nav>
      </Box>
    </>
  );
};

export default Todos;