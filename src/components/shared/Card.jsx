import React from "react";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

Card.defaultProps = {
  reverse: true,
};

export default Card;
