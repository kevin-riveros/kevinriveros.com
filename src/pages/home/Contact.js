import { EmailIcon, Icon } from "@chakra-ui/icons";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <Box pt="30px" pb="50px" id="contact">
      <Box>
        <Container maxW="container.lg">
          <Text fontFamily="nunito" fontWeight="800" fontSize="26px">
            Contact 📧
          </Text>
          <Text fontFamily="roboto" fontWeight="400" fontSize="18px" mt="20px">
            Although I’m not currently looking for freelance opportunities, my
            inbox is always open. Whether for a potential project or just to say
            hi, I’ll try my best to answer your email!
          </Text>
          <Text fontFamily="roboto" fontWeight="bold" fontSize="18px" mt="20px">
            Ready to turn your ideas into reality?
          </Text>
          <a href="mailto:kevinriverosg@gmail.com?subject=Hello Kevin. I wanna work with you! 😁">
            <Button
              mt="30px"
              bg="#03d277"
              _hover={{ backgroundColor: "#03d277" }}
              color="#081E24"
              size="lg"
              w={["100%", "350px", "350px"]}
            >
              Send mail <Icon as={EmailIcon} ml="10px" />{" "}
            </Button>
          </a>
        </Container>
      </Box>
    </Box>
  );
}
