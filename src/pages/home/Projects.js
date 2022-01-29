import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

export default function Projects() {
  return (
    <Box pt="30px" pb="50px" id="projects">
      <Box>
        <Container maxW="container.lg">
          <Text fontFamily="nunito" fontWeight="800" fontSize="24px">
            Projects 👨‍💻
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
