import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Member from "./Member";
import members_info from "./members_info";

function Team() {
  return (
    <Box id="team" sx={{ minHeight: "90vh", pt: { xs: 10, sm: 7 } }}>
      <Typography align="center" variant="subtitle2">
        <Fade top> The team</Fade>
      </Typography>
      <Typography
        align="center"
        variant="h5"
        sx={{
          mt: { xs: 2 },
          px: { xs: 2 },
          fontWeight: "bold",
          color: "black",
        }}
      >
        <Zoom> A small team with impressive cred.</Zoom>
      </Typography>
      <Typography
        align="center"
        sx={{ mt: { xs: 2 }, px: { xs: 0, sm: 5, md: 7, lg: 20 } }}
      >
        <Fade bottom>
          Want to work with some of the best global talent and build software
          used by all the companies you know and love? Join the team - we're
          hiring remotely all over the world
        </Fade>
      </Typography>
      <Grid sx={{ my: 2 }} spacing={4} container>
        {members_info.map(info => <Member key={info.id} info={info}/>)}
      </Grid>
    </Box>
  );
}

export default Team;
