import { Icon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <Box color="white" bg="gray.800" py="20px">
      <Box d="flex" mt="40px" justifyContent="center" pb="50px">
        <a
          href="https://www.linkedin.com/in/kevin-riveros/"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            bg="transparent"
            color="white"
            _hover={{ color: "gray.800", backgroundColor: "white" }}
          >
            <Icon as={AiFillLinkedin} w="30px" h="30px" />
          </Button>
        </a>
        <a
          href="https://www.instagram.com/kev.riveros/"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            bg="transparent"
            color="white"
            _hover={{ color: "gray.800", backgroundColor: "white" }}
          >
            <Icon as={AiOutlineInstagram} w="30px" h="30px" />
          </Button>
        </a>
        <a
          href="https://github.com/kevin-riveros"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            bg="transparent"
            color="white"
            _hover={{ color: "gray.800", backgroundColor: "white" }}
          >
            <Icon as={AiFillGithub} w="30px" h="30px" />
          </Button>
        </a>
      </Box>
      <Text
        textAlign="center"
        fontFamily="nunito"
        fontWeight="500"
        fontSize="12px"
      >
        Build with ❤️ by{" "}
        <a href="https://www.kevincode.com/" target="_blank" rel="noreferrer">
          kevincode
        </a>
      </Text>
    </Box>
  );
}
