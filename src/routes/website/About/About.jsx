import React, { useEffect, useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function About() {
  return (
    <Box
      id="about"
      sx={{ minHeight: { xs: "90vh", sm: "60vh", md: "50vh" }, mt: 8 }}
    >
      <Grid container spacing={4} sx={{ my: 3, mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ textAlign: { xs: "center", md: "start" } }}
            variant="subtitle2"
          >
            <Fade top> About us</Fade>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mt: 3,
              fontWeight: "bold",
              color: "black",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Fade left> We do things differently...</Fade>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: { xs: 3 } }}>
          <Typography>
            <Fade right>
              Dataseal Software is a cutting edge IT Services Company
              headquartered in Nairobi, Kenya, with development centres in USA.
              With a proven track record of being totally client focused, DSS
              promises efficient, high quality, affordable, and on-time
              information technology services. DATASEAL SOFTWARE transforms how
              businesses work and people live through the power of data. We help
              businesses across AFRICA turn data into their greatest asset.
            </Fade>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <MyCard
          number={20}
          title={"Task Force"}
          desc={"We have an excelent qualified team."}
        />
        <MyCard
          number={84}
          title={"Clients Served"}
          desc={"We have a good record in clientel services  ."}
        />
        <MyCard
          number={103}
          title={"Projects Completed"}
          desc={"We completed enough projects to tacle any new challenge  ."}
        />
        <MyCard
          number={3}
          title={"Countries"}
          desc={"We are located and operate within 3 countries ."}
        />
      </Grid>
    </Box>
  );
}

export default About;

const MyCard = ({ number,title, desc }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (Number(count) >= Number(number)) return;

    setCount(count + 1);
  }, [count]);
  return (
    <Grid item xs={12} sm={6} lg={3} sx={{ mt: 3 }}>
      <Card sx={{ px: 2, py: 3 }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h2">
          {count}+
        </Typography>
        <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#707070" }}>
          <Zoom>{desc}</Zoom>
        </Typography>
      </Card>
    </Grid>
  );
};
