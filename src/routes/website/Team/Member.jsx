import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import TheLink from "../../../components/reused/TheLink";

function Member({info}) {
  const {name, title, comment} = info;
  return (
    <Grid
      elevation={24}
      item
      xs={12}
      sm={4}
      sx={{
        width: "200px",
        height: {
          xs: "480px",
        },
        position: "relative",
      }}
    >
      <Box
        component="img"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="https://picsum.photos/200/300"
      ></Box>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          webkitBackdropFilter: " blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          position: "absolute",
          bottom: "15px",
          top: "180px",
          left: "54px",
          right: "28px",
          color: "white",
          px: 2,
          py: 4,
        }}
      >
        <Zoom>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
        </Zoom>
        <Fade left>
          <Typography variant="subtitle1">{title}</Typography>
        </Fade>
        <Fade right>
          <Typography variant="body2">
            {comment}
          </Typography>
        </Fade>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            my: 2,
          }}
        >
          {/* <ActionButtons Icon={LinkedInIcon} />
          <ActionButtons Icon={TwitterIcon} sp={2} />
          <ActionButtons Icon={LanguageIcon} sp={2} /> */}
        </Box>
      </Box>
    </Grid>
  );
}

export default Member;

const ActionButtons = ({ Icon, link, sp }) => {
  return (
    <TheLink to="/">
      <Zoom left>
        <Icon sx={{ fontSize: "30px", ml: sp, color: "white" }} />
      </Zoom>
    </TheLink>
  );
};
