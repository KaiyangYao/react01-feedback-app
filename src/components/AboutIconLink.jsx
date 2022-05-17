import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        {/* Everything internal should use link; use <a> for external resources!! */}
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
