import { Box, Container, Toolbar } from "@mui/material";
import React from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Home from "./Home/Home";
import Nav from "./../../components/static/WebNavbar/Nav";
import ScrollTop from "../../components/reused/ScrollToTop";
import Team from "./Team/Team";
import Services from "./Services/Services";
import ContactUS from "./ContactUS/ContactUS";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "../../components/static/Footer/Footer";

function index(props) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Nav />
        <Toolbar id="back-to-top-anchor" />
        <Container>
          <Home />
          <About />
          <Team />
          <Services />
          <Testimonials />
          <ContactUS />
        </Container>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

        <Footer />
      </Box>
    </>
  );
}

export default index;
