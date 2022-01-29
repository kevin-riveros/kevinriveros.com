import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box color="white" bg="gray.800" py="20px">
      <Text
        textAlign="center"
        fontFamily="nunito"
        fontWeight="500"
        fontSize="12px"
      >
        Build with ❤️ by kevincodigo
      </Text>
    </Box>
  );
}
