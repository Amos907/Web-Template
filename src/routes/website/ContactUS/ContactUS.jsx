import React from "react";
import { Grid } from "@mui/material";
import Left from "./Left";
import Right from "./Right";

function ContactUS() {
  return (
    <Grid
      container
      id="contact"
      sx={{
        minHeight: { xs: "90vh", sm: "60vh", lg: "90vh" },
        width: "100%",
        backgroundColor: "black",
        color: "white",
        pb: 3,
        pt: 6,
        px: { lg: 6 },
      }}
    >
      <Left />
      <Right />
    </Grid>
  );
}

export default ContactUS;
