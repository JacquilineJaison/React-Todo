import { Card, CardBody, Text } from "@chakra-ui/react";

interface todo {
  title: string;
  description: string;
}

function TodoList(prop: todo[]) {
  const todos = prop.todo.map((todoItem) => {
    return (
      <Card>
        <CardBody>
          <Text>todoItem.title</Text>
        </CardBody>
      </Card>
    );
  });
  return <>{todos}</>;
}

export default TodoList;
