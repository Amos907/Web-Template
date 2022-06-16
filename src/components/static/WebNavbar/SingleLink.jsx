import React from "react";
import { Box } from "@mui/material";
import Pulse from "react-reveal/Pulse";
import ReactScrollLink from "../../reused/ReactScrollLink";

function SingleLink({ name, to }) {
  return (
    <Box sx={{ marginRight: "14px" }}>
      <Pulse>
        <ReactScrollLink to={to}> {name}</ReactScrollLink>
      </Pulse>
    </Box>
  );
}

export default SingleLink;
