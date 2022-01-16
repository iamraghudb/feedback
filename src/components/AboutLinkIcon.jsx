import React from "react";
import { Link } from "react-router-dom";

import { FaQuestion } from "react-icons/fa";
function AboutLinkIcon(props) {
  return (
    <div className="about-link">
      <Link to={{ pathname: "/about" }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutLinkIcon;
