import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SocialMediaLinks() {
  return (
    <Grid item xs={6} lg={3}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Social Media
      </Typography>
      <Box component="div" sx={{ my: 2 }}>
        {mediaLinks?.map((data, i) => (
          <TheIcons {...data} key={i} />
        ))}
      </Box>
    </Grid>
  );
}

export default SocialMediaLinks;

const TheIcons = ({ Icon, link, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        mt: 1,
        cursor: "pointer",
      }}
    >
      <a id="me" href={link}>
        <Icon sx={{ fontSize: "30px" }} />{" "}
        <Typography sx={{ ml: 2 }}>{name}</Typography>
      </a>
    </Box>
  );
};

const mediaLinks = [
  {
    Icon: FacebookOutlinedIcon,
    name: "Facebook",
    link: "https://www.facebook.com/DatasealAfrica/",
  },
  {
    Icon: TwitterIcon,
    name: "Twitter",
    link: "https://twitter.com/Datasealafrica",
  },
  {
    Icon: LinkedInIcon,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dataseal-africa-431978236/",
  },
];
