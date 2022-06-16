import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function ServiceCard({ Icon, title, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <Grid item sx={{ height: "auto" }} xs={12} sm={6} lg={4}>
      <Zoom>
        <Card sx={{ px: 2, pt: 3, height: "auto" }}>
          <Box
            sx={{
              border: "1px solid #ababab",
              p: 1,
              height: "40px",
              width: "40px",
            }}
            component="div"
          >
            <Zoom left>
              <Icon />
            </Zoom>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3 }}>
            {title}
          </Typography>
          <Fade top>
            <Typography
              sx={{ display: "flex", alignItems: "flex-end" }}
              variant="body1"
            >
              <Box
                sx={{
                  fontWeight: "100",
                  mt: 2,
                  overflow: "hidden",
                  maxWidth: "99%",
                  maxHeight: "7.2em",
                  wordWrap: "break-word",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                  lineHeight: "18px",
                }}
              >
                {desc}
              </Box>
            </Typography>
          </Fade>
          <Box sx={{ my: 2 }}>
            <Button onClick={() => setOpen(!open)} variant="outlined">
              Read more
            </Button>
          </Box>
        </Card>
      </Zoom>
      <MyModal
        open={open}
        setOpen={setOpen}
        Icon={Icon}
        title={title}
        desc={desc}
      />
    </Grid>
  );
}

export default ServiceCard;

const MyModal = ({ open, setOpen, title, desc }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {desc}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
