import { Icon } from "@chakra-ui/icons";
import { Box, Text, Container, Avatar, Button } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

export default function Hero() {
  return (
    <Box w="100%" h="90vh" bg="gray.100">
      <Box>
        <Container maxW="container.lg">
          <Box d="flex" justifyContent="space-between" pt="20px">
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
            <Box d="flex" alignItems="center">
              <a href="/#about">
                <Text mr="20px" fontWeight="700" color="gray.500">
                  About Me
                </Text>
              </a>
              <a href="/#projects">
                <Text mr="20px" fontWeight="700" color="gray.500">
                  Projects
                </Text>
              </a>
              <a href="/#contact">
                <Button
                  bg="#03d277"
                  _hover={{ backgroundColor: "#03d277" }}
                  color="#081E24"
                >
                  Contact
                </Button>
              </a>
            </Box>
          </Box>
          <Box
            w="100%"
            h="calc(90vh - 100px)"
            d="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontFamily="nunito" fontWeight="bold" fontSize="24px">
              Hi there 👋
            </Text>
            <Text
              mt="20px"
              fontFamily="nunito"
              fontWeight="900"
              fontSize="40px"
              color="gray.700"
            >
              I'm Kevin Riveros
            </Text>
            <Text
              fontFamily="roboto"
              fontWeight="400"
              fontSize="14px"
              maxWidth="400px"
              textAlign="center"
              mt="20px"
            >
              Software Engineer based in Lima, Perú. Specializing in building
              exceptional, high-quality websites and applications.
            </Text>
            <Avatar
              src="/assets/profile.png"
              alt=""
              name="K R"
              bg="#c4c4c4"
              h="120px"
              w="120px"
              mt="40px"
              border="solid 4px white"
            />
            <Box d="flex" mt="40px">
              <a
                href="https://www.linkedin.com/in/kevin-riveros/"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <Icon
                    as={AiFillLinkedin}
                    w="30px"
                    h="30px"
                    color="gray.500"
                  />
                </Button>
              </a>
              <a
                href="https://instagram.com/kevincodigo"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <Icon
                    as={AiOutlineInstagram}
                    w="30px"
                    h="30px"
                    color="gray.500"
                  />
                </Button>
              </a>
              <a
                href="https://www.youtube.com/channel/UCECuuQE4Vx2kLl8SC8K-r5A?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <Icon as={AiFillYoutube} w="30px" h="30px" color="gray.500" />
                </Button>
              </a>
              <a
                href="https://github.com/kevinrsd"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <Icon as={AiFillGithub} w="30px" h="30px" color="gray.500" />
                </Button>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
