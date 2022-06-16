import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import quote from "../../../assets/icons/quote.svg";
import Main from "./Main";

// ,

function Testimonials() {
  return (
    <Box
      id="testimonials"
      sx={{
        height: { xs: "110vh", sm: "80vh", md: "60vh", lg: "90vh" },
        background: "url(./images/testimonials.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "relative",
        color: "white",
        zIndex: "-21",
        mb: 4,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "black",
          opacity: "0.8",
          zIndex: "-20",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          height: "120px",
          width: "120px",
          top: "-60px",
          left: 20,
          zIndex: "-19",
        }}
        component="div"
      >
        <Box component="img" src={quote} />
      </Box>
      <Main />
    </Box>
  );
}

export default Testimonials;
