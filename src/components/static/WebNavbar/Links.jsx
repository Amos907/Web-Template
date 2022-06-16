import { Box } from "@mui/material";
import React from "react";
import SingleLink from "./SingleLink";

function Links() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {theLinks?.map((data, i) => (
        <SingleLink key={i} {...data} />
      ))}
    </Box>
  );
}

export default Links;

export const theLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Teams", to: "team" },
  { name: "Services", to: "services" },
  { name: "Testimonials", to: "testimonials" },
];
