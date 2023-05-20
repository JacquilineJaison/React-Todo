import { Card, CardBody, Text} from "@chakra-ui/react";


const Todos = (props) =>{
  const todos = props.items.map((todoItem) => {
    return (
      <Card key={Math.random()}>
        <CardBody>
          <Text>{todoItem.title}</Text>
          <Text>{todoItem.description}</Text>
        </CardBody>
      </Card>
    );
  });
  return <>{todos}</>;
}

export default Todos;