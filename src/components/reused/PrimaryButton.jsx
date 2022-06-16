import { Link } from "react-scroll";
import React from "react";

function PrimaryButton({ to, text }) {
  return (
    <Link
      smooth={true}
      duration={1200}
      style={{
        textDecoration: "none",
        padding: "15px 35px",
        backgroundColor: "white",
        color: "black",
        cursor: "pointer",
      }}
      to={to}
    >
      {text}
    </Link>
  );
}

export default PrimaryButton;
