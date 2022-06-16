import React from "react";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Nav from "../../../components/static/WebNavbar/Nav";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import TheLink from "../../../components/reused/TheLink";

function PageNotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "url(./images/404.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Toolbar id="back-to-top-anchor" />{" "}
      <Box
        sx={{
          backgroundColor: "black",

          width: "100%",
          height: "100vh",
          opacity: "0.7",
        }}
        component="div"
      >
        {" "}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            width: "100%",
            color: "white",
          }}
        >
          <Fade top>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
              }}
            >
              404
            </Typography>
          </Fade>
          <Zoom>
            <Typography>Opps! Page requested not Found</Typography>
          </Zoom>

          <Fade bottom>
            <TheLink to="/">
              <Button
                sx={{
                  backgroundColor: "white",
                  mt: 2,
                  color: "black",
                  fontsize: "20px",
                  textDecoration: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
                variant="contained"
              >
                Go back Home
              </Button>
            </TheLink>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}

export default PageNotFound;
