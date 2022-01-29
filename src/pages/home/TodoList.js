import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Icon,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { DeleteIcon, Search2Icon, ChevronRightIcon } from "@chakra-ui/icons";

const ToDoList = [
  {
    text: "Build personal brand kevincodigo.com",
  },
  {
    text: "Research about web3 and blockchain",
  },
  {
    text: "Improve python skills 🐍",
  },
  {
    text: "Learn to dance salsa 🕺",
  },
];

const ItemTask = ({ item, onDeleteItem }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Box py="4px" d="flex" justifyContent="space-between">
      <Box d="flex" alignItems="center">
        <Icon as={ChevronRightIcon} mr="10px" />
        <Text
          textDecor={isCompleted ? "line-through" : "none"}
          onClick={() => setIsCompleted(!isCompleted)}
          cursor="pointer"
          color={isCompleted ? "gray.400" : "black"}
        >
          {item.text}
        </Text>
      </Box>
      <Button size="sm" bg="white" onClick={() => onDeleteItem(item.text)}>
        <Icon as={DeleteIcon} color="gray" />
      </Button>
    </Box>
  );
};

export default function ToDo() {
  const [newItem, setnewItem] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const toast = useToast();

  useEffect(() => {
    setTodoItems(ToDoList);
  }, []);

  const onAddNewItem = () => {
    if (!newItem) {
      toast({
        title: "Error",
        description: "Input can't be empty!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const newItemObj = {
      text: newItem,
    };
    setnewItem("");
    setTodoItems([...todoItems, newItemObj]);
  };

  const onDeleteItem = (text) => {
    const newFilteredList = todoItems.filter((x) => x.text !== text);
    setTodoItems(newFilteredList);
  };

  return (
    <Box pt="30px" pb="50px">
      <Box>
        <Container maxW="container.lg">
          <Text fontFamily="nunito" fontWeight="800" fontSize="26px">
            Todo list 📝
          </Text>

          <Text color="gray.500">
            Here is a list of things I plan to accomplish over the next year.
            Try it out yourself!
          </Text>
          <InputGroup size="md" mt={4}>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color={"gray.500"} />}
            />
            <Input
              aria-label="Enter a Todo!"
              placeholder="Learn Python & machine learning"
              value={newItem}
              onChange={(e) => setnewItem(e.target.value)}
            />
            <InputRightElement width="8rem">
              <Button
                aria-label="Add a TODO!"
                fontWeight="bold"
                h="1.75rem"
                size="md"
                mr={2}
                px={10}
                onClick={onAddNewItem}
                colorScheme={newItem ? "blue" : "gray"}
              >
                Add new
              </Button>
            </InputRightElement>
          </InputGroup>
          <Box pt="20px">
            {todoItems &&
              todoItems.length > 0 &&
              todoItems.map((item) => {
                return <ItemTask item={item} onDeleteItem={onDeleteItem} />;
              })}
          </Box>
          <Button
            variant="link"
            color="gray.400"
            fontSize="14px"
            mt="20px"
            onClick={() => setTodoItems(ToDoList)}
          >
            Reset
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
