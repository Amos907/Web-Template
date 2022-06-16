import React from "react";
import { AppBar, Container, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Links from "./Links";
import Logo from "./Logo";
import RightSide from "./RightSide";
import DrawerComponent from "./DrawerComponent";

function Nav() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0px",
          }}
        >
          <Logo />
          {smallScreen ? (
            <DrawerComponent />
          ) : (
            <>
              <Links />
              <RightSide />
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
