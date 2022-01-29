import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <Box pt="30px" pb="50px" id="contact">
      <Box>
        <Container maxW="container.lg">
          <Text fontFamily="nunito" fontWeight="800" fontSize="24px">
            Contact
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
