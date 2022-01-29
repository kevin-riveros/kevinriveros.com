import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

export default function Quote() {
  return (
    <Box pt="20px" pb="20px" id="about">
      <Box>
        <Container maxW="container.lg">
          <Box
            bg="gray.100"
            p="30px 20px 30px 40px"
            borderLeft="solid 4px"
            borderColor="#03d277"
            borderRadius="8px"
          >
            <Text fontStyle="italic" fontFamily="roboto" fontSize="20px">
              “If You Can Think and Speak and Write, You Are Absolutely Deadly.”
            </Text>
            <Text
              fontFamily="roboto"
              fontSize="20px"
              fontWeight="bold"
              mt="10px"
            >
              Jordan B. Peterson
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
