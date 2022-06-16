import React from "react";
import {
  Card,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Box,
  Typography,
  FormGroup,
  Button,
  Divider,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { toast } from "react-toastify";
import googleIcon from "../../../assets/icons/google.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function Right() {
  const handleSubmit = () => {
    toast.error("not yet done just wait");
  };
  return (
    <Grid item sx={12} sm={12} lg={6}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          px: { xs: 6, sm: 20, md: 24, lg: 12 },
          py: 7,
          pt: { xs: 0, sm: 10, lg: 7 },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Login
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray", mt: 2 }}>
          Welcome back! Please enter email and password
        </Typography>
        <FormGroup sx={{ mt: 4 }}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input
              id="standard-adornment-password"
              //  type={values.showPassword ? "text" : "password"}
              //  value={values.password}
              // onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    <MailOutlineIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              //  type={values.showPassword ? "text" : "password"}
              //  value={values.password}
              // onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {true ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="contained" sx={{ mt: 4 }}>
            Login
          </Button>
        </FormGroup>
        <Box sx={{ color: "white", mt: 2 }}>.</Box>
        <Divider />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            src={googleIcon}
            sx={{ height: "40px", cursor: "pointer" }}
            component="img"
          />
          <GitHubIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
          <TwitterIcon sx={{ fontSize: "40px", cursor: "pointer" }} />
        </Box>
      </Card>
    </Grid>
  );
}

export default Right;
