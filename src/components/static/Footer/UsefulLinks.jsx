import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { Link } from "react-scroll";

function UsefulLinks() {
  return (
    <Box sx={{ backgroundColor: "#1a1a1a", minHeight: "30vh" }}>
      <Container sx={{ py: 3 }}>
        <Grid container spacing={4}>
          <ShortAbout />
          <Rows />
          <SocialMediaLinks />
          <Subscribe />
        </Grid>
      </Container>
    </Box>
  );
}

export default UsefulLinks;

const ShortAbout = () => {
  return (
    <Grid item xs={12} lg={3}>
      <Typography
        variant="h4"
        sx={{ textAlign: { xs: "center", lg: "start" } }}
      >
        Dataseal
      </Typography>
      <Typography variant="body2" sx={{ pr: 2, pt: 1 }}>
        Dataseal Software is a cutting edge IT Services Company headquartered in
        Nairobi, Kenya, with development centres in USA. With a proven track
        record of being totally client focused, DSS promises efficient, high
        quality, affordable, and on-time information technology services.
      </Typography>
    </Grid>
  );
};

const Rows = () => {
  return (
    <Grid item xs={6} lg={3}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        important Links
      </Typography>
      <Box sx={{ mt: 1 }}></Box>
      {links?.map((data, i) => (
        <FooterLinks key={i} {...data} />
      ))}
      <Box sx={{ mt: 1 }}></Box>
    </Grid>
  );
};

const FooterLinks = ({ to, name }) => {
  return (
    <Link to={to} smooth={true} duration={1200}>
      <Typography
        sx={{
          py: 1,
          cursor: "pointer",
          "&:hover": {
            fontSize: "20px",
          },
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};

const links = [
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Contact Us", to: "contact" },
];

const Subscribe = () => {
  return (
    <Grid item xs={12} lg={3}>
      <Typography>Subscribe to our email news letter</Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: { xs: 0, sm: 4 },
        }}
      >
        <input
          type="email"
          placeholder="example@gmail.com"
          id="subscribeInput"
        />
        <button id="subscribeButton">Subscribe</button>
      </Box>
    </Grid>
  );
};
