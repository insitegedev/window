import React from "react";
import "./Showcase.css";

const Showcase = ({ title, short }) => {
  return (
    <div className={short ? "showcase short" : "showcase"}>
      <div className="title playfair">{title}</div>
    </div>
  );
};

export default Showcase;
