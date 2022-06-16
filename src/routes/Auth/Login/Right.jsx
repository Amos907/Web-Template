import { Box, Grid } from "@mui/material";
import React from "react";
import loginSvg from "../../../assets/icons/login.svg";

function Right() {
  return (
    <Grid item sx={12} sm={12} lg={6}>
      <Box
        sx={{ width: "100%", height: "80vh", mt: { xs: -20, lg: 0 } }}
        component="img"
        src={loginSvg}
      />
    </Grid>
  );
}

export default Right;
