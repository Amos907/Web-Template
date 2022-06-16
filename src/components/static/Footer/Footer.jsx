import { Box, Container, Typography } from "@mui/material";
import React from "react";

import SocialIcons from "./SocialIcons";
import UsefulLinks from "./UsefulLinks";

function Footer() {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        width: "100%",

        mt: 5,
   
        color: "white",
      }}
    >
      <UsefulLinks />
      <SocialIcons />
    </Box>
  );
}

export default Footer;
