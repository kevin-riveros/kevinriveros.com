import { Box, Text, Container, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "./Hero";

const proyectosList = [
  {
    name: "Petly",
    description: "Proyecto para agendamiento de servicios veterinarios.",
    images: [
      "/assets/petly1.png",
      "/assets/petly2.png",
      "/assets/petly3.png",
      "/assets/petly4.png",
    ],
  },
  {
    name: "Realplaza",
    description: "Ecommerce",
    images: ["/assets/rp1.png", "/assets/rp2.png"],
  },
  {
    name: "Minerclass",
    description: "Elearning de mineria",
    images: [
      "/assets/miner1.png",
      "/assets/miner2.png",
      "/assets/miner3.png",
      "/assets/miner4.png",
      "/assets/miner5.png",
    ],
  },
  {
    name: "Udocz",
    description: "",
    images: ["/assets/udocz1.png", "/assets/udocz2.png", "/assets/udocz3.png"],
  },
];

export default function Projects() {
  return (
    <Box>
      <Hero />
      <Box bg="gray.800">
        <Text
          fontFamily="nunito"
          fontWeight="800"
          fontSize="26px"
          pt="20px"
          pb="30px"
          textAlign="center"
          color="white"
        >
          Proyectos
        </Text>
      </Box>

      {proyectosList.map((proyecto) => {
        return (
          <Box>
            <Box
              position="sticky"
              top="0px"
              left="0px"
              w="100%"
              py="20px"
              bg="gray.800"
            >
              <Container maxW="container.xl">
                <Text
                  fontFamily="Nunito"
                  textTransform="uppercase"
                  fontWeight="900"
                  fontSize="20px"
                  mt="20px"
                  color="#03d277"
                >
                  {proyecto.name}
                </Text>
                <Text
                  fontFamily="roboto"
                  fontWeight="400"
                  fontSize="14px"
                  mt="0px"
                  mb="20px"
                  color="white"
                >
                  {proyecto.description}
                </Text>
              </Container>
            </Box>
            {proyecto.images.map((image) => {
              return <Image src={image} w="100%" />;
            })}
          </Box>
        );
      })}
      <Footer />
    </Box>
  );
}
