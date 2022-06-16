import { Typography } from "@mui/material";
import React from "react";
import Slide from "react-reveal/Slide";
import TheLink from "../../reused/TheLink";

function Logo() {
  return (
    <TheLink to="/">
      <Slide left>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: "Bold",
            cursor: "pointer",
            color: "black",
          }}
        >
          Dataseal
        </Typography>
      </Slide>
    </TheLink>
  );
}

export default Logo;
