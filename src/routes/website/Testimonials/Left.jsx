import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Left() {
  return (
    <Grid item xs={12} lg={4}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "32px",
            lg: "35px",
          },
          pt: 10,
        }}
      >
        <Fade top> Word from our esteem trusted customers.</Fade>
      </Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        <Zoom>
        DSS has improved the speed of business intelligence deployment and cloud cost queries execution time by 30%. 
        They've also significantly reduced the cost per query. They are easy to work with, which has secured an ongoing partnership.
        Your success is what matters most to us.<br/>
        We deliver the best because we work with the best.    
        </Zoom>
      </Typography>
      <Fade bottom>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 3,
            cursor: "pointer",
          }}
        >
          <Typography variant="subtitle1" sx={{ mr: 3 }}>
            Connect now
          </Typography>
          <PlayCircleFilledWhiteIcon sx={{ fontSize: "30px" }} />
        </Box>
      </Fade>
    </Grid>
  );
}

export default Left;
