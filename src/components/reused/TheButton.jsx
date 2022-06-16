import { Button } from "@mui/material";
import React from "react";

function TheButton({ primary, secondary, size, info, variant, type }) {
  return (
    <Button
      sx={{
        color: primary ? "black" : "red",
        border: `1px solid ${primary ? "#616161" : "red"}`,
        "&:hover": {
          color: primary ? "black" : "red",
          border: "1px solid black",
        },
      }}
      size={size}
      variant={variant}
    >
      {info}
    </Button>
  );
}

export default TheButton;
