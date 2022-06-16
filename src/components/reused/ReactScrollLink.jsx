import React from "react";
import { Link } from "react-scroll";

function ReactScrollLink({ children, to }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={1200}
      activeClass="activeClass"
      spy={true}
      style={{
        marginRight: "20px",
        cursor: "pointer",
        color: "#616161",

        "&:hover": {
          color: "black",
          textDecoration: "underlined",
        },
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}

export default ReactScrollLink;
