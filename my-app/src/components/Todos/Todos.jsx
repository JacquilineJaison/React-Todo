//import { Card, CardBody, Text } from "@chakra-ui/react";
import "./Todos.css";
//import Wrapper from "../UI/Wrapper/Wrapper";
import { Paper, Stack, styled, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Todos = (props) => {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
  const todos = props.items.map((todoItem) => {
    return (
      <ListItem key={Math.random()}>
        <ListItemButton>
          <ListItemIcon>
            <EditIcon />
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText
            primary={todoItem.title}
            secondary={todoItem.description}
          />
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

// <Card className="custom_card" key={Math.random()}>
//   <CardBody>
//     <Text>{todoItem.title}</Text>
//     <Text>{todoItem.description}</Text>
//   </CardBody>
// </Card>
{
  /* <Item key={Math.random()}>
{todoItem.title} {todoItem.description}<DeleteIcon />
</Item> */
}
