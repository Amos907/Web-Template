import { Box, Typography } from "@mui/material";
import React from "react";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SocialIcons() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "10vh",
        display: "flex",
        justifyContent: "space-around",
        py: 4,
        px: 2,

        alignItems: "center",
        flexDirection: { sm: "row", md: "column", lg: "row" },
      }}
    >
 
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          &copy; {new Date().getFullYear()} Dataseal
        </Box>
      </Box>
    </Box>
  );
}

export default SocialIcons;

const SocialMedia = ({ Icon }) => {
  return (
    <Box sx={{ ml: 2, cursor: "pointer" }}>
      <Icon sx={{ fontSize: "40px" }} />
    </Box>
  );
};
