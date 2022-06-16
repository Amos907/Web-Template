import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
// import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
// import Fade from "react-reveal/Fade";
// import Bounce from "react-reveal/Bounce";

import Conversation from "./Conversation";
import ChatIcon from "./ChatIcon";

function Chat() {
  const [showInfo, setShowInfo] = useState(true);
  const [openChat, setOpenChat] = useState(false);
  setTimeout(() => {
    setShowInfo(!showInfo);
  }, 500000);
  useEffect(() => {
    reduceTime(showInfo, setShowInfo);
  }, [showInfo]);

  return (
    <>
      {openChat ? (
        <Box
          component="div"
          sx={{ position: "fixed", mb: 3, bottom: 0, ml: 2, left: "0" }}
        >
          <Conversation setOpenChat={setOpenChat} openChat={openChat} />
        </Box>
      ) : (
        <>
          <ChatIcon
            showInfo={showInfo}
            setOpenChat={setOpenChat}
            openChat={openChat}
          />
        </>
      )}
    </>
  );
}

export default Chat;

const reduceTime = (option, change) => {
  if (option === false) return;
  setTimeout(() => {
    change(false);
  }, 5000);
};
