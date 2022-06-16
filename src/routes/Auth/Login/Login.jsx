import React from "react";
import { Box, Container, Grid } from "@mui/material";

import Left from "./Left";
import Right from "./Right";

function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "90%",
          px: 2,
          py: 5,
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ width: "100%", height: "100%" }}>
          <Left />
          <Right />
        </Grid>
      </Container>
    </Box>
  );
}

export default Login;
