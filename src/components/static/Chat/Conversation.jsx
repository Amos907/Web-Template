import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  CardActions,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

function Conversation({ setOpenChat, openChat }) {
  const [hasUserInfo, setHasUserInfo] = useState(true);
  return (
    <Card
      sx={{
        width: {
          xs: 360,
          sm: 490,
          md: 600,
          lg: 400,
          xl: 400,
        },
        height: {
          xs: "80vh",
          sm: "60vh",
          lg: "70vh",
        },
      }}
    >
      {hasUserInfo ? (
        <Has setOpenChat={setOpenChat} openChat={openChat} />
      ) : (
        <DoentHave />
      )}
    </Card>
  );
}

export default Conversation;

const Has = ({ setOpenChat, openChat }) => {
  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "black" }} aria-label="recipe">
            LK
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <CloseIcon
              onClick={() => setOpenChat(!openChat)}
              sx={{ fontSize: "44px", "&:hover": { color: "black" } }}
            />
          </IconButton>
        }
        title="Lincoln Kantet"
        subheader="September 14, 2022"
      />
      <Divider />
      <CardContent
        sx={{ height: { xs: "60vh", sm: "45vh", md: "47vh", lg: "48vh" } }}
        style={{
          overflow: "hidden",
          overflowY: "scroll", // added scroll
        }}
      >
        {/* conversation */}

        <Box
          sx={{ display: "flex", width: "100%", justifyContent: "flex-start" }}
        >
          <Box sx={{ color: "#616161" }}>
            <Typography variant="body1">Hello from receiver </Typography>
            <Typography sx={{ fontSize: "10px", fontWeight: "bold" }}>
              Lincoln 10:24 pm
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Box sx={{ color: "#616161" }}>
            <Typography variant="body1">Hello from sender </Typography>
            <Typography sx={{ fontSize: "10px", fontWeight: "bold" }}>
              Joseph 10:24 pm
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          width: "100%",
          //  backgroundColor: "#8f8f8f",
          height: "12vh",
          display: "flex",
          alignItems: "center",
          px: 2,
        }}
      >
        {/* input */}
        <Box
          sx={{
            backgroundColor: "#c7c7c7",
            border: "none",
            width: "100%",
            height: "7vh",
            fontSize: "20px",
            px: 1,
            py: 2,
            color: "black",
          }}
          component="input"
        />
        <SendIcon
          sx={{
            fontSize: "40px",
            ml: 2,
            "&:hover": {
              color: "#c7c7c7",
            },
          }}
        />
      </CardActions>
    </>
  );
};

const DoentHave = () => {
  return <>dont have</>;
};
