import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Quote from "./Quote";
import ToDo from "./TodoList";

export default function index() {
  return (
    <Box>
      <Hero />
      <About />
      <Quote />
      <ToDo />
      <Projects />
      <Contact />
      <br /> <br /> <br /> <br />
      <Footer />
    </Box>
  );
}
