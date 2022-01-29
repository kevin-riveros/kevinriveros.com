import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Container,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Box pt="30px" pb="50px" id="about">
      <Box>
        <Container maxW="container.lg">
          <Text fontFamily="nunito" fontWeight="800" fontSize="24px">
            About Me
          </Text>
          <Text fontFamily="roboto" fontWeight="400" fontSize="18px" mt="20px">
            Hello! 👋 I’m Kevin Riveros, a Software developer based in Lima,
            Perú 🇵🇪 who enjoys building things that live on the internet. I
            develop exceptional websites and web apps that provide intuitive,
            pixel-perfect user interfaces with efficient and modern frameworks.
          </Text>
          <Text fontFamily="roboto" fontWeight="400" fontSize="18px" mt="20px">
            Here are a few technologies I’ve been working with recently:
          </Text>
          <List spacing={3} mt="20px">
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              ReactJS / NextJS
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Javascript
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              NodeJS
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Firebase
            </ListItem>
          </List>
        </Container>
      </Box>
    </Box>
  );
}
