import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Box, CardActions } from "@mui/material";
import quote from "../../../assets/icons/quote.svg";
import Jump from "react-reveal/Jump";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default function MultiActionAreaCard({ img, msg, name, company }) {
  return (
    <Card sx={{ width: 280 }}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={img} alt={name} />
        <Zoom>
          <CardContent sx={{ position: "relative" }}>
            <Box
              component="img"
              sx={{ height: "40px", position: "absolute", top: "-23px" }}
              src={quote}
            />
            <Typography variant="body2" color="text.secondary">
              <Fade left> {msg}</Fade>
            </Typography>
          </CardContent>
        </Zoom>
      </CardActionArea>
      <Typography
        sx={{ ml: 2, fontWeight: "bold" }}
        gutterBottom
        variant="h5"
        component="div"
      >
        <Jump> {name}</Jump>
      </Typography>
      <Typography variant="subtitle2" sx={{ ml: 2, mb: 2, mt: -1 }}>
        <Flash> {company}</Flash>
      </Typography>
    </Card>
  );
}
