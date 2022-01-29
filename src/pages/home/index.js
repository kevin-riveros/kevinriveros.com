import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import ToDo from "./TodoList";

export default function index() {
  return (
    <Box>
      <Hero />
      <About />
      <ToDo />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}
