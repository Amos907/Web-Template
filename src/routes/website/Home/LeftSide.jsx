import React, { useState } from "react";
import { Box, Grid, Typography, Modal, useMediaQuery } from "@mui/material";
import PrimaryButton from "../../../components/reused/PrimaryButton";
import SlowMotionVideoRoundedIcon from "@mui/icons-material/SlowMotionVideoRounded";
import Zoom from "react-reveal/Zoom";
import { useTheme } from "@mui/material/styles";

function LeftSide() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Grid item md={6} sx={{ my: 6, color: "white", mt: 10 }}>
      <Zoom>
        {" "}
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Get help with data analysis from experts.
        </Typography>
        <Box component="div" sx={{ mt: 3 }}>
          <Typography variant="body2">
            DATASEAL SOFTWARE transforms how businesses work and people live
            through the power of data. We help businesses across AFRICA turn
            data into their greatest asset.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mt: 8,
            pr: 2,
          }}
        >
          <PrimaryButton text="   Reach out" to="contact" />
          <Box
            sx={{
              display: "flex ",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleClose()}
          >
            <SlowMotionVideoRoundedIcon
              sx={{ fontSize: "40px", color: "red" }}
            />
            <Typography
              sx={{
                marginLeft: "5px",
                "&:hover": {
                  color: "red",
                },
                cursor: "pointer",
              }}
            >
              Watch video
            </Typography>
          </Box>
        </Box>
      </Zoom>
      <MyModal handleClose={handleClose} open={isOpen} />
    </Grid>
  );
}

export default LeftSide;

const MyModal = ({ open, handleClose }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
      >
        <iframe
          width={smallScreen ? "400" : "700"}
          height={smallScreen ? "300" : "400"}
          src="https://www.youtube.com/embed/pCTXxufGW0k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </Modal>
  );
};
