import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Box, Tooltip, Typography } from "@mui/material";
function ChatIcon({ openChat, setOpenChat, showInfo }) {
  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        bottom: 0,
        ml: 3,
        left: "0",
      }}
      onClick={() => setOpenChat(!openChat)}
    >
      {showInfo && (
        <Box
          sx={{
            color: "white",
            position: "fixed",
            ml: 7,
            backgroundColor: "black",
            px: 4,
            py: 1,
          }}
        >
          <Bounce left>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "100",
                fontSize: "15px",
                borderRadius: "10px 10px 10px 0",
              }}
            >
              Click to consult an expert
            </Typography>{" "}
          </Bounce>
        </Box>
      )}
      <Fade left>
        <Tooltip title="Click to talk to an expert">
          <ChatBubbleIcon
            elevation={24}
            sx={{ fontSize: "50px", cursor: "pointer", color: "#616161" }}
          />
        </Tooltip>
      </Fade>
    </Box>
  );
}

export default ChatIcon;
