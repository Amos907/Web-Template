import React from "react";
import TheButton from "../../reused/TheButton";
import Slide from "react-reveal/Slide";
import { Link } from "react-scroll";
function RightSide() {
  return (
    <Slide right>
      <Link to="contact" smooth={true} duration={1200}>
        <TheButton info="Contact " primary variant="outlined" />
      </Link>
    </Slide>
  );
}

export default RightSide;
