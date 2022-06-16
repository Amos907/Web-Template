import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import ServiceCard from "./ServiceCard";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

function Services() {
  return (
    <Box id="services" sx={{ minHeight: "90vh", mb: 15, mt: 5 }}>
      <Typography align="center" variant="subtitle2">
        <Fade top> Our services</Fade>
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
        {/* <Zoom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          autem.
        </Zoom> */}
      </Typography>

      <Typography
        align="center"
        sx={{ mt: { xs: 2 }, px: { xs: 0, sm: 5, md: 7, lg: 20 } }}
      >
        <Fade bottom>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero
          minima explicabo alias pariatur iste quos vitae laudantium incidunt
          odio. */}
        </Fade>
      </Typography>
      <Grid container sx={{ my: 2 }} spacing={2}>
        {services?.map((data, i) => (
          <ServiceCard key={i} {...data} />
        ))}
      </Grid>
    </Box>
  );
}

export default Services;

const services = [
  {
    Icon: LightbulbOutlinedIcon,
    title: "Infrastructure services",
    desc: `The depth and breadth of DSS infrastructure and cloud technology make us your partner of choice in many 
of our customers' digital transformations. Our investment in technology, complete partner ecosystem,
 knowledge of new technologies such as everything software defined, open source, DevOps, IoT, etc. make sure we can
 handle all cloud and IT infrastructure requirements from one fulfilling source.DSS IT Infrastructure Services consists of a complete, integrated suite of services for managing 
distributed and hybrid IT environments from across the enterprise with a single reporting point.`,
  },
  {
    Icon: LightbulbOutlinedIcon,
    title: "Cloud advisory",
    desc: ` Our cloud services are structured and designed in such a way to bring together your businesses data into one simple cloud
solution, which is easily and instantly accessible to those within and outside your organisation. Through simple cloud 
solutions,it becomes possible to use data collaboratively in planning and gain advanced machine learning capabilities.
`,
  },
  {
    Icon: LightbulbOutlinedIcon,
    title: "Advisory Services",
    desc: `We aim to use cloud-based data fused with an understanding of your business strategy to drive your business forward. 
Our advisory services take into consideration your businesses strategy, processes, data, technology and the people
`,
  },
  {
    Icon: LightbulbOutlinedIcon,
    title: "Migration & Deployment",
    desc: `Across the globe, the most forward-thinking companies are using cloud solutions, with more focus placed on cloud 
data migration and deployment than ever before. Our experts will securely handle your data to minimize or eliminate
the risks associated with its transfer.
`,
  },
  {
    Icon: LightbulbOutlinedIcon,
    title: "Managed Services",
    desc: `Every business is unique in their data requirements, therefore our managed services are completely flexible 
to each business demands. Off-the-shelf software is rarely capable of meeting the individual challenges your business faces, 
which is why we will combine our services to offer you a secure data solution, flexible infrastructure and intelligent 
insight capabilities.
`,
  },
  {
    Icon: LightbulbOutlinedIcon,
    title: "Backup & DR",
    desc: `Our backup and data recovery solutions provide all our customers with complete control over their ever-evolving data 
requirements. We can deliver total protection and recovery to businesses, applications and remote offices, to ensure 
the most valuable asset in your organisation is protected. From basic backup and data recovery solutions to the provision
 of the most technical data replication infrastructures.

`,
  },
  {
    Icon: LightbulbOutlinedIcon,
    title: "IOT(Internet of Things)",
    desc: `With IoT applications producing large volumes of data across multiple sources, we can manage its integration into a
 cloud computing infrastructure. Our experts will ensure your business utilises the cloud to gain value from the
 increasing amount of data available. We will create a system which enables actions to be taken from the source data 
such as predictive modelling, simulation of outcomes and simple reporting.

`,
  },
  {
    Icon: LightbulbOutlinedIcon,
    title: "Devops Services",
    desc: `We can work with your business to advance your DevOps workflow so that your organisation can begin to use the petabytes 
of data you are collecting. By bridging the gap between software development and IT operations, we will help your
business provide a stable and reliable information infrastructure.We understand that businesses want reliable, 
cloud-based applications which will be fast, readily available, simple to use and bug-free.

`,
  },
  {
    Icon: LightbulbOutlinedIcon,
    title: "Data Analystics Services",
    desc: `Our business intelligence experts can help your business implement reliable and secure dashboards and metrics that
provide key performance indicators and real-time visual analytics.
DSS provides its customers with a complete range of services that enable them to solve all kinds of data problems and 
generate informative reports along with interactive dashboards that help them develop highly responsive and positive
business operations strategies.

`,
  },
];
