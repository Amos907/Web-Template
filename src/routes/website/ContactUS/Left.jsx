import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

import ContactInfo from "./ContactInfo";

function Left() {
  return (
    <Grid item xs={12} sm={6} sx={{ px: { xs: 5 }, py: 5 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        <Fade top>Get a quote</Fade>
      </Typography>
      <Typography variant="body1" sx={{ pt: 2 }}>
        <LightSpeed left>
          Fill up the form and our Team will get back to you within 24 hours
        </LightSpeed>
      </Typography>
      <Box sx={{ pt: 7 }}>
        {contactInfo?.map((data, i) => (
          <ContactInfo key={i} {...data} />
        ))}
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: 10,
        }}
      >
        {/* <SocialMedia Icon={FacebookSharpIcon} />
        <SocialMedia Icon={TwitterIcon} />
        <SocialMedia Icon={InstagramIcon} /> */}
      </Box>
    </Grid>
  );
}

export default Left;

const contactInfo = [
  { Icon: PhoneIcon, text: "+ 254 726 843 027" },
  { Icon: EmailIcon, text: "info@datasealsoftware.com" },
  { Icon: LocationOnIcon, text: "WillMary Estate Nairobi, Kenya" },
];

const SocialMedia = ({ Icon }) => {
  return (
    <Box>
      <Fade bottom>
        <Icon sx={{ fontSize: "50px", cursor: "pointer" }} />
      </Fade>
    </Box>
  );
};
