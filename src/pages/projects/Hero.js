import { ArrowLeftIcon, Icon } from "@chakra-ui/icons";
import { Box, Text, Container, Avatar, Button } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box w="100%" bg="gray.100" pb="20px">
      <Box>
        <Container maxW="container.lg">
          <Box
            d="flex"
            justifyContent="space-between"
            pt="20px"
            alignItems="center"
          >
            <Link to="/">
              <Box
                d="flex"
                alignItems="center"
                fontSize="12px"
                textDecor="underline"
                fontWeight="900"
                color="gray.500"
              >
                <Icon
                  as={ArrowLeftIcon}
                  w="20px"
                  h="20px"
                  color="gray.500"
                  mr="20px"
                />
                Volver a inicio
              </Box>
            </Link>
            <Box
              w="50px"
              h="50px"
              bg="gray.200"
              borderRadius="6px"
              fontFamily="nunito"
              d="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight="900"
              fontSize="22px"
              color="gray.800"
            >
              K
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
