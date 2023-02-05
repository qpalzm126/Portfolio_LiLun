import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
      </div>
      <p>&copy; 2023 Lilun.com</p>
    </div>
  );
}

export default Footer;
