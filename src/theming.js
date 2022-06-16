import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
const primaryColor = "#030303";
const secondaryColor = grey[900];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});

export default theme;
