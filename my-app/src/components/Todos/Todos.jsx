//import { Card, CardBody, Text } from "@chakra-ui/react";
import "./Todos.css";
import Wrapper from "../UI/Wrapper/Wrapper";

const Todos = (props) => {
  const todos = props.items.slice(1).map((todoItem) => {
    return (
      // <Card className="custom_card" key={Math.random()}>
      //   <CardBody>
      //     <Text>{todoItem.title}</Text>
      //     <Text>{todoItem.description}</Text>
      //   </CardBody>
      // </Card>
      <li key={Math.random()}>{todoItem.title} {todoItem.description}</li>
    );
  });
  return (
    <>
      <Wrapper>{todos}</Wrapper>
    </>
  );
};

export default Todos;