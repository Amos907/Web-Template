import {  Grid } from "@mui/material";
import React from "react";
import Left from "./Left";
import Right from "./Right";

function Main() {
  return (
    <Grid container spacing={2} sx={{ px: { xs: 2, sm: 10, lg: 4 }, py: 10 }}>
      <Left />
      <Right />
    </Grid>
  );
}

export default Main;
