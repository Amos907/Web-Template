import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import vid from "../../../assets/videos/vid.mp4";

function Home() {
  return (
    <Box id="home">
      <Box
        component="video"
        id="myVideo"
        autoPlay
        muted
        loop
        sx={{
          position: "absolute",
          zIndex: "-10",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          objectFit: "cover",
          height: { xs: " 100vh", sm: "50vh", md: "50vh", lg: "100vh" },
          width: "100%",
        }}
      >
        <source src={vid} type="video/mp4"></source>
      </Box>
      <Box
        id="cover"
        sx={{
          position: "absolute",
          zIndex: " -3",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: { xs: " 100vh", sm: "50vh", md: "50vh", lg: "100vh" },
          width: "100%",
          backgroundColor: "black",
          opacity: 0.6,
        }}
      >
        .
      </Box>
      <Header />
    </Box>
  );
}

export default Home;
