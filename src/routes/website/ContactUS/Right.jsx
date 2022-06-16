import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "emailjs-com";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Right() {
  const [formData, setFormData] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sbt18td",
        "template_e9yc7zf",
        e.target,
        "L2583AnbxZJlUAn08"
      )
      .then(
        (res) => {
          setIsSubmitted(true);
        },
        (err) => {
          console.log(err);
        }
      );
    e.target.reset();
  };

  return (
    <Grid item xs={12} sm={6} sx={{ px: { xs: 3, lg: 5 } }}>
      <Card sx={{ py: 4, px: { xs: 2, lg: 3 } }}>
        {isSubmitted ? (
          <Box>
            <Typography align="center" variant="h4" sx={{ my: 4 }}>
              Message send
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: "180px" }} />
            </Box>
            <Typography variant="body2">
              A member of our team will reach out to you as soon as possible!
            </Typography>
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <TheFormInput
              change={handleChange}
              name="name"
              Icon={PersonOutlineIcon}
              value={formData?.name}
              text="Your Name"
            />
            <TheFormInput
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="email"
              value={formData?.email}
              Icon={EmailIcon}
              text="Email Address"
              mail
              change={handleChange}
            />

            <Box>
              <Typography>Message</Typography>
              <TextareaAutosize
                name="message"
                // onChange={(e) =>
                //   setFormData({ ...formData, message: e.target.value })
                // }
                value={formData?.message}
                placeholder="Message"
                aria-label="empty textarea"
                style={{ width: "100%", height: "20vh" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Send Message
              </Button>
            </Box>
          </form>
        )}
      </Card>
    </Grid>
  );
}

export default Right;

const TheFormInput = ({ Icon, text, mail, value, name, change }) => {
  return (
    <FormControl sx={{ width: "100%", my: 2 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password"> {text}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={mail ? "email" : "text"}
        name={name}
        value={value}
        required
        onChange={change}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              //   onClick={handleClickShowPassword}
              //   onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              <Icon />
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};
