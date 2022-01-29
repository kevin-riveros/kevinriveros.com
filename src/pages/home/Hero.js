import { Box, Text, Container, Avatar } from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  return (
    <Box w="100%" h="90vh" bg="gray.100">
      <Box>
        <Container maxW="container.lg">
          <Box d="flex" justifyContent="space-between" pt="20px">
            <Box w="50px" h="50px" bg="gray.200" borderRadius="6px"></Box>
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
                <Text fontWeight="700" color="gray.500">
                  Contact
                </Text>
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
              Hi there 👋 ,
            </Text>
            <Text
              mt="20px"
              fontFamily="nunito"
              fontWeight="900"
              fontSize="40px"
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
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
