import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const cardsProjects = [
  {
    url: "https://www.riffazo.com/",
    image: "/assets/card2.png",
  },
  {
    url: "https://www.petly.la/",
    image: "/assets/card3.png",
  },
  {
    url: "",
    image: "/assets/card4.png",
  },
  {
    url: "",
    image: "/assets/card5.png",
  },
  {
    url: "https://kevincodigo.com/",
    image: "/assets/card1.png",
  },
  {
    url: "",
    image: "/assets/card6.png",
  },
];

export default function Projects() {
  return (
    <Box pt="30px" pb="50px" id="projects">
      <Box>
        <Container maxW="container.lg">
          <Text fontFamily="nunito" fontWeight="800" fontSize="26px">
            Projects 👨‍💻
          </Text>
          <Box
            d="grid"
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
            gridGap="10px"
            mt="30px"
          >
            {cardsProjects.map((card) => {
              return (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!card.url) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Box
                    w={["100%", "100%", "100%"]}
                    h={["100px", "100px", "100px"]}
                    backgroundColor="gray.100"
                    bgImage={`url(${card.image})`}
                    bgPosition="center"
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    borderRadius="10px"
                    cursor={card.url ? "pointer" : "default"}
                  />
                </a>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
