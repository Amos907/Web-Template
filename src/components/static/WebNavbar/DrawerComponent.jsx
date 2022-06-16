import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  Button,
  IconButton,
} from "@mui/material";
import Zoom from "react-reveal/Zoom";

import { theLinks } from "./Links";
import RightSide from "./RightSide";
import { toogleWebDrawer } from "../../../features/appStates/app.slice";
import { Link } from "react-scroll";

function DrawerComponent() {
  const dispatch = useDispatch();
  const { showWebDrawer } = useSelector((state) => state.app);

  const toggler = (option) => {
    dispatch(toogleWebDrawer(option));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => toggler(false)}
      onKeyDown={() => toggler(false)}
    >
      <List>
        {theLinks.map(({ name, to }) => (
          <ListItem button key={name}>
            <Zoom>
              <Link to={to} smooth={true} duration={1200}>
                <ListItemText
                  onClick={() => toggler(false)}
                  sx={{ color: "#616161" }}
                  primary={name}
                />
              </Link>
            </Zoom>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Button onClick={() => toggler(!showWebDrawer)}>
        <IconButton>
          <MenuIcon sx={{ fontSize: 35 }} />
        </IconButton>
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={showWebDrawer}
        onClose={() => toggler(false)}
        onOpen={() => toggler(true)}
      >
        <Box
          onClick={() => toggler(!showWebDrawer)}
          component="div"
          sx={{ width: "100%", px: 2, pt: 1 }}
        >
          <IconButton>
            <CloseIcon sx={{ fontSize: 44 }} />
          </IconButton>
        </Box>
        <Divider />
        {list("right")}
        <Divider />

        <Box
          component="div"
          sx={{
            width: "90%",
            ml: 2,
            mt: 4,
          }}
        >
          <RightSide />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}

export default DrawerComponent;
