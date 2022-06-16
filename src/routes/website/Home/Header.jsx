import React from "react";
import { Box, Grid } from "@mui/material";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Header() {
  return (
    <Box sx={{ minHeight: { xs: "90vh", sm: "40vh" } }}>
      <Grid sx={{}} container spacing={4}>
        <LeftSide />
        <RightSide />
      </Grid>
    </Box>
  );
}

export default Header;
