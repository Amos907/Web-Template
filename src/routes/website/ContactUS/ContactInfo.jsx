import React from "react";
import { Box, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

function ContactInfo({ Icon, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        px: {},
      }}
    >
      <Fade left>
        <Icon sx={{ fontSize: "20px" }} />
      </Fade>
      <Fade right>
        <Typography variant="body1" sx={{ ml: 4 }}>
          {text}
        </Typography>
      </Fade>
    </Box>
  );
}

export default ContactInfo;
